'use client';

import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative inline-flex items-center justify-center p-2.5 rounded-full text-text-muted hover:text-primary transition-all duration-300 glass-card hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <svg
          className={`w-6 h-6 absolute transition-all duration-500 ease-out transform ${
            theme === 'light'
              ? 'translate-y-0 opacity-100 rotate-0 scale-100'
              : 'translate-y-8 opacity-0 -rotate-90 scale-50'
          } text-amber-500`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.364 17.636l-.707.707m12.728 0l-.707-.707M6.364 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`w-5 h-5 absolute transition-all duration-500 ease-out transform ${
            theme === 'dark'
              ? 'translate-y-0 opacity-100 rotate-0 scale-100'
              : '-translate-y-8 opacity-0 rotate-90 scale-50'
          } text-blue-400`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  );
}
