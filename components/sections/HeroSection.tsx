"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Star, Shield, Heart, Home } from "lucide-react";

const slides = [
  {
    image: "/images/hero-bg-1.jpg",
    gradient: "from-[#0b1a2e] via-[#1c2c4e] to-[#0e2140]",
    headline: "A New Beginning",
    sub: "Awaits You",
    description:
      "Find strength, hope, and healing at Nepal's most compassionate rehabilitation center. Every journey to recovery starts with a single, courageous step.",
  },
  {
    image: "/images/hero-bg-2.jpg",
    gradient: "from-[#0a1628] via-[#1a2a4a] to-[#0d1f3c]",
    headline: "Heal Your Mind,",
    sub: "Reclaim Your Life",
    description:
      "Our evidence-based programs blend clinical expertise with holistic wellness to guide you toward lasting sobriety and mental wellbeing.",
  },
  {
    image: "/images/hero-bg-3.jpg",
    gradient: "from-[#1a0a2e] via-[#2a1040] to-[#150820]",
    headline: "You Are Not",
    sub: "Alone in This",
    description:
      "Our team of compassionate professionals walks beside you every step of the way — from detox through recovery and beyond.",
  },
];

const floatingCards = [
  {
    icon: Shield,
    label: "Safe & Private",
    sub: "Confidential care",
    color: "from-purple-600/80 to-violet-700/80",
    delay: 0,
  },
  {
    icon: Heart,
    label: "1000+ Recovered",
    sub: "Lives transformed",
    color: "from-pink-600/80 to-rose-700/80",
    delay: 0.15,
  },
  {
    icon: Home,
    label: "Nepali & Western Support",
    sub: "Support from Melbourne & Nepal",
    color: "from-pink-600/80 to-rose-700/80",
    delay: 0.15,
  },
  {
    icon: Star,
    label: "Expert Team",
    sub: "Certified specialists",
    color: "from-amber-600/80 to-orange-700/80",
    delay: 0.3,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startSlider() {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
  }

  useEffect(() => {
    startSlider();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient base always visible as fallback */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${slides[current].gradient}`}
        />

        {/* Image layer — drop hero-bg-1.jpg / hero-bg-2.jpg / hero-bg-3.jpg into /public/images/ */}
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
              src={slides[current].image}
              alt=""
              fill
              className="object-cover object-center opacity-30"
              priority={current === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay — keeps text legible */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Soft radial ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_45%)]" />
      </div>

      {/* Decorative bokeh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-purple-600/15 blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-violet-700/10 blur-3xl animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-indigo-900/10 blur-3xl" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/15 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  Rehabilitation &amp; Recovery Center · Nepal
                </span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`headline-${current}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-white mb-2">
                    {slides[current].headline}
                  </h1>
                  <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6">
                    <span className="gradient-text-purple">
                      {slides[current].sub}
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mb-10"
                >
                  {slides[current].description}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-2xl shadow-purple-600/40 hover:shadow-purple-600/60 hover:scale-105 transition-all duration-300"
                >
                  Begin Your Recovery
                </Link>
                <a
                  href="tel:+977-98XXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border border-white/25 bg-white/8 backdrop-blur hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call 24/7 Helpline
                </a>
              </motion.div>

              {/* Slide indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 mt-10"
              >
                {slides.map((_, i) => (
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

            {/* Floating cards column */}
            <div className="hidden lg:flex flex-col gap-4 items-end">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + card.delay }}
                  className="animate-float"
                  style={{ animationDelay: `${i * 2}s` }}
                >
                  <div
                    className={`glass flex items-center gap-4 px-6 py-4 rounded-2xl bg-linear-to-r ${card.color} shadow-2xl min-w-52`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-display font-bold text-base">
                        {card.label}
                      </p>
                      <p className="text-white/70 text-xs">{card.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Glassmorphism main card */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="w-full max-w-xs"
              >
                <div className="glass rounded-3xl p-6 bg-white/5 border border-white/10 shadow-2xl">
                  <p className="text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
                    Why Choose Us
                  </p>
                  {[
                    "Evidence-based treatment",
                    "Holistic healing approach",
                    "Family-centered care",
                    "Aftercare & alumni support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 mb-3 last:mb-0"
                    >
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                      </span>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex flex-col items-center pb-8 gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

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
