import { motion, useReducedMotion } from "motion/react";

type Pin = {
  name: string;
  color: string;
  path: string;
  offset: [number, number];
  avatar: string;
};

const STATUS_FILL: Record<string, string> = {
  green: "var(--color-success)",
  amber: "var(--color-warn)",
  red: "var(--color-idle)",
  grey: "var(--color-offline)",
  blue: "var(--color-brand)",
};

/** Reusable SVG city map with streets, blocks and moving salesperson pins. */
export function CityMap({
  pins,
  className = "",
  compact = false,
}: {
  pins: Pin[];
  className?: string;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const shown = compact ? pins.slice(0, 3) : pins;

  return (
    <svg
      viewBox="0 0 400 260"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Live map of the field sales team"
    >
      <defs>
        {shown.map((pin) => (
          <clipPath key={`clip-${pin.name}`} id={`clip-${pin.name}`}>
            <circle cx="0" cy="0" r="10" />
          </clipPath>
        ))}
      </defs>
      
      <rect width="400" height="260" rx="14" fill="var(--color-brand-soft)" />
      {/* blocks */}
      {[
        [18, 18, 92, 62],
        [130, 18, 110, 48],
        [262, 18, 120, 74],
        [18, 100, 70, 60],
        [110, 86, 96, 70],
        [228, 110, 76, 52],
        [322, 112, 60, 50],
        [18, 180, 110, 62],
        [150, 176, 110, 66],
        [284, 182, 98, 60],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          rx="8"
          fill="white"
          stroke="var(--color-brand-tint)"
        />
      ))}
      {/* roads */}
      <g stroke="var(--color-brand-tint)" strokeWidth="6" strokeLinecap="round">
        <path d="M0 92 H400" />
        <path d="M0 170 H400" />
        <path d="M120 0 V260" />
        <path d="M272 0 V260" />
      </g>
      {/* route trails */}
      <path
        d="M60 210 C120 190 150 120 210 100 S330 70 360 50"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeDasharray="7 7"
        opacity="0.55"
      />
      <path
        d="M40 60 C110 70 140 150 230 160 S330 200 372 220"
        fill="none"
        stroke="var(--color-success)"
        strokeWidth="2.5"
        strokeDasharray="7 7"
        opacity="0.5"
      />

      {shown.map((pin, i) => (
        <motion.g
          key={pin.name}
          initial={false}
          animate={{ offsetDistance: reduce ? "20%" : ["0%", "100%"] }}
          transition={{
            duration: 16 + i * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{ offsetPath: `path("${pin.path}")`, offsetRotate: "0deg" }}
        >
          <g transform={`translate(${pin.offset[0]} ${pin.offset[1]})`}>
            {/* Status Halo */}
            <circle r="15" fill={STATUS_FILL[pin.color]} opacity="0.25" />
            {/* Status Border */}
            <circle r="11" fill={STATUS_FILL[pin.color]} />
            {/* Avatar */}
            <image 
              href={pin.avatar} 
              x="-10" 
              y="-10" 
              height="20" 
              width="20" 
              clipPath={`url(#clip-${pin.name})`} 
              preserveAspectRatio="xMidYMid slice" 
            />
            {/* Name Tag */}
            <g transform="translate(16 -9)">
              <rect
                width={pin.name.length * 6.4 + 14}
                height="18"
                rx="9"
                fill="white"
                stroke="var(--color-brand-tint)"
              />
              <text
                x="7"
                y="12.5"
                fontSize="10"
                fontWeight="600"
                fill="var(--color-navy)"
              >
                {pin.name}
              </text>
            </g>
          </g>
        </motion.g>
      ))}
    </svg>
  );
}

export const DEFAULT_PINS: Pin[] = [
  {
    name: "Rajesh",
    color: "green",
    path: "M60 210 C120 190 150 120 210 100 S330 70 360 50",
    offset: [0, 0],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Priya",
    color: "amber",
    path: "M40 60 C110 70 140 150 230 160 S330 200 372 220",
    offset: [0, 0],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Amit",
    color: "green",
    path: "M300 40 C280 90 250 120 200 150 S110 200 60 240",
    offset: [0, 0],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Neha",
    color: "amber",
    path: "M20 140 C90 130 160 150 220 120 S320 90 380 110",
    offset: [0, 0],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Karan",
    color: "grey",
    path: "M150 240 C180 190 200 170 260 150 S340 140 380 160",
    offset: [0, 0],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
  },
];
