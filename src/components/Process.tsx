"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    emoji: "💬",
    title: "Conversa inicial",
    description:
      "Você me manda mensagem. Bate-papo rápido sobre o projeto, o que você precisa e qual é o prazo.",
  },
  {
    num: 2,
    emoji: "📋",
    title: "Briefing e proposta",
    description:
      "Formulário simples de briefing. Com as respostas, monto a proposta com escopo, prazo e valor. Sem enrolação.",
  },
  {
    num: 3,
    emoji: "🎨",
    title: "Desenvolvimento",
    description:
      "Inicio o desenvolvimento e mostro o protótipo em até 48h para validarmos juntos antes de avançar.",
  },
  {
    num: 4,
    emoji: "✅",
    title: "Revisões",
    description:
      "Você revisa e pede ajustes. O site só vai ao ar quando você estiver 100% satisfeito.",
  },
  {
    num: 5,
    emoji: "🚀",
    title: "Entrega",
    description:
      "Site no ar no Vercel. Acesso completo entregue para você. Suporte disponível pelo período contratado.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Como é <span className="gradient-text">trabalhar comigo</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base max-w-xl mx-auto">
            Simples, transparente, sem enrolação.
          </p>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/[0.08]">
              <div
                className="h-full w-full"
                style={{ background: "var(--grad-main)", opacity: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center pt-16"
                >
                  {/* Node */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-10" style={{ background: "var(--grad-main)" }}>
                    {step.num}
                  </div>

                  <span className="text-2xl block mb-3">{step.emoji}</span>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-xs leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-0.5"
              style={{ background: "var(--grad-main)", opacity: 0.3 }}
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-10" style={{ background: "var(--grad-main)" }}>
                    {step.num}
                  </div>

                  <div className="bg-[#161616] rounded-xl p-5 border border-white/[0.08]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{step.emoji}</span>
                      <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-sm">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
