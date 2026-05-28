"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Gardens", "Therapy", "Wellness", "Living", "Dining"];

const galleryItems = [
  { id: 1, label: "Healing Gardens", category: "Gardens", bg: "from-green-200 to-teal-300", span: "col-span-2 row-span-2" },
  { id: 2, label: "Individual Therapy Room", category: "Therapy", bg: "from-purple-200 to-violet-300", span: "" },
  { id: 3, label: "Yoga & Meditation Studio", category: "Wellness", bg: "from-amber-200 to-orange-300", span: "" },
  { id: 4, label: "Group Counseling Space", category: "Therapy", bg: "from-blue-200 to-indigo-300", span: "" },
  { id: 5, label: "Private Rooms", category: "Living", bg: "from-rose-200 to-pink-300", span: "" },
  { id: 6, label: "Nutrition & Dining Hall", category: "Dining", bg: "from-yellow-200 to-amber-300", span: "" },
  { id: 7, label: "Meditation Garden", category: "Gardens", bg: "from-teal-200 to-cyan-300", span: "" },
  { id: 8, label: "Art Therapy Room", category: "Therapy", bg: "from-violet-200 to-purple-300", span: "col-span-2" },
  { id: 9, label: "Outdoor Recreation Area", category: "Wellness", bg: "from-lime-200 to-green-300", span: "" },
  { id: 10, label: "Family Meeting Room", category: "Therapy", bg: "from-fuchsia-200 to-pink-300", span: "" },
  { id: 11, label: "Library & Reading Room", category: "Living", bg: "from-sky-200 to-blue-300", span: "" },
  { id: 12, label: "Communal Lounge", category: "Living", bg: "from-indigo-200 to-violet-300", span: "" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modal, setModal] = useState<(typeof galleryItems)[0] | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-48">
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
                className={`${item.span || ""} bg-gradient-to-br ${item.bg} rounded-2xl overflow-hidden group cursor-pointer relative min-h-48`}
              >
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-colors duration-400 flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center justify-between w-full">
                    <p className="text-white font-semibold text-sm drop-shadow-lg">{item.label}</p>
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
              className={`bg-gradient-to-br ${modal.bg} w-full max-w-2xl aspect-video rounded-3xl relative overflow-hidden shadow-2xl`}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "25px 25px",
                }}
              />
              <div className="absolute inset-0 bg-black/10 flex items-end p-8">
                <div>
                  <p className="text-white font-display font-bold text-2xl drop-shadow-lg">{modal.label}</p>
                  <p className="text-white/70 text-sm">{modal.category}</p>
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
