"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5566996626237"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp size={28} />
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" style={{ animationDuration: "3s" }}></span>
    </motion.a>
  );
}
