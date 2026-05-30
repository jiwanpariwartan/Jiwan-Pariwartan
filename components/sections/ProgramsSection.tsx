"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Shield,
  Brain,
  Activity,
  Users,
  MessageCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { programs } from "@/data/programs";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Shield,
  Brain,
  Activity,
  Users,
  MessageCircle,
};

export default function ProgramsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();
  const t = translations.programsSection;

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            eyebrow={t.eyebrow[language]}
            title={t.title[language]}
            highlight={t.highlight[language]}
            subtitle={t.subtitle[language]}
          />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon] || Heart;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="group relative rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-purple-100/30 transition-all duration-500"
              >
                {/* Top Gradient Accent */}
                <div
                  className={`h-1.5 w-full bg-linear-to-r ${program.color}`}
                />

                <div className="p-8 bg-white group-hover:bg-linear-to-b group-hover:from-purple-50/30 group-hover:to-white transition-all duration-500">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${program.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title + Duration */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-purple-900 transition-colors">
                      {program.title[language]}
                    </h3>

                    <span className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full shrink-0 ml-2">
                      <Clock className="w-3 h-3" />
                      {program.duration[language]}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {program.description[language]}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature.en}
                        className="flex items-center gap-2.5 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        {feature[language]}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <Link
                    href={`/programs#${program.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 group-hover:gap-3 transition-all duration-300"
                  >
                    {t.learnMore[language]}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className="text-center mt-12"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            {t.viewAllPrograms[language]}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
