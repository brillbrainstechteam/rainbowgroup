/**
 * Education-themed decorative background art.
 *
 * `EduPattern`  — a seamless tiling layer of line-art school glyphs
 *                 (graduation cap, open book, pencil, sparkle, globe).
 * `EduAccent`   — one large single glyph for corner accents.
 *
 * Both are purely decorative: aria-hidden, pointer-events-none, and driven by
 * `currentColor` so they inherit whatever text colour the parent sets.
 */

type PatternProps = {
  className?: string;
  /** 0–1. Default is deliberately subtle but still visible. */
  opacity?: number;
  /** Tile size in px. Larger = sparser. */
  scale?: number;
  id?: string;
};

export function EduPattern({
  className = "",
  opacity = 0.06,
  scale = 260,
  id = "eduPattern",
}: PatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={id}
          width={scale}
          height={scale}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-8)"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Graduation cap */}
            <g transform="translate(18 20) scale(0.85)">
              <path d="M24 8 L4 17 L24 26 L44 17 Z" />
              <path d="M12 21 V31 C12 34.5 36 34.5 36 31 V21" />
              <path d="M44 17 V29" />
            </g>

            {/* Open book */}
            <g transform="translate(150 44) scale(0.72) rotate(9)">
              <path d="M8 10 H20 C22.5 10 24 12 24 14.5 V38 C24 35.5 22.5 34 20 34 H8 Z" />
              <path d="M40 10 H28 C25.5 10 24 12 24 14.5 V38 C24 35.5 25.5 34 28 34 H40 Z" />
            </g>

            {/* Pencil */}
            <g transform="translate(38 150) scale(0.78) rotate(-14)">
              <path d="M10 38 L13 27 L32 8 L40 16 L21 35 Z" />
              <path d="M30 10 L38 18" />
              <path d="M13 27 L21 35" />
            </g>

            {/* Sparkle */}
            <g transform="translate(178 158) scale(0.6)">
              <path d="M24 6 C25.5 18.5 29.5 22.5 42 24 C29.5 25.5 25.5 29.5 24 42 C22.5 29.5 18.5 25.5 6 24 C18.5 22.5 22.5 18.5 24 6 Z" />
            </g>

            {/* Globe */}
            <g transform="translate(112 112) scale(0.62)">
              <circle cx="24" cy="24" r="17" />
              <ellipse cx="24" cy="24" rx="7" ry="17" />
              <path d="M7 24 H41" />
            </g>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

type AccentProps = {
  glyph?: "cap" | "book" | "pencil" | "sparkle" | "globe";
  className?: string;
  opacity?: number;
};

const glyphs: Record<string, React.ReactNode> = {
  cap: (
    <>
      <path d="M24 8 L4 17 L24 26 L44 17 Z" />
      <path d="M12 21 V31 C12 34.5 36 34.5 36 31 V21" />
      <path d="M44 17 V29" />
    </>
  ),
  book: (
    <>
      <path d="M8 10 H20 C22.5 10 24 12 24 14.5 V38 C24 35.5 22.5 34 20 34 H8 Z" />
      <path d="M40 10 H28 C25.5 10 24 12 24 14.5 V38 C24 35.5 25.5 34 28 34 H40 Z" />
    </>
  ),
  pencil: (
    <>
      <path d="M10 38 L13 27 L32 8 L40 16 L21 35 Z" />
      <path d="M30 10 L38 18" />
    </>
  ),
  sparkle: (
    <path d="M24 6 C25.5 18.5 29.5 22.5 42 24 C29.5 25.5 25.5 29.5 24 42 C22.5 29.5 18.5 25.5 6 24 C18.5 22.5 22.5 18.5 24 6 Z" />
  ),
  globe: (
    <>
      <circle cx="24" cy="24" r="17" />
      <ellipse cx="24" cy="24" rx="7" ry="17" />
      <path d="M7 24 H41" />
    </>
  ),
};

export function EduAccent({ glyph = "cap", className = "", opacity = 0.1 }: AccentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {glyphs[glyph]}
    </svg>
  );
}
