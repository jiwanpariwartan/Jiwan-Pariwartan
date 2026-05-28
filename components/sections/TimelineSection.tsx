"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const milestones = [
  { year: "2009", title: "Founded", description: "Jiwan Pariwartan opened its doors with a small residential program and a dedicated team of 8 professionals." },
  { year: "2012", title: "Expanded Programs", description: "Launched family therapy and aftercare support programs, recognizing healing extends beyond the individual." },
  { year: "2015", title: "Medical Detox Unit", description: "Established a fully equipped medical detoxification unit with round-the-clock clinical supervision." },
  { year: "2018", title: "Holistic Integration", description: "Integrated yoga therapy, mindfulness, and nutritional counseling into all treatment programs." },
  { year: "2021", title: "1000 Lives Milestone", description: "Celebrated guiding over 1,000 individuals and families through successful recovery journeys." },
  { year: "2024", title: "Today & Beyond", description: "Continuing to expand services and reach, driven by our commitment to making recovery accessible to all." },
];

export default function TimelineSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900">
            15 Years of <span className="gradient-text">Transformation</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 via-violet-400 to-indigo-300 lg:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-start gap-8 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 shadow-lg shadow-purple-500/30 border-2 border-white z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-md shadow-purple-100/20 border border-gray-100 hover:border-purple-100 hover:shadow-lg transition-all duration-300">
                    <span className="text-purple-600 font-display font-bold text-2xl block mb-1">{m.year}</span>
                    <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
