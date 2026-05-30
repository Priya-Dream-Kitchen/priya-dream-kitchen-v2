'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const autoPlayTimer = useRef(null);

  const images = [
    { src: '/images/imgs/IMG_1877.jpg', alt: 'Real cooking experience - Priya Dream Kitchen Weligama' },
    { src: '/images/imgs/IMG_2229.jpg', alt: 'Clay pot cooking with fresh local ingredients' },
    { src: '/images/imgs/IMG_2415.jpg', alt: 'Expert host showing traditional cooking steps' },
    { src: '/images/imgs/IMG_2420.jpg', alt: 'Heirloom rice and curries on our wooden hearth' },
    { src: '/images/imgs/IMG_2424 (1).jpg', alt: 'Hands-on lesson in curry powder grinding' },
    { src: '/images/imgs/IMG_2427.JPG', alt: 'Freshly plated Sri Lankan roti and sambols' },
    { src: '/images/srilankan-curries.png', alt: 'Premium Sri Lankan curries cooking in traditional clay pots' },
    { src: '/images/chef-cooking.png', alt: 'Local home chef Amma hand-grinding coconut on Miris Gala' },
    { src: '/images/imgs/photo_2026-04-10_13-11-18.jpg', alt: 'Guests smiling and eating what they cooked' },
    { src: '/images/imgs/photo_2026-04-10_13-17-08.jpg', alt: 'Happy tourists learning traditional culinary art' },
    { src: '/images/imgs/photo_2026-04-16_19-48-10.jpg', alt: 'A colorful spread of Sri Lankan seasonal curries' },
    { src: '/images/imgs/1200x900_shutterstock_1050903170-1_1648536412.jpg', alt: 'Authentic Weligama kitchen setup' },
  ];

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

  // Auto-play sliding functionality
  const startAutoplay = () => {
    stopAutoplay();
    autoPlayTimer.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 3800);
  };

  const stopAutoplay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
  };

  useEffect(() => {
    if (!isOpen && !isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isOpen, isHovered]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

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
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
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
          className={`relative max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-border-color bg-surface/30 backdrop-blur-md transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slider Track */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`absolute inset-0 w-full h-full cursor-pointer transition-all duration-[800ms] ease-in-out transform ${
                  index === activeSlide
                    ? 'opacity-100 scale-100 z-20 pointer-events-auto'
                    : 'opacity-0 scale-105 z-10 pointer-events-none'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition-transform duration-700 hover:scale-102"
                />
                
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Caption / Description overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-left z-30 select-none pointer-events-none">
                  <p className="text-white font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wide drop-shadow-md">
                    {img.alt}
                  </p>
                  <span className="inline-block mt-2 text-xs uppercase tracking-widest font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {index + 1} / {images.length} • Real Cooking
                  </span>
                </div>

                {/* Hover zoom overlay indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass-card hover:bg-primary/20 text-white border border-white/20 hover:scale-110 active:scale-95 transition-all focus:outline-none"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass-card hover:bg-primary/20 text-white border border-white/20 hover:scale-110 active:scale-95 transition-all focus:outline-none"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Under-indicators / Thumbnail-Dots */}
          <div className="flex justify-center items-center gap-2 py-4 bg-surface/80 border-t border-border-color">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-primary w-8' 
                    : 'bg-text-muted/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal (unchanged full features) */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all z-[10002]"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Left */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-4 p-3 text-white/80 hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-all z-[10001]"
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
            className="absolute right-4 p-3 text-white/80 hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-all z-[10001]"
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
