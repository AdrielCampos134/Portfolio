import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlowCursor from "@/components/GlowCursor";

export default function Home() {
  return (
    <>
      <GlowCursor />
      <Header />
      <main>
        <Hero />
        <Numbers />
        <About />
        <Projects />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
