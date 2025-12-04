// app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import AnimateOnScroll from '../components/animation/AnimateOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const subject = `Contact Form: ${formData.serviceType || 'General Inquiry'}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.serviceType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      window.open(`mailto:hvisionpropertiesdecor@gmail.com?subject=${subject}&body=${body}`, '_self');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    }, 1000);
  };

  const handlePhoneCall = () => {
    window.open('tel:+233530628347', '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hello H-Vision Properties & Brandivera Luxury Interiors! I would like to inquire about your services.`;
    window.open(`https://wa.me/233530628347?text=${encodeURIComponent(message)}`, '_blank');
  };

  const serviceTypes = [
    'Property Sales',
    'Property Rentals',
    'Property Management',
    'Real Estate Consultancy',
    'Luxury Interior Design',
    'Space Planning',
    'Renovation & Remodeling',
    'Custom Décor & Furniture',
    'Full Home Styling',
    'General Inquiry'
  ];

  const contactInfo = [
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Call Us',
      details: '+233 530 628 347',
      description: 'Mon-Fri from 8am to 6pm',
      action: handlePhoneCall,
      color: 'bg-green-500'
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email Us',
      details: 'hvisionpropertiesdecor@gmail.com',
      description: 'We reply within 24 hours',
      action: () => window.open('mailto:hvisionpropertiesdecor@gmail.com', '_self'),
      color: 'bg-blue-500'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Visit Us',
      details: 'East Legon, Accra',
      description: 'Serving clients nationwide',
      action: () => window.open('https://maps.google.com/?q=East+Legon,Accra,Ghana', '_blank'),
      color: 'bg-orange-500'
    },
    {
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      title: 'WhatsApp',
      details: '+233 530 628 347',
      description: 'Quick responses',
      action: handleWhatsApp,
      color: 'bg-green-400'
    }
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
        Get In Touch
      </h1>
      <div className="flex justify-center mb-6">
        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light text-white opacity-90">
          Ready to Find Your Dream Property or Transform Your Space?
        </p>
      </div>
      <div className="flex justify-center">
        <p className="float-animation text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed bg-orange-450 text-white px-5 py-3 md:px-6 md:py-4 rounded-full inline-block shadow-lg" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
          Lets start a conversation about your real estate and interior design needs.
        </p>
      </div>
    </div>
  </section>
</AnimateOnScroll>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the most convenient way to reach out to us
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <AnimateOnScroll key={info.title} delay={0.1 + (index * 0.1)}>
                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={info.action}
                >
                  <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-gray-700 mb-1">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="+233 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Map & Additional Info */}
            <AnimateOnScroll delay={0.2}>
              <div className="space-y-8">
                {/* Google Maps Embed */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <div className="h-64 md:h-80 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.439067227253!2d-0.18604262485308927!3d5.650161233246722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c5c5b19f255%3A0xcfb5c02cf5f7e38c!2sEast%20Legon%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1699812345678!5m2!1sen!2sgh"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="H-Vision Properties Location - East Legon, Accra"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Our Location</h3>
                        <p className="text-sm text-gray-600">East Legon, Accra, Ghana</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-semibold text-gray-900">By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-gray-900 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24-hour response time</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Professional expertise</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personalized service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <AnimateOnScroll>
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl opacity-95 mb-8 leading-relaxed max-w-2xl mx-auto">
              For urgent property or design inquiries, call us directly. We are here to help you right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handlePhoneCall}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +233 530 628 347
              </button>
              <button
                onClick={handleWhatsApp}
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold text-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Message on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}