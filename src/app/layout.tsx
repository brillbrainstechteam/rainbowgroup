import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import SpectrumProgress from "@/components/ui/SpectrumProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  // Host-independent noindex. vercel.json sets an X-Robots-Tag header, but that
  // only applies on Vercel — GitHub Pages cannot set custom headers, so the
  // meta tag is what actually protects the Pages build. This prototype carries
  // Rainbow Group's real name, logo and contact details alongside stock photos
  // of other schools, so it must never surface in search results.
  // Remove this (and vercel.json) when the site becomes the real one.
  robots: { index: false, follow: false },
  title: "Rainbow Group of Companies | Thane's Premier Education Group",
  description:
    "Rainbow Group of Companies is the parent organisation behind premier educational institutions shaping the next generation across Thane, Maharashtra, and beyond.",
  keywords: [
    "Rainbow Group of Companies",
    "Rainbow International School",
    "Rainbow Preschool International",
    "school Thane",
    "education group Maharashtra",
    "K-12 school Thane",
    "preschool Thane",
  ],
  openGraph: {
    title: "Rainbow Group of Companies",
    description: "Building institutions. Nurturing generations.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <SpectrumProgress />
        {children}
      </body>
    </html>
  );
}
