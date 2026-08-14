"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { EduPattern, EduAccent } from "@/components/ui/EduPattern";
import { SpectrumDotField, SpectrumWave } from "@/components/ui/SpectrumDecor";
import { EASE_OUT } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT },
  }),
};

// Keyless Google Maps embed — resolves the office address by search query.
// Replace with the client's exact place ID / coordinates once confirmed.
const mapQuery = encodeURIComponent(
  "Chestnut Plaza, Khewra Circle Road, Manpada, Thane West, Maharashtra 400610"
);
const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Prototype: shows success state. Wire to real backend for production.
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-[var(--color-line)] text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-navy)] focus:ring-4 focus:ring-[var(--color-navy)]/10 transition-all bg-white";
  const labelClass = "block text-xs font-medium text-[var(--color-ink)] mb-1.5";

  const info = [
    {
      icon: MapPin,
      label: "Address",
      body: (
        <p className="text-sm text-[var(--color-ink)] leading-relaxed">
          {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.line3}
        </p>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      body: (
        <>
          <a
            href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
            className="block py-1.5 md:py-0 text-sm text-[var(--color-ink)] hover:text-[var(--color-navy)] transition-colors"
          >
            {siteConfig.phone.admissions}
          </a>
          <a
            href={`tel:${siteConfig.phone.jobs.replace(/\s/g, "")}`}
            className="block py-1.5 md:py-0 text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors"
          >
            {siteConfig.phone.jobs}
          </a>
        </>
      ),
    },
    {
      icon: Clock,
      label: "Office Hours",
      body: (
        <p className="text-sm text-[var(--color-ink)] leading-snug">
          Monday – Saturday
          <br />
          9:00 am – 6:00 pm
        </p>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 md:py-20 bg-[var(--color-bg-warm)] overflow-hidden"
    >
      <div className="absolute inset-0 text-[var(--color-navy)]">
        <EduPattern opacity={0.07} scale={300} id="contactPattern" />
      </div>
      {/* Finer dot field than Campus Life, so the two never read as identical */}
      <SpectrumDotField opacity={0.22} size={30} />
      <SpectrumWave
        className="bottom-0 inset-x-0 h-24 w-full"
        opacity={0.3}
        weight={2}
        amp={16}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Header row — heading left, quick actions right ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-10">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={0}
              className="eyebrow text-[var(--color-coral)] mb-4 flex items-center gap-3"
            >
              <span className="spectrum-rule" />
              Get in Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={1}
              className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] leading-[1.1] mb-4"
            >
              Visit our head office
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={2}
              className="text-[15px] text-[var(--color-muted)] leading-relaxed max-w-md"
            >
              Drop by, call our admissions team, or send an enquiry — whichever
              suits you. We typically respond within one working day.
            </motion.p>
          </div>

          {/* Quick action chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={3}
            className="flex flex-wrap gap-3 lg:justify-end"
          >
            <a
              href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-deep)] transition-colors shadow-[0_10px_30px_-12px_rgba(59,77,130,0.8)]"
            >
              <Phone size={14} />
              Call Admissions
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[var(--color-line)] text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-navy)] transition-colors"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[var(--color-line)] text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-navy)] transition-colors"
            >
              <MapPin size={14} className="text-[var(--color-coral)]" />
              Directions
            </a>
          </motion.div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left: info + map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={4}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-3 gap-3">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="relative p-4 rounded-2xl bg-white border border-[var(--color-line-light)] overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[var(--color-navy-pale)] flex items-center justify-center mb-3">
                      <Icon size={15} className="text-[var(--color-navy)]" />
                    </span>
                    <p className="eyebrow text-[var(--color-muted)] mb-1.5">{item.label}</p>
                    {item.body}
                  </div>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-line)] shadow-[0_15px_45px_-20px_rgba(40,48,74,0.45)]">
              <iframe
                title="Rainbow Group of Companies — head office location"
                src={mapEmbed}
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[30%] contrast-[1.05]"
                style={{ border: 0 }}
              />
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-[var(--color-navy)] shadow-lg hover:bg-white transition-colors"
              >
                Open in Google Maps
                <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-[11px] text-[var(--color-muted)]">
              Map pin is approximate — client to confirm exact coordinates for each branch.
            </p>
          </motion.div>

          {/* Right: enquiry form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={5}
          >
            {submitted ? (
              <div className="relative flex flex-col items-center justify-center gap-4 text-center p-12 rounded-3xl bg-white border border-[var(--color-line-light)] shadow-[0_20px_50px_-25px_rgba(40,48,74,0.3)] overflow-hidden">
                <EduAccent glyph="sparkle" className="w-40 h-40 -top-8 -right-8 text-[var(--color-navy)]" opacity={0.07} />
                <div className="relative w-16 h-16 rounded-full bg-[var(--color-navy-pale)] flex items-center justify-center">
                  <CheckCircle size={30} className="text-[var(--color-navy)]" />
                </div>
                <h3 className="relative font-serif text-2xl text-[var(--color-ink)]">Thank you!</h3>
                <p className="relative text-sm text-[var(--color-muted)] max-w-xs">
                  We&apos;ve received your enquiry and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative p-7 sm:p-8 rounded-3xl bg-white border border-[var(--color-line-light)] shadow-[0_20px_50px_-28px_rgba(40,48,74,0.4)] space-y-4 overflow-hidden"
              >
                <EduAccent glyph="cap" className="w-36 h-36 -top-6 -right-6 text-[var(--color-navy)]" opacity={0.06} />

                <div className="relative mb-1">
                  <h3 className="font-serif text-xl text-[var(--color-ink)]">Admissions Enquiry</h3>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    We typically respond within one working day.
                  </p>
                </div>

                <div className="relative grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Parent / Guardian Name</label>
                    <input type="text" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                </div>

                <div className="relative">
                  <label className={labelClass}>Email Address</label>
                  <input type="email" placeholder="you@example.com" className={inputClass} />
                </div>

                <div className="relative grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Child&apos;s Age</label>
                    <input type="number" min="1" max="18" placeholder="e.g. 5" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Institution of Interest</label>
                    <select className={inputClass}>
                      <option value="">Select…</option>
                      <option>Rainbow International School</option>
                      <option>Rainbow Preschool International</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className={labelClass}>Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions or requirements…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="shimmer-parent relative w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-deep)] transition-colors"
                >
                  <Send size={14} />
                  Send Enquiry
                </button>

                <p className="relative text-[11px] text-[var(--color-muted)] text-center">
                  Your details are used solely for admissions enquiries.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
