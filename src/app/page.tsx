import React from "react";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Stats } from "@/components/Stats/Stats";
import { Marquee } from "@/components/Marquee/Marquee";
import { Services } from "@/components/Services/Services";
import { Benefits } from "@/components/Benefits/Benefits";
import { Comparison } from "@/components/Comparison/Comparison";
import { About } from "@/components/About/About";
import { FAQ } from "@/components/FAQ/FAQ";
import { ContactCTA } from "@/components/ContactCTA/ContactCTA";
import { FloatingCTA } from "@/components/FloatingCTA/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1C23] text-white selection:bg-brand-primary selection:text-slate-950 font-sans">
      <Header />
      
      <main id="main-content" className="flex-1 overflow-hidden">
        <Hero />
        
        {/* Faixa de Estatísticas e Barra em Movimento no fundo do Hero */}
        <div className="relative z-20 bg-gradient-to-b from-[#2B2E3B] via-[#4A4E5E]/20 to-[#ECEEF3] pt-1 pb-0">
          <Stats />
          {/* Barra em movimento ocupando toda a largura na base */}
          <div className="w-full mt-10">
            <Marquee />
          </div>
        </div>
        
        <Benefits />
        <Services />
        <Comparison />
        <About />
        <FAQ />
        <ContactCTA />
      </main>

      <FloatingCTA />
    </div>
  );
}
