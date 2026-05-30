'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Wait for the window load or a short timeout
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setShouldRender(false), 500); // Wait for fade-out transition
      }, 950); // Grace period for aesthetic feel
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const timeout = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#130E0B] transition-opacity duration-600 ease-out ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center space-y-8 select-none">
        
        {/* Luxury Gold Ring Spinner */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-primary/10 border-t-accent border-r-accent/40 animate-spin" />
          
          {/* Inner glowing pulse dot */}
          <div className="w-3.5 h-3.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(212,137,106,0.6)]" />
        </div>

        {/* Brand Typography */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#F5EFEB] uppercase">
            Priya Dream <span className="text-accent italic font-light block mt-1.5 font-serif tracking-[0.15em] normal-case">Kitchen</span>
          </h2>
          
          <div className="h-[1px] w-24 bg-border-color/60 mx-auto mt-2" />
          
          <p className="text-[10px] sm:text-xs text-accent font-sans font-semibold tracking-[0.35em] uppercase pt-2">
            Authentic Sri Lankan Taste
          </p>
        </div>

      </div>
    </div>
  );
}
