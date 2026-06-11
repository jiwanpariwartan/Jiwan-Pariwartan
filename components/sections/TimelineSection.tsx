"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function TimelineSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { language } = useLanguage();

  const t = translations.about.timelineSection;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4">
            {t.badge[language]}
          </span>
          <h2 className="font-mono font-extrabold text-5xl lg:text-5xl text-gray-900">
            {t.title.part1[language]}{" "}
            <span className="gradient-text">{t.title.highlight[language]}</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-300 via-violet-400 to-indigo-300 lg:-translate-x-px" />

          <div className="space-y-12">
            {t.milestones.map((m, i) => (
              <motion.div
                key={m.year[language]}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-start gap-8 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-br from-purple-600 to-violet-500 shadow-lg shadow-purple-500/30 border-2 border-white z-10 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md shadow-purple-100/20 border border-[#adb5bd] hover:border-purple-100 hover:shadow-lg transition-all duration-300">
                    <span className="text-purple-600 font-display font-bold text-2xl block mb-1">
                      {m.year[language]}
                    </span>
                    <h3 className="font-extrabold text-lg text-gray-900 mb-2">
                      {m.title[language]}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {m.description[language]}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
