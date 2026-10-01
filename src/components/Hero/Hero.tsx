import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-40 bg-gradient-to-b from-[#1C1E26] via-[#242733] to-[#2B2E3B] overflow-hidden flex items-center min-h-[85vh]"
    >
      {/* Background sutil e sofisticado */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#45B3A9]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* LOGO GIGANTE EM SVG ANIMADO VERDE NO FUNDO COM MAIOR DESTAQUE */}
      <div className="absolute top-1/2 right-[-8%] sm:right-[-4%] lg:right-[1%] -translate-y-1/2 w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] lg:w-[1000px] lg:h-[1000px] opacity-[0.25] pointer-events-none select-none">
        <Image
          src="/images/efycaz-logo-animada-teal.svg"
          alt="EfyCaz Contabilidade"
          width={1000}
          height={1000}
          unoptimized
          priority
          className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(69,179,169,0.35)]"
        />
      </div>

      {/* Transição suave em degradê na base do Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#2B2E3B] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-3xl space-y-6 text-left fade-in-section">
          
          {/* Título Principal com Marca em Destaque Animado */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            <span className="efycaz-highlight-text">EfyCaz</span>: a contabilidade que cuida do seu imposto para{" "}
            <span className="text-[#45B3A9]">
              sua empresa lucrar mais.
            </span>
          </h1>

          {/* Subtítulo Acolhedor e Direto */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Cansado de falar com robôs e pagar guias sem entender? Na <strong className="text-white font-semibold">EfyCaz Contabilidade</strong>, você tem contadores especialistas que acompanham seu dia a dia pelo WhatsApp, reduzem sua carga tributária e mantêm seu CNPJ 100% blindado.
          </p>

          {/* Chamada para Ação (CTAs Comerciais) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-[#45B3A9] hover:bg-[#3CA096] text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group text-center"
            >
              <WhatsAppIcon className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              <span>Falar com um contador agora</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all duration-200 text-center"
            >
              <span>Conhecer nossas soluções</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>
          </div>

          {/* Redutores de Fricção / Garantias */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#45B3A9] shrink-0" />
              <span>Diagnóstico tributário gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#45B3A9] shrink-0" />
              <span>Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#45B3A9] shrink-0" />
              <span>Troca de contador sem atrito</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
