"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const galleryItems: {
  id: number;
  category: string;
  image: string;
  span?: string;
}[] = [
  { id: 1, category: "events", image: "/images/gallery/birthday.jpeg" },
  { id: 2, category: "events", image: "/images/gallery/board.jpeg" },
  { id: 3, category: "dining", image: "/images/gallery/cake.jpeg" },
  { id: 4, category: "dining", image: "/images/gallery/cake2.jpeg" },
  { id: 5, category: "dining", image: "/images/gallery/cake3.jpeg" },
  { id: 6, category: "therapy", image: "/images/gallery/discussion.jpeg" },
  { id: 7, category: "recreation", image: "/images/gallery/jersey2.jpeg" },
  { id: 8, category: "therapy", image: "/images/gallery/meet.jpg" },
  { id: 9, category: "people", image: "/images/gallery/people.jpeg" },
  { id: 10, category: "recreation", image: "/images/gallery/pool.jpeg" },
  { id: 11, category: "recreation", image: "/images/gallery/pool1.jpeg" },
  { id: 12, category: "recreation", image: "/images/gallery/pool2.jpeg" },
  { id: 13, category: "recreation", image: "/images/gallery/pool3.jpeg" },
  { id: 14, category: "gardens", image: "/images/gallery/poolout.jpeg" },
  { id: 15, category: "recreation", image: "/images/gallery/showjersey.jpeg" },
  { id: 16, category: "wellness", image: "/images/gallery/yoga.jpeg" },
  { id: 17, category: "people", image: "/images/gallery/kta.jpg" },
  { id: 18, category: "therapy", image: "/images/gallery/health.jpg" },
  { id: 19, category: "therapy", image: "/images/gallery/checkup.jpg" },
  { id: 19, category: "events", image: "/images/gallery/disc.jpg" },
];

export default function GalleryGrid() {
  const { language } = useLanguage();
  const t = translations.gallery.galleryGrid;

  type Lang = "en" | "ne";

  const categories: { key: string; label: { [L in Lang]: string } }[] = [
    { key: "all", label: t.categories.all },
    { key: "events", label: t.categories.events },
    { key: "dining", label: t.categories.dining },
    { key: "therapy", label: t.categories.therapy },
    { key: "recreation", label: t.categories.recreation },
    { key: "wellness", label: t.categories.wellness },
    { key: "gardens", label: t.categories.gardens },
    { key: "people", label: t.categories.people },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modal, setModal] = useState<(typeof galleryItems)[0] | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const labelMap = Object.fromEntries(
    t.items.map((item) => [item.id, item.label]),
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-48"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setModal(item)}
                className={`${item.span || ""} rounded-2xl overflow-hidden group cursor-pointer relative min-h-48`}
              >
                <Image
                  src={item.image}
                  alt={labelMap[item.id]?.en ?? ""}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-400 flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center justify-between w-full">
                    <p className="text-white font-semibold text-sm drop-shadow-lg">
                      {labelMap[item.id]?.[language]}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl aspect-video rounded-3xl relative overflow-hidden shadow-2xl"
            >
              <Image
                src={modal.image}
                alt={labelMap[modal.id]?.en ?? ""}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <p className="text-white font-display font-bold text-2xl drop-shadow-lg">
                    {labelMap[modal.id]?.[language]}
                  </p>
                  <p className="text-white/70 text-sm">
                    {categories.find((c) => c.key === modal.category)?.label[
                      language
                    ] ?? modal.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
