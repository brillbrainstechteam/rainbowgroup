import LegalPage from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Rainbow Group of Companies",
  description:
    "The terms governing use of the Rainbow Group of Companies website and its content.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      accent="coral"
      intro="The full Terms of Use are to be drafted by Rainbow Group of Companies' legal team and supplied prior to site launch. This page is reserved as a placeholder so the structure, navigation, and footer links are all in place."
      sections={[
        {
          heading: "What these terms will cover",
          items: [
            "Acceptable use of this website and its content",
            "Intellectual property and copyright ownership of text, imagery, and marks",
            "Limitations of liability and disclaimers of warranty",
            "Links to third-party websites and services",
            "Governing law and jurisdiction (expected: Maharashtra, India)",
            "How changes to these terms will be communicated",
          ],
        },
        {
          heading: "Admissions and enquiries",
          items: [
            "That website content is informational and does not constitute an offer of admission",
            "That fees, curricula, and availability are subject to change",
            "How enquiry submissions are handled and what response can be expected",
          ],
        },
      ]}
    />
  );
}
