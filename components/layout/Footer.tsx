"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import logo from "../../public/images/logo.jpeg";

import {
  Phone,
  Mail,
  MapPin,
  Share2,
  MessageCircle,
  Heart,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations.footer;

  const quickLinks = useMemo(
    () => [
      { label: t.links.home[language], href: "/" },
      { label: t.links.about[language], href: "/about" },
      { label: t.links.programs[language], href: "/programs" },
      { label: t.links.gallery[language], href: "/gallery" },
      { label: t.links.contact[language], href: "/contact" },
    ],
    [language, t],
  );

  const programs = useMemo(
    () => [
      {
        label: t.programLinks.alcohol[language],
        href: "/programs#alcohol-recovery",
      },
      {
        label: t.programLinks.drug[language],
        href: "/programs#drug-recovery",
      },
      {
        label: t.programLinks.detox[language],
        href: "/programs#detox-programs",
      },
      {
        label: t.programLinks.gambling[language],
        href: "/programs#gambling",
      },
      {
        label: t.programLinks.sex[language],
        href: "/programs#sex-addiction",
      },
      {
        label: t.programLinks.counseling[language],
        href: "/programs#counseling",
      },
    ],
    [language, t],
  );

  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-16 h-14 rounded-2xl overflow-hidden">
                <Image
                  src={logo}
                  alt="Jiwan Pariwartan logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <p className="font-display font-bold text-white text-base">
                  {t.brand.title[language]}
                </p>

                <p className="text-xs text-purple-400">
                  {t.brand.subtitle[language]}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {t.brand.description[language]}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              {t.sections.quickLinks[language]}
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              {t.sections.programs[language]}
            </h3>

            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              {t.sections.contact[language]}
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+977-9805667436"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-purple-500 group-hover:text-purple-400 shrink-0" />

                  <span className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/61426564324"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {t.contact.phones.whatsapp[language]}
                    </a>
                    <a href="tel:+61426564324" className="hover:underline">
                      {t.contact.phones.australia[language]}
                    </a>
                    <a href="tel:+9779805667436" className="hover:underline">
                      {t.contact.phones.nepal1[language]}
                    </a>
                    <a href="tel:+9779845876337" className="hover:underline">
                      {t.contact.phones.nepal2[language]}
                    </a>
                    <a href="tel:+9779841556130" className="hover:underline">
                      {t.contact.phones.nepal3[language]}
                    </a>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@jiwanpariwartan.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-purple-500 group-hover:text-purple-400 shrink-0" />
                  info@jiwanpariwartan.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" />

                <span>{t.contact.location[language]}</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-purple-900/20 border border-purple-800/30">
              <p className="text-xs text-purple-300 font-semibold mb-1">
                {t.contact.helpline[language]}
              </p>

              <a
                href="tel:+977-9805667436"
                className="text-white font-bold text-base hover:text-purple-300 transition-colors"
              >
                {t.contact.phone[language]}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} {t.brand.title[language]}.{" "}
            {t.bottom.copyright[language]}
          </p>

          <p className="text-xs text-gray-500 flex items-center gap-1.5 text-center flex-wrap justify-center">
            {t.bottom.madeWith[language]}

            <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />

            {t.bottom.healing[language]}

            <span>
              by{" "}
              <a
                href="https://webnep.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 font-medium underline"
              >
                WebNep
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
