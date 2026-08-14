import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig, institutions } from "@/data/site";
import { EduPattern } from "@/components/ui/EduPattern";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-ink)] text-white overflow-hidden">
      {/* Spectrum hairline caps the page */}
      <div className="spectrum-edge" />
      <div className="absolute inset-0 text-white">
        <EduPattern opacity={0.05} scale={300} id="footerPattern" />
      </div>
      <div
        className="absolute -top-32 right-0 w-[460px] h-[460px] opacity-[0.13] animate-blob pointer-events-none"
        style={{ background: "radial-gradient(circle, #F54029 0%, transparent 70%)" }}
      />

      {/* ── CTA strip ── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl md:text-3xl text-white mb-1.5">
              Ready to find the right school?
            </p>
            <p className="text-sm text-white/50">
              Talk to our admissions team about either institution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="shimmer-parent inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-coral)] text-white text-sm font-medium hover:bg-[var(--color-coral-light)] transition-colors"
            >
              Enquire Now
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              <Phone size={14} />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl text-white/90 mb-3">Rainbow Group</p>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed mb-5">
            The parent organisation behind premier educational institutions
            shaping the next generation across Thane and beyond.
          </p>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LinkedInIcon size={14} />
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Institutions + company */}
        <div>
          <p className="eyebrow text-white/40 mb-4">Our Institutions</p>
          <ul className="space-y-1 md:space-y-2.5 mb-8">
            {institutions.map((inst) => (
              <li key={inst.id}>
                <Link
                  href={inst.href}
                  className="group inline-flex items-start gap-1.5 py-2 md:py-0 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>
                    {inst.name}
                    <span className="block text-xs text-white/35">{inst.ageRange}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="eyebrow text-white/40 mb-4">Company</p>
          <ul className="space-y-1 md:space-y-2.5">
            {[
              { label: "About", href: "/#about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 md:py-0 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow text-white/40 mb-4">Contact</p>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[var(--color-coral-light)]" />
              <span className="leading-relaxed">{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={14} className="mt-0.5 flex-shrink-0 text-[var(--color-coral-light)]" />
              <div className="space-y-1">
                <a
                  href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
                  className="block py-1.5 md:py-0 hover:text-white transition-colors"
                >
                  Admissions: {siteConfig.phone.admissions}
                </a>
                <a
                  href={`tel:${siteConfig.phone.jobs.replace(/\s/g, "")}`}
                  className="block py-1.5 md:py-0 hover:text-white transition-colors"
                >
                  Careers: {siteConfig.phone.jobs}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock size={14} className="mt-0.5 flex-shrink-0 text-[var(--color-coral-light)]" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <span>© {year} Rainbow Group of Companies · Thane (W), Maharashtra</span>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="inline-block py-2.5 md:py-0 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-block py-2.5 md:py-0 hover:text-white/70 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
