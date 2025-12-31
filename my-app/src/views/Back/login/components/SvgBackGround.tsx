export default function SvgBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: -1 }}
    >
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f5f1ed", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#ede4db", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#e8ddd0", stopOpacity: 1 }}
          />
        </linearGradient>

        <radialGradient id="accent-gradient-1" cx="30%" cy="30%">
          <stop
            offset="0%"
            style={{ stopColor: "rgba(130, 65, 28, 0.15)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(130, 65, 28, 0)", stopOpacity: 0 }}
          />
        </radialGradient>

        <radialGradient id="accent-gradient-2" cx="70%" cy="80%">
          <stop
            offset="0%"
            style={{ stopColor: "rgba(130, 65, 28, 0.1)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(130, 65, 28, 0)", stopOpacity: 0 }}
          />
        </radialGradient>

        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="url(#bg-gradient)" />
      <rect width="100%" height="100%" fill="url(#accent-gradient-1)" />
      <rect width="100%" height="100%" fill="url(#accent-gradient-2)" />

      {/* Decorative circles */}
      <circle cx="15%" cy="20%" r="120" fill="rgba(130, 65, 28, 0.05)" />
      <circle cx="85%" cy="75%" r="150" fill="rgba(130, 65, 28, 0.06)" />
      <circle cx="90%" cy="15%" r="80" fill="rgba(130, 65, 28, 0.04)" />

      {/* Subtle noise texture */}
      <rect width="100%" height="100%" filter="url(#noise)" opacity="0.02" />
    </svg>
  );
}
