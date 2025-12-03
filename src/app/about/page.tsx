// app/about/page.tsx
'use client';

import React from 'react';
import AnimateOnScroll from '../components/animation/AnimateOnScroll';

export default function About() {
  // Function to handle email contact
  const handleEmailContact = () => {
    window.open('mailto:info@hvisionproperties.com?subject=About H-Vision Properties & Brandivera&body=Hello, I would like to learn more about your company and services.', '_self');
  };

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.open('tel:+233530628347', '_self');
  };

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Professionalism',
      description: 'We maintain expert knowledge and deliver quality service.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Customer Commitment',
      description: 'Our clients success and satisfaction are our top priorities.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to serve you better.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
    }
  ];

  const stats = [
    { number: '50+', label: 'Properties Sold' },
    { number: '30+', label: 'Happy Clients' },
    { number: '25+', label: 'Design Projects' },
    { number: '5+', label: 'Years Experience' }
  ];

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
        About Us
      </h1>
      <div className="flex justify-center mb-6">
        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light text-white opacity-90">
          Building Dreams, Creating Legacies
        </p>
      </div>
      <div className="flex justify-center">
        <p className="float-animation text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed bg-orange-500 text-white px-5 py-3 md:px-6 md:py-4 rounded-full inline-block shadow-lg" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
          Your trusted partner in real estate and luxury interior design, transforming visions into reality.
        </p>
      </div>
    </div>
  </section>
</AnimateOnScroll>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <AnimateOnScroll delay={0.1}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white" style={{backgroundColor: '#f59234'}}>
                  Who We Are
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  H-Vision Properties & <span style={{color: '#f59234'}}>Brandivera</span> Luxury Interiors
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  H-Vision Properties is a <span className="font-semibold" style={{color: '#f59234'}}>customer-focused real estate company</span> committed to delivering quality homes, reliable property solutions, and exceptional client care.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through our premium division, <span className="font-semibold">Brandivera Luxury Interiors</span>, we extend our commitment to excellence by transforming spaces into luxurious, timeless masterpieces that reflect your unique personality and lifestyle.
                </p>
                <div className="pt-4 border-l-4 pl-6" style={{borderColor: '#f59234'}}>
                  <p className="text-xl font-semibold text-gray-900 italic">
                    Your vision, our responsibility - from property search to perfect interior.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Image */}
            <AnimateOnScroll delay={0.2}>
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" 
                    alt="H-Vision Properties Team" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Overlay image */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400" 
                    alt="Brandivera Design Project" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400';
                    }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Guided by strong principles and a clear vision for the future
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide trusted real estate and interior design solutions that elevate the living standards of our clients.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Vision */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become a leading real estate brand known for integrity, innovation, and unmatched customer satisfaction.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Values */}
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision and action we take
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={0.1 + (index * 0.1)}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* H-Vision & Brandivera Relationship */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimateOnScroll delay={0.1}>
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" 
                    alt="H-Vision & Brandivera Collaboration" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Overlay image */}
                <div className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=400" 
                    alt="Luxury Interior Detail" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400';
                    }}
                  />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <AnimateOnScroll delay={0.2}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                  Synergy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  One Vision, <span style={{color: '#f59234'}}>Two Excellence</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Brandivera Luxury Interiors</span> operates as the premium interior design division under H-Vision Properties, creating a seamless journey from property acquisition to interior perfection.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This unique relationship allows us to offer <span className="font-semibold" style={{color: '#f59234'}}>end-to-end solutions</span> for our clients, ensuring that every aspect of their property journey is handled with expertise and care.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Complete property and design solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Seamless transition from purchase to design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Unified quality standards and service</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Building trust and creating value through exceptional service
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={0.1 + (index * 0.1)}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re looking for your dream property or want to transform your space into a luxury masterpiece, we are here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEmailContact}
                className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25"
              >
                Get In Touch
              </button>
              <button
                onClick={handlePhoneCall}
                className="border border-orange-500 text-orange-500 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Call Us Now
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">+233 530 628 347</p>
                  <p className="text-gray-600 text-sm">Call us anytime</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">hvisionpropertiesdecor@gmail.com</p>
                  <p className="text-gray-600 text-sm">General inquiries</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">East Legon - Accra, Ghana</p>
                  <p className="text-gray-600 text-sm">Serving nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}