"use client";

import { motion } from "framer-motion";
import { Phone, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactHero() {
  const { language } = useLanguage();

  const t = translations.contact.contactHero;

  return (
    <section className="relative min-h-[55vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-950 via-violet-900 to-purple-900" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 60%, rgba(167,139,250,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(212,175,55,0.08) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/15 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
            {t.badge[language]}
          </span>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-3xl">
            {t.title.part1[language]}{" "}
            <span className="gradient-text-purple">
              {t.title.highlight[language]}
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            {t.description[language]}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+977-98XXXXXXXX"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-base bg-white text-purple-700 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {t.callButton[language]}
            </a>

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-purple-200 border border-purple-500/30 bg-purple-500/10">
              <Shield className="w-4 h-4" />
              {t.confidential[language]}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
