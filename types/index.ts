import { IconType } from 'react-icons';

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export interface Amenity {
  index: string;
  icon: IconType;
  title: string;
  description: string;
  image: string;
}

export type StoreCategory =
  | 'Moda'
  | 'Eletrónica'
  | 'Restauração'
  | 'Serviços'
  | 'Lazer';

export interface Store {
  slug: string;
  name: string;
  category: StoreCategory;
  floor: string;
  image: string;
  description: string;
}

export interface EventItem {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  image: string;
  description: string;
  category: string;
}

export interface Testimonial {
  name: string;
  origin: string;
  quote: string;
  rating: number;
}

export interface LegalSection {
  heading: string;
  body: string[];
}
