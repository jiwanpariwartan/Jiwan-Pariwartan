"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/data/faqs";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  eyebrow: { en: "Have Questions?", ne: "प्रश्नहरू छन्?" },
  title: { en: "Everything You", ne: "तपाईंलाई चाहिने" },
  highlight: { en: "Need to Know", ne: "सबै जानकारी" },
  subtitle: {
    en: "We understand this journey raises many questions. Here are the answers to the most common ones.",
    ne: "हामी बुझ्छौं कि यो यात्राले धेरै प्रश्नहरू उठाउँछ। यहाँ सबैभन्दा सामान्य प्रश्नहरूका उत्तरहरू छन्।",
  },
  calloutTitle: { en: "Still have questions?", ne: "अझै प्रश्नहरू छन्?" },
  calloutBody: {
    en: "Our counselors are available 24/7 to answer your questions confidentially.",
    ne: "हाम्रा परामर्शदाताहरू तपाईंका प्रश्नहरू गोपनीय रूपमा उत्तर दिन २४/७ उपलब्ध छन्।",
  },
  callNow: { en: "Call Us Now", ne: "अहिले फोन गर्नुहोस्" },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-[#e2fdff] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <SectionTitle
              eyebrow={t.eyebrow[language]}
              title={t.title[language]}
              highlight={t.highlight[language]}
              subtitle={t.subtitle[language]}
              centered={false}
            />
            <div className="mt-10 p-6 rounded-2xl bg-linear-to-br from-purple-600 to-violet-500 text-white">
              <p className="font-display font-bold text-lg mb-2">
                {t.calloutTitle[language]}
              </p>
              <p className="text-purple-100 text-sm mb-5 leading-relaxed">
                {t.calloutBody[language]}
              </p>
              <a
                href="tel:+977-98XXXXXXXX"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 font-semibold text-sm hover:shadow-lg transition-shadow"
              >
                {t.callNow[language]}
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div ref={ref} className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? "border-purple-200 bg-purple-50/50 shadow-md shadow-purple-100/30"
                    : "border-gray-100 bg-white hover:border-purple-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`font-display font-semibold text-base transition-colors ${
                      openIndex === i ? "text-purple-900" : "text-gray-800"
                    }`}
                  >
                    {faq.question[language]}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 -mt-2">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer[language]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
