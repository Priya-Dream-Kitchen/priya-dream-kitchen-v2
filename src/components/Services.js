'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Ornament from './Ornament';

const steps = [
  {
    title: 'A Warm Ayubowan',
    image: '/images/kitchen/garden-kitchen.webp',
    alt: 'The open-air garden kitchen at Priya Dream Kitchen, surrounded by tropical plants',
    description: 'Step away from the commercial dining tables and into our family garden kitchen in Weligama, where every class begins with a warm Sri Lankan welcome.',
  },
  {
    title: 'Chef-Led Culinary Demonstrations',
    image: '/images/kitchen/spice-tray.webp',
    alt: 'A clay tray of glass bowls filled with Sri Lankan spices and curry powders',
    description: 'Learn from the pros! Watch our chefs demonstrate recipes and share professional secrets, from knife skills to complex spice blending. Go home inspired and ready to cook with confidence.',
  },
  {
    title: 'Hands-On Cooking Lessons',
    image: '/images/kitchen/fresh-coconut.webp',
    alt: 'Hands squeezing freshly scraped coconut over a clay bowl',
    description: 'Cook, learn, and have fun with our expert chefs! Master new techniques using fresh local ingredients in our lively, fully interactive kitchen. Perfect for food lovers of all levels.',
  },
  {
    title: 'Eat What You Make (and More!)',
    image: '/images/kitchen/feast-table.webp',
    alt: 'A table laid with clay bowls of curries, sambols and rice',
    description: 'Savor the fruits of your labor! After the cooking session, sit down to taste your creations and enjoy additional local delicacies prepared by our hosts in a warm, festive setting.',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  // The step crossing the middle of the screen drives the pinned photo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-surface py-20 sm:py-32">
      <div className="scallop" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Your Class, Step by Step</p>
          <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Sensory kitchen experiences
          </h2>
          <Ornament className="mt-5 text-primary" />
          <p className="mt-5 text-lg text-text-muted">
            We provide immersive culinary activities designed to teach you the authentic craft of Sri Lankan cuisine.
          </p>
        </div>

        <div className="mt-12 lg:mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          {/* Pinned photo */}
          <div className="hidden lg:block">
            <div className="sticky top-[12vh] h-[76vh]">
              <div className="relative h-full arch bg-bg">
                {steps.map((step, index) => (
                  <Image
                    key={step.title}
                    src={step.image}
                    alt=""
                    fill
                    sizes="46vw"
                    className={`object-cover transition-opacity duration-700 ${active === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                {/* Step caption and progress */}
                <div className="absolute left-6 right-28 bottom-8">
                  <p className="inline-block bg-surface/95 rounded-full px-4 py-2 font-semibold text-sm">
                    {steps[active].title}
                  </p>
                  <div className="mt-3 h-1 rounded-full bg-cream/40 overflow-hidden">
                    <div
                      className="h-full bg-cream transition-[width] duration-700"
                      style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <span className="absolute -right-3 bottom-8 w-20 h-20 rounded-full bg-accent text-cream font-serif text-2xl flex items-center justify-center">
                {active + 1}/{steps.length}
              </span>
            </div>
          </div>

          {/* Steps */}
          <ol>
            {steps.map((step, index) => (
              <li
                key={step.title}
                ref={(el) => (stepRefs.current[index] = el)}
                data-index={index}
                className="lg:min-h-[78vh] flex flex-col justify-center py-8 lg:py-0"
              >
                <div className="relative lg:hidden w-full aspect-[4/3] rounded-t-[140px] overflow-hidden mb-7 bg-bg">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1px"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`font-serif italic text-6xl sm:text-7xl transition-colors duration-500 ${
                    active === index ? 'text-primary' : 'text-text/20'
                  }`}
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <h3 className="display mt-4 text-3xl sm:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
