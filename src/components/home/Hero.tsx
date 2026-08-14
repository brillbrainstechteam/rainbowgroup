"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { homePhotos as photos } from "@/data/images";
import { EASE_OUT } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: EASE_OUT },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-navy-deep)]"
    >
      {/* ── Background layers ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d3067] via-[#222f5c] to-[#141f42]" />

        {/* Morphing coral glow */}
        <div
          className="absolute -top-40 -right-32 w-[620px] h-[620px] opacity-[0.22] animate-blob"
          style={{ background: "radial-gradient(circle, #F54029 0%, transparent 68%)" }}
        />
        {/* Cool accent glow */}
        <div
          className="absolute -bottom-40 -left-32 w-[560px] h-[560px] opacity-[0.16] animate-blob"
          style={{
            background: "radial-gradient(circle, #9DAFD4 0%, transparent 70%)",
            animationDelay: "-7s",
          }}
        />

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.045]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* Bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-navy)]/60 to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24 lg:py-32">
        <div className="grid lg:grid-cols-[1.02fr_1fr] gap-14 lg:gap-16 items-center">
          {/* ── Left: copy ── */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm eyebrow text-white/70 mb-7"
            >
              <MapPin size={11} />
              Thane, Maharashtra · Holding Company
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl text-white leading-[1.03] mb-6"
            >
              Building
              <br />
              institutions.
              <br />
              <span className="text-spectrum">Nurturing</span> generations.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-base lg:text-lg text-white/60 max-w-xl leading-relaxed mb-9"
            >
              Rainbow Group of Companies is the parent organisation behind premier
              educational institutions shaping the next generation across Thane
              and beyond.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap gap-3.5 mb-12"
            >
              <Link
                href="/#institutions"
                className="shimmer-parent group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-coral)] text-white text-sm font-medium hover:bg-[var(--color-coral-light)] transition-all duration-200 shadow-[0_10px_35px_-10px_rgba(245,64,41,0.7)]"
              >
                Explore Our Schools
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Small trust row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {photos.avatars.map((p, i) => (
                  <span
                    key={i}
                    className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/25"
                  >
                    <Image src={p} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                ))}
              </div>
              <p className="text-xs text-white/45 leading-snug max-w-[15rem]">
                Two decades of institution-building across Thane
              </p>
            </motion.div>
          </div>

          {/* ── Right: photo composition ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
            className="relative h-[330px] sm:h-[500px] lg:h-[560px]"
          >
            {/* Rotating dashed orbit */}
            <svg
              className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] animate-spin-slow opacity-25"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle
                cx="200" cy="200" r="185"
                stroke="white" strokeWidth="1" strokeDasharray="3 12"
              />
            </svg>

            {/* Main photo */}
            <div className="absolute top-0 right-0 w-[78%] h-[74%] rounded-[2rem] overflow-hidden shadow-[0_35px_80px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/15">
              <Image
                src={photos.heroPrimary}
                alt="Students engaged in a classroom lesson"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/55 via-transparent to-transparent" />
            </div>

            {/* Secondary photo */}
            <div className="absolute bottom-0 left-0 w-[56%] h-[46%] rounded-[1.75rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] ring-4 ring-[var(--color-navy-deep)] animate-float-slow">
              <Image
                src={photos.heroSecondary}
                alt="Young children exploring a creative activity"
                fill
                sizes="(max-width: 1024px) 45vw, 28vw"
                className="object-cover"
              />
            </div>

            {/* Floating stat card — top left */}
            <div className="absolute top-[14%] left-0 lg:-left-6 glass rounded-2xl px-5 py-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[var(--color-coral)] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={17} className="text-white" />
                </span>
                <div>
                  <p className="font-serif text-xl text-white leading-none">50,000+</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest mt-1">
                    Learners
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div
              className="absolute bottom-[16%] right-0 lg:-right-4 glass rounded-2xl px-5 py-4 shadow-2xl animate-float"
              style={{ animationDelay: "-3s" }}
            >
              <div className="flex items-center gap-3">
                <span className="relative w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={16} className="text-white" />
                  <span className="absolute inset-0 rounded-xl border border-white/40 animate-pulse-ring" />
                </span>
                <div>
                  <p className="font-serif text-xl text-white leading-none">20+</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest mt-1">
                    Years
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-9 bg-gradient-to-b from-white/35 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
