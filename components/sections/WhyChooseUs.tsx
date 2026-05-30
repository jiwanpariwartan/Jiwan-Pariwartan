"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle2,
  Award,
  Clock,
  MapPin,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  const t = translations.whyChooseUs;

  const reasons = [
    {
      icon: Award,
      title: t.reasons.accredited.title[language],
      description: t.reasons.accredited.description[language],
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: HeartHandshake,
      title: t.reasons.compassion.title[language],
      description: t.reasons.compassion.description[language],
      color: "bg-violet-100 text-violet-700",
    },
    {
      icon: Sparkles,
      title: t.reasons.holistic.title[language],
      description: t.reasons.holistic.description[language],
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: Clock,
      title: t.reasons.support.title[language],
      description: t.reasons.support.description[language],
      color: "bg-pink-100 text-pink-700",
    },
    {
      icon: MapPin,
      title: t.reasons.environment.title[language],
      description: t.reasons.environment.description[language],
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: CheckCircle2,
      title: t.reasons.outcomes.title[language],
      description: t.reasons.outcomes.description[language],
      color: "bg-amber-100 text-amber-700",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-purple-950/90 to-gray-950" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(167,139,250,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            eyebrow={t.eyebrow[language]}
            title={t.title[language]}
            highlight={t.highlight[language]}
            subtitle={t.subtitle[language]}
            light
          />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className="w-7 h-7" />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
