import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us – Get Help Today",
  description:
    "Reach out to jeewan Pariwartan Rehabilitation Center. Free, confidential consultation available 24/7. Start your recovery journey today.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
