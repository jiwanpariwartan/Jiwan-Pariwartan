export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}
