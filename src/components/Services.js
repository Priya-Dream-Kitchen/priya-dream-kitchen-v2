'use client';

import { useEffect, useState, useRef } from 'react';

export default function Services() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const serviceData = [
    {
      title: 'Hands-On Cooking Lessons',
      description: 'Cook, learn, and have fun with our expert chefs! Master new techniques using fresh local ingredients in our lively, fully interactive kitchen. Perfect for food lovers of all levels.',
      // SVG of a frying pan / stove fire
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16l.7.7M21 12h-1M4 12H3m15.36-6.36l-.7.7M6.36 17.64l-.7.7M8 12a4 4 0 118 0v4H8v-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20h12M12 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Chef-Led Culinary Demonstrations',
      description: "Learn from the pros! Watch our chefs demonstrate recipes and share professional secrets, from knife skills to complex spice blending. Go home inspired and ready to cook with confidence.",
      // SVG of a chef hat
      icon: (
        <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a6 6 0 00-12 0c0 1.25.38 2.42 1.03 3.4A3.5 3.5 0 005.5 17h13a3.5 3.5 0 00-1.53-3.6c.65-.98 1.03-2.15 1.03-3.4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17v3a1 1 0 001 1h6a1 1 0 001-1v-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12" />
        </svg>
      ),
    },
    {
      title: 'Eat What You Make (and More!)',
      description: 'Savor the fruits of your labor! After the cooking session, sit down to taste your creations and enjoy additional local delicacies prepared by our hosts in a warm, festive setting.',
      // SVG of plate, fork, and spoon
      icon: (
        <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8v5M7 8v2a2 2 0 004 0V8m5 0v8m0-8h1.5M15 12h2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-bg/50">
      {/* Background Image tint */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url('/images/service.jpg')" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Our Offerings
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-text">
            Sensory Kitchen Experiences
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            We provide immersive culinary activities designed to teach you the authentic craft of Sri Lankan cuisine.
          </p>
        </div>

        {/* 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`glass-card group relative p-8 rounded-[24px] border border-border-color overflow-hidden flex flex-col justify-between transition-all duration-700 ease-out transform ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Shine Sweep Overlay */}
              <div 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine-sweep pointer-events-none" 
                style={{ transform: 'skewX(-20deg)' }}
              />

              <div className="space-y-6">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-surface shadow-inner border border-border-color/40 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-text group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent link */}
              <div className="mt-8 pt-4 border-t border-border-color/30 flex items-center gap-2 text-primary font-medium text-sm group-hover:text-accent transition-colors cursor-pointer">
                <span>Learn details</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
