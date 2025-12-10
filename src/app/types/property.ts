import { SanityImage } from '../lib/sanity.image'

export interface SanityProperty {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  category: 'sale' | 'rent' | 'land' | 'commercial';
  propertyType: string;
  location: string;
  price: string;
  numericPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  description: string;
  features?: string[];
  images: SanityImage[];
  isFeatured?: boolean;
  status: 'available' | 'sold' | 'rented' | 'under-offer';
  publishedAt: string;
}

// For the frontend
export interface Property {
  id: string;
  title: string;
  category: 'sale' | 'rent' | 'land' | 'commercial';
  type: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  description: string;
  features: string[];
  images: string[];
}