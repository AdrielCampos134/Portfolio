"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "O site da Pesoline ficou profissional e passa muita credibilidade para nossos clientes industriais. Comunicação perfeita durante todo o processo. Recomendo demais o trabalho do Adriel.",
    author: "Samuel Lima",
    role: "Pesoline Tecnologia",
    color: "#2563EB",
  },
  {
    text: "Ficou muito bom mesmo, era o que a gente precisava. O cardápio digital novo está ajudando bastante no restaurante, o pessoal elogiou o visual.",
    author: "Marcelo",
    role: "Food & Restaurante",
    color: "#F59E0B",
  },
  {
    text: "Eu queria um portfólio bem limpo, direto, mas elegante. O Adriel captou super rápido a ideia e entregou até melhor do que eu esperava.",
    author: "Carla Mendes",
    role: "Arquitetura & Interiores",
    color: "#A3A3A3",
  },
  {
    text: "Cara, o site novo ficou ótimo pra captar cliente! O layout transmite confiança logo de cara, era exatamente esse feeling que eu queria passar pra clínica.",
    author: "Juliana T.",
    role: "Saúde & Estética",
    color: "#7C3AED",
  },
  {
    text: "O formulário do site cortou muito tempo que a gente perdia no WhatsApp tirando dúvida básica. Facilitou real a nossa rotina comercial.",
    author: "Ricardo F.",
    role: "Consultoria Premium",
    color: "#EF4444",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2
            className="font-[family-name:var(--font-jakarta)] font-black text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            O que dizem quem{" "}
            <span className="gradient-text">trabalhou comigo</span>
          </h2>
        </motion.div>

        {/* Masonry or Grid for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0F0F0F] rounded-2xl p-8 border border-white/[0.05] hover:border-white/[0.1] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: `${t.color}40` }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    {t.author}
                  </p>
                  <p className="text-[#A1A1AA] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
