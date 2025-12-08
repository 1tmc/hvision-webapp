// app/data/propertyData.ts
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
  images: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa East Legon",
    category: "sale",
    type: "Residential",
    location: "East Legon Hills, Accra",
    price: "$320,000",
    bedrooms: 5,
    bathrooms: 6,
    size: "4500 sq ft",
    description: "Stunning modern villa with premium finishes, swimming pool, and landscaped garden in prime East Legon.",
    features: ["Swimming Pool", "Smart Home", "Parking", "Garden", "Modern Kitchen"],
    images: [
      "/properties/p1.png",
      "/properties/p2.png",
      "/properties/p5.png",
      "/properties/p3.png",
      "/properties/p4.png",
      "/properties/p6.png",
      "/properties/p7.png",
      "/properties/p8.png",
    ]
  },
  {
    id: 14,
    title: "Executive 4-Bedroom Luxury Home East Legon Hills",
    category: "sale",
    type: "Residential",
    location: "East Legon Hills, Accra",
    price: "$370,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "3700 sq ft",
    description: "Where elegance meets confidence, this 4-bedroom executive home in East Legon Hills is crafted for buyers who want more than just a house. Every space speaks luxury, every finish makes a statement, and the prime location delivers lasting value.",
    features: [
      "Executive Finishes",
      "Luxury Interior Design",
      "Spacious Living Areas",
      "Modern Kitchen",
      "Balconies",
      "Walk-in Closets",
      "Fully Air-Conditioned",
      "Secure Neighborhood",
      "Ample Parking"
    ],
    images: [
      "/properties/ww1.jpeg",
      "/properties/ww2.jpeg",
      "/properties/ww3.jpeg",
      "/properties/ww4.jpeg",
      "/properties/ww5.jpeg",
      "/properties/ww6.jpeg",
      "/properties/ww7.jpeg",
      "/properties/ww8.jpeg",
      "/properties/ww9.jpeg",
      "/properties/ww10.jpeg",
      "/properties/ww11.jpeg",
      "/properties/ww12.jpeg",
      "/properties/ww13.jpeg",
      "/properties/ww14.jpeg",
      "/properties/ww15.jpeg",
      "/properties/ww16.jpeg"
    ]
  },
  {
    id: 15,
    title: "4-Bedroom Luxury Home with Maiden Quarters & Pool",
    category: "sale",
    type: "Residential",
    location: "East Legon, Accra",
    price: "$440,000 / $480,000",
    bedrooms: 4,
    bathrooms: 5,
    size: "4000 sq ft",
    description: "Stunning 4-bedroom luxury home with all rooms ensuite, a 1-bedroom maiden quarters, German-style kitchen, penthouse master suite, automated gate, CCTV security system, and optional swimming pool located in prime East Legon. With pool is 480,000 and without pool is 440,000",
    features: [
      "All Ensuite Bedrooms",
      "Maiden Quarters",
      "German-Style Kitchen",
      "Penthouse Master Suite",
      "Guest Washroom",
      "Family Lounge",
      "Automated Gate",
      "CCTV Security",
      "Swimming Pool (Optional)"
    ],
    images: [
      "/properties/www1.jpeg",
      "/properties/www2.jpeg",
      "/properties/www3.jpeg",
      "/properties/www4.jpeg",
      "/properties/www5.jpeg",
      "/properties/www6.jpeg",
      "/properties/www7.jpeg",
      "/properties/www8.jpeg",
      "/properties/www9.jpeg"
    ]
  },


  {
    id: 2,
    title: "Luxury 4-Bedroom Modern Duplex East Legon Hills",
    category: "sale",
    type: "Residential",
    location: "East Legon Hills, Accra",
    price: "$260,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "3500 sq ft",
    description: "Luxury 4-bedroom modern duplex with smart home system, fully air-conditioned rooms, landscaped surroundings, and spacious compound located in a serene and secure neighborhood in East Legon Hills.",
    features: [
      "Modern Architectural Design",
      "Smart Home System",
      "Spacious Compound",
      "Landscaped Garden",
      "Fully Air-Conditioned",
      "Titled Land",
      "Secure Neighborhood",
      "Parking Space"
    ],
    images: [
      "/properties/w6.jpeg",
      "/properties/w1.jpeg",
      "/properties/w2.jpeg",
      "/properties/w3.jpeg",
      "/properties/w4.jpeg",
      "/properties/w5.jpeg",
      "/properties/w7.jpeg",
      "/properties/w8.jpeg",
      "/properties/w9.jpeg",
      "/properties/w10.jpeg",
      "/properties/w11.jpeg",
      "/properties/w12.jpeg",
      "/properties/w13.jpeg",
      "/properties/w14.jpeg",
      "/properties/w15.jpeg",
      "/properties/w16.jpeg",
      "/properties/w17.jpeg",
      "/properties/w18.jpeg",
      "/properties/w19.jpeg",
      "/properties/w20.jpeg",
      "/properties/w21.jpeg",
      "/properties/w22.jpeg",
      "/properties/w23.jpeg",
      "/properties/w24.jpeg",
      "/properties/w25.jpeg",
      "/properties/w26.jpeg"
    ]
  },
  {
    id: 13,
    title: "Executive Apartment Airport Residential",
    category: "rent",
    type: "Residential",
    location: "Airport Residential, Accra",
    price: "$6,500/month",
    bedrooms: 5,
    bathrooms: 6,
    size: "2800 sq ft",
    description: "Fully furnished executive apartment with panoramic city views and premium amenities.",
    features: ["Fully Furnished", "Gym", "Pool", "24/7 Security", "Concierge", "Balcony", "Modern Appliances", "Pool"],
    images: [
      "/properties/ppp-1.jpg",
      "/properties/ppp-2.jpg",
      "/properties/ppp-3.jpg",
      "/properties/ppp-4.jpg",
      "/properties/ppp-5.jpg",
      "/properties/ppp-6.jpg",
      "/properties/ppp-7.jpg",
      "/properties/ppp-8.jpg"
    ]
  },
  {
    id: 3,
    title: "Stunning House North Legon",
    category: "sale",
    type: "Residential",
    location: "East Legon Hills, Accra",
    price: "$150,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "4500 sq ft",
    description: "Stunning standard family house with premium finishes, and landscaped garden in prime North Legon.",
    features: ["Parking", "Garden", "Modern Kitchen"],
    images: [
      "/properties/pppp.jpeg"
    ]
  },
  {
    id: 4,
    title: "Modern 4-Bedroom House Haatso",
    category: "sale",
    type: "Residential",
    location: "Haatso, Accra",
    price: "$280,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "3200 sq ft",
    description: "Beautiful modern house with contemporary design and spacious living areas in quiet Haatso neighborhood.",
    features: ["Modern Kitchen", "Parking for 3", "Garden", "Security", "Study Room"],
    images: [
      "/properties/x1.jpg"
    ]
  },
  {
    id: 5,
    title: "3-Bedroom Apartment Labone",
    category: "rent",
    type: "Residential",
    location: "Labone, Accra",
    price: "$2,800/month",
    bedrooms: 3,
    bathrooms: 2,
    size: "2200 sq ft",
    description: "Spacious 3-bedroom apartment in prime Labone location with modern amenities and great security.",
    features: ["Fully Furnished", "Security", "Balcony", "Modern Kitchen", "Parking"],
    images: [
      "/properties/x2.jpg"
    ]
  },
  {
    id: 6,
    title: "Family House East Legon Hills",
    category: "sale",
    type: "Residential",
    location: "East Legon Hills, Accra",
    price: "$380,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "3500 sq ft",
    description: "Lovely family home with spacious rooms, backyard, and modern amenities in prestigious East Legon Hills.",
    features: ["Master Suite", "Walk-in Closets", "Patio", "Garden", "Security", "Parking"],
    images: [
      "/properties/x3.jpg"
    ]
  },
  {
    id: 7,
    title: "Contemporary 3-Bedroom House East Legon",
    category: "rent",
    type: "Residential",
    location: "East Legon, Accra",
    price: "$3,500/month",
    bedrooms: 3,
    bathrooms: 3,
    size: "2600 sq ft",
    description: "Contemporary designed house with open floor plan, modern finishes, and prime East Legon location.",
    features: ["Open Floor Plan", "Modern Finishes", "Ensuite Bathrooms", "Garden", "Security", "Parking"],
    images: [
      "/properties/x4.jpg"
    ]
  },
  {
    id: 8,
    title: "4-Bedroom Villa Haatso",
    category: "sale",
    type: "Residential",
    location: "Haatso, Accra",
    price: "$320,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "3400 sq ft",
    description: "Beautiful villa with modern architecture, spacious rooms, and quiet neighborhood in Haatso.",
    features: ["Villa Style", "Spacious Rooms", "Modern Kitchen", "Parking", "Garden", "Security"],
    images: [
      "/properties/x5.jpg"
    ]
  },
  {
    id: 9,
    title: "Luxury 3-Bedroom Labone",
    category: "rent",
    type: "Residential",
    location: "Labone, Accra",
    price: "$4,200/month",
    bedrooms: 3,
    bathrooms: 3,
    size: "2800 sq ft",
    description: "Luxury 3-bedroom apartment with high-end finishes, premium location in Labone, and excellent amenities.",
    features: ["Luxury Finishes", "Prime Location", "Concierge", "Security", "Parking", "Modern Appliances"],
    images: [
      "/properties/x6.jpg"
    ]
  },
  {
    id: 10,
    title: "Modern 4-Bedroom East Legon",
    category: "sale",
    type: "Residential",
    location: "East Legon, Accra",
    price: "$420,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "3800 sq ft",
    description: "Modern architectural masterpiece with sleek design, smart home features, and prime East Legon location.",
    features: ["Smart Home", "Architectural Design", "Master Suite", "Entertainment Area", "Garden", "Security"],
    images: [
      "/properties/x7.jpg"
    ]
  },
  {
    id: 11,
    title: "Cozy 3-Bedroom House Haatso",
    category: "rent",
    type: "Residential",
    location: "Haatso, Accra",
    price: "$1,800/month",
    bedrooms: 3,
    bathrooms: 2,
    size: "2000 sq ft",
    description: "Cozy and comfortable 3-bedroom house perfect for small families, located in peaceful Haatso area.",
    features: ["Cozy Layout", "Family-Friendly", "Garden", "Parking", "Quiet Neighborhood"],
    images: [
      "/properties/x8.jpg"
    ]
  },
  {
    id: 12,
    title: "Executive 4-Bedroom Labone",
    category: "sale",
    type: "Residential",
    location: "Labone, Accra",
    price: "$350,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "3300 sq ft",
    description: "Executive family home with premium finishes, spacious living areas, and excellent Labone location.",
    features: ["Executive Style", "Spacious Living", "Modern Kitchen", "Parking", "Security", "Garden"],
    images: [
      "/properties/x9.jpg"
    ]
  },

];

export const categories = [
  { id: 'all', name: 'All Properties', count: properties.length },
  { id: 'sale', name: 'For Sale', count: properties.filter(p => p.category === 'sale').length },
  { id: 'rent', name: 'For Rent', count: properties.filter(p => p.category === 'rent').length },
  { id: 'land', name: 'Land & Plots', count: properties.filter(p => p.category === 'land').length },
  { id: 'commercial', name: 'Commercial', count: properties.filter(p => p.category === 'commercial').length }
];