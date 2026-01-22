import { LucideIcon } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  tags?: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}