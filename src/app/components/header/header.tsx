'use client'; 

import React, { useState, useEffect } from 'react';

// 1. Define Props Interfaces to resolve 'implicitly has an any type' errors
interface MobileMenuToggleProps {
    isOpen: boolean;
    onClick: () => void;
}

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

// 2. Custom Link Component
const Link = ({ href, children, className, onClick }: CustomLinkProps) => (
    <a href={href} className={className} onClick={onClick}>
        {children}
    </a>
);

// Component for the animated Hamburger/X toggle button
const MobileMenuToggle = ({ isOpen, onClick }: MobileMenuToggleProps) => (
  <button 
    onClick={onClick} 
    className="flex flex-col h-8 w-8 justify-center items-center group relative z-50 transition-colors duration-300"
    aria-label="Toggle menu"
  >
    {/* Top line of the hamburger/first half of the 'X' */}
    <div className={`h-0.5 w-5 bg-white absolute transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`}></div>
    {/* Bottom line of the hamburger/second half of the 'X' */}
    <div className={`h-0.5 w-5 bg-white absolute transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`}></div>
  </button>
);

// Logo component (acts as a Link to the homepage)
const Logo = ({ size = "default" }: { size?: "default" | "small" | "large" }) => (
  <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] rounded">
    <img 
      src="/joint-icon.png" 
      alt="H-Vision Properties Logo" 
      className={`transition-all duration-300 object-contain ${
        size === "small" ? "w-10 h-10" : 
        size === "large" ? "w-24 h-24 md:w-28 md:h-28" : 
        "w-16 h-16 md:w-20 md:h-20"
      }`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.style.display = 'none';
      }}
    />
  </Link>
);


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setIsSticky(scrollY > 100); // Start sticking after 100px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation data
  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Interiors', href: '/interiors' },
  ];

  const rightLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header 
      className={`z-50 transition-all duration-500 ease-out ${
        isSticky 
          ? 'fixed top-0 left-0 right-0 bg-black border-b border-gray-800 shadow-2xl' 
          : 'absolute top-0 left-0 right-0 bg-transparent'
      }`}
    >
      
      {/* -------------------- DESKTOP LAYOUT (MD breakpoint and up) -------------------- */}
      <div className={`hidden md:grid grid-cols-3 max-w-7xl mx-auto px-6 items-center transition-all duration-500 ${
        isSticky ? 'py-2' : 'py-4'
      }`}>
        
        {/* Left Navigation (Justified to the right, towards the center logo) */}
        <nav className="flex gap-8 justify-end">
          {leftLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`font-medium transition-all duration-200 hover:scale-105 text-sm ${
                isSticky ? 'text-white hover:text-[color:var(--brand)]' : 'text-white hover:text-[color:var(--brand)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex justify-center">
          <Logo size="large"/>
        </div>

        {/* Right Navigation & Contact Button (Justified to the left, towards the center logo) */}
        <nav className="flex gap-8 items-center justify-start">
          {rightLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`font-medium transition-all duration-200 hover:scale-105 text-sm ${
                isSticky ? 'text-white hover:text-[color:var(--brand)]' : 'text-white hover:text-[color:var(--brand)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Contact Link */}
          <Link 
            href="/contact" 
            className={`font-medium transition-all duration-200 hover:scale-105 text-sm ${
              isSticky ? 'text-white hover:text-[color:var(--brand)]' : 'text-white hover:text-[color:var(--brand)]'
            }`} 
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* -------------------- MOBILE HEADER (default view) -------------------- */}
      <div className={`md:hidden flex items-center justify-between max-w-7xl mx-auto px-4 transition-all duration-500 ${
        isSticky ? 'py-2' : 'py-3'
      }`}>
        <div className="flex items-center">
          <Logo size="default" />
        </div>
        
        <MobileMenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* -------------------- MOBILE MENU OVERLAY (Slide from right animation) -------------------- */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black/95 backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out z-40
          ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        

        {/* Navigation Links */}
        <nav className="flex flex-col items-start justify-start h-full pt-24 p-8 space-y-6">
          {[...leftLinks, ...rightLinks].map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-xl font-semibold text-white hover:text-[color:var(--brand)] transition-all duration-300 hover:translate-x-2"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Contact Link in Mobile Menu */}
          <Link 
            href="/contact" 
            className="text-xl font-semibold text-white hover:text-[color:var(--brand)] transition-all duration-300 hover:translate-x-2" 
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Company Logo at the bottom of mobile menu - BIGGER SIZE */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
          <div className="flex flex-col items-center">
            <Logo size="large" />
            <p className="text-white text-base mt-3 font-bold">H-Vision Properties</p>
            <p className="text-white text-base mt-1 font-bold">Brandivera Luxury Interiors</p>
            <p className="text-gray-400 text-sm mt-2 font-medium">Building Dreams, Creating Legacies</p>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-500"
          onClick={toggleMenu}
        />
      )}
    </header>
  )
}