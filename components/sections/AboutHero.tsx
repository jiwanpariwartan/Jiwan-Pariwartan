"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-900 to-indigo-900" />
      <div className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 25% 60%, rgba(167,139,250,0.15) 0%, transparent 50%), radial-gradient(ellipse at 75% 30%, rgba(99,102,241,0.12) 0%, transparent 50%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/15 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-3xl">
            Transforming Lives Through{" "}
            <span className="gradient-text-purple">Compassionate Care</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Jiwan Pariwartan was founded on a simple but powerful belief: that every person struggling with addiction deserves dignity, expert care, and a genuine chance at a new life.
          </p>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
