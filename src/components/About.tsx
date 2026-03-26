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
    <section id="sobre" className="relative py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Fake Terminal replacing Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start w-full"
          >
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-2xl blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(147,51,234,0.4), transparent 70%)",
                }}
              />
              <div className="spinning-border w-full">
                <div className="relative z-10 w-full h-72 sm:h-80 rounded-2xl bg-[#0F0F0F] overflow-hidden flex flex-col shadow-2xl">
                  {/* Window Controls */}
                  <div className="flex items-center px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.05]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-xs text-[#888888] font-mono">
                      adriel@portfolio:~
                    </div>
                  </div>
                  {/* Terminal Content */}
                  <div className="flex-1 p-5 font-mono text-sm text-[#A1A1AA] flex flex-col gap-3">
                    <div>
                      <span className="text-purple-400">adriel</span>
                      <span className="text-white">@portfolio</span>
                      <span className="text-gray-500 px-1">~</span>$ whoami
                    </div>
                    <div className="text-gray-300">
                      {">"} Desenvolvedor Full-stack focado no Front-end
                    </div>
                    <div className="text-gray-300">
                      {">"} Freelancer há 3+ anos
                    </div>
                    <div className="mt-2">
                      <span className="text-purple-400">adriel</span>
                      <span className="text-white">@portfolio</span>
                      <span className="text-gray-500 px-1">~</span>$ cat skills.json
                    </div>
                    <div className="text-[#06B6D4]">
                      {'{ "stack": ["Next.js", "React", "Tailwind", "Motion"] }'}
                    </div>
                    <div className="mt-2 text-green-400 flex items-center">
                      <span className="text-purple-400 mr-2">adriel</span>
                      <span className="text-white mr-1">@portfolio</span>
                      <span className="text-gray-500 px-1 mr-2">~</span>$ 
                      <span className="w-2 h-4 bg-gray-400 ml-1 animate-pulse inline-block"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-[family-name:var(--font-jetbrains)] text-purple-400 bg-purple-400/10 px-3 py-1.5 rounded-full mb-4 border border-purple-400/20">
              {"< desenvolvedor_web />"}
            </span>

            <h2
              className="font-[family-name:var(--font-jakarta)] font-black text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Não sou só um dev.{" "}
              <span className="gradient-text">
                Sou o parceiro que faz a coisa acontecer.
              </span>
            </h2>

            <div className="space-y-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Estudo programação há mais de 3 anos e estou no 7º período de 
                Engenharia de Software. Aprendi na prática que um site bonito 
                é legal, mas um site que vende é o que importa.
              </p>
              <p>
                Já fiz projetos para arquitetura, clínicas, indústrias e 
                restaurantes. Gosto de jogar limpo, cumprir os prazos e manter 
                a comunicação fácil — nada daquelas agências que somem com o 
                seu dinheiro e entregam 3 meses depois.
              </p>
              <p>
                De mim, você nunca vai receber um template pronto. Faço o design 
                sob medida e escrevo o código linha a linha. Assim, você tem o 
                controle total do que está no ar.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
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
