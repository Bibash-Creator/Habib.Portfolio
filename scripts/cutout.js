import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function makeCutout() {
  const inputPath = path.resolve('./src/assets/images/jenny_cutout_model_1788028926205.jpg');
  const outputPath = path.resolve('./src/assets/images/jenny_cutout_transparent.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  // Flood fill or color threshold from borders to remove background
  // First, find background color near top corners (white background)
  const isWhite = (r, g, b) => r > 235 && g > 235 && b > 235;

  // Let's create a visited map for flood filling from the edges
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed with border pixels that are near white
  for (let x = 0; x < width; x++) {
    // top edge
    let idxTop = (0 * width + x) * channels;
    if (isWhite(data[idxTop], data[idxTop + 1], data[idxTop + 2])) {
      queue.push(x, 0);
      visited[0 * width + x] = 1;
    }
    // bottom edge
    let idxBot = ((height - 1) * width + x) * channels;
    if (isWhite(data[idxBot], data[idxBot + 1], data[idxBot + 2])) {
      queue.push(x, height - 1);
      visited[(height - 1) * width + x] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    // left edge
    let idxLeft = (y * width + 0) * channels;
    if (isWhite(data[idxLeft], data[idxLeft + 1], data[idxLeft + 2])) {
      queue.push(0, y);
      visited[y * width + 0] = 1;
    }
    // right edge
    let idxRight = (y * width + (width - 1)) * channels;
    if (isWhite(data[idxRight], data[idxRight + 1], data[idxRight + 2])) {
      queue.push(width - 1, y);
      visited[y * width + (width - 1)] = 1;
    }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!visited[nIndex]) {
          const pixelIdx = nIndex * channels;
          const r = data[pixelIdx];
          const g = data[pixelIdx + 1];
          const b = data[pixelIdx + 2];
          
          if (isWhite(r, g, b)) {
            visited[nIndex] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Now for all visited background pixels, set alpha to 0 with soft edge anti-aliasing
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const pixelIdx = idx * channels;
      if (visited[idx]) {
        data[pixelIdx + 3] = 0; // Transparent
      } else {
        // Soften edges near background
        const r = data[pixelIdx];
        const g = data[pixelIdx + 1];
        const b = data[pixelIdx + 2];
        if (r > 220 && g > 220 && b > 220) {
          // Semi-transparent edge
          const maxVal = Math.max(r, g, b);
          if (maxVal > 240) {
            data[pixelIdx + 3] = Math.max(0, 255 - (maxVal - 240) * 15);
          }
        }
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png()
    .toFile(outputPath);

  console.log('Cutout generated successfully at:', outputPath);
}

makeCutout().catch(console.error);
