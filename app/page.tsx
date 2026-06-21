import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";

// metadata
export const metadata: Metadata = {
  title: "jeewan Pariwartan – Premier Rehabilitation Center in Nepal",
  description:
    "Find hope, healing, and lasting recovery at jeewan Pariwartan — Nepal's most compassionate rehabilitation center for addiction and mental wellness.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProgramsSection />
      <TestimonialsSection />
      <GalleryPreview />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
