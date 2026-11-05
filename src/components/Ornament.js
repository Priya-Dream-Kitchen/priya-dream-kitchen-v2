// Lotus with scrolling vines, after the liyawela borders on old Sri Lankan murals
export default function Ornament({ className = '' }) {
  const vine = (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M95 22 Q82 22 76 15 T56 13 T36 19 T14 15" />
      <path d="M66 12 q-2 -7 5 -8" />
      <path d="M46 18 q2 7 -5 8" />
      <circle cx="10" cy="15" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="76" cy="9" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="36" cy="25" r="1.4" fill="currentColor" stroke="none" />
    </g>
  );

  return (
    <svg viewBox="0 0 240 30" className={`w-48 h-6 ${className}`} aria-hidden="true">
      {vine}
      <g transform="matrix(-1 0 0 1 240 0)">{vine}</g>
      <g fill="currentColor">
        <path d="M120 3 C127 11 127 20 120 27 C113 20 113 11 120 3Z" />
        <path d="M120 27 C111 23 105 16 103 8 C112 10 118 17 120 27Z" opacity="0.8" />
        <path d="M120 27 C129 23 135 16 137 8 C128 10 122 17 120 27Z" opacity="0.8" />
        <path d="M120 27 C109 27 100 22 96 16 C105 15 114 20 120 27Z" opacity="0.6" />
        <path d="M120 27 C131 27 140 22 144 16 C135 15 126 20 120 27Z" opacity="0.6" />
      </g>
    </svg>
  );
}
