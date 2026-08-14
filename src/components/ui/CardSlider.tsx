"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  /** Announced to screen readers, e.g. "Campus life photographs". */
  label: string;
  /** Tailwind widths applied to every slide. */
  itemClass?: string;
  /** Tone of the controls — dark sections need the light variant. */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Horizontal card slider built on CSS scroll-snap.
 *
 * Scroll-snap does the heavy lifting: phones get native momentum swiping for
 * free, and the arrows/dots are progressive enhancement on top. No library,
 * and it degrades to a plain scrollable row if JS never runs.
 */
export default function CardSlider({
  children,
  label,
  itemClass = "w-[78%] sm:w-[46%] lg:w-[31%]",
  variant = "light",
  className = "",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // At wide viewports every slide can fit, leaving nothing to scroll — the
  // controls would then be decorative, so they are hidden entirely.
  const [scrollable, setScrollable] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 4);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    const first = el.firstElementChild as HTMLElement | null;
    if (first) {
      const step = first.getBoundingClientRect().width + 16; // width + gap
      setActive(Math.round(el.scrollLeft / step));
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const by = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: by * dir, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const by = first ? first.getBoundingClientRect().width + 16 : 0;
    el.scrollTo({ left: by * i, behavior: "smooth" });
  };

  const dark = variant === "dark";
  const arrowBase =
    "hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none";
  const arrowTone = dark
    ? "bg-white/15 backdrop-blur-md text-white border border-white/25 hover:bg-white/25"
    : "bg-white text-[var(--color-ink)] border border-[var(--color-line)] shadow-lg hover:border-[var(--color-navy)]";

  return (
    <div className={`relative ${className}`} role="region" aria-label={label}>
      <button
        type="button"
        onClick={() => step(-1)}
        disabled={atStart || !scrollable}
        aria-label="Previous"
        className={`${arrowBase} ${arrowTone} -left-3 lg:-left-5`}
      >
        <ChevronLeft size={18} />
      </button>

      <div ref={trackRef} className="slider-track px-6 lg:px-8 -mx-6 lg:-mx-8">
        {slides.map((slide, i) => (
          <div key={i} className={`slider-item ${itemClass}`}>
            {slide}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => step(1)}
        disabled={atEnd || !scrollable}
        aria-label="Next"
        className={`${arrowBase} ${arrowTone} -right-3 lg:-right-5`}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots — the only progress cue on touch devices */}
      <div
        className={`flex justify-center gap-2 mt-6 transition-opacity ${
          scrollable ? "opacity-100" : "hidden"
        }`}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 26 : 10,
              background:
                i === active
                  ? "var(--gradient-spectrum)"
                  : dark
                    ? "rgba(255,255,255,0.25)"
                    : "var(--color-line)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
