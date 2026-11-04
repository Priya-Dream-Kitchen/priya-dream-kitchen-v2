'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

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
    <span ref={elementRef} className="font-serif text-4xl sm:text-5xl font-medium text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

        {/* Story & Stats */}
        <div className="lg:col-span-7 lg:order-2 lg:pl-10">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Discover the heart of <em className="text-primary font-normal">traditional</em> cooking
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-8 space-y-5 max-w-2xl text-lg leading-relaxed text-text-muted">
            <p>
              At Priya Dream Kitchen, we invite tourists and food enthusiasts to step away from the commercial dining tables and dive into the authentic flavors of Sri Lanka. Nestled in the coastal paradise of Weligama, our classes offer a hands-on window into ancestral culinary heritage.
            </p>
            <p>
              Under the warm guidance of Priya and our local home chefs, you will learn to grind spices from scratch, blend flavors using hand-carved clay pots, and decode the subtle secrets of Sri Lankan coconut curries. Every session is an intimate celebration of culture, stories, and culinary joy.
            </p>
          </Reveal>

          {/* Stats section */}
          <Reveal delay={200} className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border-color max-w-2xl">
            <div className="space-y-1">
              <Counter endValue="250" suffix="+" />
              <p className="text-sm text-text-muted font-medium">Students Welcomed</p>
            </div>

            <div className="space-y-1">
              <Counter endValue="5" suffix=" ★" />
              <p className="text-sm text-text-muted font-medium">Google Rating</p>
            </div>

            <div className="space-y-1">
              <Counter endValue="1" suffix="+" />
              <p className="text-sm text-text-muted font-medium">Years of Sharing</p>
            </div>
          </Reveal>
        </div>

        {/* Priya in her garden, with the sign at the gate */}
        <Reveal className="lg:col-span-5 lg:order-1 relative pb-20 sm:pb-24">
          <div className="relative w-[82%] aspect-[4/5] arch bg-surface">
            <Image
              src="/images/kitchen/priya-in-garden.webp"
              alt="Chef Priya in her garden, holding a fresh coconut"
              fill
              sizes="(max-width: 1024px) 82vw, 34vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[62%] aspect-[3/2] rounded-lg overflow-hidden border-[6px] border-bg rotate-2 bg-surface">
            <Image
              src="/images/kitchen/kitchen-sign.webp"
              alt="Hand-painted wooden Priya Dream Kitchen sign among garden plants"
              fill
              sizes="(max-width: 1024px) 62vw, 26vw"
              className="object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
