"use client";

import { motion } from "framer-motion";

const services = [
  {
    emoji: "🍔",
    title: "Sites para Food & Restaurante",
    description:
      "Cardápio digital, galeria de fotos, integração WhatsApp em cada item, horários, localização e pedido direto. O cliente vê e já quer pedir.",
    features: [
      "Cardápio interativo por categoria",
      "Integração WhatsApp por item",
      "Galeria com lightbox",
      "Mapa e horários",
      "100% mobile",
    ],
    color: "#F59E0B",
  },
  {
    emoji: "🏥",
    title: "Sites para Clínicas e Consultórios",
    description:
      "Psicólogos, dentistas, médicos e terapeutas. O site transmite credibilidade, apresenta especialidades e converte visitante em paciente agendado — sem você precisar fazer nada.",
    features: [
      "Bio + CRM/CRP/CRO em destaque",
      "Especialidades detalhadas",
      "Galeria antes/depois",
      "Formulário de agendamento",
      "Depoimentos de pacientes",
    ],
    color: "#7C3AED",
  },
  {
    emoji: "📱",
    title: "Landing Pages de Alta Conversão",
    description:
      "Uma página, um objetivo: fazer o visitante agir. CTA claro, copy afiada, carregamento rápido.",
    features: [
      "Copywriting orientado a conversão",
      "Seção de benefícios e diferenciais",
      "Prova social (depoimentos, números)",
      "Múltiplos CTAs estratégicos",
      "Velocidade máxima",
    ],
    color: "#2563EB",
  },
  {
    emoji: "🔧",
    title: "Manutenção e Melhorias",
    description:
      "Site lento, feio no celular ou desatualizado? Faço diagnóstico completo e entrego melhor do que estava.",
    features: [
      "Auditoria completa",
      "Correção de bugs",
      "Otimização mobile",
      "Atualização de conteúdo",
      "Melhoria de performance",
    ],
    color: "#06B6D4",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 bg-[#111111]">
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
            O que eu <span className="gradient-text">entrego</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base max-w-xl mx-auto">
            Sem template. Feito do zero para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative bg-[#161616] rounded-2xl p-6 sm:p-8 border border-white/[0.08] group overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}20, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <span className="text-3xl block mb-4">{service.emoji}</span>
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[#A1A1AA]"
                    >
                      <span style={{ color: service.color }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
