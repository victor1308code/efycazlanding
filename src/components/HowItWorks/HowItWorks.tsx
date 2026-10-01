import React from "react";
import Image from "next/image";
import { MessageSquare, FileSearch, CheckCircle, Rocket, ArrowRight } from "lucide-react";
import { howItWorksSectionData, howItWorksSteps } from "@/data/howItWorks";
import { company } from "@/data/company";
import { assetPath } from "@/utils/assets";

const stepIcons = [MessageSquare, FileSearch, CheckCircle, Rocket];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#1A1C23] relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho com Emblema da Empresa (Estilo Back4You) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="badge-pill mx-auto">
            <div className="relative w-3.5 h-3.5">
              <Image
                src={assetPath("/images/emblema.png")}
                alt="Efycaz"
                fill
                className="object-contain filter invert brightness-200"
                sizes="14px"
              />
            </div>
            <span>{howItWorksSectionData.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {howItWorksSectionData.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {howItWorksSectionData.subtitle}
          </p>
        </div>

        {/* Linha do Tempo / Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((item, index) => {
            const Icon = stepIcons[index] || MessageSquare;

            return (
              <div
                key={item.step}
                className="relative bg-[#2C2F3A] rounded-3xl p-7 sm:p-8 border border-white/10 card-hover-glow transition-all flex flex-col justify-between group overflow-hidden"
              >
                {/* Linha decorativa de progresso no topo */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-deep transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />

                <div>
                  {/* Número e Ícone */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-brand-primary font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-brand-primary flex items-center justify-center text-brand-primary group-hover:text-slate-950 transition-all duration-300 group-hover:scale-105 border border-white/10 group-hover:border-brand-primary shadow-xs">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Tag auxiliar */}
                  {item.highlight && (
                    <span className="inline-block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-2 bg-brand-primary/15 px-3 py-1 rounded-md border border-brand-primary/30">
                      {item.highlight}
                    </span>
                  )}

                  {/* Título do Passo */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">Etapa {index + 1} de 4</span>
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Chamada para iniciar */}
        <div className="mt-14 text-center">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary"
          >
            <span>Iniciar Diagnóstico com a Etapa 01</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
