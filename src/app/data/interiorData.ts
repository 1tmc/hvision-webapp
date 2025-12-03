// app/data/interiorData.ts
export interface InteriorProject {
    id: string;
    title: string;
    location: string;
    description: string;
    images: string[];
    services: string[]; // References service IDs
    style: string[];
    scope: string;
    duration: string;
    completed: string;
  }
  
  export interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
  }
  
  export interface ProcessStep {
    id: string;
    title: string;
    description: string;
  }
  
  export const services: Service[] = [
    {
      id: 'design',
      name: 'Luxury Interior Design',
      description: 'Complete interior design solutions tailored to your unique style and preferences, creating spaces that inspire and delight.',
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      color: 'bg-purple-500'
    },
    {
      id: 'styling',
      name: 'Home Styling',
      description: 'Professional home styling services that transform your space with carefully curated furniture, accessories, and decor.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'bg-pink-500'
    },
    {
      id: 'remodeling',
      name: 'Renovation & Remodeling',
      description: 'Complete renovation and remodeling services to update and transform your existing spaces into modern, functional areas.',
      icon: 'M19 9l-7 7-7-7',
      color: 'bg-blue-500'
    },
    {
      id: 'furniture',
      name: 'Custom Furniture',
      description: 'Bespoke furniture design and manufacturing, creating unique pieces that perfectly fit your space and style requirements.',
      icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
      color: 'bg-green-500'
    },
    {
      id: 'planning',
      name: 'Space Planning',
      description: 'Strategic space planning to optimize layout, flow, and functionality while maximizing the potential of your available space.',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      color: 'bg-orange-500'
    }
  ];
  
  export const processSteps: ProcessStep[] = [
    {
      id: 'consultation',
      title: 'Consultation',
      description: 'We begin with an in-depth consultation to understand your vision, preferences, and requirements for your space.'
    },
    {
      id: 'concept',
      title: 'Concept Development',
      description: 'Our design team creates detailed concepts, mood boards, and 3D visualizations to bring your vision to life.'
    },
    {
      id: 'execution',
      title: 'Execution',
      description: 'We manage the entire project from sourcing materials to coordinating craftsmen, ensuring quality at every step.'
    },
    {
      id: 'reveal',
      title: 'Final Reveal',
      description: 'Experience the breathtaking transformation as we reveal your newly designed, perfectly styled space.'
    }
  ];
  
  export const interiorProjects: InteriorProject[] = [
    {
      id: '1',
      title: 'Modern Penthouse Apartment',
      location: 'Airport Residential, Accra',
      description: 'A stunning penthouse transformation featuring contemporary design with African art elements, creating a sophisticated urban retreat.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
      ],
      services: ['design', 'styling', 'furniture'],
      style: ['Contemporary', 'Minimalist', 'Luxury'],
      scope: 'Complete Interior Design',
      duration: '3 months',
      completed: '2024'
    },
    {
      id: '2',
      title: 'Luxury Villa Renovation',
      location: 'Cantonments, Accra',
      description: 'Complete renovation of a classic villa, blending traditional architecture with modern luxury and smart home technology.',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'
      ],
      services: ['remodeling', 'design', 'planning'],
      style: ['Traditional', 'Modern', 'Elegant'],
      scope: 'Full Renovation',
      duration: '6 months',
      completed: '2024'
    },
    {
      id: '3',
      title: 'Corporate Office Space',
      location: 'Ridge, Accra',
      description: 'Professional office design that enhances productivity while creating an inspiring work environment for a tech company.',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800'
      ],
      services: ['design', 'planning', 'furniture'],
      style: ['Modern', 'Professional', 'Creative'],
      scope: 'Office Interior',
      duration: '2 months',
      completed: '2023'
    },
    {
      id: '4',
      title: 'Beachfront Residence',
      location: 'Labadi, Accra',
      description: 'Coastal-inspired interior design that captures the beauty of ocean views while providing luxurious comfort and relaxation.',
      images: [
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800'
      ],
      services: ['design', 'styling', 'furniture'],
      style: ['Coastal', 'Bohemian', 'Relaxed Luxury'],
      scope: 'Residential Design',
      duration: '4 months',
      completed: '2023'
    },
    {
      id: '5',
      title: 'Restaurant Interior',
      location: 'Osu, Accra',
      description: 'Vibrant restaurant design that creates an unforgettable dining experience with custom lighting and unique architectural elements.',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'
      ],
      services: ['design', 'remodeling', 'furniture'],
      style: ['Industrial', 'Contemporary', 'Warm'],
      scope: 'Commercial Design',
      duration: '3 months',
      completed: '2024'
    },
    {
      id: '6',
      title: 'Minimalist Family Home',
      location: 'East Legon, Accra',
      description: 'Clean, minimalist design focused on functionality and natural light, creating a peaceful family living environment.',
      images: [
        'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800'
      ],
      services: ['design', 'styling', 'planning'],
      style: ['Minimalist', 'Scandinavian', 'Bright'],
      scope: 'Residential Design',
      duration: '3 months',
      completed: '2023'
    },
    {
      id: '7',
      title: 'Luxury Hotel Suite',
      location: 'Airport City, Accra',
      description: 'Five-star hotel suite design that combines luxury amenities with local cultural elements for an authentic Ghanaian experience.',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'
      ],
      services: ['design', 'furniture', 'styling'],
      style: ['Luxury', 'Cultural', 'Contemporary'],
      scope: 'Hospitality Design',
      duration: '2 months',
      completed: '2024'
    },
    {
      id: '8',
      title: 'Modern Kitchen Remodel',
      location: 'Roman Ridge, Accra',
      description: 'Complete kitchen transformation with state-of-the-art appliances, custom cabinetry, and elegant stone countertops.',
      images: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
        'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800',
        'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
      ],
      services: ['remodeling', 'design', 'furniture'],
      style: ['Modern', 'Functional', 'Elegant'],
      scope: 'Kitchen Renovation',
      duration: '6 weeks',
      completed: '2024'
    },
    {
      id: '9',
      title: 'Boutique Retail Store',
      location: 'Accra Mall',
      description: 'Innovative retail design that enhances product display while creating an engaging shopping experience for customers.',
      images: [
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800',
        'https://images.unsplash.com/photo-1555529902-5261145633bf?w=800'
      ],
      services: ['design', 'planning', 'furniture'],
      style: ['Contemporary', 'Luxury', 'Brand-focused'],
      scope: 'Retail Design',
      duration: '2 months',
      completed: '2023'
    },
    {
      id: '10',
      title: 'Executive Penthouse',
      location: 'Cantonments, Accra',
      description: 'Sophisticated executive residence featuring premium materials, custom millwork, and panoramic city views.',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800'
      ],
      services: ['design', 'styling', 'furniture', 'planning'],
      style: ['Luxury', 'Contemporary', 'Executive'],
      scope: 'Complete Interior',
      duration: '5 months',
      completed: '2024'
    }
  ];