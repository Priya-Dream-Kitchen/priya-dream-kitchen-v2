'use client';

import { useEffect, useState } from 'react';

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);

  const testimonials = [
    {
      name: 'Emma & Mark',
      country: 'United Kingdom',
      text: 'The absolute highlight of our trip to Weligama! Priya is the warmest host, and her traditional beetroot curry is absolute magic. We can’t wait to recreate it back home.',
      rating: 5,
      date: 'May 2026',
    },
    {
      name: 'Pierre Dubois',
      country: 'France',
      text: 'An incredible hands-on experience. We learned so much about matching local spices and roasted curry powder. The coconut roti we baked over the fire was delicious!',
      rating: 5,
      date: 'April 2026',
    },
    {
      name: 'Sarah Jenkins',
      country: 'Australia',
      text: 'Priya Dream Kitchen is a gem. The kitchen is clean, ingredients are fresh, and the hospitality is incomparable. Highly recommend booking a class here!',
      rating: 5,
      date: 'March 2026',
    },
  ];

  useEffect(() => {
    // Dynamically load EmbedSocial Widget Script
    const scriptId = 'EmbedSocialWidgetScript';
    if (!document.getElementById(scriptId)) {
      const js = document.createElement('script');
      js.id = scriptId;
      js.src = 'https://embedsocial.com/cdn/aht.js';
      document.getElementsByTagName('head')[0].appendChild(js);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="reviews" className="py-24 sm:py-32 relative overflow-hidden bg-bg">
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-text">
            Loved by Travelers
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Hear from our global guests who experienced the authentic warmth of our traditional kitchen.
          </p>
        </div>

        {/* EmbedSocial widget container */}
        <div className="mb-16">
          <div 
            className="embedsocial-widget min-h-[200px]" 
            data-ref="a05142f4dac03a10a6551da1671e3b6c"
          >
            <a 
              className="powered-by-es es-slider text-center block text-sm text-text-muted hover:text-primary transition-colors py-8 border border-border-color rounded-2xl bg-surface/30 backdrop-blur-sm" 
              href="https://embedsocial.com/google-reviews-widget/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Add Google reviews on a website"
            >
              Loading verified Google Reviews...
            </a>
          </div>
        </div>

        {/* Premium Fallback Slider Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-[28px] border border-border-color shadow-xl relative overflow-hidden">
            {/* Quote SVG watermark */}
            <div className="absolute top-6 left-6 text-primary/10 w-24 h-24 pointer-events-none">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              {/* Stars */}
              <div className="flex gap-1 text-amber-500">
                {[...Array(testimonials[activeReview].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-text font-serif italic text-base sm:text-xl leading-relaxed max-w-2xl">
                "{testimonials[activeReview].text}"
              </p>

              {/* Author Details */}
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-text text-sm sm:text-base">
                  {testimonials[activeReview].name}
                </h4>
                <p className="text-text-muted text-xs uppercase tracking-widest font-semibold">
                  {testimonials[activeReview].country} — <span className="text-accent">{testimonials[activeReview].date}</span>
                </p>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeReview === index ? 'bg-primary w-6' : 'bg-text-muted/40 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
