"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, CalendarDays, MapPin } from "lucide-react";
import { stats } from "@/data/site";

const icons = [Users, Briefcase, CalendarDays, MapPin];

// One spectrum hue per stat, so the band itself reads as a rainbow.
const HUES = ["#7C6BD8", "#4B7FD8", "#35AEA0", "#E0AB4A"];

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Splits "50,000+" into { num: 50000, suffix: "+" }. Returns null for non-numeric values. */
function parseStat(value: string) {
  const match = value.match(/^([\d,]+)(\D*)$/);
  if (!match) return null;
  return { num: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

function CountUp({ value, start }: { value: string; start: boolean }) {
  const parsed = parseStat(value);
  const [display, setDisplay] = useState(parsed ? "0" : value);

  useEffect(() => {
    if (!parsed || !start) return;
    const duration = 1600;
    const t0 = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(Math.round(parsed.num * eased).toLocaleString("en-IN"));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, value]);

  if (!parsed) return <>{value}</>;
  return <>{display}{parsed.suffix}</>;
}

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="relative py-14 overflow-hidden bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy)] to-[var(--color-navy-deep)]"
    >
      {/* Spectrum edge marks the transition out of the hero */}
      <div className="absolute top-0 inset-x-0 spectrum-edge" />

      {/* Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="statDots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#statDots)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/12">
          {stats.map((stat, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <div
                key={stat.label}
                className={`group flex flex-col items-center lg:items-start lg:px-10 first:lg:pl-0 last:lg:pr-0 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: HUES[i % HUES.length] }}
                >
                  <Icon size={17} className="text-white" />
                </span>
                <span className="font-serif text-4xl md:text-5xl text-white tabular-nums">
                  <CountUp value={stat.value} start={inView} />
                </span>
                <span className="mt-1.5 eyebrow text-white/45 text-center lg:text-left">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
