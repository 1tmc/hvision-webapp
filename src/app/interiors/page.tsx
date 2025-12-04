// app/interiors/page.tsx
'use client';

import React, { useState } from 'react';
import { interiorProjects, services, processSteps, InteriorProject } from '../data/interiorData';
import ImageGalleryModal from '../components/modals/ImageGalleryModal';
import AnimateOnScroll from '../components/animation/AnimateOnScroll';

export default function Interiors() {
  const [selectedService, setSelectedService] = useState('all');
  const [selectedProject, setSelectedProject] = useState<InteriorProject | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Filter projects based on selected service
  const filteredProjects = selectedService === 'all' 
    ? interiorProjects 
    : interiorProjects.filter(project => project.services.includes(selectedService));

  // Function to handle email contact for interior services
  const handleEmailContact = (serviceType?: string) => {
    const subject = serviceType ? `Inquiry about ${serviceType} Services` : 'Inquiry about Interior Design Services';
    const body = `Hello Brandivera Luxury Interiors,\n\nI am interested in your interior design services${serviceType ? `, specifically ${serviceType}.` : '.'}\n\nPlease provide me with more information about your services and pricing.\n\nBest regards,`;
    
    window.open(`mailto:brandivera@hvisionproperties.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.open('tel:+233530628347', '_self');
  };

  // Function for consultation email
  const handleConsultation = () => {
    window.open('mailto:brandivera@hvisionproperties.com?subject=Interior Design Consultation&body=Hello, I would like to schedule an interior design consultation.', '_self');
  };

  // Function to open image gallery
  const openImageGallery = (project: InteriorProject, imageIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setIsGalleryOpen(true);
  };

  // Function to close image gallery
  const closeImageGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  // Service colors for the filter buttons
  const getServiceColor = (serviceId: string) => {
    const colors = {
      all: 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400',
      design: 'bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200 hover:border-purple-400',
      styling: 'bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200 hover:border-pink-400',
      remodeling: 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 hover:border-blue-400',
      furniture: 'bg-green-100 text-green-700 border-green-300 hover:bg-green-200 hover:border-green-400',
      planning: 'bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-200 hover:border-orange-400'
    };
    return colors[serviceId as keyof typeof colors] || colors.all;
  };

  // Active service style
  const getActiveServiceStyle = (serviceId: string) => {
    if (serviceId !== selectedService) return '';
    
    const activeColors = {
      all: 'bg-gray-700 text-white border-gray-700',
      design: 'bg-purple-600 text-white border-purple-600',
      styling: 'bg-pink-600 text-white border-pink-600',
      remodeling: 'bg-blue-600 text-white border-blue-600',
      furniture: 'bg-green-600 text-white border-green-600',
      planning: 'bg-orange-600 text-white border-orange-600'
    };
    return activeColors[serviceId as keyof typeof activeColors];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Image Gallery Modal */}
      {selectedProject && (
        <ImageGalleryModal
          images={selectedProject.images}
          initialIndex={selectedImageIndex}
          isOpen={isGalleryOpen}
          onClose={closeImageGallery}
          propertyTitle={selectedProject.title}
        />
      )}

<AnimateOnScroll>
<section 
    className="relative text-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
    style={{
      backgroundImage: 'url("/page-header.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backdropFilter: 'blur(40px)'
    }}
  >
    {/* Dark overlay with blur effect */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-2"></div>
          
          {/* Add CSS animation */}
          <style jsx>{`
            @keyframes floatUpDown {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .float-animation {
              animation: floatUpDown 3s ease-in-out infinite;
            }
          `}</style>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Luxury Interior Design
            </h1>
            <div className="flex justify-center">
              <p className="float-animation text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed bg-orange-450 text-white px-5 py-3 md:px-6 md:py-4 rounded-full inline-block shadow-lg" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
                Transform your spaces into luxurious, timeless masterpieces that reflect your personality, lifestyle, and taste with Brandivera Luxury Interiors.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* How We Work Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A seamless journey from initial concept to final reveal, ensuring your vision comes to life perfectly.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <AnimateOnScroll key={step.id} delay={0.1 + (index * 0.1)}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-orange-200 -z-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Filter */}
      <AnimateOnScroll delay={0.1}>
        <section className="py-6 md:py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <button
                onClick={() => setSelectedService('all')}
                className={`px-3 py-1.5 md:px-4 md:py-2 border rounded-full transition-all duration-300 font-medium text-xs md:text-sm whitespace-nowrap ${getServiceColor('all')} ${getActiveServiceStyle('all')}`}
              >
                All Projects <span className="font-semibold">({interiorProjects.length})</span>
              </button>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 border rounded-full transition-all duration-300 font-medium text-xs md:text-sm whitespace-nowrap ${getServiceColor(service.id)} ${getActiveServiceStyle(service.id)}`}
                >
                  {service.name}
                </button>
              ))}
            </div>
            
            {/* Active filter indicator */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Showing {filteredProjects.length} of {interiorProjects.length} projects
                {selectedService !== 'all' && ` in ${services.find(s => s.id === selectedService)?.name}`}
              </span>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <AnimateOnScroll>
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different service category or check back later for new projects.</p>
              </div>
            </AnimateOnScroll>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project, index) => (
                  <AnimateOnScroll key={project.id} delay={0.1 + (index * 0.1)}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                      {/* Project Image with Gallery */}
                      <div 
                        className="h-48 sm:h-56 md:h-64 cursor-pointer group relative bg-gray-200"
                        onClick={() => openImageGallery(project, 0)}
                        style={{ position: 'relative', overflow: 'hidden' }}
                      >
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://placehold.co/600x400/e5e7eb/6b7280?text=Interior+Design';
                          }}
                        />
                        
                        {/* Hover Overlay */}
                        <div 
                          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ pointerEvents: 'none' }}
                        />
                        
                        {/* Hover Icon */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ pointerEvents: 'none' }}
                        >
                          <div className="bg-black bg-opacity-50 rounded-full p-2">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>

                        {/* Service Badges */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-wrap gap-1" style={{ zIndex: 10 }}>
                          {project.services.slice(0, 2).map((serviceId) => {
                            const service = services.find(s => s.id === serviceId);
                            return service ? (
                              <span 
                                key={serviceId}
                                className="px-2 py-1 rounded-full text-xs font-medium text-white bg-black bg-opacity-70 border border-white border-opacity-30"
                              >
                                {service.name}
                              </span>
                            ) : null;
                          })}
                          {project.services.length > 2 && (
                            <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded-full font-medium">
                              +{project.services.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* Image Count Badge */}
                        {project.images.length > 1 && (
                          <div className="absolute top-3 right-3 md:top-4 md:right-4" style={{ zIndex: 10 }}>
                            <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded-full font-medium">
                              +{project.images.length - 1} more
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3 flex items-center gap-1 text-sm md:text-base">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg md:text-xl font-semibold text-orange-500">
                            {project.scope}
                          </span>
                          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {project.duration}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 line-clamp-2 text-sm md:text-base leading-relaxed">
                          {project.description}
                        </p>

                        {/* Design Style Tags */}
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                          {project.style.slice(0, 3).map((style, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 bg-orange-50 text-orange-700 text-xs md:text-sm rounded border border-orange-200 font-medium"
                            >
                              {style}
                            </span>
                          ))}
                          {project.style.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs md:text-sm rounded border border-gray-200">
                              +{project.style.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 md:gap-3">
                          <button 
                            onClick={() => handleEmailContact(project.services.map(s => services.find(serv => serv.id === s)?.name).join(', '))}
                            className="flex-1 bg-orange-500 text-white py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm md:text-base"
                          >
                            Get Quote
                          </button>
                          <button 
                            onClick={handlePhoneCall}
                            className="px-3 py-2 md:px-4 md:py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
                            aria-label="Call us"
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Load More Button */}
              {filteredProjects.length > 6 && (
                <AnimateOnScroll delay={0.3}>
                  <div className="text-center mt-8 md:mt-12">
                    <button className="bg-white border border-orange-500 text-orange-500 px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium text-sm md:text-base">
                      Load More Projects
                    </button>
                  </div>
                </AnimateOnScroll>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="bg-gray-900 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8 leading-relaxed">
              Let&apos;s collaborate to create a space that reflects your unique style and enhances your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button 
                onClick={handleConsultation}
                className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                Schedule Design Consultation
              </button>
              <button 
                onClick={handlePhoneCall}
                className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                Call Our Design Team
              </button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}