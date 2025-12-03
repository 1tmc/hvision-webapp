export type Property = {
    id: string;
    title: string;
    slug: string;
    location: string;
    price: number;
    description: string;
    images: string[]; // urls
    category: 'sale' | 'rent' | 'land' | 'commercial';
    createdAt?: string;
    updatedAt?: string;
  };
  
  export type Project = {
    id: string;
    title: string;
    slug: string;
    description: string;
    images: string[];
    completionDate?: string;
  };
  
  export type Enquiry = {
    id?: string;
    name: string;
    email: string;
    phone?: string;
    service: 'properties' | 'interiors' | 'general';
    message: string;
    createdAt?: string;
  };
  