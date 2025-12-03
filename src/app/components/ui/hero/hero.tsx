'use client';

import React from 'react';

// AnimateOnScroll placeholder component
const AnimateOnScroll = ({ children }: { children: React.ReactNode }) => (
  <div className="animate-fade-in">{children}</div>
);

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Added pt-16 for mobile, removed on larger screens */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-0">
        <AnimateOnScroll>
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading with highlighted words */}
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-2xl px-2">
              Your Trusted Partner in{' '}
              <span className="block sm:inline" style={{color: '#f59234', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'}}>Real Estate</span>{' '}
              &{' '}
              <span className="block sm:inline" style={{color: '#f59234', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'}}>Luxury Interior Design</span>
            </h1>
            
            {/* Subtitle */}
            <div className="space-y-4 sm:space-y-5 px-2">
              <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto font-normal drop-shadow-lg leading-relaxed">
                At H-Vision Properties, we do not just help you find a home — we help you{' '}
                <span style={{color: '#f59234'}} className="font-semibold">create it</span>.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto font-light drop-shadow-lg leading-relaxed">
                From <span style={{color: '#f59234'}} className="font-medium">premium property solutions</span> to{' '}
                <span style={{color: '#f59234'}} className="font-medium">high-end interior design</span> through our{' '}
                <span style={{color: '#f59234'}} className="font-medium">Brandivera Luxury Interiors</span> division, we bring your{' '}
                <span style={{color: '#f59234'}} className="font-medium">dream space</span> to life.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a 
                href="/properties" 
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                style={{backgroundColor: '#f59234'}}
              >
                View Properties
              </a>
              <a 
                href="/brandivera" 
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-sm sm:text-base border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
              >
                Explore Interiors
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5 sm:p-2">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}