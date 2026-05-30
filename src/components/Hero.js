'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCTA = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Background Image Container with Parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg scale-105 select-none pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-cooking.png')",
        }}
      />

      {/* Dark tint overlay for readability */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/40 z-0" />

      {/* 3D Floating Organic Decor - Spices/Leaves SVGs */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {/* Floating cardamom/spice leaf */}
        <div className="absolute top-[20%] left-[10%] w-16 h-16 opacity-30 animate-float-slow text-secondary">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M17 2.02c-1.39 0-2.82.52-4.04 1.54C11.75 2.54 10.32 2.02 8.93 2.02 5.56 2.02 3 4.58 3 7.95c0 4.19 3.65 8.16 8.35 12.87.35.35.91.35 1.25 0 4.7-4.71 8.35-8.68 8.35-12.87 0-3.37-2.56-5.93-5.95-5.93zm-4.32 17.5c-3.9-3.92-7.18-7.3-7.18-10.57 0-2.27 1.63-3.93 3.93-3.93.97 0 1.94.39 2.76 1.13-.39.99-.44 2.15-.09 3.23.36 1.09 1.14 1.97 2.19 2.45v3.13c0 .55.45 1 1 1s1-.45 1-1V11.96c1.05-.48 1.83-1.36 2.19-2.45.35-1.08.3-2.24-.09-3.23.82-.74 1.79-1.13 2.76-1.13 2.3 0 3.93 1.66 3.93 3.93 0 3.27-3.28 6.65-7.18 10.57z" />
          </svg>
        </div>

        {/* Floating anise / star icon */}
        <div className="absolute bottom-[20%] right-[10%] w-14 h-14 opacity-25 animate-float-fast text-accent">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2l2.4 7.4H22l-6 4.7 2.3 7.3-6.3-4.6-6.3 4.6 2.3-7.3-6-4.7h7.6z" />
          </svg>
        </div>

        {/* Spice leaf 2 */}
        <div className="absolute top-[25%] right-[15%] w-12 h-12 opacity-20 animate-float text-primary">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.62-.48 3.14-1.3 4.39z" />
          </svg>
        </div>
      </div>

      {/* Hero Glass Card Container */}
      <div className="relative max-w-4xl mx-auto px-6 z-20 text-center">
        <div
          className={`glass-panel p-8 sm:p-12 md:p-16 rounded-[32px] border border-white/10 shadow-2xl transition-all duration-1000 ease-out transform ${
            mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {/* Main Titles */}
          <div className="space-y-4">
            <span className="inline-block text-accent font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.3em] bg-accent/15 px-4 py-1.5 rounded-full mb-2">
              Authentic Sri Lankan Culinary Art
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
              Priya Dream <span className="text-accent italic font-light font-serif">Kitchen!</span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed font-sans transition-all duration-1000 delay-300 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Discover the soul of traditional cooking at Priya Dream Kitchen! 🌿 Cook, taste, and
            enjoy authentic homemade dishes while exploring rich flavors, spices, and cultural
            stories. Join us – every meal is a memory! ❤️
          </p>

          {/* Action Buttons */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#booking"
              onClick={(e) => handleCTA(e, 'booking')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium rounded-full text-base tracking-wider uppercase overflow-hidden shadow-lg transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              {/* Shine highlight animation on hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine-sweep" style={{ transform: 'skewX(-20deg)' }} />
              Book Your Experience
            </a>

            <a
              href="#menu"
              onClick={(e) => handleCTA(e, 'menu')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full text-base tracking-wider uppercase border border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
