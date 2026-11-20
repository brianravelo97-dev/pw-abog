import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { CtaBand, Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FaqJsonLd } from "@/components/JsonLd";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Areas />
        <Process />
        <WhyUs />
        <Team />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <FaqJsonLd />
    </>
  );
}
