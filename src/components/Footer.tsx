import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const linksCol1 = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
];

const linksCol2 = [
  { label: "Preços", href: "#precos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/AdrielCampos134", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/adrielcampos134/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/adriel_cps", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/5566996626237", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] pt-10 pb-6">
      <div className="line-gradient w-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#inicio" className="inline-flex items-center gap-0.5 text-xl font-bold font-[family-name:var(--font-jakarta)] mb-1">
              <span className="gradient-text">Adriel</span>
              <span className="text-white">Dev</span>
            </a>
            <p className="text-[#A1A1AA] text-xs">Desenvolvedor Web Freelancer</p>
          </div>

          {/* Links in 2 columns */}
          <div className="flex gap-12">
            <nav className="flex flex-col gap-2">
              {linksCol1.map((link) => (
                <a key={link.href} href={link.href} className="text-[#A1A1AA] text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-2">
              {linksCol2.map((link) => (
                <a key={link.href} href={link.href} className="text-[#A1A1AA] text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/[0.12] transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#A1A1AA]/70 text-xs">
            © 2025 Adriel Dev — Todos os direitos reservados
          </p>
          <p className="text-[#A1A1AA]/40 text-xs">
            Feito com Next.js, Tailwind e muito café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
