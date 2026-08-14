/**
 * A family of decorative spectrum devices.
 *
 * The point is variety: SpectrumArc owns the heroes, and each of these gives a
 * different section its own rainbow moment, so the theme reads as a considered
 * system rather than one motif pasted everywhere.
 *
 * All are aria-hidden, pointer-events-none, and absolutely positioned — the
 * caller supplies placement via className. Animations sit behind the global
 * prefers-reduced-motion guard in globals.css.
 */

export const SPECTRUM = [
  "#6A5AC8",
  "#3E6FCB",
  "#2E9C8E",
  "#7DA24C",
  "#D9A441",
  "#C4604F",
];

/** Builds a smooth sine path across `width`. */
function sinePath(width: number, y: number, amp: number, periods: number) {
  const seg = width / periods;
  let d = `M0 ${y}`;
  for (let i = 0; i < periods; i++) {
    const x = i * seg;
    d += ` C ${x + seg * 0.25} ${y - amp}, ${x + seg * 0.75} ${y + amp}, ${x + seg} ${y}`;
  }
  return d;
}

/**
 * Stacked spectrum waves — a flowing ribbon of six lines.
 * Reads as a rainbow "signal" rather than an arc. Good under light sections.
 */
export function SpectrumWave({
  className = "",
  opacity = 0.5,
  weight = 2,
  amp = 26,
  animate = true,
}: {
  className?: string;
  opacity?: number;
  weight?: number;
  amp?: number;
  animate?: boolean;
}) {
  const W = 1200;
  const H = 200;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* 3x width strip drifting by exactly 1/3 keeps the loop seamless */}
      <svg
        viewBox={`0 0 ${W * 3} ${H}`}
        preserveAspectRatio="none"
        className={`w-[300%] h-full ${animate ? "animate-drift" : ""}`}
        fill="none"
      >
        {SPECTRUM.map((c, i) => {
          const y = H / 2 - (SPECTRUM.length / 2) * 9 + i * 9;
          return (
            <path
              key={c}
              d={sinePath(W * 3, y, amp, 6)}
              stroke={c}
              strokeWidth={weight}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Prism beams — angled shafts of coloured light.
 * Suits white/bright sections where a pattern would feel busy.
 */
export function SpectrumBeams({
  className = "",
  opacity = 0.4,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {SPECTRUM.map((c, i) => (
        <span
          key={c}
          className="absolute top-[-30%] h-[160%] blur-2xl"
          style={{
            left: `${4 + i * 15}%`,
            width: "7%",
            background: `linear-gradient(to bottom, transparent, ${c}, transparent)`,
            transform: "skewX(-14deg)",
            animation: `beamSweep ${9 + i}s ease-in-out ${i * 0.6}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Rainbow dot field — a dotted mesh whose dots take spectrum hues.
 *
 * Implemented as one gradient masked by a dot pattern, so it is two elements
 * rather than a few hundred circles.
 */
export function SpectrumDotField({
  className = "",
  opacity = 0.35,
  size = 22,
}: {
  className?: string;
  opacity?: number;
  size?: number;
}) {
  const mask = `radial-gradient(circle at center, #000 1.4px, transparent 1.6px)`;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        opacity,
        background: "var(--gradient-spectrum)",
        maskImage: mask,
        WebkitMaskImage: mask,
        maskSize: `${size}px ${size}px`,
        WebkitMaskSize: `${size}px ${size}px`,
      }}
    />
  );
}

/**
 * Soft blended colour orbs — a mesh-gradient field.
 * Works on both light and dark; the most subtle of the set.
 */
export function SpectrumOrbs({
  className = "",
  opacity = 0.4,
  count = 5,
}: {
  className?: string;
  opacity?: number;
  count?: number;
}) {
  const spots = [
    { top: "-10%", left: "2%", size: "38%" },
    { top: "30%", left: "22%", size: "32%" },
    { top: "-15%", left: "48%", size: "42%" },
    { top: "35%", left: "68%", size: "34%" },
    { top: "-5%", left: "84%", size: "36%" },
    { top: "45%", left: "40%", size: "30%" },
  ];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {SPECTRUM.slice(0, count).map((c, i) => {
        const s = spots[i % spots.length];
        return (
          <span
            key={c}
            className="absolute rounded-full blur-3xl"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              aspectRatio: "1",
              background: `radial-gradient(circle, ${c} 0%, transparent 68%)`,
              animation: `breathe ${12 + i * 2}s ease-in-out ${i * 1.3}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
