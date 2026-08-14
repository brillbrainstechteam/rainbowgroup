import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { institutions, siteConfig } from "@/data/site";
import { photos, PHOTO_DISCLAIMER } from "@/data/images";
import { EduPattern, EduAccent } from "@/components/ui/EduPattern";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const heroPhoto: Record<string, string> = {
  "rainbow-international-school": photos.schoolFeature,
  "rainbow-preschool-international": photos.preschoolFeature,
};
const aboutPhoto: Record<string, string> = {
  "rainbow-international-school": photos.schoolCard,
  "rainbow-preschool-international": photos.preschoolCard,
};
const galleryPhotos: Record<string, string[]> = {
  "rainbow-international-school": photos.gallery,
  "rainbow-preschool-international": photos.galleryPreschool,
};

export async function generateStaticParams() {
  return institutions.map((inst) => ({ slug: inst.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const inst = institutions.find((i) => i.id === slug);
  if (!inst) return {};
  return {
    title: `${inst.name} | Rainbow Group of Companies`,
    description: inst.description,
  };
}

export default async function InstitutionPage({ params }: Props) {
  const { slug } = await params;
  const inst = institutions.find((i) => i.id === slug);
  if (!inst) notFound();

  const isNavy = inst.color === "navy";
  const accent = isNavy ? "var(--color-navy)" : "var(--color-coral)";
  const accentText = isNavy ? "text-[var(--color-navy)]" : "text-[var(--color-coral)]";
  const tintBg = isNavy ? "bg-[var(--color-navy-pale)]" : "bg-[#FBF0EE]";

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero with photograph ── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-navy-deep)]">
          <div className="absolute inset-0">
            <Image
              src={heroPhoto[inst.id]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div
              className="absolute inset-0 mix-blend-multiply opacity-70"
              style={{ backgroundColor: accent }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)] via-[var(--color-navy-deep)]/70 to-[var(--color-navy-deep)]/40" />
          </div>
          <div className="absolute inset-0 text-white">
            <EduPattern opacity={0.07} scale={280} id="instHeroPattern" />
          </div>

          <div
            className="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-20 animate-blob pointer-events-none"
            style={{ background: "radial-gradient(circle, #F54029 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/#institutions"
              className="inline-flex items-center gap-2 text-white/60 text-sm mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Rainbow Group
            </Link>

            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm eyebrow text-[var(--color-ink)] mb-6">
              {inst.badge}
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] max-w-3xl mb-5">
              {inst.name}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-9 italic">
              {inst.tagline}
            </p>

            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/#contact"
                className="shimmer-parent inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--color-navy-deep)] text-sm font-medium hover:bg-white/90 transition-colors shadow-xl"
              >
                Enquire Now
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Phone size={14} />
                {siteConfig.phone.admissions}
              </a>
            </div>
          </div>
        </section>

        {/* ── Quick facts bar ── */}
        <section className="bg-white border-b border-[var(--color-line-light)] shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap gap-x-10 gap-y-3 items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[var(--color-ink)]">Age Range:</span>
              <span className="text-[var(--color-muted)]">{inst.ageRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className={accentText} />
              <span className="text-[var(--color-muted)]">Thane, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-[var(--color-ink)]">Part of:</span>
              <Link href="/" className={`${accentText} hover:underline`}>
                Rainbow Group of Companies
              </Link>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className={`eyebrow ${accentText} mb-4 flex items-center gap-3`}>
                <span className="w-8 h-px" style={{ backgroundColor: accent }} />
                About the Institution
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] leading-[1.15] mb-6">
                {inst.name}
              </h2>
              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-4">
                {inst.longDescription}
              </p>
              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
                {inst.description}
              </p>
            </div>

            <div className="relative h-[400px]">
              <div
                className="absolute -top-6 -right-6 w-48 h-48 opacity-25 animate-blob"
                style={{ background: `radial-gradient(circle, ${isNavy ? "#9DAFD4" : "#D4816A"} 0%, transparent 70%)` }}
              />
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-25px_rgba(40,48,74,0.45)]">
                <Image
                  src={aboutPhoto[inst.id]}
                  alt={`Learning at ${inst.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Floating age badge */}
              <div className="absolute -bottom-4 left-0 lg:-bottom-5 lg:-left-5 glass-light rounded-2xl px-5 py-4 shadow-xl animate-float">
                <p className="font-serif text-lg text-[var(--color-ink)] leading-none">
                  {inst.ageRange}
                </p>
                <p className="eyebrow text-[var(--color-muted)] mt-1.5">Enrolment</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="relative py-16 md:py-20 bg-[var(--color-bg)] overflow-hidden">
          <div className="absolute inset-0" style={{ color: accent }}>
            <EduPattern opacity={0.07} scale={300} id="instHighlightPattern" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className={`eyebrow ${accentText} mb-3`}>What We Offer</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)]">
                The {inst.shortName} difference
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {inst.highlights.map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-6 border border-[var(--color-line-light)] hover:shadow-[0_20px_45px_-18px_rgba(40,48,74,0.28)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span
                    className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: accent }}
                  />
                  <div className={`w-11 h-11 rounded-xl ${tintBg} flex items-center justify-center mb-4`}>
                    <CheckCircle size={18} className={accentText} />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className={`eyebrow ${accentText} mb-3`}>Campus Life</p>
                <h2 className="font-serif text-3xl text-[var(--color-ink)]">
                  A glimpse inside
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryPhotos[inst.id].map((p, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden group aspect-square ${
                    // Featured 2x2 tile only from lg — on a 2-col phone grid it
                    // would push the 4th image into an orphan row.
                    i === 0 ? "lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-full" : ""
                  } ${
                    // The 5th image completes the 8-cell desktop mosaic, but would
                    // leave a lone tile on the 2-col phone grid.
                    i === 4 ? "hidden lg:block" : ""
                  }`}
                >
                  <Image
                    src={p}
                    alt={`${inst.name} campus life ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[var(--color-muted)] mt-4">
              {PHOTO_DISCLAIMER} Client to supply 8–12 photographs of campus,
              classrooms, activities, and students.
            </p>
          </div>
        </section>

        {/* ── Admissions CTA ── */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-[var(--color-navy-deep)]">
          <div
            className="absolute inset-0 opacity-90"
            style={{ background: `linear-gradient(120deg, ${accent} 0%, var(--color-navy-deep) 75%)` }}
          />
          <div
            className="absolute -bottom-32 -left-24 w-[480px] h-[480px] opacity-20 animate-blob pointer-events-none"
            style={{ background: "radial-gradient(circle, #F54029 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-white/50 mb-4">Admissions</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white leading-[1.15] mb-5">
                Ready to join the Rainbow family?
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed mb-8">
                {inst.admissionsNote}
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/#contact"
                  className="shimmer-parent inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--color-navy-deep)] text-sm font-medium hover:bg-white/90 transition-colors shadow-xl"
                >
                  Submit an Enquiry
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Phone size={14} />
                  Call Admissions
                </a>
              </div>
            </div>

            <div className="relative glass rounded-3xl p-8 text-white overflow-hidden">
              <EduAccent glyph="globe" className="w-40 h-40 -bottom-8 -right-8 text-white" opacity={0.12} />
              <p className="relative text-sm font-medium mb-6 text-white/75">Contact Information</p>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={15} />
                  </span>
                  <div>
                    <p className="eyebrow text-white/45 mb-1">Admissions</p>
                    <a
                      href={`tel:${siteConfig.phone.admissions.replace(/\s/g, "")}`}
                      className="text-white hover:underline"
                    >
                      {siteConfig.phone.admissions}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p className="eyebrow text-white/45 mb-1">Head Office</p>
                    <span className="text-white/80 leading-relaxed">
                      {siteConfig.address.full}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
