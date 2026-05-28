import type { Metadata } from "next";
import ProgramsHero from "@/components/sections/ProgramsHero";
import ProgramsDetail from "@/components/sections/ProgramsDetail";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Rehabilitation Programs",
  description:
    "Explore Jiwan Pariwartan's comprehensive rehabilitation programs: alcohol recovery, drug recovery, mental wellness, medical detox, family support, and individual counseling in Nepal.",
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsDetail />
      <ContactCTA />
    </>
  );
}
