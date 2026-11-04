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
    <section id="reviews" className="bg-surface py-20 sm:py-32 relative">
      <div className="scallop" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="eyebrow">Testimonials</p>
          <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Loved by <em className="text-accent font-normal">travelers</em>
          </h2>
          <p className="mt-5 text-lg text-text-muted">
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
              className="powered-by-es es-slider text-center block text-text-muted hover:text-primary transition-colors py-8 border border-border-color rounded-2xl"
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
        <div className="max-w-4xl">
          <div className="relative border-l-4 border-accent pl-6 sm:pl-10 py-2">
            <div className="flex flex-col items-start space-y-6">
              {/* Stars */}
              <div className="flex gap-1 text-primary">
                {[...Array(testimonials[activeReview].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="display !font-normal text-2xl sm:text-4xl !leading-snug min-h-[9rem] sm:min-h-[11rem]">
                “{testimonials[activeReview].text}”
              </p>

              {/* Author Details */}
              <div className="space-y-1">
                <h3 className="font-bold text-lg">
                  {testimonials[activeReview].name}
                </h3>
                <p className="text-text-muted">
                  {testimonials[activeReview].country} · {testimonials[activeReview].date}
                </p>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex gap-1 mt-6 -ml-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className="w-11 h-11 flex items-center justify-center cursor-pointer"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeReview === index}
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeReview === index ? 'bg-accent w-7' : 'bg-text/25 w-2.5'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
