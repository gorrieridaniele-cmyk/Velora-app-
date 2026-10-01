export type Language = 'it' | 'en';

export interface MenuItem {
  id: string;
  name: { it: string; en: string };
  description: { it: string; en: string };
  pricePlaceholder: string;
  allergens?: string[];
  winePairing?: { it: string; en: string };
  dietary?: 'veg' | 'vegan' | 'gluten-free';
}

export interface MenuCategory {
  id: string;
  title: { it: string; en: string };
  subtitle: { it: string; en: string };
  priceInfo: { it: string; en: string };
  pairingInfo?: { it: string; en: string };
  notes?: { it: string; en: string };
  items: MenuItem[];
}

export interface WineItem {
  id: string;
  name: string;
  producer: string;
  region: string;
  vintagePlaceholder: string;
  glassPricePlaceholder: string;
  bottlePricePlaceholder: string;
  notes: { it: string; en: string };
}

export interface SpaceItem {
  id: string;
  name: { it: string; en: string };
  subtitle: { it: string; en: string };
  description: { it: string; en: string };
  capacity: { it: string; en: string };
  atmosphere: { it: string; en: string };
  image: string;
}

export interface RawIngredient {
  id: string;
  ingredient: { it: string; en: string };
  origin: { it: string; en: string };
  technique: { it: string; en: string };
  dish: { it: string; en: string };
  description: { it: string; en: string };
}

export interface Article {
  id: string;
  title: { it: string; en: string };
  category: { it: string; en: string };
  date: string;
  readTime: { it: string; en: string };
  excerpt: { it: string; en: string };
  content: { it: string[]; en: string[] };
  image: string;
}

export interface MicroSeason {
  id: string;
  seasonGroup?: { it: string; en: string };
  period: { it: string; en: string };
  title: { it: string; en: string };
  climate: { it: string; en: string };
  image: string;
  ingredients: { it: string[]; en: string[] };
  dishHighlight: { it: string; en: string };
}

export interface ReservationData {
  date: string;
  time: string;
  guests: number;
  area: 'sala' | 'chef-table' | 'salotto';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion: string;
  dietaryNeeds: string;
  specialRequests: string;
}
