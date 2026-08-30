export type ProjectCategory = 'All' | 'UI/UX Design' | 'Landing Page' | 'Wireframe' | 'Brand Identity' | 'Editorial & Print' | 'Packaging & Tactile' | 'Posters & Exhibition' | '3D & Kinetic';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  client: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  colorPalette: { name: string; hex: string }[];
  typography: string[];
  award?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  avatar?: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  project: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}
