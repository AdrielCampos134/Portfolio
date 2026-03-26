"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Página Única",
    oldPrice: "397",
    price: "197",
    discount: "50% OFF",
    features: [
      "Landing page até 3 seções",
      "Design responsivo (mobile perfeito)",
      "Integração WhatsApp",
      "Entrega em até 5 dias",
    ],
    popular: false,
  },
  {
    name: "Site Completo",
    oldPrice: "599",
    price: "297",
    discount: "50% OFF",
    features: [
      "Site completo até 5 seções",
      "Design exclusivo + animações",
      "Formulário de contato/agendamento",
      "WhatsApp + redes sociais integrados",
      "SEO básico configurado",
      "Domínio incluso",
      "Entrega em até 7 dias",
      "60 dias de manutenção grátis",
      "Suporte direto comigo",
    ],
    popular: true,
  },
  {
    name: "Site Premium",
    oldPrice: "897",
    price: "497",
    discount: "44% OFF",
    features: [
      "Site multi-página completo",
      "Design exclusivo + animações avançadas",
      "Todas as integrações",
      "SEO básico configurado",
      "Domínio incluso",
      "Entrega em até 14 dias",
      "90 dias de manutenção grátis",
      "Revisões ilimitadas",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="relative py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          className="text-center mb-6"
        >
          <h2
            className="font-[family-name:var(--font-jakarta)] font-black text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="gradient-text">Oferta especial</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base max-w-xl mx-auto mb-6">
            Preços promocionais por tempo limitado. Garanta o seu antes que volte ao normal.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-sm">🔥</span>
            <span className="text-sm text-red-400 font-semibold">
              Promoção ativa — apenas 2 vagas este mês
            </span>
          </div>
        </motion.div>

        {/* Mobile: Show popular first via CSS order */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative rounded-2xl p-6 sm:p-8 border overflow-hidden flex flex-col ${
                  plan.popular
                    ? "border-[#7C3AED]/40 lg:scale-105 order-first lg:order-none"
                    : "border-white/[0.08]"
                } bg-[#161616]`}
              >
                {plan.popular && (
                  <>
                    {/* Spinning border for popular */}
                    <div className="absolute -inset-px rounded-2xl opacity-30 blur-md" style={{ background: "var(--grad-main)" }} />
                    <div className="absolute top-0 right-0 px-4 py-1.5 text-xs font-semibold text-white rounded-bl-xl" style={{ background: "var(--grad-main)" }}>
                      🔥 Melhor custo-benefício
                    </div>
                  </>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-xl mb-2">
                    {plan.name}
                  </h3>

                  {/* Discount badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded-full ${
                      plan.popular
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-white/[0.06] text-[#A1A1AA] border border-white/[0.08]"
                    }`}>
                      {plan.discount}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-base text-[#A1A1AA]/60 line-through font-medium">
                      R$ {plan.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-3xl sm:text-4xl font-[family-name:var(--font-jakarta)] font-black ${
                      plan.popular ? "gradient-text" : "text-white"
                    }`}>
                      R$ {plan.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-[#A1A1AA]"
                      >
                        <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href="https://wa.me/5566996626237"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && typeof (window as unknown as {fbq?: (...a: unknown[]) => void}).fbq === "function") {
                        (window as unknown as {fbq: (...a: unknown[]) => void}).fbq("track", "Lead", { content_name: plan.name });
                      }
                    }}
                    className={`w-full flex items-center justify-center py-3.5 rounded-full text-sm font-semibold text-white min-h-[48px] ${
                      plan.popular ? "" : "border border-white/[0.15]"
                    }`}
                    style={plan.popular ? { background: "var(--grad-main)" } : undefined}
                  >
                    Quero esse plano
                  </motion.a>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-[#A1A1AA] text-sm">
            PIX, cartão ou transferência. Parcelamento disponível.
          </p>
          <p className="text-[#A1A1AA]/60 text-xs">
            Projetos fora do padrão têm orçamento personalizado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
