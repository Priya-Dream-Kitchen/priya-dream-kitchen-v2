'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

function Counter({ endValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) return;

    const totalSteps = 60;
    const increment = end / totalSteps;
    const stepTime = duration / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={elementRef} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-bg">
      {/* Decorative blurred blobs for premium feel */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Premium 3D Layered Image Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/5 transform lg:-rotate-3 hover:rotate-0 transition-all duration-500 group">
              <Image
                src="/images/priya-chef-about.png"
                alt="Chef Priya demonstrating clay pot cooking at Priya Dream Kitchen"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -right-4 bg-surface/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-border-color animate-float">
              <span className="block text-xs uppercase tracking-widest text-text-muted font-medium">Award Winning</span>
              <span className="font-serif font-bold text-lg text-primary">Local Host Amma</span>
            </div>
          </div>

          {/* Right Column: Story & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
                Our Story
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-text">
                Discover the heart of traditional cooking
              </h2>
            </div>

            <div className="space-y-6 text-text-muted text-base sm:text-lg leading-relaxed">
              <p>
                At Priya Dream Kitchen, we invite tourists and food enthusiasts to step away from the commercial dining tables and dive into the authentic flavors of Sri Lanka. Nestled in the coastal paradise of Weligama, our classes offer a hands-on window into ancestral culinary heritage.
              </p>
              <p>
                Under the warm guidance of Priya and our local home chefs, you will learn to grind spices from scratch, blend flavors using hand-carved clay pots, and decode the subtle secrets of Sri Lankan coconut curries. Every session is an intimate celebration of culture, stories, and culinary joy.
              </p>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-color">
              <div className="text-center sm:text-left space-y-1">
                <Counter endValue="250" suffix="+" />
                <p className="text-xs sm:text-sm text-text-muted font-medium uppercase tracking-wider">
                  Students Welcomed
                </p>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <Counter endValue="5" suffix=" ★" />
                <p className="text-xs sm:text-sm text-text-muted font-medium uppercase tracking-wider">
                  Google Rating
                </p>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <Counter endValue="1" suffix="+" />
                <p className="text-xs sm:text-sm text-text-muted font-medium uppercase tracking-wider">
                  Years of Sharing
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
