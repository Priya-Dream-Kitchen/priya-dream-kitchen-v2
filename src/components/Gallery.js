'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  
  const sectionRef = useRef(null);

  const images = [
    { src: '/images/imgs/IMG_1877.jpg', alt: 'Hands-on cooking class — preparing local ingredients in clay bowls' },
    { src: '/images/imgs/IMG_2229.jpg', alt: 'Warm Sri Lankan welcome — Ayubowan greeting in traditional sarongs' },
    { src: '/images/imgs/IMG_2415.jpg', alt: 'Family moments — capturing memories during the cooking lesson' },
    { src: '/images/imgs/IMG_2420.jpg', alt: 'Authentic Sri Lankan feast — curries and red rice served in clay pots' },
    { src: '/images/imgs/IMG_2424 (1).jpg', alt: 'Happy cooking class graduates posing for a group selfie with Chef Priya and her son' },
    { src: '/images/imgs/IMG_2427.JPG', alt: 'Relaxing in our tropical garden swing after the cooking class' },
    { src: '/images/srilankan-curries.png', alt: 'Vibrant Sri Lankan curries simmered slowly over clay hearths' },
    { src: '/images/imgs/photo_2026-04-10_13-11-18.jpg', alt: 'Guests learning the art of stir-frying curries over the stove' },
    { src: '/images/imgs/photo_2026-04-10_13-17-08.jpg', alt: 'Sitting down to enjoy the handmade feast in our rustic kitchen' },
    { src: '/images/imgs/photo_2026-04-16_19-48-10.jpg', alt: 'Serving up fresh homemade rice and curry creations with Chef Priya' },
  ];

  const doubleImages = [...images, ...images];

  // Intersection Observer for fade-in entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextLightboxImage = () => {
    setPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-bg overflow-hidden" ref={sectionRef}>
      <div className="w-full relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 px-6">
          <span className="text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Our Gallery
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-text">
            Moments from the Hearth
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Glance through the warmth, laughter, and authentic dishes shared at Priya Dream Kitchen.
          </p>
        </div>

        {/* Premium Sliding Carousel Container */}
        <div 
          className={`relative w-full overflow-hidden transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {/* Subtle fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent z-30 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent z-30 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {doubleImages.map((img, index) => {
              const originalIndex = index % images.length;
              return (
                <div
                  key={index}
                  onClick={() => openLightbox(originalIndex)}
                  className="w-[280px] sm:w-[350px] md:w-[420px] aspect-[4/3] flex-shrink-0 cursor-pointer"
                >
                  <div className="group relative w-full h-full rounded-[24px] overflow-hidden border border-border-color bg-surface/30 backdrop-blur-sm shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 420px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                    {/* Caption / Description overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-left z-20 select-none pointer-events-none">
                      <p className="text-white font-serif text-sm sm:text-base font-bold tracking-wide leading-tight drop-shadow-md">
                        {img.alt}
                      </p>
                      <span className="inline-block mt-2 text-[10px] uppercase tracking-widest font-semibold text-accent bg-accent/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {originalIndex + 1} / {images.length} • Click to view
                      </span>
                    </div>

                    {/* Hover zoom overlay indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive instruction text */}
          <div className="flex justify-center items-center gap-2 mt-4 text-xs tracking-widest uppercase text-text-muted/60 font-medium">
            <span>Hover to pause</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Click any photo to enlarge</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (unchanged full features) */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all z-[10002] cursor-pointer"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Left */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-4 p-3 text-white/80 hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-all z-[10001] cursor-pointer"
            aria-label="Previous Image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-[90vw] max-h-[80vh] aspect-[4/3] md:aspect-[16/10] flex items-center justify-center">
            <Image
              src={images[photoIndex].src}
              alt={images[photoIndex].alt}
              fill
              sizes="90vw"
              className="object-contain transition-all duration-300"
              priority
            />
            {/* Image description caption */}
            <div className="absolute -bottom-16 left-0 right-0 text-center px-4">
              <p className="text-white/80 text-sm font-medium">{images[photoIndex].alt}</p>
              <span className="text-text-muted text-xs mt-1 block">
                {photoIndex + 1} of {images.length}
              </span>
            </div>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={nextLightboxImage}
            className="absolute right-4 p-3 text-white/80 hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-all z-[10001] cursor-pointer"
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
