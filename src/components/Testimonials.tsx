"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "O site da Pesoline ficou profissional e passa muita credibilidade para nossos clientes industriais. Comunicação perfeita durante todo o processo. Recomendo demais o trabalho do Adriel.",
    author: "Samuel Lima",
    role: "Pesoline Tecnologia",
    color: "#2563EB",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2
            className="font-[family-name:var(--font-jakarta)] font-black text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            O que dizem quem{" "}
            <span className="gradient-text">trabalhou comigo</span>
          </h2>
        </motion.div>

        {/* Single testimonial card - centered */}
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#161616] rounded-2xl p-8 sm:p-10 border border-white/[0.08] text-center max-w-xl mx-auto"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-amber-400 text-lg">
                  ★
                </span>
              ))}
            </div>

            <p className="text-[#A1A1AA] text-base leading-relaxed mb-8 italic">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base"
                style={{ background: `${t.color}40` }}
              >
                {t.author[0]}
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">
                  {t.author}
                </p>
                <p className="text-[#A1A1AA] text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
