// app/services/page.tsx
'use client';

import React, { useState } from 'react';
import { servicesData, ServiceCategory, Service } from '../data/servicesData';
import AnimateOnScroll from '../components/animation/AnimateOnScroll';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('properties');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories: ServiceCategory[] = [
    {
      id: 'properties',
      name: 'H-Vision Properties',
      description: 'Comprehensive real estate solutions for buying, selling, and managing properties',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      id: 'interiors',
      name: 'Brandivera Luxury Interiors',
      description: 'Premium interior design and space transformation services',
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
    }
  ];

  const currentServices = servicesData[activeCategory as keyof typeof servicesData];

  // Function to handle email contact
  const handleEmailContact = (serviceName: string, category: string) => {
    const email = category === 'properties' ? 'sales@hvisionproperties.com' : 'interiors@hvisionproperties.com';
    const subject = `Inquiry about ${serviceName}`;
    const body = `Hello ${category === 'properties' ? 'H-Vision Properties' : 'Brandivera Luxury Interiors'},\n\nI am interested in your ${serviceName} service.\n\nPlease provide me with more information about this service, including pricing and availability.\n\nBest regards,`;
    
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.open('tel:+233530628347', '_self');
  };

  // Function for general consultation
  const handleConsultation = (category: string) => {
    const email = category === 'properties' ? 'contact@hvisionproperties.com' : 'brandivera@hvisionproperties.com';
    const subject = `${category === 'properties' ? 'Property' : 'Interior Design'} Consultation`;
    const body = `Hello, I would like to schedule a ${category === 'properties' ? 'property' : 'interior design'} consultation. Please contact me to discuss my requirements.`;
    
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
        Our Services
      </h1>
      <div className="flex justify-center mb-6">
        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light text-white opacity-90">
          Comprehensive Real Estate & Luxury Interior Design Solutions
        </p>
      </div>
      <div className="flex justify-center">
        <p className="float-animation text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed bg-orange-450 text-white px-5 py-3 md:px-6 md:py-4 rounded-full inline-block shadow-lg" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
          From finding your dream property to transforming it into a luxurious masterpiece, 
          we provide end-to-end solutions for your living spaces.
        </p>
      </div>
    </div>
  </section>
</AnimateOnScroll>

      {/* Category Navigation */}
      <AnimateOnScroll delay={0.1}>
        <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg min-w-[280px] ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                  </svg>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Header */}
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {categories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {currentServices.map((service, index) => (
              <AnimateOnScroll key={service.id} delay={0.1 + (index * 0.1)}>
                <div
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity duration-500 ${
                    service.gradient
                  } ${hoveredService === service.id ? 'opacity-10' : ''}`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                          <div className={`w-2 h-2 rounded-full ${service.color.replace('bg-', 'bg-')}`}></div>
                          <span className="text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleEmailContact(service.title, activeCategory)}
                        className={`flex-1 ${service.color} text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-base group-hover:scale-105`}
                      >
                        Get Started
                      </button>
                      <button
                        onClick={handlePhoneCall}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${service.gradient} opacity-5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures exceptional results and a seamless experience
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We begin with understanding your needs, preferences, and vision for your project.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Our experts create detailed plans and proposals tailored to your requirements.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We implement the plan with precision, quality materials, and skilled craftsmanship.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We hand over your completed project with follow-up support and maintenance.'
              }
            ].map((step, index) => (
              <AnimateOnScroll key={step.step} delay={0.1 + (index * 0.1)}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-orange-200 -z-10"></div>
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

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re looking for your dream property or want to create a luxurious interior, 
              we&apos;re here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleConsultation('properties')}
                className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25"
              >
                Property Consultation
              </button>
              <button
                onClick={() => handleConsultation('interiors')}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:shadow-lg"
              >
                Design Consultation
              </button>
              <button
                onClick={handlePhoneCall}
                className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Call Us Now
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="font-semibold">+233 530 628 347</p>
                  <p className="opacity-80 text-sm">Call us anytime</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold">hvisionpropertiesdecor@gmail.com</p>
                  <p className="opacity-80 text-sm">General inquiries</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold">Accra, Ghana</p>
                  <p className="opacity-80 text-sm">Serving nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}