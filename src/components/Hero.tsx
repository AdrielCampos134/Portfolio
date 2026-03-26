"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const phrases = [
  "Landing pages que vendem mais.",
  "Sites para clínicas e consultórios.",
  "Presença digital para restaurantes.",
  "O site que sua empresa precisa.",
  "Design focado no que importa.",
];

const codeSnippets = [
  { text: "<div className='hero'>", top: "12%", left: "8%", delay: 0 },
  { text: "const site = await build()", top: "25%", right: "6%", delay: 0.5 },
  { text: "export default Page", top: "65%", left: "5%", delay: 1 },
  { text: "npm run build ✓", top: "78%", right: "10%", delay: 1.5 },
  { text: "<Component {...props} />", top: "42%", left: "3%", delay: 2 },
  { text: "deploy → pronto", top: "50%", right: "4%", delay: 2.5 },
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length + 1));
      }, 60);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length - 1));
      }, 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentPhrase]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(147, 51, 234, 0.12), rgba(59, 130, 246, 0.06) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: snippet.delay, duration: 1 }}
          className="absolute hidden lg:block text-xs font-[family-name:var(--font-jetbrains)] text-white/20 select-none animate-float"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            animationDelay: `${snippet.delay}s`,
          }}
        >
          {snippet.text}
        </motion.span>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] mb-8"
        >
          <span className="text-sm">⚡</span>
          <span className="text-sm text-[#A1A1AA]">Disponível para novos projetos</span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="font-[family-name:var(--font-jakarta)] font-black leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Olá, sou o{" "}
            <span className="gradient-text">Adriel Dev</span>
            <br />
            <span className="text-white">Eu crio sites que</span>
            <br />
            <span className="block min-h-[3em] sm:min-h-[1.5em] mt-2 sm:mt-4 w-full">
              <span className="gradient-text">{displayed}</span>
              <span className="cursor-blink text-[#9333EA]">|</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Desenvolvedor web há mais de 3 anos e estudante de Engenharia de
          Software. Construo sites rápidos, visualmente premium e focados 
          no que realmente importa: resultado para o seu negócio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#projetos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm sm:text-base min-h-[48px] shadow-lg shadow-purple-500/20"
            style={{ background: "var(--grad-main)" }}
          >
            Ver meus projetos ↓
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/5566996626237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm sm:text-base border border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-colors min-h-[48px]"
          >
            Fazer orçamento no WhatsApp
          </motion.a>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {[
            { icon: FaGithub, href: "https://github.com/AdrielCampos134" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/adrielcampos134/" },
            { icon: FaInstagram, href: "https://instagram.com/adriel_cps" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/[0.12] transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-12"
        >
          <span className="text-sm">🔴</span>
          <span className="text-sm text-red-400">
            Agenda com vagas limitadas para este mês
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-2 animate-scroll-bounce"
        >
          <span className="text-xs text-[#A1A1AA]">Role para explorar</span>
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="text-[#A1A1AA]"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="26"
              rx="9"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="10"
              cy="9"
              r="2.5"
              fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
