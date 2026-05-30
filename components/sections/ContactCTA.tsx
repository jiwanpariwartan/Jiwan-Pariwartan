"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, ArrowRight, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { language } = useLanguage();

  const t = translations.contactsCTA;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-cta.webp"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl pointer-events-none animate-float-slow" />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none animate-float-slow"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-200 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-8">
            <Shield className="w-3.5 h-3.5" />
            {t.badge[language]}
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {t.titleStart[language]}
            <br />
            <span className="text-[#724cf9]">{t.titleHighlight[language]}</span>
          </h2>

          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-12">
            {t.subtitle[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base bg-white text-purple-700 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
            >
              {t.cta[language]} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+977-98XXXXXXXX"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-white border border-white/25 bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {t.helpline[language]}
            </a>
          </div>

          <p className="text-[#f0fff1] text-sm mt-8">{t.footnote[language]}</p>
        </motion.div>
      </div>
    </section>
  );
}
