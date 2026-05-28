"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Stethoscope,
  MessageCircle,
  Users,
  Leaf,
  Heart,
  Shield,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  MessageCircle,
  Users,
  Leaf,
  Heart,
  Shield,
};

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-violet-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            eyebrow="What We Offer"
            title="Comprehensive Care for"
            highlight="Complete Recovery"
            subtitle="Our multidisciplinary team delivers integrated treatment addressing every dimension of your wellbeing — physical, psychological, social, and spiritual."
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-500 cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
