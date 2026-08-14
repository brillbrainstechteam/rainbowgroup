import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { EduPattern, EduAccent } from "@/components/ui/EduPattern";
import { legalPhotos } from "@/data/images";
import { siteConfig } from "@/data/site";

type Section = { heading: string; items: string[] };

type Props = {
  title: string;
  intro: string;
  sections: Section[];
  accent?: "navy" | "coral";
  /** Which quiet hero image to use. */
  image?: keyof typeof legalPhotos;
};

/** Shared shell for Privacy Policy / Terms of Use — both are client-supplied placeholders. */
export default function LegalPage({
  title,
  intro,
  sections,
  accent = "navy",
  image = "privacy",
}: Props) {
  const accentVar = accent === "navy" ? "var(--color-navy)" : "var(--color-coral)";

  return (
    <>
      <Navbar />
      <main>
        {/* ── Compact hero ── */}
        <section className="relative pt-32 pb-14 bg-[var(--color-navy-deep)] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={legalPhotos[image]}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy-deep)]/92 to-[var(--color-navy-deep)]/70" />
          </div>
          <div className="absolute inset-0 text-white">
            <EduPattern opacity={0.06} scale={280} id="legalHeroPattern" />
          </div>
          <div
            className="absolute -top-20 -right-16 w-[420px] h-[420px] opacity-20 animate-blob pointer-events-none"
            style={{ background: `radial-gradient(circle, ${accentVar} 0%, transparent 70%)` }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </div>
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 eyebrow text-[var(--color-ink)]">
                <FileText size={12} />
                Legal
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-3">
              {title}
            </h1>
            <p className="text-sm text-white/50">
              Last updated: [Date to be confirmed by client]
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
            {/* Content */}
            <div className="space-y-5">
              {/* Placeholder notice */}
              <div className="relative rounded-2xl bg-white border-2 border-dashed border-[var(--color-line)] p-7 overflow-hidden">
                <EduAccent
                  glyph="book"
                  className="w-32 h-32 -bottom-5 -right-5 text-[var(--color-navy)]"
                  opacity={0.07}
                />
                <div className="relative">
                  <p className="eyebrow text-[var(--color-coral)] mb-2">Placeholder Page</p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{intro}</p>
                </div>
              </div>

              {sections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-2xl bg-white border border-[var(--color-line-light)] p-7 shadow-[0_10px_35px_-25px_rgba(40,48,74,0.4)]"
                >
                  <h2 className="font-serif text-xl text-[var(--color-ink)] mb-4">
                    {section.heading}
                  </h2>
                  <ul className="space-y-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[var(--color-muted)] leading-relaxed"
                      >
                        <span
                          className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: accentVar }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 rounded-2xl bg-[var(--color-navy-deep)] p-7 text-white overflow-hidden relative">
              <div className="absolute inset-0 text-white">
                <EduPattern opacity={0.07} scale={220} id="legalSidePattern" />
              </div>
              <div className="relative">
                <p className="font-serif text-xl mb-2">Questions?</p>
                <p className="text-sm text-white/55 leading-relaxed mb-6">
                  For any queries about this page in the interim, please reach out to
                  our team directly.
                </p>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} />
                    </span>
                    <div>
                      <p className="eyebrow text-white/45 mb-1">Call us</p>
                      <a
                        href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
                        className="text-white hover:underline"
                      >
                        {siteConfig.phone.admissions}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} />
                    </span>
                    <div>
                      <p className="eyebrow text-white/45 mb-1">Enquiry form</p>
                      <Link href="/#contact" className="text-white hover:underline">
                        Send us a message
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
