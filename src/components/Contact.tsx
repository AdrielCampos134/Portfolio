"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "(66) 99662-6237",
    href: "https://wa.me/5566996626237",
    color: "#25D366",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@adriel_cps",
    href: "https://instagram.com/adriel_cps",
    color: "#E4405F",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "adrielcampos134",
    href: "https://www.linkedin.com/in/adrielcampos134/",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "AdrielCampos134",
    href: "https://github.com/AdrielCampos134",
    color: "#FFFFFF",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `*Nome:* ${formData.name}`,
      formData.phone ? `*WhatsApp:* ${formData.phone}` : "",
      formData.email ? `*E-mail:* ${formData.email}` : "",
      formData.message ? `*Mensagem:* ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const text = encodeURIComponent(`Olá Adriel! Vim pelo seu portfólio.\n\n${lines}`);
    window.open(`https://wa.me/5566996626237?text=${text}`, "_blank");
    setStatus("success");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="relative py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-[family-name:var(--font-jakarta)] font-black text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Pronto para ter um site que{" "}
              <span className="gradient-text">vende?</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-8">
              Me manda uma mensagem e vamos conversar sobre o seu projeto. Sem
              compromisso, sem enrolação.
            </p>

            <div className="space-y-3 mb-8">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ scale: 1.02 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161616] border border-white/[0.08] hover:border-white/[0.15] transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${link.color}20` }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{link.label}</p>
                    <p className="text-[#A1A1AA] text-xs">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Tempo médio de resposta: menos de 1 hora
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#161616] border border-white/[0.08] text-white text-sm outline-none focus:border-[#7C3AED] transition-colors min-h-[48px]"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-[10px] text-[#A1A1AA] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#7C3AED] transition-all pointer-events-none"
                >
                  Nome *
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#161616] border border-white/[0.08] text-white text-sm outline-none focus:border-[#7C3AED] transition-colors min-h-[48px]"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-2 text-[10px] text-[#A1A1AA] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#7C3AED] transition-all pointer-events-none"
                >
                  WhatsApp *
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#161616] border border-white/[0.08] text-white text-sm outline-none focus:border-[#7C3AED] transition-colors min-h-[48px]"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-[10px] text-[#A1A1AA] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#7C3AED] transition-all pointer-events-none"
                >
                  E-mail
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-[#161616] border border-white/[0.08] text-white text-sm outline-none focus:border-[#7C3AED] transition-colors resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-[10px] text-[#A1A1AA] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#7C3AED] transition-all pointer-events-none"
                >
                  Conte sobre seu projeto
                </label>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-full text-white font-semibold text-sm disabled:opacity-70 min-h-[48px] flex items-center justify-center gap-2"
                style={{ background: "var(--grad-main)" }}
              >
                {status === "loading" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Enviar mensagem"
                )}
              </motion.button>

              {/* Success / Error messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <p className="text-emerald-400 text-sm font-medium">
                      ✓ Mensagem recebida! Te respondo em até 1h.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                  >
                    <p className="text-red-400 text-sm font-medium">
                      Erro ao enviar. Tente novamente ou me chame no WhatsApp.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
