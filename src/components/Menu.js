'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Menu() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    {
      title: 'Sri Lankan Rice & Curry Feast',
      description: 'The heartbeat of our culinary class. Learn to cook red heirloom rice served with 5 seasonal curries (dhal, jackfruit, beetroot, gotukola sambol, and chicken or fish curry).',
      price: '$20',
      image: '/images/food-spread.png',
      tags: ['Traditional', 'Popular', 'Gluten Free'],
    },
    {
      title: 'Traditional Pol Roti & Lunu Miris',
      description: 'Master the art of kneading coconut-infused flatbread. Cook over an open fire and pair it with a freshly stone-ground spicy onion chili sambol.',
      price: '$18',
      image: '/images/spices-closeup.png',
      tags: ['Hands-on', 'Spicy', 'Vegetarian'],
    },
    {
      title: 'Kottu Roti & Devilled Chicken',
      description: 'Learn the rhythmic chopping technique of building Kottu Roti. Blend fresh vegetables, shredded roti, and eggs, served with hot devilled chicken.',
      price: '$22',
      image: '/images/Sri-Lankan-Foods6.png',
      tags: ['Street Food', 'Chef Special'],
    },
  ];

  return (
    <section id="menu" className="py-24 sm:py-32 bg-bg/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Experience Menu
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-text">
            What You Will Learn
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Choose your culinary adventure. Every menu package includes full instruction, ingredients, and a celebratory feast.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`glass-card group flex flex-col justify-between overflow-hidden rounded-[28px] border border-border-color bg-surface/50 transition-all duration-700 ease-out transform ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-primary text-white font-serif font-bold px-4 py-1.5 rounded-full shadow-md text-sm">
                    {item.price} <span className="text-xs font-sans font-normal text-white/90">/ guest</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-sans font-semibold uppercase tracking-wider bg-secondary/15 text-secondary px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-text group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-4">
                <a
                  href="#booking"
                  className="block w-full text-center py-3 bg-surface hover:bg-primary border border-primary text-primary hover:text-white font-medium rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  Book Session
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
