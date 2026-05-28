"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 1000, suffix: "+", label: "Lives Transformed", color: "text-purple-600" },
  { value: 15, suffix: "+", label: "Years of Excellence", color: "text-violet-600" },
  { value: 96, suffix: "%", label: "Recovery Success Rate", color: "text-indigo-600" },
  { value: 24, suffix: "/7", label: "Medical Support", color: "text-pink-600" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 rounded-2xl bg-purple-100/0 group-hover:bg-purple-50 transition-colors duration-300 scale-150" />
                <p className={`font-display font-bold text-5xl lg:text-6xl ${stat.color} relative`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
