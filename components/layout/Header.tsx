"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/logo.jpeg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const navKeys = ["home", "about", "programs", "gallery", "contact"] as const;
const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "/",
  // about: "/about",
  // programs: "/programs",
  // gallery: "/gallery",
  // contact: "/contact",
  about: "/xxx",
  programs: "/xxxx",
  gallery: "/xxxx",
  contact: "/xxxxxxx",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const t = translations.header;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isLight = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLight
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-purple-100/30 border-b border-purple-100/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-16 h-14 rounded-2xl overflow-hidden">
                  <Image
                    src={logo}
                    alt="Jiwan Pariwartan logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`font-display font-bold text-2xl leading-tight transition-colors duration-300 ${
                    isLight ? "text-gray-900" : "text-white"
                  }`}
                >
                  {t.logotTitle[language]}
                </p>
                <p
                  className={`text-base font-medium leading-none transition-colors duration-300 ${
                    isLight ? "text-[#2d00f7]" : "text-purple-200"
                  }`}
                >
                  {t.logoSubtitle[language]}
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navKeys.map((key) => (
                <Link
                  key={key}
                  href={navHrefs[key]}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === navHrefs[key]
                      ? isLight
                        ? "text-[#2d00f7] bg-purple-50"
                        : "text-white bg-white/15"
                      : isLight
                        ? "text-gray-600 hover:text-purple-700 hover:bg-purple-50/70"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t.nav[key][language]}
                  {pathname === navHrefs[key] && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full -z-10"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + language toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-0.5 rounded-full text-xs font-bold border px-1 py-1 transition-all duration-300 ${
                  isLight
                    ? "border-purple-200 text-purple-700 hover:bg-purple-50"
                    : "border-white/30 text-white/80 hover:bg-white/10"
                }`}
                aria-label="Toggle language"
              >
                <span
                  className={`px-2 py-1 rounded-full transition-all duration-200 ${
                    language === "en"
                      ? isLight
                        ? "bg-purple-600 text-white"
                        : "bg-white/20 text-white"
                      : "opacity-50"
                  }`}
                >
                  EN
                </span>
                <span
                  className={`px-2 py-1 rounded-full transition-all duration-200 ${
                    language === "ne"
                      ? isLight
                        ? "bg-purple-600 text-white"
                        : "bg-white/20 text-white"
                      : "opacity-50"
                  }`}
                >
                  ने
                </span>
              </button>

              <a
                href="tel:+977-9805667436"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isLight
                    ? "text-gray-600 hover:text-purple-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{t.phone[language]}</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                {t.cta[language]}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isLight
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-18 z-40 lg:hidden"
          >
            <div className="mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-purple-200/30 border border-purple-100/50 p-4">
              <nav className="flex flex-col gap-1 mb-4">
                {navKeys.map((key) => (
                  <Link
                    key={key}
                    href={navHrefs[key]}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === navHrefs[key]
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-purple-700"
                    }`}
                  >
                    {t.nav[key][language]}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                {/* Language toggle mobile */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-0.5 self-start rounded-full border border-purple-200 px-1 py-1 text-xs font-bold text-purple-700"
                >
                  <span
                    className={`px-2 py-1 rounded-full transition-all duration-200 ${
                      language === "en"
                        ? "bg-purple-600 text-white"
                        : "opacity-50"
                    }`}
                  >
                    EN
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full transition-all duration-200 ${
                      language === "ne"
                        ? "bg-purple-600 text-white"
                        : "opacity-50"
                    }`}
                  >
                    ने
                  </span>
                </button>

                <a
                  href="tel:+977-9805667436"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                  +977-9805667436
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-3 rounded-xl text-sm font-semibold bg-linear-to-r from-purple-600 to-violet-500 text-white text-center shadow-lg shadow-purple-500/25"
                >
                  {t.cta[language]}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
