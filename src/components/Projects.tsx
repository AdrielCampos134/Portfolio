"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Pesoline Tecnologia",
    category: "Tecnologia B2B",
    description:
      "Site institucional para empresa de calibração e manutenção de balanças industriais com certificação RBC. Captação de leads B2B com foco em credibilidade técnica.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "https://www.pesolinetecnologia.com/",
    image: "/img.pages/www.pesolinetecnologia.com_.png",
    highlights: ["B2B industrial", "Certificação RBC", "Geração de leads"],
    color: "#2563EB",
    badge: "Tecnologia",
    filterCat: "Tecnologia",
    delivered: true,
  },
  {
    name: "Brasa Burger",
    category: "Food & Restaurante",
    description:
      "Exemplo de site para hamburgueria artesanal com cardápio interativo por categoria, integração WhatsApp em cada item, galeria com lightbox, mapa e horários.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://brasaburger.vercel.app/",
    image: "/img.pages/brasaburger.vercel.app_.png",
    highlights: ["Cardápio filtrável", "Multi-página", "Dark theme"],
    color: "#F59E0B",
    badge: "Food",
    filterCat: "Food",
    delivered: false,
  },
  {
    name: "Prime Motors",
    category: "Negócios Premium",
    description:
      "Exemplo de showroom de seminovos premium. Fichas individuais de veículos, estoque filtrável, consultoria e formulário de proposta.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://primemotors-adriel.vercel.app/",
    image: "/img.pages/primemotors-adriel.vercel.app_.png",
    highlights: ["Fichas de veículos", "Estoque filtrável", "Dark luxo"],
    color: "#EF4444",
    badge: "Negócios",
    filterCat: "Negócios",
    delivered: false,
  },
  {
    name: "Ana Costa Arquitetura",
    category: "Arquitetura",
    description:
      "Exemplo de site para arquiteta com portfólio de projetos residenciais e corporativos, blog e linguagem visual minimalista.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "https://anacosta.vercel.app/",
    image: "/img.pages/anacosta.vercel.app_.png",
    highlights: ["Portfólio visual", "Blog integrado", "Design editorial"],
    color: "#A3A3A3",
    badge: "Arquitetura",
    filterCat: "Arquitetura",
    delivered: false,
  },
  {
    name: "Dra. Thayline — Psicóloga",
    category: "Saúde & Bem-estar",
    description:
      "Exemplo de site para psicóloga clínica com especialidades, depoimentos de pacientes e formulário de agendamento via WhatsApp.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://drathayline.vercel.app/",
    image: "/img.pages/drathayline.vercel.app_.png",
    highlights: ["Multi-especialidade", "Agendamento WPP", "Design acolhedor"],
    color: "#7C3AED",
    badge: "Saúde",
    filterCat: "Saúde",
    delivered: false,
  },
  {
    name: "Dr. Carlos Mendes — Odontologia",
    category: "Saúde & Odontologia",
    description:
      "Exemplo de site para consultório odontológico com galeria de antes/depois, serviços detalhados com preços e formulário de agendamento.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "https://drcarlos.vercel.app/",
    image: "/img.pages/drcarlos.vercel.app_.png",
    highlights: ["Galeria antes/depois", "Serviços com preço", "Formulário"],
    color: "#06B6D4",
    badge: "Saúde",
    filterCat: "Saúde",
    delivered: false,
  },
];

const categories = [
  "Todos",
  "Food",
  "Saúde",
  "Negócios",
  "Tecnologia",
  "Arquitetura",
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#161616] rounded-2xl overflow-hidden border border-white/[0.08] group"
    >
      {/* Glow on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{ background: `radial-gradient(circle, ${project.color}30, transparent 70%)` }}
      />

      {/* Preview area */}
      <div className="relative w-full aspect-video bg-[#111111] overflow-hidden">
        {/* Screenshot thumbnail (Optimized) */}
        <Image
          src={project.image}
          alt={`Screenshot de ${project.name}`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className="px-3 py-1 text-xs font-semibold rounded-full text-white"
            style={{ background: `${project.color}CC` }}
          >
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-[family-name:var(--font-jakarta)] font-bold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-medium rounded-full bg-white/[0.06] text-[#A1A1AA] border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 mb-4">
          {project.highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-2 text-xs text-[#A1A1AA]"
            >
              <span style={{ color: project.color }}>✦</span>
              {h}
            </div>
          ))}
        </div>

        {/* Status badge */}
        <div className={`flex items-center gap-1.5 text-xs mb-4 ${project.delivered ? "text-emerald-400" : "text-blue-400"}`}>
          <span>{project.delivered ? "✅" : "🔹"}</span>
          <span>{project.delivered ? "Projeto entregue — no ar" : "Projeto demonstrativo"}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white min-h-[44px]"
            style={{ background: `${project.color}CC` }}
          >
            Ver site ao vivo ↗
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.filterCat === active);

  return (
    <section id="projetos" className="relative py-24 bg-[#0A0A0A] dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2
            className="font-[family-name:var(--font-jakarta)] font-black text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Projetos que{" "}
            <span className="gradient-text">provam o que faço</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base max-w-xl mx-auto">
            Sites reais, no ar, que mostram o que sei fazer.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[40px] ${
                active === cat
                  ? "text-white"
                  : "bg-white/[0.04] text-[#A1A1AA] hover:bg-white/[0.08]"
              }`}
              style={
                active === cat
                  ? { background: "var(--grad-main)" }
                  : undefined
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          className="text-center mt-16"
        >
          <p className="text-white text-lg font-[family-name:var(--font-jakarta)] font-bold mb-6">
            Quer um site assim para o seu negócio?
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/5566996626237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold min-h-[48px]"
            style={{ background: "var(--grad-main)" }}
          >
            💬 Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
