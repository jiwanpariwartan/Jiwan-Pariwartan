import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import MissionVision from "@/components/sections/MissionVision";
import TeamSection from "@/components/sections/TeamSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Us – Our Story & Mission",
  description:
    "Learn about Jiwan Pariwartan's founding story, mission, vision, and the expert team dedicated to transforming lives through compassionate rehabilitation in Nepal.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <TimelineSection />
      <TeamSection />
      <ContactCTA />
    </>
  );
}
