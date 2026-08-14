import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, Phone, Briefcase, ArrowRight,
  Sparkles, TrendingUp, Users, Award, Heart, Shield,
} from "lucide-react";
import { siteConfig, careers } from "@/data/site";
import { careersPhotos, PHOTO_DISCLAIMER } from "@/data/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CardSlider from "@/components/ui/CardSlider";
import SpectrumArc from "@/components/ui/SpectrumArc";
import { EduPattern, EduAccent } from "@/components/ui/EduPattern";
import InterestForm from "./InterestForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Rainbow Group of Companies",
  description:
    "Join Rainbow Group of Companies — a passionate team of educators, administrators, and support professionals shaping the next generation across Thane.",
};

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const values = [
  { icon: Sparkles, label: "Purposeful work", desc: "Every role directly impacts young lives and the communities we serve." },
  { icon: TrendingUp, label: "Growth culture", desc: "Continuous professional development, mentoring, and learning opportunities." },
  { icon: Users, label: "Collaborative team", desc: "A supportive environment of educators and administrators who care." },
  { icon: Award, label: "Competitive rewards", desc: "Compensation and benefits that reflect the value you bring." },
  { icon: Heart, label: "Inclusive workplace", desc: "A diverse community where every voice is heard and respected." },
  { icon: Shield, label: "Stable organisation", desc: "20+ years of institution-building with long-term vision and stability." },
];

const lifeCaptions = [
  "Collaborative planning",
  "Teams that back each other",
  "Sharing what works",
  "Room to lead",
  "Mentoring and review",
  "Space to think",
];

