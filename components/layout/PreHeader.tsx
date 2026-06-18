"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const contacts = [
  {
    label: "WhatsApp",
    number: "+61 426 564 324",
    href: "https://wa.me/61426564324",
    icon: FaWhatsapp,
  },
  {
    label: "Australia",
    number: "+61 0451393701",
    href: "tel:+61 0451393701",
    icon: Phone,
    flag: "🇦🇺",
  },
  {
    label: "Nepal",
    number: "980-5667436",
    href: "tel:+9779805667436",
    icon: Phone,
    flag: "🇳🇵",
  },
  {
    label: "Nepal",
    number: "984-5876337",
    href: "tel:+9779845876337",
    icon: Phone,
    flag: "🇳🇵",
  },
  {
    label: "Nepal",
    number: "984-1556130",
    href: "tel:+9779841556130",
    icon: Phone,
    flag: "🇳🇵",
  },
];

export default function PreHeader() {
  const { language } = useLanguage();
  const t = translations.preHeader;

  return (
    <div className="fixed top-0 left-0 right-0 z-9999 h-9.5 bg-[#1a3c34] border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Desktop tagline */}
        <span className="hidden md:block text-[0.72rem] font-medium text-white/55 tracking-[0.01em] whitespace-nowrap font-manrope">
          {t.tagline[language]}
        </span>

        {/* Desktop contacts */}
        <div className="hidden md:flex items-center md:ml-auto">
          {contacts.map(({ label, number, href, icon: Icon, flag }, i) => (
            <a
              key={`${label}-${number}`}
              href={href}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
            >
              {i !== 0 && (
                <span className="w-px h-3.5 bg-white/15 mr-1 shrink-0" />
              )}

              {flag && (
                <span
                  className="text-[0.78rem] leading-none"
                  aria-hidden="true"
                >
                  {flag}
                </span>
              )}

              <Icon size={11} className="opacity-70 shrink-0" />

              <span className="text-white/45 font-medium">{label}:</span>

              <span>{number}</span>
            </a>
          ))}

          {/* Socials */}
          <div className="flex items-center ml-3 pl-3 border-l border-white/15">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={13} />
            </a>

            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={13} />
            </a>

            <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok size={13} />
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <a
              href="tel:+9779845876337"
              className="flex items-center gap-1 px-2 py-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Call"
            >
              <Phone size={13} />
              <span className="text-[0.7rem] font-semibold">Call</span>
            </a>

            <a
              href="https://wa.me/61426564324"
              className="flex items-center gap-1 px-2 py-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={13} />
              <span className="text-[0.7rem] font-semibold">WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={12} />
            </a>

            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={12} />
            </a>

            <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
