"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { homePhotos, PHOTO_DISCLAIMER } from "@/data/images";
import CardSlider from "@/components/ui/CardSlider";
import { SpectrumDotField } from "@/components/ui/SpectrumDecor";
import { EASE_OUT } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT },
  }),
};

/** Caption + hue per slide — descriptive only, nothing claimed about facilities. */
const slides = [
  { caption: "Libraries and reading rooms", hue: "#6A5AC8" },
  { caption: "Classrooms built for focus", hue: "#3E6FCB" },
  { caption: "Milestones worth celebrating", hue: "#2E9C8E" },
  { caption: "A culture of reading", hue: "#7DA24C" },
  { caption: "Hands-on science", hue: "#D9A441" },
  { caption: "Curiosity in practice", hue: "#C4604F" },
];

export default function CampusLife() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-[var(--color-bg)] overflow-hidden">
      {/* Dot-field device: a mesh of rainbow dots behind the slider */}
      <SpectrumDotField opacity={0.3} size={22} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div className="max-w-lg">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={0}
              className="eyebrow text-[var(--color-muted)] mb-4 flex items-center gap-3"
            >
              <span className="spectrum-rule" />
              Campus Life
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={1}
              className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] leading-[1.15]"
            >
              A day across
              <br />
              our campuses
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={2}
            className="text-[15px] text-[var(--color-muted)] leading-relaxed max-w-sm sm:text-right"
          >
            Swipe through the spaces and moments that shape everyday learning at
            Rainbow.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={3}
        >
          <CardSlider label="Campus life photographs" itemClass="w-[76%] sm:w-[44%] lg:w-[30%]">
            {homePhotos.campusSlider.map((src, i) => (
              <figure
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[var(--color-line-light)] shadow-[0_2px_20px_-8px_rgba(40,48,74,0.15)] hover:shadow-[0_28px_60px_-25px_rgba(40,48,74,0.45)] transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={slides[i].caption}
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 44vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <figcaption className="flex items-center gap-3 p-5">
                  <span
                    className="w-1.5 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: slides[i].hue }}
                  />
                  <span className="text-sm font-medium text-[var(--color-ink)]">
                    {slides[i].caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </CardSlider>
        </motion.div>

        <p className="mt-5 text-[11px] text-[var(--color-muted)] text-center">
          {PHOTO_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
