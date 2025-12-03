'use client';

import React, { useState } from 'react';
import AnimateOnScroll from '@/app/components/animation/AnimateOnScroll';

interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  location: string;
  image: string;
}

const FeaturedProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties: Property[] = [
    {
      id: 1,
      title: "Modern 3 bedroom house",
      type: "For Sale",
      price: "$700,000",
      location: "Oyarifa, Accra",
      image: "/property-1.jpg"
    },
    {
      id: 2,
      title: "Luxury 4 bedroom Apartment",
      type: "For Rent",
      price: "$2000/Month",
      location: "Kwabenya",
      image: "/property-2.jpg"
    },
    {
      id: 3,
      title: "Luxury Castle",
      type: "For Sale",
      price: "$3,800,000",
      location: "Airport Hills",
      image: "/property-3.jpg"
    },
    {
      id: 4,
      title: "6 bedroom house",
      type: "For Rent",
      price: "$5,000/month",
      location: "East Legon",
      image: "/property-4.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover a curated selection of properties designed for comfort, style, and long-term value.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Whether you are buying, renting, or investing, H-Vision Properties helps you make the right choice.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {properties.map((property) => (
                <div key={property.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image - Slower animation */}
                    <AnimateOnScroll delay={200}>
                      <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.background = 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)';
                          }}
                        />
                      </div>
                    </AnimateOnScroll>
                    
                    {/* Content - Faster animation */}
                    <AnimateOnScroll delay={100}>
                      <div className="space-y-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold">
                          {property.type}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {property.title}
                        </h3>
                        <p className="text-2xl font-bold" style={{color: '#f59234'}}>
                          {property.price}
                        </p>
                        <p className="text-lg text-gray-600 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {property.location}
                        </p>
                        <a 
                          href="/contact" 
                          className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                          style={{backgroundColor: '#f59234'}}
                        >
                          Contact Us
                        </a>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;