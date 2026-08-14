"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Smile, Sparkles } from "lucide-react";
import { institutions } from "@/data/site";
import { homePhotos as photos, PHOTO_DISCLAIMER } from "@/data/images";
import { EduPattern } from "@/components/ui/EduPattern";
import { EASE_OUT } from "@/lib/motion";

const institutionIcons: Record<string, React.ElementType> = {
  "rainbow-international-school": GraduationCap,
  "rainbow-preschool-international": Smile,
};

const institutionPhotos: Record<string, string> = {
  "rainbow-international-school": photos.schoolCard,
  "rainbow-preschool-international": photos.preschoolCard,
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT },
  }),
};

export default function Institutions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="institutions" ref={ref} className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 text-[var(--color-coral)]">
        <EduPattern opacity={0.065} scale={320} id="instPattern" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={0}
              className="eyebrow text-[var(--color-coral)] mb-4 flex items-center gap-3"
            >
              <span className="spectrum-rule" />
              Our Institutions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={1}
              className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] leading-[1.1]"
            >
              Institutions under
              <br />
              the Rainbow umbrella
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={2}
            className="text-[15px] text-[var(--color-muted)] leading-relaxed max-w-sm lg:text-right"
          >
            Each institution is distinct in its focus, united by a shared standard
            of care, quality, and purpose.
          </motion.p>
        </div>

        {/* Institution cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {institutions.map((inst, i) => {
            const Icon = institutionIcons[inst.id] ?? GraduationCap;
            const isNavy = inst.color === "navy";
            const accent = isNavy ? "var(--color-navy)" : "var(--color-coral)";

            return (
              <motion.article
                key={inst.id}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                custom={3 + i}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[var(--color-line-light)] shadow-[0_2px_20px_-8px_rgba(40,48,74,0.15)] hover:shadow-[0_30px_70px_-25px_rgba(40,48,74,0.45)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Photo */}
                <Link href={inst.href} className="block relative h-64 overflow-hidden">
                  <Image
                    src={institutionPhotos[inst.id]}
                    alt={`${inst.name} — learning environment`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  {/* Tint + fade */}
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-45 transition-opacity duration-500 group-hover:opacity-30"
                    style={{ backgroundColor: accent }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  {/* Badge on photo */}
                  <span className="absolute top-5 left-5 inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm eyebrow text-[var(--color-ink)]">
                    {inst.badge}
                  </span>

                  {/* Icon chip */}
                  <span
                    className="absolute bottom-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: accent }}
                  >
                    <Icon size={21} />
                  </span>

                  {/* Age range */}
                  <span className="absolute bottom-5 left-5 text-white/90 text-xs font-medium">
                    {inst.ageRange}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-1.5">
                    {inst.name}
                  </h3>
                  <p className="text-sm italic mb-4" style={{ color: accent }}>
                    {inst.tagline}
                  </p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                    {inst.description}
                  </p>
                  <Link
                    href={inst.href}
                    className="inline-flex items-center gap-2 py-2 md:py-0 text-sm font-medium transition-colors"
                    style={{ color: accent }}
                  >
                    Explore {inst.shortName}
                    <span className="w-7 h-7 rounded-full border flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"
                      style={{ borderColor: accent }}>
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Coming soon teaser */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={5}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--color-navy-deep)] to-[var(--color-navy)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div
            className="absolute -right-16 -top-16 w-64 h-64 opacity-20 animate-blob"
            style={{ background: "radial-gradient(circle, #F54029 0%, transparent 70%)" }}
          />
          <div className="relative flex items-start gap-4">
            <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Sparkles size={18} className="text-white" />
            </span>
            <div>
              <span className="eyebrow text-white/50 block mb-1">Coming Soon</span>
              <p className="font-serif text-xl text-white mb-1">New Entities</p>
              <p className="text-sm text-white/55 max-w-lg leading-relaxed">
                Rainbow Group is actively expanding its educational portfolio. New
                institutions and verticals are in development.
              </p>
            </div>
          </div>
          <span className="relative px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/70 whitespace-nowrap">
            In Development
          </span>
        </motion.div>

        <p className="mt-5 text-[11px] text-[var(--color-muted)] text-center">
          {PHOTO_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
