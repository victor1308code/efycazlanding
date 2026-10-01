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
import { ScrollObserver } from "@/components/ScrollObserver/ScrollObserver";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1C23] text-white selection:bg-brand-primary selection:text-slate-950 font-sans">
      <ScrollObserver />
      <Header />
      
      <main id="main-content" className="flex-1 overflow-hidden">
        <div className="fade-in-section"><Hero /></div>
        <div className="fade-in-section delay-100"><Stats /></div>
        
        {/* Carrossel de Texto Contínuo */}
        <div className="fade-in-section mt-16 mb-8"><Marquee /></div>
        
        <div className="fade-in-section"><Benefits /></div>
        <div className="fade-in-section"><Services /></div>
        <div className="fade-in-section"><Comparison /></div>
        <div className="fade-in-section"><About /></div>
        <div className="fade-in-section"><FAQ /></div>
        <div className="fade-in-section"><ContactCTA /></div>
      </main>

      <FloatingCTA />
    </div>
  );
}
