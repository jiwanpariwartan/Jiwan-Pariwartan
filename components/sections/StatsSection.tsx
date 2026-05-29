"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { language } = useLanguage();

  const t = translations.stats;

  const stats = [
    {
      value: t.livesTransformed.value,
      suffix: t.livesTransformed.suffix,
      label: t.livesTransformed.label,
    },
    {
      value: t.yearsOfExcellence.value,
      suffix: t.yearsOfExcellence.suffix,
      label: t.yearsOfExcellence.label,
    },
    {
      value: t.recoverySuccessRate.value,
      suffix: t.recoverySuccessRate.suffix,
      label: t.recoverySuccessRate.label,
    },
    {
      value: t.medicalSupport.value,
      suffix: t.medicalSupport.suffix,
      label: t.medicalSupport.label,
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-50/40 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label.en}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 rounded-2xl bg-purple-100/0 group-hover:bg-purple-50 transition-colors duration-300 scale-150" />

                <p className=" font-bold text-5xl lg:text-6xl text-purple-600 relative">
                  <AnimatedCounter
                    target={Number(stat.value.en)}
                    suffix={stat.suffix[language === "ne" ? "np" : language]}
                    language={language === "ne" ? "np" : language}
                  />
                </p>
              </div>

              <p className="text-xl font-medium text-[#001219]">
                {stat.label[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
