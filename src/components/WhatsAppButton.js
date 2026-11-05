'use client';

import { useEffect, useState } from 'react';

// Floating chat shortcut that appears once the visitor scrolls past the hero
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/94742417308"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Priya on WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 flex items-center gap-2 min-h-14 pl-4 pr-5 rounded-full bg-[#1F7A4D] text-white font-bold shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-[#17633E] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.2c0-.2-.2-.2-.5-.3z" />
      </svg>
      <span className="hidden sm:inline">Chat with Priya</span>
    </a>
  );
}
