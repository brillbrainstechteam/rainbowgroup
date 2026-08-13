import LegalPage from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rainbow Group of Companies",
  description:
    "How Rainbow Group of Companies collects, uses, and protects personal information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      accent="navy"
      intro="The full Privacy Policy is to be drafted by Rainbow Group of Companies' legal team and supplied prior to site launch. This page is reserved as a placeholder so the structure, navigation, and footer links are all in place."
      sections={[
        {
          heading: "What this policy will cover",
          items: [
            "What personal information we collect (name, contact details, enquiry data)",
            "How we use that information (admissions, recruitment, communications)",
            "Lawful basis for processing and how consent is obtained",
            "How long we retain personal data and how it is disposed of",
            "Who we share data with, including any third-party processors",
            "Your rights under applicable data protection law",
            "How to contact us with privacy queries or to request deletion",
          ],
        },
        {
          heading: "Website specifics to confirm",
          items: [
            "Cookie usage and any analytics tooling (e.g. Google Analytics)",
            "Whether enquiry form submissions are stored, emailed, or both",
            "Data residency — where submitted information is hosted",
            "Any embedded third-party services (maps, video, chat widgets)",
          ],
        },
      ]}
    />
  );
}
