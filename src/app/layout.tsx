import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Adriel Dev — Desenvolvedor Web Freelancer",
  description:
    "Sites profissionais que vendem. Landing pages, sites para clínicas, restaurantes e empresas. 3 anos e meio de experiência, 6 projetos entregues.",
  keywords: [
    "desenvolvedor web",
    "freelancer",
    "sites profissionais",
    "landing page",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Adriel Dev — Desenvolvedor Web Freelancer",
    description:
      "Sites profissionais que vendem. Do briefing ao ar em tempo recorde.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
