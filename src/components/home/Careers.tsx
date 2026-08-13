"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { careers } from "@/data/site";
import { photos } from "@/data/images";
import { EduPattern } from "@/components/ui/EduPattern";
import { EASE_OUT } from "@/lib/motion";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const values = [
  { icon: Sparkles, label: "Purposeful work", desc: "Every role directly impacts young lives" },
  { icon: TrendingUp, label: "Growth culture", desc: "Continuous professional development" },
  { icon: Users, label: "Collaborative team", desc: "Supportive educators and administrators" },
  { icon: Award, label: "Competitive rewards", desc: "Compensation reflecting your contribution" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: EASE_OUT },
  }),
};

export default function Careers() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="careers"
      ref={ref}
      className="relative py-16 md:py-20 bg-[var(--color-navy-deep)] overflow-hidden"
    >
      {/* Background photograph, heavily tinted */}
      <div className="absolute inset-0">
        <Image
          src={photos.careers}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy-deep)]/95 to-[var(--color-navy-deep)]/75" />
      </div>
      <div className="absolute inset-0 text-white">
        <EduPattern opacity={0.06} scale={280} id="careersHomePattern" />
      </div>

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.14] animate-blob pointer-events-none"
        style={{ background: "radial-gradient(circle, #F54029 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={0}
              className="eyebrow text-[var(--color-coral-light)] mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[var(--color-coral-light)]" />
              Work With Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={1}
              className="font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-5"
            >
              Shape the future
              <br />
              with Rainbow
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={2}
              className="text-[15px] text-white/55 leading-relaxed mb-8 max-w-lg"
            >
              {careers.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={3}
              className="flex flex-wrap gap-3.5"
            >
              <Link
                href="/careers"
                className="shimmer-parent group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-coral)] text-white text-sm font-medium hover:bg-[var(--color-coral-light)] transition-colors shadow-[0_10px_35px_-12px_rgba(245,64,41,0.75)]"
              >
                View Open Positions
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={careers.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — value cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  custom={4 + i}
                  className="group glass rounded-2xl p-5 hover:bg-white/[0.14] transition-colors duration-300"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-coral)] transition-colors duration-300">
                    <Icon size={17} className="text-white" />
                  </span>
                  <p className="text-sm font-medium text-white mb-1.5">{item.label}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
