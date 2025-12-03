// types/property.ts
export interface Property {
    id: number;
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
    images?: string[];
  }