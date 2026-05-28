"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = "9779800000000";
  const message = encodeURIComponent(
    "Hello, I would like to learn more about Jiwan Pariwartan's rehabilitation programs."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-xs"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs font-display">JP</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Jiwan Pariwartan</p>
                <p className="text-xs text-green-600">● Online now</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Hi there! 👋 Ready to start your recovery journey? We&apos;re here to help.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-300 rounded-full border-2 border-white animate-pulse" />
      </motion.button>
    </div>
  );
}
