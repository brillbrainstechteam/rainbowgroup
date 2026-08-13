"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { pillars } from "@/data/site";
import { photos } from "@/data/images";
import { EduPattern, EduAccent } from "@/components/ui/EduPattern";
import { EASE_OUT } from "@/lib/motion";
import { BookOpen, Sprout, Heart, Compass } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { BookOpen, Sprout, Heart, Compass };

// Watermark glyph behind each pillar card, matched to its theme.
const glyphMap: Record<string, "book" | "pencil" | "sparkle" | "globe" | "cap"> = {
  BookOpen: "book",
  Sprout: "pencil",
  Heart: "sparkle",
  Compass: "globe",
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-20 bg-[var(--color-bg-warm)] overflow-hidden">
      <div className="absolute inset-0 text-[var(--color-navy)]">
        <EduPattern opacity={0.075} scale={300} id="aboutPattern" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Intro: collage + copy ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12">
          {/* Collage */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0}
            className="relative h-[360px] sm:h-[420px] order-2 lg:order-1"
          >
            {/* Soft blob behind */}
            <div
              className="absolute -top-8 -left-8 w-64 h-64 opacity-30 animate-blob"
              style={{ background: "radial-gradient(circle, #D4816A 0%, transparent 70%)" }}
            />

            <div className="absolute top-0 left-0 w-[68%] h-[80%] rounded-[1.75rem] overflow-hidden shadow-[0_25px_60px_-20px_rgba(40,48,74,0.4)]">
              <Image
                src={photos.aboutPrimary}
                alt="An educator guiding students through a lesson"
                fill
                sizes="(max-width: 1024px) 60vw, 32vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-[54%] h-[56%] rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-20px_rgba(40,48,74,0.45)] ring-8 ring-[var(--color-bg-warm)] animate-float-slow">
              <Image
                src={photos.aboutSecondary}
                alt="Students collaborating in a bright classroom"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>

            {/* Floating credential card */}
            <div className="absolute bottom-[8%] left-0 glass-light rounded-2xl px-5 py-3.5 shadow-xl animate-float">
              <p className="font-serif text-2xl text-[var(--color-navy-deep)] leading-none">2</p>
              <p className="eyebrow text-[var(--color-muted)] mt-1">Decades of<br />institution-building</p>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={1}
              className="eyebrow text-[var(--color-coral)] mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[var(--color-coral)]" />
              Who We Are
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={2}
              className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] leading-[1.1] mb-6"
            >
              The group behind
              <br />
              the Rainbow
            </motion.h2>

            <div className="space-y-4">
              {[
                "Rainbow Group of Companies serves as the parent holding entity for a growing portfolio of educational brands in India. Based in Thane (W), we bring together the vision, governance, and operational expertise that enables each institution under our umbrella to deliver world-class learning experiences.",
                "Our philosophy is simple: every child deserves an environment where curiosity is celebrated, confidence is cultivated, and character is built alongside academics. This belief informs every decision — from curriculum design to campus culture — across all our institutions.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  custom={3 + i}
                  className="text-[15px] text-[var(--color-muted)] leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                custom={5 + i}
                className="group relative p-6 rounded-2xl bg-white border border-[var(--color-line-light)] hover:border-transparent hover:shadow-[0_20px_45px_-18px_rgba(40,48,74,0.28)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Accent bar that grows on hover */}
                <span className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-coral-light)] transition-all duration-500" />

                {/* Watermark glyph */}
                <EduAccent
                  glyph={glyphMap[pillar.icon] ?? "sparkle"}
                  className="w-28 h-28 -bottom-4 -right-4 text-[var(--color-navy)] group-hover:text-[var(--color-coral)] transition-colors duration-500"
                  opacity={0.07}
                />

                <div className="relative flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-navy-pale)] flex items-center justify-center group-hover:bg-[var(--color-navy)] transition-colors duration-300">
                    <Icon size={19} className="text-[var(--color-navy)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-serif text-2xl text-[var(--color-line)] group-hover:text-[var(--color-coral)]/30 transition-colors duration-300">
                    0{i + 1}
                  </span>
                </div>

                <div className="relative">
                  <p className="eyebrow text-[var(--color-muted)] mb-1.5">{pillar.subtitle}</p>
                  <h3 className="font-serif text-lg text-[var(--color-ink)] mb-2">{pillar.title}</h3>
                  <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
