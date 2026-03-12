"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Aurora background */}
      <div
        className="absolute inset-0 animate-aurora"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.1), rgba(6,182,212,0.08), rgba(124,58,237,0.12))",
          backgroundSize: "300% 300%",
        }}
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            className="font-[family-name:var(--font-jakarta)] font-black text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Seu negócio merece um site que{" "}
            <span className="gradient-text">trabalha por você.</span>
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Enquanto você dorme, seu site está lá — apresentando seu negócio e
            convertendo visitantes em clientes.
          </p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contato"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-base min-h-[48px]"
            style={{ background: "var(--grad-main)" }}
          >
            Vamos começar seu projeto →
          </motion.a>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-sm">🔴</span>
            <span className="text-sm text-red-400">
              Apenas 2 vagas disponíveis este mês
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
