import React from 'react';

interface IllustrationGraphicProps {
  type: 'celebrate' | 'frustrated' | 'calm' | 'conflict' | 'lotteworld' | 'sibling' | 'privacy';
  className?: string;
}

export const IllustrationGraphic: React.FC<IllustrationGraphicProps> = ({ type, className = '' }) => {
  if (type === 'celebrate') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 p-6 shadow-inner ${className}`}>
        <svg viewBox="0 0 400 280" className="w-full h-full max-h-64 drop-shadow-md">
          {/* Confetti & sparkles */}
          <circle cx="60" cy="50" r="8" fill="#F59E0B" className="animate-bounce" />
          <circle cx="340" cy="60" r="10" fill="#EC4899" className="animate-bounce" />
          <polygon points="80,120 86,132 98,134 89,143 91,155 80,149 69,155 71,143 62,134 74,132" fill="#FBBF24" />
          <polygon points="320,130 326,142 338,144 329,153 331,165 320,159 309,165 311,153 302,144 314,142" fill="#34D399" />
          
          {/* Rainbow arc */}
          <path d="M 100 220 A 100 100 0 0 1 300 220" fill="none" stroke="#FDE68A" strokeWidth="18" opacity="0.6" />
          <path d="M 115 220 A 85 85 0 0 1 285 220" fill="none" stroke="#BAE6FD" strokeWidth="14" opacity="0.6" />

          {/* Trophy in center */}
          <path d="M 160 90 L 240 90 L 230 160 C 230 185 215 200 200 200 C 185 200 170 185 170 160 Z" fill="#F59E0B" />
          <path d="M 170 98 L 230 98 L 222 155 C 222 175 210 188 200 188 C 190 188 178 175 178 155 Z" fill="#FCD34D" />
          {/* Trophy handles */}
          <path d="M 160 105 C 130 105 130 145 165 145" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
          <path d="M 240 105 C 270 105 270 145 235 145" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
          {/* Trophy base */}
          <rect x="190" y="200" width="20" height="25" fill="#D97706" rx="4" />
          <rect x="165" y="225" width="70" height="20" fill="#78350F" rx="6" />

          {/* Star symbol on trophy */}
          <polygon points="200,120 204,130 215,131 207,139 209,150 200,144 191,150 193,139 185,131 196,130" fill="#FFFFFF" />

          {/* Happy faces on sides */}
          <g transform="translate(90, 150)">
            <circle cx="20" cy="20" r="28" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
            <circle cx="12" cy="14" r="4" fill="#854D0E" />
            <circle cx="28" cy="14" r="4" fill="#854D0E" />
            <path d="M 10 24 Q 20 34 30 24" fill="none" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" />
            <circle cx="6" cy="22" r="5" fill="#F43F5E" opacity="0.4" />
            <circle cx="34" cy="22" r="5" fill="#F43F5E" opacity="0.4" />
          </g>
          <g transform="translate(270, 150)">
            <circle cx="20" cy="20" r="28" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
            <circle cx="12" cy="14" r="4" fill="#854D0E" />
            <circle cx="28" cy="14" r="4" fill="#854D0E" />
            <path d="M 10 24 Q 20 34 30 24" fill="none" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" />
            <circle cx="6" cy="22" r="5" fill="#F43F5E" opacity="0.4" />
            <circle cx="34" cy="22" r="5" fill="#F43F5E" opacity="0.4" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'frustrated') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-900 p-6 shadow-inner ${className}`}>
        <svg viewBox="0 0 400 280" className="w-full h-full max-h-64 drop-shadow-md">
          {/* Dark storm cloud */}
          <path d="M 130 100 A 35 35 0 0 1 180 70 A 50 50 0 0 1 250 85 A 35 35 0 0 1 280 110 A 30 30 0 0 1 270 140 L 130 140 A 25 25 0 0 1 130 100 Z" fill="#475569" />
          {/* Rain drops */}
          <line x1="150" y1="155" x2="140" y2="185" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6,6" />
          <line x1="180" y1="160" x2="170" y2="195" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6,6" />
          <line x1="210" y1="150" x2="200" y2="180" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6,6" />
          <line x1="240" y1="160" x2="230" y2="190" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6,6" />

          {/* Sad pubertal character in corner */}
          <g transform="translate(160, 160)">
            <circle cx="40" cy="40" r="36" fill="#94A3B8" stroke="#334155" strokeWidth="3" />
            {/* Sad eyes */}
            <path d="M 24 35 Q 30 30 36 36" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <path d="M 44 36 Q 50 30 56 35" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            {/* Tears */}
            <ellipse cx="26" cy="46" rx="3" ry="6" fill="#38BDF8" />
            <ellipse cx="54" cy="46" rx="3" ry="6" fill="#38BDF8" />
            {/* Sad downturned mouth */}
            <path d="M 30 58 Q 40 50 50 58" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Broken heart icon */}
          <g transform="translate(70, 70)">
            <path d="M 25 15 A 10 10 0 0 0 10 25 C 10 40 25 50 25 50 C 25 50 40 40 40 25 A 10 10 0 0 0 25 15 Z" fill="#EF4444" opacity="0.6" />
            <polyline points="25,18 21,30 28,38 23,48" fill="none" stroke="#0F172A" strokeWidth="2" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'calm') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-6 shadow-inner ${className}`}>
        <svg viewBox="0 0 400 280" className="w-full h-full max-h-64 drop-shadow-md">
          {/* Gentle sun */}
          <circle cx="320" cy="70" r="35" fill="#FDE047" opacity="0.8" />
          <circle cx="320" cy="70" r="45" fill="#FEF08A" opacity="0.4" />

          {/* Gentle green hills */}
          <path d="M 0 240 Q 120 170 240 220 Q 340 180 400 230 L 400 280 L 0 280 Z" fill="#6EE7B7" opacity="0.6" />
          <path d="M 0 250 Q 150 200 300 240 Q 360 220 400 250 L 400 280 L 0 280 Z" fill="#34D399" opacity="0.8" />

          {/* Sprout & tea cup symbolizing peace */}
          <g transform="translate(170, 130)">
            <rect x="15" y="40" width="30" height="28" rx="6" fill="#0D9488" />
            <path d="M 45 46 C 55 46 55 60 45 60" fill="none" stroke="#0D9488" strokeWidth="4" />
            {/* Steam */}
            <path d="M 23 35 Q 20 25 23 18" fill="none" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" />
            <path d="M 33 35 Q 36 25 33 18" fill="none" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Plant sprout */}
          <g transform="translate(80, 170)">
            <path d="M 20 40 Q 20 10 35 15 C 35 25 25 35 20 40 Z" fill="#10B981" />
            <path d="M 20 40 Q 15 20 5 25 C 5 35 15 38 20 40 Z" fill="#059669" />
          </g>
        </svg>
      </div>
    );
  }

  // Specific scenario illustrations
  if (type === 'lotteworld') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-6 shadow-inner ${className}`}>
        <svg viewBox="0 0 400 280" className="w-full h-full max-h-64 drop-shadow-md">
          {/* Ferris wheel */}
          <circle cx="120" cy="130" r="70" fill="none" stroke="#F59E0B" strokeWidth="6" strokeDasharray="12,6" />
          <circle cx="120" cy="130" r="10" fill="#D97706" />
          <line x1="120" y1="130" x2="120" y2="230" stroke="#78350F" strokeWidth="8" />
          <line x1="120" y1="230" x2="80" y2="250" stroke="#78350F" strokeWidth="6" />
          <line x1="120" y1="230" x2="160" y2="250" stroke="#78350F" strokeWidth="6" />
          {/* Wheel cars */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const cx = 120 + 70 * Math.cos(rad);
            const cy = 130 + 70 * Math.sin(rad);
            return <circle key={i} cx={cx} cy={cy} r="10" fill={i % 2 === 0 ? '#EF4444' : '#3B82F6'} />;
          })}

          {/* Rollercoaster track & castle */}
          <path d="M 220 230 L 220 120 L 250 80 L 280 120 L 280 230 Z" fill="#93C5FD" stroke="#1E40AF" strokeWidth="3" />
          <polygon points="250,50 230,80 270,80" fill="#3B82F6" />
          {/* Track loop */}
          <path d="M 200 220 Q 280 50 360 170 Q 380 200 400 180" fill="none" stroke="#EC4899" strokeWidth="8" strokeLinecap="round" />
          <rect x="290" y="90" width="30" height="18" rx="5" fill="#FBBF24" transform="rotate(25 305 99)" />
        </svg>
      </div>
    );
  }

  if (type === 'sibling') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 p-6 shadow-inner ${className}`}>
        <svg viewBox="0 0 400 280" className="w-full h-full max-h-64 drop-shadow-md">
          {/* Balance Scale */}
          <rect x="195" y="70" width="10" height="150" fill="#6B21A8" rx="4" />
          <path d="M 160 220 L 240 220 L 250 240 L 150 240 Z" fill="#581C87" />
          {/* Beam tilted */}
          <line x1="90" y1="85" x2="310" y2="105" stroke="#9333EA" strokeWidth="8" strokeLinecap="round" />
          
          {/* Left pan (Cake - My portion) */}
          <line x1="110" y1="87" x2="80" y2="140" stroke="#A855F7" strokeWidth="3" />
          <line x1="110" y1="87" x2="140" y2="140" stroke="#A855F7" strokeWidth="3" />
          <path d="M 70 140 Q 110 160 150 140 Z" fill="#E9D5FF" stroke="#9333EA" strokeWidth="3" />
          {/* Cake piece */}
          <path d="M 95 125 L 125 125 L 130 140 L 90 140 Z" fill="#F43F5E" />
          <circle cx="110" cy="120" r="5" fill="#EF4444" />

          {/* Right pan (Sibling's grab) */}
          <line x1="290" y1="103" x2="260" y2="160" stroke="#A855F7" strokeWidth="3" />
          <line x1="290" y1="103" x2="320" y2="160" stroke="#A855F7" strokeWidth="3" />
          <path d="M 250 160 Q 290 180 330 160 Z" fill="#E9D5FF" stroke="#9333EA" strokeWidth="3" />
          {/* Question mark & hearts */}
          <text x="282" y="152" fill="#7E22CE" fontSize="22" fontWeight="bold">?</text>
        </svg>
      </div>
    );
  }

  // Default / Privacy illustration
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-100 p-6 shadow-inner ${className}`}>
      <svg viewBox="0 0 400 280" className="w-full h-full max-h-64 drop-shadow-md">
        {/* Door frame */}
        <rect x="130" y="40" width="140" height="210" fill="#E2E8F0" stroke="#334155" strokeWidth="6" rx="6" />
        {/* Door slightly ajar */}
        <path d="M 136 46 L 240 30 L 240 244 L 136 244 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="4" />
        {/* Door handle */}
        <circle cx="225" cy="140" r="7" fill="#F59E0B" />
        <rect x="225" y="138" width="18" height="5" fill="#D97706" rx="2" />
        
        {/* "Knock Knock" sign / speech bubble */}
        <g transform="translate(250, 70)">
          <path d="M 10 20 Q 10 0 35 0 L 80 0 Q 105 0 105 20 L 105 35 Q 105 55 80 55 L 45 55 L 25 70 L 30 55 L 35 55 Q 10 55 10 35 Z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          <text x="28" y="32" fill="#854D0E" fontSize="15" fontWeight="bold">똑! 똑! 똑!</text>
        </g>
        
        {/* Do Not Disturb cute tag on door */}
        <g transform="translate(160, 80)">
          <rect x="0" y="0" width="45" height="60" rx="6" fill="#F43F5E" />
          <circle cx="22" cy="14" r="7" fill="#FFFFFF" />
          <rect x="8" y="30" width="30" height="4" fill="#FFFFFF" rx="2" />
          <rect x="12" y="40" width="22" height="4" fill="#FFFFFF" rx="2" />
        </g>
      </svg>
    </div>
  );
};
