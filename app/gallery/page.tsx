import type { Metadata } from "next";
import GalleryHero from "@/components/sections/GalleryHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Gallery – Our Healing Environment",
  description:
    "Explore Jiwan Pariwartan's healing spaces — serene gardens, therapy rooms, yoga studio, group spaces, and dining facilities designed to support recovery.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <ContactCTA />
    </>
  );
}
