"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  eyebrow: { en: "Our Facility", ne: "हाम्रो सुविधा" },
  title: { en: "A Space Designed", ne: "उपचारका लागि" },
  highlight: { en: "to Heal", ne: "डिजाइन गरिएको ठाउँ" },
  subtitle: {
    en: "Our center is purposefully crafted — every space, every detail designed to foster calm, safety, and restoration.",
    ne: "हाम्रो केन्द्र उद्देश्यपूर्वक निर्मित छ — हरेक ठाउँ, हरेक विवरण शान्ति, सुरक्षा र पुनर्स्थापनाको लागि डिजाइन गरिएको छ।",
  },
  viewGallery: { en: "View Full Gallery", ne: "पूर्ण ग्यालेरी हेर्नुहोस्" },
};

const galleryItems = [
  {
    id: 1,
    label: { en: "Group Therapy Session", ne: "समूह थेरापी सत्र" },
    src: "/images/gallery/discussion.jpeg",
    size: "col-span-2 row-span-2",
  },
  {
    id: 2,
    label: { en: "Celebration & Milestones", ne: "उपलब्धि तथा उत्सव" },
    src: "/images/gallery/birthday.jpeg",
    size: "",
  },
  {
    id: 3,
    label: { en: "Yoga & Meditation", ne: "योग तथा ध्यान" },
    src: "/images/gallery/yoga.jpeg",
    size: "",
  },
  {
    id: 4,
    label: { en: "Peer Support Group", ne: "सहकर्मी सहयोग समूह" },
    src: "/images/gallery/people.jpeg",
    size: "",
  },
  {
    id: 5,
    label: { en: "Recreation & Leisure Area", ne: "मनोरञ्जन तथा आराम क्षेत्र" },
    src: "/images/gallery/pool.jpeg",
    size: "",
  },
  {
    id: 6,
    label: { en: "Yoga & Wellness Practice", ne: "योग तथा स्वास्थ्य अभ्यास" },
    src: "/images/gallery/yoga.jpeg",
    size: "",
  },
];

export default function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionTitle
            eyebrow={t.eyebrow[language]}
            title={t.title[language]}
            highlight={t.highlight[language]}
            subtitle={t.subtitle[language]}
            centered={false}
          />
          <Link
            href="/gallery"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300"
          >
            {t.viewGallery[language]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-120 lg:h-140"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`${item.size} rounded-2xl overflow-hidden group relative cursor-pointer bg-purple-100`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.label.en}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-5">
                <p className="text-white font-display font-semibold text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.label[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
