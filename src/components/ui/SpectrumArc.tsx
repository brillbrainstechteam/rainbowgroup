const SPECTRUM = ["#6A5AC8", "#3E6FCB", "#2E9C8E", "#7DA24C", "#D9A441", "#C4604F"];

type Props = {
  className?: string;
  /** 0–1 overall strength. */
  opacity?: number;
  /** Stroke weight of each band. */
  weight?: number;
  /** Draw the bands in on mount. */
  animate?: boolean;
};

/**
 * Six concentric arcs — an actual rainbow, rendered as thin concentric
 * strokes rather than a filled gradient.
 *
 * This is the theme's signature device: it reads unmistakably as a rainbow
 * while staying architectural, so it strengthens the brand without tipping
 * the page into nursery territory. Purely decorative.
 */
export default function SpectrumArc({
  className = "",
  opacity = 0.45,
  weight = 2,
  animate = false,
}: Props) {
  const cx = 300;
  const cy = 300;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 300"
      preserveAspectRatio="xMidYMax meet"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
      fill="none"
    >
      {SPECTRUM.map((colour, i) => {
        const r = 120 + i * 26;
        // Semicircle from left of centre, over the top, to the right.
        const d = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
        const len = Math.PI * r;
        return (
          <path
            key={colour}
            d={d}
            stroke={colour}
            strokeWidth={weight}
            strokeLinecap="round"
            className={animate ? "animate-draw" : undefined}
            style={
              animate
                ? ({
                    "--dash": len,
                    animationDelay: `${0.5 + i * 0.12}s`,
                  } as React.CSSProperties)
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}
