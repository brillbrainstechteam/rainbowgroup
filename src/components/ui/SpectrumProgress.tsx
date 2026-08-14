"use client";

import { useEffect, useState } from "react";

/**
 * Fixed spectrum hairline across the top of every page.
 *
 * The faint track is always visible, so the rainbow reads as a permanent
 * brand signature rather than a decoration that only appears on scroll; the
 * saturated fill doubles as a reading-progress indicator.
 */
export default function SpectrumProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[60] h-[3px] pointer-events-none"
    >
      {/* Always-on track */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-spectrum)" }}
      />
      {/* Progress fill */}
      <div
        className="absolute inset-y-0 left-0 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: "var(--gradient-spectrum)" }}
      />
    </div>
  );
}
