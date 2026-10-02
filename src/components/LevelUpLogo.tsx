import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
}

export const LevelUpLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'xl',
  showText = false 
}) => {
  // Dimension presets - noticeably larger, bold, and clear
  const sizeMap = {
    sm: 'h-10 sm:h-12 w-auto',
    md: 'h-14 sm:h-16 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-20 sm:h-24 md:h-28 w-auto',
    '2xl': 'h-24 sm:h-32 md:h-36 w-auto',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 400 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_24px_rgba(245,158,11,0.25)]`}
        aria-label="Level Up Roofer Marketing Logo"
      >
        <defs>
          {/* Orange Gradient for Roof & Upward Arrow */}
          <linearGradient id="roofOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          {/* Electric Blue Gradient for Bottom Facet */}
          <linearGradient id="baseBlueGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          <linearGradient id="baseBlueGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* 3D Extrusion Shadow for LEVEL UP */}
          <linearGradient id="textShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#091322" />
          </linearGradient>

          {/* Shield Dark Navy Background */}
          <linearGradient id="shieldNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0E1E34" />
            <stop offset="50%" stopColor="#0A1526" />
            <stop offset="100%" stopColor="#070D18" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. TOP ROOF SHIELD & ARROW BACKGROUND */}
        <polygon
          points="200,8 250,38 250,90 200,60 150,90 150,38"
          fill="url(#shieldNavyGrad)"
          stroke="#1E293B"
          strokeWidth="3"
        />

        {/* Top Orange Roof Chevron */}
        <path
          d="M 152 42 L 200 14 L 248 42 L 236 54 L 200 32 L 164 54 Z"
          fill="url(#roofOrangeGrad)"
        />

        {/* Upward Pointing Arrow (Growth / Roof Peak) */}
        <path
          d="M 200 38 L 230 64 L 214 64 L 214 88 L 186 88 L 186 64 L 170 64 Z"
          fill="url(#roofOrangeGrad)"
        />

        {/* 2. LOWER BLUE CHEVRON / PRISM FOUNDATION */}
        <polygon
          points="200,248 135,188 200,214 265,188"
          fill="#070D18"
        />
        {/* Left blue facet */}
        <polygon
          points="200,246 142,192 200,214"
          fill="url(#baseBlueGradLeft)"
        />
        {/* Right blue facet */}
        <polygon
          points="200,246 258,192 200,214"
          fill="url(#baseBlueGradRight)"
        />

        {/* 3. MAIN SHIELD / ANGLED BANNER (Dark Navy with Wing Cuts) */}
        <path
          d="M 32 118 
             L 364 58 
             L 352 142 
             L 320 186 
             L 200 262 
             L 80 186 
             L 48 142 
             Z"
          fill="url(#shieldNavyGrad)"
          stroke="#1E293B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Shield Inner Dark Body Accent */}
        <polygon
          points="38,122 358,66 316,182 200,252 84,182"
          fill="#08101E"
        />

        {/* 4. "LEVEL UP!" 3D DISPLAY TYPOGRAPHY */}
        <g transform="skewY(-5.8) translate(10, 36)">
          {/* 3D Depth / Bevel Under-Layer */}
          <text
            x="195"
            y="136"
            textAnchor="middle"
            fontFamily="'Syne', 'Impact', 'Plus Jakarta Sans', sans-serif"
            fontSize="64"
            fontWeight="900"
            letterSpacing="-0.02em"
            fill="#050B14"
            stroke="#03070D"
            strokeWidth="10"
            strokeLinejoin="round"
          >
            LEVEL UP!
          </text>

          {/* 3D Intermediate Shadow Layer */}
          <text
            x="195"
            y="133"
            textAnchor="middle"
            fontFamily="'Syne', 'Impact', 'Plus Jakarta Sans', sans-serif"
            fontSize="64"
            fontWeight="900"
            letterSpacing="-0.02em"
            fill="url(#textShadowGrad)"
            stroke="#0C1A2E"
            strokeWidth="4"
            strokeLinejoin="round"
          >
            LEVEL UP!
          </text>

          {/* Front Crisp White Layer */}
          <text
            x="195"
            y="128"
            textAnchor="middle"
            fontFamily="'Syne', 'Impact', 'Plus Jakarta Sans', sans-serif"
            fontSize="64"
            fontWeight="900"
            letterSpacing="-0.02em"
            fill="#FFFFFF"
          >
            LEVEL UP!
          </text>
        </g>

        {/* 5. "ROOFER MARKETING" SUBTEXT (Orange Geometric Sans) */}
        <g transform="skewY(-5.8) translate(10, 36)">
          <text
            x="195"
            y="158"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', 'Syne', sans-serif"
            fontSize="14.5"
            fontWeight="900"
            letterSpacing="0.28em"
            fill="#FB923C"
            stroke="#08101E"
            strokeWidth="1.5"
            paintOrder="stroke fill"
          >
            ROOFER MARKETING
          </text>
        </g>
      </svg>

      {/* Optional Adjacent Text Brandmark if explicitly requested */}
      {showText && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
              LEVEL UP!
            </span>
          </div>
          <span className="font-sans text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-500 leading-tight mt-0.5">
            Roofer Marketing
          </span>
        </div>
      )}
    </div>
  );
};
