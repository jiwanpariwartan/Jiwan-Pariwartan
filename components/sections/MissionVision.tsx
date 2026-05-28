"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Compass } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    content:
      "To provide compassionate, evidence-based rehabilitation services that address the physical, psychological, social, and spiritual dimensions of addiction and mental health — empowering individuals to reclaim their lives and fulfill their highest potential.",
    color: "from-purple-600 to-violet-500",
    bg: "bg-purple-50",
  },
  {
    icon: Eye,
    title: "Our Vision",
    content:
      "A Nepal where every person affected by addiction or mental illness has access to world-class, dignified care — and where recovery is celebrated as a triumph of the human spirit, not stigmatized as a personal failing.",
    color: "from-indigo-600 to-blue-500",
    bg: "bg-indigo-50",
  },
  {
    icon: Compass,
    title: "Our Philosophy",
    content:
      "We believe recovery is possible for everyone. By treating the whole person — not just the addiction — and involving the family system in healing, we create conditions for profound and lasting transformation.",
    color: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
  },
];

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-5">
              Our Story
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Founded on Hope,<br />
              <span className="gradient-text">Built on Evidence</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jiwan Pariwartan — meaning &ldquo;Life Transformation&rdquo; in Nepali — was established over 15 years ago by a group of physicians, psychologists, and recovered individuals who saw the desperate need for dignified, professional addiction care in Nepal.
              </p>
              <p>
                What began as a small residential program in Kathmandu has grown into Nepal&apos;s most comprehensive rehabilitation center, offering a full continuum of care from medical detox through long-term aftercare support.
              </p>
              <p>
                We have walked alongside over 1,000 individuals and their families, witnessing transformations that have reaffirmed our belief in the power of compassionate, expert care.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/30">
                  <span className="text-white font-display font-bold text-3xl">JP</span>
                </div>
                <p className="text-purple-900 font-display font-bold text-2xl mb-3">Jiwan Pariwartan</p>
                <p className="text-purple-600 text-sm font-medium mb-6">Rehabilitation &amp; Recovery Center</p>
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  {[
                    { v: "15+", l: "Years" },
                    { v: "1000+", l: "Recovered" },
                    { v: "96%", l: "Success" },
                    { v: "24/7", l: "Support" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/70 rounded-xl p-3 text-center">
                      <p className="font-display font-bold text-purple-700 text-xl">{s.v}</p>
                      <p className="text-gray-500 text-xs">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-300 -z-10 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-200 to-violet-300 -z-10 opacity-60" />
          </motion.div>
        </div>

        {/* Mission/Vision/Philosophy */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${card.bg} rounded-3xl p-8`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
