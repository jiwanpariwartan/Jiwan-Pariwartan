"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const galleryItems = [
  { id: 1, label: "Healing Gardens", color: "from-purple-400/80 to-violet-600/80", bg: "bg-gradient-to-br from-purple-100 to-violet-200", size: "col-span-2 row-span-2" },
  { id: 2, label: "Therapy Rooms", color: "from-indigo-400/80 to-blue-600/80", bg: "bg-gradient-to-br from-indigo-100 to-blue-200", size: "" },
  { id: 3, label: "Yoga Studio", color: "from-teal-400/80 to-cyan-600/80", bg: "bg-gradient-to-br from-teal-100 to-cyan-200", size: "" },
  { id: 4, label: "Group Sessions", color: "from-pink-400/80 to-rose-600/80", bg: "bg-gradient-to-br from-pink-100 to-rose-200", size: "" },
  { id: 5, label: "Dining & Nutrition", color: "from-amber-400/80 to-orange-600/80", bg: "bg-gradient-to-br from-amber-100 to-orange-200", size: "" },
  { id: 6, label: "Meditation Space", color: "from-violet-400/80 to-purple-600/80", bg: "bg-gradient-to-br from-violet-100 to-purple-200", size: "" },
];

export default function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionTitle
            eyebrow="Our Facility"
            title="A Space Designed"
            highlight="to Heal"
            subtitle="Our center is purposefully crafted — every space, every detail designed to foster calm, safety, and restoration."
            centered={false}
          />
          <Link
            href="/gallery"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-[480px] lg:h-[560px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`${item.size} ${item.bg} rounded-2xl overflow-hidden group relative cursor-pointer`}
            >
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5`}
              >
                <p className="text-white font-display font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.label}
                </p>
              </div>

              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
