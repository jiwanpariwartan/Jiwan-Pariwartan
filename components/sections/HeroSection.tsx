"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Star,
  Shield,
  Heart,
  Home,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const slideImages = [
  {
    image: "/images/hero2.jpeg",
    gradient: "from-[#0b1a2e] via-[#1c2c4e] to-[#0e2140]",
  },
  {
    image: "/images/hero1.jpeg",
    gradient: "from-[#0a1628] via-[#1a2a4a] to-[#0d1f3c]",
  },
  {
    image: "/images/hero6.jpeg",
    gradient: "from-[#1a0a2e] via-[#2a1040] to-[#150820]",
  },
];

const cardIcons = [Shield, Heart, Home, Star];
const cardColors = [
  "from-purple-600/80 to-violet-700/80",
  "from-pink-600/80 to-rose-700/80",
  "from-pink-600/80 to-rose-700/80",
  "from-amber-600/80 to-orange-700/80",
];
const cardDelays = [0, 0.15, 0.15, 0.3];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { language } = useLanguage();

  const t = translations.hero;

  function startSlider() {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slideImages.length);
    }, 5500);
  }

  function goTo(index: number) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((index + slideImages.length) % slideImages.length);
    startSlider();
  }

  useEffect(() => {
    startSlider();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slide = t.slides[current];

  return (
    // On mobile: min-h-screen so content can expand. On desktop: h-screen fixed.
    <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-linear-to-br ${slideImages[current].gradient}`}
        />
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.8, ease: "easeInOut" } }}
            style={{ willChange: "opacity", zIndex: current }}
          >
            <Image
              src={slideImages[current].image}
              alt=""
              fill
              className="object-cover object-center opacity-30"
              priority={current === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_45%)]" />
      </div>

      {/* Bokeh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-purple-600/15 blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-violet-700/10 blur-3xl animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-indigo-900/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content — pt accounts for preheader (38px) + header (~72px) = 110px */}
      <div className="relative z-10 flex-1 flex items-center min-h-0 pt-[110px] pb-8 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* ── Text column ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/15 border border-purple-500/20 px-4 py-2 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  {t.badge[language]}
                </span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`headline-${current}-${language}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white mb-2">
                    {slide.headline[language]}
                  </h1>
                  <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-5">
                    <span className="gradient-text-purple">
                      {slide.sub[language]}
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg mb-8"
                >
                  {slide.description[language]}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-2xl shadow-purple-600/40 hover:shadow-purple-600/60 hover:scale-105 transition-all duration-300"
                >
                  {t.ctaPrimary[language]}
                </Link>
                <a
                  href="tel:+977-9805667436"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white border border-white/25 bg-white/8 backdrop-blur hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  {t.ctaPhone[language]}
                </a>
              </motion.div>

              {/* Slide indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 mt-8"
              >
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 rounded-full ${
                      i === current
                        ? "w-8 h-2 bg-purple-400"
                        : "w-2 h-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </motion.div>
            </div>

            {/* ── Right column: floating cards ── */}
            <div className="flex flex-col gap-3 items-stretch lg:items-end">
              {/* On mobile: 2-col grid of compact stat cards */}
              <div className="grid grid-cols-2 gap-3 lg:hidden">
                {t.floatingCards.map((card, i) => {
                  const Icon = cardIcons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-linear-to-r ${cardColors[i]} shadow-lg`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-bold text-xs leading-tight truncate">
                          {card.label[language]}
                        </p>
                        <p className="text-white/65 text-[0.65rem] truncate">
                          {card.sub[language]}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile: compact why-choose-us pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="lg:hidden glass rounded-2xl px-4 py-4 bg-white/5 border border-white/10 shadow-xl"
              >
                <p className="text-purple-300 text-xs font-bold tracking-widest uppercase mb-3">
                  {t.whyChooseUs.title[language]}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {t.whyChooseUs.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </span>
                      <span className="text-white/80 text-xs font-semibold leading-tight">
                        {item[language]}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Desktop: original floating cards */}
              <div className="hidden lg:flex flex-col gap-4 items-end">
                {t.floatingCards.map((card, i) => {
                  const Icon = cardIcons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 + cardDelays[i] }}
                      className="animate-float"
                      style={{ animationDelay: `${i * 2}s` }}
                    >
                      <div
                        className={`glass flex items-center gap-4 px-6 py-4 rounded-2xl bg-linear-to-r ${cardColors[i]} shadow-2xl min-w-52`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-display font-bold text-base">
                            {card.label[language]}
                          </p>
                          <p className="text-white/70 text-xs">
                            {card.sub[language]}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="w-full max-w-xs"
                >
                  <div className="glass rounded-3xl p-6 bg-white/5 border border-white/10 shadow-2xl">
                    <p className="text-purple-300 text-xl font-bold tracking-widest uppercase mb-4">
                      {t.whyChooseUs.title[language]}
                    </p>
                    {t.whyChooseUs.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 mb-3 last:mb-0"
                      >
                        <span className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                          <span className="w-2 h-2 rounded-full bg-purple-400" />
                        </span>
                        <span className="text-white/80 text-base font-bold">
                          {item[language]}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/25 hover:border-white/40 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/25 hover:border-white/40 transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
