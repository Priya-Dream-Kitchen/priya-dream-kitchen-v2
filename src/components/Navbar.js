'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'booking', label: 'Booking' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-bg/90 backdrop-blur-md shadow-lg border-b border-border-color'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-full px-8 md:px-12 flex items-center justify-between">
        {/* Logo and Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Priya Dream Kitchen logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-primary group-hover:text-accent transition-colors">
            Priya Dream Kitchen
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative py-1 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-accent'
                      : 'text-text-muted hover:text-primary hover:scale-105'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={(e) => handleLinkClick(e, 'booking')}
            className="px-6 py-3 bg-primary hover:bg-accent text-white font-bold rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(198,123,92,0.25)] hover:shadow-[0_6px_25px_rgba(218,165,32,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Navbar controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text hover:text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-surface z-50 shadow-2xl border-l border-border-color p-8 flex flex-col justify-between transition-transform duration-300 ease-out transform lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-border-color pb-4">
            <span className="font-serif font-bold text-lg text-primary">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-text-muted hover:text-primary"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`block py-1.5 text-base font-medium tracking-wide uppercase transition-colors ${
                    activeSection === link.id ? 'text-accent font-semibold' : 'text-text-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <a
            href="#booking"
            onClick={(e) => handleLinkClick(e, 'booking')}
            className="block w-full text-center py-3 bg-primary hover:bg-accent text-white font-medium rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
