"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { language } = useLanguage();
  const tr = translations.testimonialsSection;

  function prev() {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setCurrent((c) => (c + 1) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-[#e2fdff] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-72 h-72 rounded-full bg-violet-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            eyebrow={tr.eyebrow[language]}
            title={tr.title[language]}
            highlight={tr.highlight[language]}
            subtitle={tr.subtitle[language]}
          />
        </div>

        <div ref={ref}>
          {/* Featured testimonial */}
          <div className="max-w-4xl mx-auto mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-purple-100/20 border border-purple-50 relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-purple-100" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium mb-8 max-w-3xl">
                  &ldquo;{t.content[language]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold font-display text-base">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-purple-600 text-sm">
                      {t.role[language]}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2.5 bg-purple-600"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-purple-300"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-all duration-300 shadow-lg shadow-purple-500/25"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Thumbnail row */}
          <div className="flex gap-4 mt-8 justify-center flex-wrap">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 flex items-center gap-3 px-4 py-2.5 rounded-full border ${
                  i === current
                    ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white border-gray-200 text-gray-600 hover:border-purple-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-xs">
                    {item.initials[0]}
                  </span>
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
