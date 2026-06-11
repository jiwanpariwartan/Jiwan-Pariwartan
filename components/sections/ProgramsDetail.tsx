"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Heart,
  Shield,
  Brain,
  Activity,
  Users,
  MessageCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { programs } from "@/data/programs";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Shield,
  Brain,
  Activity,
  Users,
  MessageCircle,
};

export default function ProgramsDetail() {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {programs.map((program, i) => {
          const Icon = iconMap[program.icon] || Heart;
          const isEven = i % 2 === 0;
          return (
            <ProgramBlock
              key={program.id}
              program={program}
              Icon={Icon}
              isEven={isEven}
              index={i}
              language={language}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProgramBlock({
  program,
  Icon,
  isEven,
  index,
  language,
}: {
  program: (typeof import("@/data/programs").programs)[0];
  Icon: React.ElementType;
  isEven: boolean;
  index: number;
  language: "en" | "ne";
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const t = translations.programsSection.programLabel;

  return (
    <div
      ref={ref}
      id={program.id}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24 ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Visual panel */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`order-2 ${!isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="aspect-4/3 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Background Image */}
          <Image
            src={program.image}
            alt={program.title.en}
            fill
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white p-8">
            <div>
              <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Icon className="w-12 h-12" />
              </div>
              <p className="font-display font-bold text-2xl mb-2">
                {program.title[language]}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {program.duration[language]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text panel */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`order-1 ${!isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4">
          {`${t[language]} 0${index + 1}`}
        </span>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
          {program.title[language]}
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          {program.description[language]}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {program.features.map((f) => (
            <div key={f.en} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
              <span className="text-sm text-gray-600">{f[language]}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
        >
          Enquire About This Program <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
