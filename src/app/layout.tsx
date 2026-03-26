import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}
      >
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2139129749825612');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=2139129749825612&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <div className="noise-overlay" />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
