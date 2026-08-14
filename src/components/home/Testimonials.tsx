"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, User } from "lucide-react";
import { testimonials } from "@/data/site";
import CardSlider from "@/components/ui/CardSlider";
import { EduPattern } from "@/components/ui/EduPattern";
import { EASE_OUT } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT },
  }),
};

const HUES = ["#6A5AC8", "#2E9C8E", "#D9A441"];

/**
 * Parent voices.
 *
 * Every quote here is an explicit placeholder from src/data/site.ts — no
 * testimonial has been written or implied on the client's behalf. The section
 * exists to show the layout; the client supplies the real words.
 */
export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-[var(--color-bg-warm)] overflow-hidden"
    >
      <div className="absolute inset-0">
        <EduPattern opacity={0.09} scale={320} id="testimonialPattern" spectrum />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0}
            className="eyebrow text-[var(--color-muted)] mb-4 flex items-center gap-3"
          >
            <span className="spectrum-rule" />
            Parent Voices
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={1}
            className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] leading-[1.15] mb-3"
          >
            What families say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={2}
            className="text-[15px] text-[var(--color-muted)] leading-relaxed"
          >
            Placeholder cards — real parent testimonials to be supplied by the
            client and dropped straight into this layout.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={3}
        >
          <CardSlider label="Parent testimonials" itemClass="w-[82%] sm:w-[48%] lg:w-[32%]">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="h-full flex flex-col rounded-3xl bg-white border border-[var(--color-line-light)] p-7 shadow-[0_2px_20px_-8px_rgba(40,48,74,0.15)]"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: HUES[i % HUES.length] + "1A" }}
                >
                  <Quote size={17} style={{ color: HUES[i % HUES.length] }} />
                </span>

                <p className="text-[15px] text-[var(--color-ink)] leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-[var(--color-line-light)]">
                  {/* Deliberately not a stock portrait: a real-looking face beside
                      a "[Parent Name]" placeholder reads as a fabricated
                      endorsement. Neutral until the client supplies both. */}
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: HUES[i % HUES.length] + "1A" }}
                  >
                    <User size={16} style={{ color: HUES[i % HUES.length] }} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--color-ink)] truncate">
                      {t.author}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] truncate">{t.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </CardSlider>
        </motion.div>
      </div>
    </section>
  );
}