// One spectrum hue per value card and per slide caption.
const HUES = [
  { c: "#6A5AC8", tint: "#EFEDFA" },
  { c: "#3E6FCB", tint: "#EAF0FB" },
  { c: "#2E9C8E", tint: "#E6F4F2" },
  { c: "#7DA24C", tint: "#F0F5E8" },
  { c: "#D9A441", tint: "#FBF3E3" },
  { c: "#C4604F", tint: "#F9ECE9" },
];
const LIFE_HUES = HUES.map((h) => h.c);

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-navy-deep)]">
          <div className="absolute inset-0">
            <Image
              src={careersPhotos.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy-deep)]/92 to-[var(--color-navy-deep)]/60" />
          </div>
          <div className="absolute inset-0 text-white">
            <EduPattern opacity={0.07} scale={280} id="careersHeroPattern" />
          </div>
          <SpectrumArc
            className="left-1/2 -translate-x-1/2 bottom-0 w-[180%] sm:w-[120%] lg:w-[80%] h-auto"
            opacity={0.35}
            weight={2}
          />
          <div className="absolute bottom-0 inset-x-0 spectrum-edge z-10" />
          <div
            className="absolute -top-24 -right-20 w-[520px] h-[520px] opacity-20 animate-blob pointer-events-none"
            style={{ background: "radial-gradient(circle, #F54029 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Back link on its own row — must not sit inline with the badge */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 py-2 md:py-0 text-white/60 text-sm hover:text-white transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Rainbow Group
              </Link>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm eyebrow text-[var(--color-ink)]">
                <Briefcase size={12} />
                Careers at Rainbow Group
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] max-w-3xl mb-6">
              Shape the future
              <br />
              <span className="text-spectrum">with Rainbow.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-10">
              We are always looking for passionate educators, administrators, and
              support professionals who believe in the power of quality education.
            </p>

            {/* Quick facts strip */}
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                { v: "500+", l: "Employees" },
                { v: "20+", l: "Years" },
                { v: "2", l: "Institutions" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl text-white leading-none">{s.v}</p>
                  <p className="eyebrow text-white/45 mt-1.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Rainbow ── */}
        <section className="relative py-16 md:py-20 bg-[var(--color-bg)] overflow-hidden">
          <div className="absolute inset-0 text-[var(--color-navy)]">
            <EduPattern opacity={0.07} scale={300} id="careersWhyPattern" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl mb-10">
              <p className="eyebrow text-[var(--color-coral)] mb-4 flex items-center gap-3">
                <span className="spectrum-rule" />
                Why Rainbow
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] leading-[1.15]">
                A place where your work matters
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group relative bg-white rounded-2xl p-6 border border-[var(--color-line-light)] hover:border-transparent hover:shadow-[0_20px_45px_-18px_rgba(40,48,74,0.28)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <span
                      className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: HUES[i % HUES.length].c }}
                    />
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: HUES[i % HUES.length].tint }}
                      >
                        <Icon size={18} style={{ color: HUES[i % HUES.length].c }} />
                      </span>
                      <span
                        className="font-serif text-2xl opacity-25 transition-opacity duration-300 group-hover:opacity-60"
                        style={{ color: HUES[i % HUES.length].c }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-[var(--color-ink)] mb-2">{item.label}</h3>
                    <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Life at Rainbow ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="eyebrow text-[var(--color-coral)] mb-3 flex items-center gap-3">
                  <span className="spectrum-rule" />
                  Life at Rainbow
                </p>
                <h2 className="font-serif text-3xl text-[var(--color-ink)]">
                  Where educators grow too
                </h2>
              </div>
              <p className="text-sm text-[var(--color-muted)] max-w-sm sm:text-right leading-relaxed">
                Our campuses are built for teachers as much as for students.
              </p>
            </div>

            <CardSlider label="Life at Rainbow photographs" itemClass="w-[62%] sm:w-[38%] lg:w-[24%]">
              {careersPhotos.lifeSlider.map((p, i) => (
                <figure
                  key={i}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
                >
                  <Image
                    src={p}
                    alt={lifeCaptions[i]}
                    fill
                    sizes="(max-width: 640px) 62vw, (max-width: 1024px) 38vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/85 via-[var(--color-navy-deep)]/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 flex items-center gap-2.5">
                    <span
                      className="w-1.5 h-6 rounded-full flex-shrink-0"
                      style={{ backgroundColor: LIFE_HUES[i % LIFE_HUES.length] }}
                    />
                    <span className="text-xs font-medium text-white leading-snug">
                      {lifeCaptions[i]}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </CardSlider>
            <p className="mt-5 text-[11px] text-[var(--color-muted)] text-center">
              {PHOTO_DISCLAIMER}
            </p>
          </div>
        </section>

        {/* ── Open positions ── */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
              <div>
                <p className="eyebrow text-[var(--color-coral)] mb-3 flex items-center gap-3">
                  <span className="spectrum-rule" />
                  Open Positions
                </p>
                <h2 className="font-serif text-3xl text-[var(--color-ink)]">Current openings</h2>
              </div>
              <a
                href={careers.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-line)] bg-white text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] hover:border-[var(--color-navy)] transition-colors self-start"
              >
                <LinkedInIcon size={14} />
                View on LinkedIn
              </a>
            </div>

            {careers.openings.length === 0 ? (
              <div className="relative rounded-3xl bg-white border border-[var(--color-line-light)] p-12 md:p-14 text-center overflow-hidden shadow-[0_10px_40px_-24px_rgba(40,48,74,0.3)]">
                <div className="absolute inset-0 text-[var(--color-navy)]">
                  <EduPattern opacity={0.05} scale={240} id="openingsPattern" />
                </div>
                <EduAccent glyph="cap" className="w-40 h-40 -top-6 -right-6 text-[var(--color-navy)]" opacity={0.07} />

                <div className="relative">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-[var(--color-navy-pale)] items-center justify-center mx-auto mb-5">
                    <Briefcase size={22} className="text-[var(--color-navy)]" />
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-2.5">
                    No current openings listed
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto mb-7 leading-relaxed">
                    We periodically open new positions across our institutions. Follow
                    us on LinkedIn to be the first to know, or send us your details
                    proactively — we keep every application on file.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={careers.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shimmer-parent inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-deep)] transition-colors"
                    >
                      <LinkedInIcon size={13} />
                      Follow on LinkedIn
                    </a>
                    <a
                      href="#express-interest"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-line)] text-sm text-[var(--color-ink)] hover:bg-[var(--color-bg)] transition-colors"
                    >
                      Express Interest
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {(careers.openings as Array<{ title: string; department: string; type: string; location: string }>).map((job, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[var(--color-line-light)] hover:border-[var(--color-navy)] hover:shadow-md transition-all"
                  >
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">{job.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {job.department} · {job.type} · {job.location}
                      </p>
                    </div>
                    <button className="self-start sm:self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-navy)] text-white text-sm hover:bg-[var(--color-navy-deep)] transition-colors">
                      Apply
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Express interest ── */}
        <section id="express-interest" className="relative py-16 md:py-20 bg-white overflow-hidden">
          <div className="absolute inset-0 text-[var(--color-coral)]">
            <EduPattern opacity={0.06} scale={320} id="interestPattern" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-[var(--color-coral)] mb-4 flex items-center gap-3">
                <span className="spectrum-rule" />
                Express Interest
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] leading-[1.15] mb-5">
                Don&apos;t see the right role?
                <br />
                Send us your details.
              </h2>
              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-7">
                If you are passionate about education and believe you have something
                to offer Rainbow Group, we would love to hear from you. Leave your
                details and we will be in touch when a suitable role opens up.
              </p>

              <div className="rounded-2xl bg-[var(--color-bg-alt)] p-5 flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[var(--color-coral)]" />
                </span>
                <div>
                  <p className="eyebrow text-[var(--color-muted)] mb-1">Careers Line</p>
                  <a
                    href={`tel:${siteConfig.phone.jobs.replace(/\s/g, "")}`}
                    className="inline-block py-1.5 md:py-0 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-navy)] transition-colors"
                  >
                    {siteConfig.phone.jobs}
                  </a>
                  <p className="text-xs text-[var(--color-muted)] mt-1">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <InterestForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
