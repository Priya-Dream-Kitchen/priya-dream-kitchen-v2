'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'The Class' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check which section is in view
      const scrollPosition = window.scrollY + 120;
      for (const id of ['home', ...navLinks.map((link) => link.id), 'booking']) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2.5 bg-surface shadow-[0_1px_0_var(--border-color)]' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center gap-3 min-h-11">
          <span className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-[0_4px_14px_-6px_rgba(42,26,18,0.45)] shrink-0">
            <Image src="/images/logo-black.png" alt="" fill sizes="56px" className="object-contain" />
          </span>
          <span className="font-serif font-medium text-lg sm:text-xl tracking-tight">
            Priya Dream Kitchen
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  className={`py-2 font-semibold border-b-2 transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-primary border-primary'
                      : 'text-text border-transparent hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#booking" className="btn btn-primary !min-h-11 !py-2">
            Book Now
          </a>
        </div>

        {/* Mobile Navbar controls */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-text"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-bark/50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-surface z-50 p-6 flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full invisible'
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="self-end w-11 h-11 flex items-center justify-center text-text"
          aria-label="Close navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="mt-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 font-serif text-3xl ${
                  activeSection === link.id ? 'text-primary' : 'text-text'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary mt-auto">
          Book Now
        </a>
      </div>
    </nav>
  );
}
