import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  MessageCircle,
  Heart,
  ExternalLink,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "Alcohol Recovery", href: "/programs#alcohol-recovery" },
  { label: "Drug Recovery", href: "/programs#drug-recovery" },
  { label: "Mental Wellness", href: "/programs#mental-wellness" },
  { label: "Medical Detox", href: "/programs#detox-programs" },
  { label: "Family Support", href: "/programs#family-support" },
  { label: "Individual Counseling", href: "/programs#counseling" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-linear-to-r from-purple-600 to-violet-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold font-display">JP</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base">
                  Jiwan Pariwartan
                </p>
                <p className="text-xs text-purple-400">Rehabilitation Center</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Nepal&apos;s premier rehabilitation center, offering
              compassionate, evidence-based addiction treatment and mental
              wellness care in a healing environment.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
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
              Our Programs
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
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+977-1-XXXXXXX"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-purple-500 group-hover:text-purple-400 shrink-0" />
                  <span>
                    +977-1-XXXXXXX
                    <br />
                    Emergency: +977-98XXXXXXXX
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
                <span>
                  Kathmandu, Bagmati Province
                  <br />
                  Nepal
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-purple-900/20 border border-purple-800/30">
              <p className="text-xs text-purple-300 font-semibold mb-1">
                24/7 Helpline
              </p>
              <a
                href="tel:+977-98XXXXXXXX"
                className="text-white font-bold font-display text-base hover:text-purple-300 transition-colors"
              >
                +977-98XXXXXXXX
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Jiwan Pariwartan Rehabilitation Center.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />{" "}
            for healing & recovery in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
