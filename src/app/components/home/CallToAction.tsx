'use client';

import React from 'react';
import AnimateOnScroll from '@/app/components/animation/AnimateOnScroll';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to find your ideal home or design your perfect interior?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Lets talk about how we can bring your vision to life with our comprehensive real estate and interior design services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a 
                href="/contact" 
                className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                style={{backgroundColor: '#f59234'}}
              >
                Get Started Today
              </a>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+233 (0) 530 6283 47</span>
                  <span>+233 (0) 201 6110 51</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hvisionpropertiesdecor@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CallToAction;