"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-purple-100/30 border-b border-purple-100/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-400/40 transition-shadow duration-300">
                <span className="text-white font-bold text-sm font-display">
                  JP
                </span>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`font-display font-bold text-base leading-tight transition-colors duration-300 ${
                    scrolled || !isHome ? "text-gray-900" : "text-white"
                  }`}
                >
                  Jiwan Pariwartan
                </p>
                <p
                  className={`text-xs font-medium leading-none transition-colors duration-300 ${
                    scrolled || !isHome ? "text-purple-600" : "text-purple-200"
                  }`}
                >
                  Rehabilitation Center
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? scrolled || !isHome
                        ? "text-purple-700 bg-purple-50"
                        : "text-white bg-white/15"
                      : scrolled || !isHome
                        ? "text-gray-600 hover:text-purple-700 hover:bg-purple-50/70"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full -z-10"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+977-9805667436"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled || !isHome
                    ? "text-gray-600 hover:text-purple-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+977-9805667436</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                Get Help Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled || !isHome
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
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-purple-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                <a
                  href="tel:+977-1-XXXXXXX"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                  +977-1-XXXXXXX
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-3 rounded-xl text-sm font-semibold bg-linear-to-r from-purple-600 to-violet-500 text-white text-center shadow-lg shadow-purple-500/25"
                >
                  Get Help Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
