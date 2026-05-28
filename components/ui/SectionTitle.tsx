"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const titleWithHighlight = highlight
    ? title.replace(
        highlight,
        `<span class="gradient-text">${highlight}</span>`
      )
    : title;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
        dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
      />
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
