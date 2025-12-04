'use client';

import React from 'react';
import AnimateOnScroll from '@/app/components/animation/AnimateOnScroll'

export default function AboutSections() {
  return (
    <>
      {/* About H-Vision Properties Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Image/Visual with top-right overlay - Slower animation */}
              <AnimateOnScroll delay={0.2}>
                <div className="relative">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/home-image.jpg" 
                      alt="H-Vision Properties" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold">H-Vision Properties</h3>
                    </div>
                  </div>
                  
                  {/* Top-right overlay image */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src="/hvision-family.jpg" 
                      alt="Modern Interior" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.background = 'linear-gradient(135deg, #f59234 0%, #e67e22 100%)';
                      }}
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right: Content - Faster animation */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white" style={{backgroundColor: '#f59234'}}>
                    About Us
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    About <span style={{color: '#f59234'}}>H-Vision Properties</span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    H-Vision Properties is a <span className="font-semibold" style={{color: '#f59234'}}>modern real estate company</span> dedicated to delivering quality, trust, and exceptional value.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We specialize in <span className="font-semibold">buying, selling, renting, and managing properties</span>, ensuring every client enjoys a smooth and professional experience.
                  </p>
                  <div className="pt-4 border-l-4 pl-6" style={{borderColor: '#f59234'}}>
                    <p className="text-xl font-semibold text-gray-900 italic">
                      -Your vision, our responsibility.-
                    </p>
                  </div>
                  <div className="pt-6">
                    <a 
                      href="/about" 
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{backgroundColor: '#f59234'}}
                    >
                      Learn More About Us
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Brandivera Luxury Interiors Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Content - Faster animation */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-6 order-2 md:order-1">
                  <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold" style={{color: '#f59234'}}>
                    Premium Division
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Introducing <span style={{color: '#f59234'}}>Brandivera</span> Luxury Interiors
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Brandivera Luxury Interiors is the <span className="font-semibold text-white">premium interior design division</span> under H-Vision Properties.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We transform spaces into <span className="font-semibold" style={{color: '#f59234'}}>luxurious, timeless masterpieces</span> that reflect your personality, lifestyle, and taste.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a 
                      href="/brandivera" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{backgroundColor: '#f59234'}}
                    >
                      Explore Our Designs
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
                    >
                      Request Consultation
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right: Image/Visual with top-left overlay - Slower animation */}
              <AnimateOnScroll delay={0.2}>
                <div className="relative order-1 md:order-2">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/h6.png" 
                      alt="Brandivera Luxury Interiors" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.background = 'linear-gradient(135deg, #4b5563 0%, #6b7280 100%)';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 text-white text-right">
                      <h3 className="text-3xl font-bold">Brandivera</h3>
                      <p className="text-lg font-light">Luxury Interiors</p>
                    </div>
                  </div>
                  
                  {/* Top-left overlay image */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src="/h1.png" 
                      alt="Design Detail" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.background = 'linear-gradient(135deg, #f59234 0%, #e67e22 100%)';
                      }}
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}