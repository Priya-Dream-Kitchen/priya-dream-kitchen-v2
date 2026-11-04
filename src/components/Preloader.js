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
      }, 350); // Grace period for aesthetic feel
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
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-bg transition-opacity duration-500 ease-out ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <p className="display text-4xl sm:text-5xl text-center select-none">
        Priya <em className="text-accent font-normal">Dream</em> Kitchen
      </p>
    </div>
  );
}
