export interface NavItem {
  label: string;
  href: string;
}

export type LocalizedText = {
  en: string;
  ne: string;
};
export interface Program {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  duration: LocalizedText;
  icon: string;
  color: string;
  features: LocalizedText[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: { en: string; ne: string };
  content: { en: string; ne: string };
  rating: number;
  initials: string;
  color: string;
}

export type FAQItem = {
  question: { en: string; ne: string };
  answer: { en: string; ne: string };
};

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
