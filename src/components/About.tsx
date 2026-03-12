"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript",
  "Node.js",
  "Figma",
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-2xl blur-2xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)",
                }}
              />
              <div className="spinning-border">
                <div className="relative z-10 w-64 h-72 sm:w-80 sm:h-96 rounded-2xl bg-[#161616] overflow-hidden">
                  <img
                    src="/img.pages/Foto%20Perfil.jpeg"
                    alt="Adriel — Desenvolvedor Web"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-[family-name:var(--font-jetbrains)] text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1.5 rounded-full mb-4">
              {"< desenvolvedor_web />"}
            </span>

            <h2
              className="font-[family-name:var(--font-jakarta)] font-black text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Não sou só um dev.{" "}
              <span className="gradient-text">
                Sou o parceiro que seu negócio precisava.
              </span>
            </h2>

            <div className="space-y-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Estudo desenvolvimento web há mais de 3 anos e atualmente
                curso o 7º período de Engenharia de Software — unindo teoria
                sólida com prática real criando sites que realmente funcionam
                para quem precisa vender online.
              </p>
              <p>
                Já tenho projetos para diferentes nichos — de tecnologia
                industrial a food, saúde e arquitetura — sempre com foco em
                resultado, prazo e comunicação próxima com o cliente.
              </p>
              <p>
                Enquanto muita gente entrega template genérico, eu entrego uma
                ferramenta feita sob medida pro seu negócio.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/[0.06] text-[#A1A1AA] border border-white/[0.08]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/AdrielCampos134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/[0.15] hover:border-white/30 transition-colors min-h-[48px]"
              >
                <FaGithub size={16} />
                Ver GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/adrielcampos134/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/[0.15] hover:border-white/30 transition-colors min-h-[48px]"
              >
                <FaLinkedinIn size={16} />
                Ver LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
