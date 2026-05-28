"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "@/components/ui/SectionTitle";
import { team } from "@/data/team";

export default function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            eyebrow="Our Experts"
            title="The Team Behind"
            highlight="Your Recovery"
            subtitle="Our multidisciplinary team brings together decades of clinical experience, deep compassion, and personal commitment to your healing."
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-500"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-display font-bold text-2xl">{member.initials}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
              <p className="text-purple-600 text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
