// app/properties/page.tsx
'use client';

import React, { useState } from 'react';
import { properties, categories, Property } from '../data/propertyData';
import ImageGalleryModal from '../components/modals/ImageGalleryModal';
import AnimateOnScroll from '../components/animation/AnimateOnScroll';

export default function Properties() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
  const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set());

  // Filter properties based on selected category
  const filteredProperties = selectedCategory === 'all' 
    ? properties 
    : properties.filter(property => property.category === selectedCategory);

  // Function to handle email contact
  const handleEmailContact = (property: Property) => {
    const subject = `Inquiry about ${property.title}`;
    const body = `Hello H-Vision Properties,\n\nI am interested in the following property:\n\nProperty: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\nType: ${property.type}\n\nPlease provide me with more information.\n\nBest regards,`;
    
    window.open(`mailto:hvisionpropertiesdecor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.open('tel:+233530628347', '_self');
  };

  // Function for consultation email
  const handleConsultation = () => {
    window.open('mailto:hvisionpropertiesdecor@gmail.com?subject=Property Consultation&body=Hello, I would like to schedule a property consultation.', '_self');
  };

  // Function to open image gallery
  const openImageGallery = (property: Property, imageIndex: number = 0) => {
    setSelectedProperty(property);
    setSelectedImageIndex(imageIndex);
    setIsGalleryOpen(true);
  };

  // Function to close image gallery
  const closeImageGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProperty(null);
    setSelectedImageIndex(0);
  };

  // Function to toggle description expansion
  const toggleDescription = (propertyId: number) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(propertyId)) {
        newSet.delete(propertyId);
      } else {
        newSet.add(propertyId);
      }
      return newSet;
    });
  };

  // Function to toggle features expansion
  const toggleFeatures = (propertyId: number) => {
    setExpandedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(propertyId)) {
        newSet.delete(propertyId);
      } else {
        newSet.add(propertyId);
      }
      return newSet;
    });
  };

  // Function to check if description should be truncated
  const shouldTruncateDescription = (description: string) => {
    return description.length > 100;
  };

  // Category colors for the filter buttons
  const getCategoryColor = (categoryId: string) => {
    const colors = {
      all: 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400',
      sale: 'bg-green-100 text-green-700 border-green-300 hover:bg-green-200 hover:border-green-400',
      rent: 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 hover:border-blue-400',
      land: 'bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200 hover:border-yellow-400',
      commercial: 'bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200 hover:border-purple-400'
    };
    return colors[categoryId as keyof typeof colors] || colors.all;
  };

  // Active category style
  const getActiveCategoryStyle = (categoryId: string) => {
    if (categoryId !== selectedCategory) return '';
    
    const activeColors = {
      all: 'bg-gray-700 text-white border-gray-700',
      sale: 'bg-green-600 text-white border-green-600',
      rent: 'bg-blue-600 text-white border-blue-600',
      land: 'bg-yellow-600 text-white border-yellow-600',
      commercial: 'bg-purple-600 text-white border-purple-600'
    };
    return activeColors[categoryId as keyof typeof activeColors];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Image Gallery Modal */}
      {selectedProperty && (
        <ImageGalleryModal
          images={selectedProperty.images}
          initialIndex={selectedImageIndex}
          isOpen={isGalleryOpen}
          onClose={closeImageGallery}
          propertyTitle={selectedProperty.title}
        />
      )}

    {/* Hero Banner with Image Background */}
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
        Premium Properties
      </h1>
      <div className="flex justify-center">
        <p className="float-animation text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed bg-orange-450 text-white px-5 py-3 md:px-6 md:py-4 rounded-full inline-block shadow-lg" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
          Discover our curated selection of luxury homes, commercial spaces, and prime land plots across Ghana&apos;s most desirable locations.
        </p>
      </div>
    </div>
  </section>
</AnimateOnScroll>
      {/* Category Filter */}
      <AnimateOnScroll delay={0.1}>
        <section className="py-6 md:py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 border rounded-full transition-all duration-300 font-medium text-xs md:text-sm whitespace-nowrap ${getCategoryColor(category.id)} ${getActiveCategoryStyle(category.id)}`}
                >
                  {category.name} <span className="font-semibold">({category.count})</span>
                </button>
              ))}
            </div>
            
            {/* Active filter indicator */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Showing {filteredProperties.length} of {properties.length} properties
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </span>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Properties Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProperties.length === 0 ? (
            <AnimateOnScroll>
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
                <p className="text-gray-500">Try selecting a different category or check back later for new listings.</p>
              </div>
            </AnimateOnScroll>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProperties.map((property, index) => (
                  <AnimateOnScroll key={property.id} delay={0.1 + (index * 0.1)}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                      {/* Property Image */}
                      <div 
                        className="h-48 sm:h-56 md:h-64 cursor-pointer group relative bg-gray-200"
                        onClick={() => openImageGallery(property, 0)}
                        style={{ position: 'relative', overflow: 'hidden' }}
                      >
                        <img
                          src={property.images[0]}
                          alt={property.title}
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
                            target.src = 'https://placehold.co/600x400/e5e7eb/6b7280?text=Property+Image';
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

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4" style={{ zIndex: 10 }}>
                          <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium ${
                            property.category === 'sale' 
                              ? 'bg-green-100 text-green-800 border border-green-200' 
                              : property.category === 'rent'
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : property.category === 'land'
                              ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                              : 'bg-purple-100 text-purple-800 border border-purple-200'
                          }`}>
                            {property.category === 'sale' ? 'For Sale' : 
                            property.category === 'rent' ? 'For Rent' :
                            property.category === 'land' ? 'Land Plot' : 'Commercial'}
                          </span>
                        </div>

                        {/* Image Count Badge */}
                        {property.images.length > 1 && (
                          <div className="absolute top-3 right-3 md:top-4 md:right-4" style={{ zIndex: 10 }}>
                            <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded-full font-medium">
                              +{property.images.length - 1} more
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Property Details */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                          {property.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3 flex items-center gap-1 text-sm md:text-base">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {property.location}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl md:text-2xl font-bold text-orange-500">
                            {property.price}
                          </span>
                          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                            {property.bedrooms > 0 && (
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                {property.bedrooms}
                              </span>
                            )}
                            {property.bathrooms > 0 && (
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {property.bathrooms}
                              </span>
                            )}
                            <span>{property.size}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                          {expandedDescriptions.has(property.id) || !shouldTruncateDescription(property.description)
                            ? property.description
                            : `${property.description.substring(0, 100)}...`}
                          {shouldTruncateDescription(property.description) && (
                            <button
                              onClick={() => toggleDescription(property.id)}
                              className="text-orange-500 hover:text-orange-600 font-medium ml-1 transition-colors duration-200"
                            >
                              {expandedDescriptions.has(property.id) ? 'Read Less' : 'Read More'}
                            </button>
                          )}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                          {(expandedFeatures.has(property.id) ? property.features : property.features.slice(0, 4)).map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 bg-orange-50 text-orange-700 text-xs md:text-sm rounded border border-orange-200 font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                          {property.features.length > 4 && (
                            <button
                              onClick={() => toggleFeatures(property.id)}
                              className="px-2 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs md:text-sm rounded border border-gray-200 transition-colors duration-200 font-medium"
                            >
                              {expandedFeatures.has(property.id) ? 'Show Less' : `+${property.features.length - 4} more`}
                            </button>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 md:gap-3">
                          <button 
                            onClick={() => handleEmailContact(property)}
                            className="flex-1 bg-orange-500 text-white py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm md:text-base"
                          >
                            Contact Us
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
              {filteredProperties.length > 6 && (
                <AnimateOnScroll delay={0.3}>
                  <div className="text-center mt-8 md:mt-12">
                    <button className="bg-white border border-orange-500 text-orange-500 px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium text-sm md:text-base">
                      Load More Properties
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
            <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8 leading-relaxed">
              Let us know your specific requirements, and we&apos;ll find the perfect property for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button 
                onClick={handleConsultation}
                className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={handlePhoneCall}
                className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                Call Our Team
              </button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}