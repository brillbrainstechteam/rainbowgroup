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
