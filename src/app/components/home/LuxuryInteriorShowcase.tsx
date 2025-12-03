'use client';

import React, { useState } from 'react';
import AnimateOnScroll from '@/app/components/animation/AnimateOnScroll';

interface InteriorProject {
  id: number;
  title: string;
  style: string;
  description: string;
  interpretation: string;
  image: string;
}

const LuxuryInteriorShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: InteriorProject[] = [
    {
      id: 1,
      title: "Modern Minimalist Villa",
      style: "Contemporary",
      description: "Clean lines and sophisticated simplicity define this stunning minimalist residence.",
      interpretation: "Minimalism speaks through negative space and curated essentials. Each element is intentional, creating a sanctuary of calm where less truly becomes more. The monochromatic palette with warm wood accents brings harmony and focus to daily living.",
      image: "/interior-1.jpg"
    },
    {
      id: 2,
      title: "Classic Elegance Mansion",
      style: "Traditional",
      description: "Timeless beauty meets modern comfort in this elegantly designed family home.",
      interpretation: "Traditional design tells stories of heritage through rich textures and symmetrical arrangements. Ornate moldings and classic furnishings create a sense of permanence, while modern amenities ensure contemporary comfort meets historical charm.",
      image: "/interior-2.jpg"
    },
    {
      id: 3,
      title: "Urban Loft Space",
      style: "Industrial",
      description: "Raw materials and open spaces create a unique urban living experience.",
      interpretation: "Industrial design celebrates authenticity with exposed elements and raw materials. The unfinished aesthetic creates an honest, grounded atmosphere where structural beauty takes center stage. Metal, concrete, and reclaimed wood blend to form an urban sanctuary.",
      image: "/interior-3.jpg"
    },
    {
      id: 4,
      title: "Coastal Retreat",
      style: "Beach House",
      description: "Light, airy spaces that bring the ocean's tranquility indoors.",
      interpretation: "Coastal design captures the essence of seaside living through light and texture. Soft blues, sandy neutrals, and natural materials evoke the calming rhythm of ocean waves. The space breathes with openness, mirroring the boundless horizon.",
      image: "/interior-4.jpg"
    },
    {
      id: 5,
      title: "Scandinavian Serenity",
      style: "Nordic",
      description: "Functional beauty meets cozy simplicity in this light-filled space.",
      interpretation: "Scandinavian design masters the art of hygge through warm minimalism. Light wood floors, clean lines, and textured fabrics create an environment that's both functional and soul-nourishing. Every piece serves purpose while radiating comfort.",
      image: "/interior-5.jpg"
    },
    {
      id: 6,
      title: "Bohemian Harmony",
      style: "Eclectic",
      description: "A vibrant mix of patterns, textures, and global influences.",
      interpretation: "Bohemian design dances with freedom and self-expression. Layers of texture, rich patterns, and global artifacts tell a personal story of travel and discovery. The carefully curated chaos creates a space that feels both adventurous and deeply personal.",
      image: "/interior-6.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Luxury Interior Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the beauty of refined interior design.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Our Brandivera team creates sophisticated and functional spaces tailored to your needs.
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
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Container - Slower animation */}
                    <AnimateOnScroll delay={200}>
                      <div className="relative h-96 md:h-[500px]">
                        <div className="h-full rounded-2xl overflow-hidden shadow-2xl">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.background = 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)';
                            }}
                          />
                        </div>
                        
                        {/* Navigation Arrows - positioned relative to image */}
                        <button 
                          onClick={prevSlide}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-all duration-300 z-10"
                        >
                          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-all duration-300 z-10"
                        >
                          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </AnimateOnScroll>
                    
                    {/* Content - Faster animation */}
                    <AnimateOnScroll delay={100}>
                      <div className="space-y-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold">
                          {project.style}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {project.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5" style={{color: '#f59234'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Design Interpretation
                          </h4>
                          <p className="text-gray-700 leading-relaxed italic">
                            {project.interpretation}
                          </p>
                        </div>
                        <a 
                          href="/brandivera" 
                          className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                          style={{backgroundColor: '#f59234'}}
                        >
                          Explore This Style
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
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

export default LuxuryInteriorShowcase;