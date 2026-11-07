'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Ornament from './Ornament';

const filters = ['All', 'Kitchen', 'Food', 'Guests'];

const images = [
  { src: '/images/kitchen/clay-pot-table.webp', alt: 'A clay pot, red onions and fresh herbs laid out beside the grinding stone', tag: 'Kitchen', tall: false },
  { src: '/images/gallery/ayubowan-welcome.webp', alt: 'Warm Sri Lankan welcome — Ayubowan greeting in traditional sarongs', tag: 'Guests', tall: false },
  { src: '/images/kitchen/coconut-scraper.webp', alt: 'Cracking a coconut over the traditional scraper', tag: 'Kitchen', tall: true },
  { src: '/images/kitchen/clay-bowl-prep.webp', alt: 'Freshly sliced vegetables in a clay bowl, ready for the pot', tag: 'Food', tall: false },
  { src: '/images/gallery/hands-on-class.webp', alt: 'Hands-on cooking class — preparing local ingredients in clay bowls', tag: 'Guests', tall: false },
  { src: '/images/kitchen/fresh-produce.webp', alt: 'Baskets of fresh vegetables, mangoes and fruit on the kitchen counter', tag: 'Food', tall: true },
  { src: '/images/gallery/class-group-selfie.webp', alt: 'Happy cooking class graduates posing for a group selfie with Chef Priya and her son', tag: 'Guests', tall: false },
  { src: '/images/kitchen/spice-shelf.webp', alt: 'Jars of spices on a red shelf against the clay wall', tag: 'Kitchen', tall: false },
  { src: '/images/kitchen/guest-mixing.webp', alt: 'A guest mixing ingredients by hand in a clay bowl', tag: 'Guests', tall: false },
  { src: '/images/gallery/rice-and-curry-feast.webp', alt: 'Authentic Sri Lankan feast — curries and red rice served in clay pots', tag: 'Food', tall: false },
  { src: '/images/gallery/garden-swing.webp', alt: 'Relaxing in our tropical garden swing after the cooking class', tag: 'Guests', tall: false },
  { src: '/images/kitchen/wood-fire-hearth.webp', alt: 'The traditional wood-fire hearth with a clay pot and lid', tag: 'Kitchen', tall: true },
  { src: '/images/gallery/stir-frying-curries.webp', alt: 'Guests learning the art of stir-frying curries over the stove', tag: 'Guests', tall: false },
  { src: '/images/gallery/family-moments.webp', alt: 'Family moments — capturing memories during the cooking lesson', tag: 'Guests', tall: false },
  { src: '/images/gallery/sitting-down-to-feast.webp', alt: 'Sitting down to enjoy the handmade feast in our rustic kitchen', tag: 'Guests', tall: false },
  { src: '/images/gallery/serving-rice-and-curry.webp', alt: 'Serving up fresh homemade rice and curry creations with Chef Priya', tag: 'Food', tall: false },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const shown = filter === 'All' ? images : images.filter((img) => img.tag === filter);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextLightboxImage = () => {
    setPhotoIndex((prev) => (prev + 1) % shown.length);
  };

  const prevLightboxImage = () => {
    setPhotoIndex((prev) => (prev - 1 + shown.length) % shown.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const count = shown.length;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') setPhotoIndex((prev) => (prev + 1) % count);
      if (e.key === 'ArrowLeft') setPhotoIndex((prev) => (prev - 1 + count) % count);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, shown.length]);

  return (
    <section id="gallery" className="py-20 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Gallery</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">Moments from the hearth</h2>
            <Ornament className="mt-5 text-primary" />
            <p className="mt-5 text-lg text-text-muted">
              Glance through the warmth, laughter, and authentic dishes shared at Priya Dream Kitchen.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setFilter(name)}
                aria-pressed={filter === name}
                className={`min-h-11 px-5 rounded-full font-semibold border transition-colors cursor-pointer ${
                  filter === name
                    ? 'bg-text text-cream border-text'
                    : 'border-border-color text-text-muted hover:text-text hover:border-text'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Photo wall */}
        <div className="mt-12 columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4">
          {shown.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative block w-full mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-xl bg-surface cursor-zoom-in ${
                img.tall ? 'aspect-[4/5]' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption on hover / keyboard focus */}
              <span className="absolute inset-0 flex flex-col justify-end p-4 text-left bg-gradient-to-t from-bark/85 via-bark/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                <span className="self-start bg-marigold text-bark rounded-full px-2.5 py-0.5 text-xs font-bold">{img.tag}</span>
                <span className="mt-2 text-cream text-sm leading-snug">{img.alt}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-4 p-4 sm:p-8 bg-bark/95"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            autoFocus
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-cream rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[10002] cursor-pointer"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Left */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[10001] cursor-pointer"
            aria-label="Previous Image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full flex-1 min-h-0">
            <Image
              src={shown[photoIndex].src}
              alt={shown[photoIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* Image description caption */}
          <div className="text-center px-4 pb-1">
            <p className="text-cream">{shown[photoIndex].alt}</p>
            <span className="text-cream/70 text-sm mt-1 block">
              {photoIndex + 1} of {shown.length}
            </span>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={nextLightboxImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[10001] cursor-pointer"
            aria-label="Next Image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
