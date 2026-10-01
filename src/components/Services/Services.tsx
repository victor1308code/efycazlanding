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
    <section id="servicos" className="py-24 sm:py-32 bg-[#1A1C23] relative overflow-hidden">
      {/* Logo Gigante Vetorial Animada Cinza na Lateral */}
      <div className="absolute top-1/2 left-[-20%] sm:left-[-12%] -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.05] pointer-events-none select-none">
        <Image
          src="/images/efycaz-logo-animada-cinza.svg"
          alt="EfyCaz"
          width={900}
          height={900}
          unoptimized
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título de Seção Centralizado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 fade-in-section">
          <div className="badge-pill mx-auto">
            <span>Soluções Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Diminuir seu imposto é só o começo
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
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
                className="fade-in-section group relative bg-[#242631] hover:bg-[#2A2D3A] rounded-2xl p-8 border border-white/10 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Topo do card com tag de número */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-md border border-brand-primary/30">
                      {service.number}
                    </span>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Título do Serviço */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Elemento gráfico / Ícone abaixo do texto */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-brand-primary text-brand-primary group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm border border-white/10 group-hover:border-brand-primary">
                    <IconComponent className="w-6 h-6 transition-colors" aria-hidden="true" />
                  </div>

                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary group-hover:text-white transition-colors"
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

