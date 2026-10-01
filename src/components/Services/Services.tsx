import React from "react";
import Image from "next/image";
import {
  Calculator,
  ReceiptText,
  Users,
  Building2,
  FileCheck2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { company } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  ReceiptText,
  Users,
  Building2,
  FileCheck2,
  TrendingUp,
};

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-gradient-to-b from-[#F0F2F6] via-[#F8F9FA] to-[#E9ECF1] relative overflow-hidden">
      {/* Logo Gigante Vetorial Animada Cinza na Lateral com Mais Destaque */}
      <div className="absolute top-1/2 left-[-20%] sm:left-[-10%] -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.22] pointer-events-none select-none">
        <Image
          src="/images/efycaz-logo-animada-cinza.svg"
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
          unoptimized
          className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(160,165,181,0.2)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título de Seção Centralizado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 fade-in-section">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45B3A9]/15 border border-[#45B3A9]/30 text-xs font-bold text-[#1E7068] tracking-wider uppercase">
            <span>Soluções Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Diminuir seu imposto é só o começo
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Primeiro nós organizamos e corrigimos a sua contabilidade. Mas isso é apenas o começo. Nosso trabalho é profissionalizar a rotina financeira da sua empresa com inteligência e estratégia.
          </p>
        </div>

        {/* Layout em Grid de Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Calculator;

            return (
              <div
                key={service.id}
                className="fade-in-section group relative bg-white hover:bg-slate-50/90 rounded-2xl p-8 border border-slate-200/80 hover:border-[#45B3A9] transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Topo do card com tag de número */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#1E7068] bg-[#45B3A9]/15 px-3 py-1 rounded-md border border-[#45B3A9]/30">
                      {service.number}
                    </span>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Título do Serviço */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1E7068] transition-colors">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Elemento gráfico / Ícone abaixo do texto */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#45B3A9]/10 group-hover:bg-[#45B3A9] text-[#1E7068] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs border border-[#45B3A9]/20 group-hover:border-[#45B3A9]">
                    <IconComponent className="w-6 h-6 transition-colors" aria-hidden="true" />
                  </div>

                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E7068] group-hover:text-[#128D84] transition-colors"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

