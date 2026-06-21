"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Compass } from "lucide-react";
import logo from "../../public/images/logo.jpeg";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";

export default function MissionVision() {
  const { language } = useLanguage();
  const t = translations.about.missionVision;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: Target,
      title: t.cards.mission.title[language],
      content: t.cards.mission.content[language],
      color: "from-purple-600 to-violet-500",
      bg: "bg-purple-50",
    },
    {
      icon: Eye,
      title: t.cards.vision.title[language],
      content: t.cards.vision.content[language],
      color: "from-indigo-600 to-blue-500",
      bg: "bg-indigo-50",
    },
    {
      icon: Compass,
      title: t.cards.philosophy.title[language],
      content: t.cards.philosophy.content[language],
      color: "from-violet-600 to-purple-500",
      bg: "bg-violet-50",
    },
  ];

  const centerStats = [
    t.centerInfo.stats.years,
    t.centerInfo.stats.recovered,
    t.centerInfo.stats.success,
    t.centerInfo.stats.support,
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-5">
              {t.storyBadge[language]}
            </span>

            <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              {t.storyTitle.line1[language]}
              <br />
              <span className="gradient-text">
                {t.storyTitle.highlight[language]}
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t.storyContent.paragraph1[language]}</p>

              <p>{t.storyContent.paragraph2[language]}</p>

              <p>{t.storyContent.paragraph3[language]}</p>
            </div>
          </motion.div>

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-linear-to-br from-purple-100 via-violet-100 to-indigo-100 overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="relative w-16 h-14 rounded-2xl overflow-hidden">
                  <Image
                    src={logo}
                    alt="jeewan Pariwartan logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <p className="text-purple-900 font-display font-bold text-2xl mb-3">
                  {t.centerInfo.title[language]}
                </p>

                <p className="text-purple-600 text-sm font-medium mb-6">
                  {t.centerInfo.subtitle[language]}
                </p>

                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  {centerStats.map((stat) => (
                    <div
                      key={stat.label.en}
                      className="bg-white/70 rounded-xl p-3 text-center"
                    >
                      <p className="font-bold text-purple-700 text-3xl">
                        {language === "ne" ? stat.value.np : stat.value.en}
                      </p>

                      <p className="text-gray-500 text-base">
                        {stat.label[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-linear-to-br from-amber-200 to-orange-300 -z-10 opacity-60" />

            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-linear-to-br from-indigo-200 to-violet-300 -z-10 opacity-60" />
          </motion.div>
        </div>

        {/* Mission / Vision / Philosophy */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`${card.bg} rounded-3xl p-8`}
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-linear-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
