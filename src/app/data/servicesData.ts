// app/data/servicesData.ts
export interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
    color: string;
    gradient: string;
  }
  
  export interface ServiceCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
  }
  
  export const servicesData = {
    properties: [
      {
        id: 'property-sales',
        title: 'Property Sales',
        description: 'Find your dream home or investment property with our comprehensive sales services. We guide you through every step of the buying process.',
        features: [
          'Extensive property portfolio',
          'Professional valuation services',
          'Negotiation and closing support',
          'Legal and documentation assistance',
          'Market insights and advice'
        ],
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        color: 'bg-green-500',
        gradient: 'from-green-500 to-emerald-500'
      },
      {
        id: 'property-rentals',
        title: 'Property Rentals',
        description: 'Discover perfect rental properties for your needs, whether short-term or long-term. We make renting seamless and stress-free.',
        features: [
          'Wide range of rental options',
          'Tenant screening and verification',
          'Lease agreement preparation',
          'Property viewings coordination',
          'Rental market analysis'
        ],
        icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'property-management',
        title: 'Property Management',
        description: 'Professional property management services that protect your investment and maximize your returns with minimal hassle.',
        features: [
          'Tenant relationship management',
          'Rent collection and financial reporting',
          'Maintenance and repairs coordination',
          'Regular property inspections',
          'Legal compliance management'
        ],
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        color: 'bg-purple-500',
        gradient: 'from-purple-500 to-violet-500'
      },
      {
        id: 'real-estate-consultancy',
        title: 'Real Estate Consultancy',
        description: 'Expert advice and strategic guidance for all your real estate decisions, from investments to development projects.',
        features: [
          'Investment opportunity analysis',
          'Market research and feasibility studies',
          'Property development consulting',
          'Portfolio optimization strategies',
          'Risk assessment and mitigation'
        ],
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        color: 'bg-indigo-500',
        gradient: 'from-indigo-500 to-blue-500'
      }
    ],
    interiors: [
      {
        id: 'luxury-interior-design',
        title: 'Luxury Interior Design',
        description: 'Transform your space into a luxurious masterpiece with our bespoke interior design services tailored to your unique style.',
        features: [
          'Custom design concepts and mood boards',
          'Premium material selection',
          '3D visualization and planning',
          'Personalized style consultation',
          'End-to-end project management'
        ],
        icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
        color: 'bg-pink-500',
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        id: 'space-planning',
        title: 'Space Planning',
        description: 'Optimize your space with intelligent layout designs that enhance functionality, flow, and aesthetic appeal.',
        features: [
          'Functional space analysis',
          'Furniture layout optimization',
          'Traffic flow planning',
          'Storage solutions design',
          'Multi-purpose space creation'
        ],
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
        color: 'bg-orange-500',
        gradient: 'from-orange-500 to-amber-500'
      },
      {
        id: 'renovation-remodeling',
        title: 'Renovation & Remodeling',
        description: 'Breathe new life into your space with our comprehensive renovation and remodeling services for residential and commercial properties.',
        features: [
          'Structural assessment and planning',
          'Quality material sourcing',
          'Skilled craftsmanship',
          'Project timeline management',
          'Budget optimization'
        ],
        icon: 'M19 9l-7 7-7-7',
        color: 'bg-red-500',
        gradient: 'from-red-500 to-orange-500'
      },
      {
        id: 'custom-decor-furniture',
        title: 'Custom Décor & Furniture',
        description: 'Elevate your space with bespoke furniture and custom decor pieces designed exclusively for your interior.',
        features: [
          'Custom furniture design and manufacturing',
          'Art and accessory curation',
          'Lighting design solutions',
          'Textile and upholstery selection',
          'Installation and styling'
        ],
        icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
        color: 'bg-teal-500',
        gradient: 'from-teal-500 to-emerald-500'
      },
      {
        id: 'full-home-styling',
        title: 'Full Home Styling',
        description: 'Complete home styling services that create cohesive, magazine-worthy interiors from concept to final installation.',
        features: [
          'Complete home assessment',
          'Cohesive design theme development',
          'Furniture and decor procurement',
          'Professional styling and staging',
          'Final touch-ups and adjustments'
        ],
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        color: 'bg-amber-500',
        gradient: 'from-amber-500 to-yellow-500'
      }
    ]
  };