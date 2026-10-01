"use client";

import React from "react";
import Image from "next/image";
import { Headphones } from "lucide-react";
import { company } from "@/data/company";
import { assetPath } from "@/utils/assets";

export function ContactCTA() {
  return (
    <section id="contato" className="pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-[#E2E6EE] via-[#222530] to-[#14161E] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Principal Unificado nas Cores Oficiais da EfyCaz (Grafite Escuro & Teal) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#262A38] via-[#1E232F] to-[#151720] border border-[#45B3A9]/35 p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(69,179,169,0.12)] overflow-hidden">
          
          {/* Brilhos de fundo sutis nas cores oficiais */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#45B3A9]/12 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#45B3A9]/8 rounded-full blur-[110px] pointer-events-none" />

          {/* Logo Gigante Vetorial Animada TEAL de Fundo no Card */}
          <div className="absolute -bottom-16 -right-16 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] opacity-[0.22] pointer-events-none select-none">
            <Image
              src={assetPath("/images/efycaz-logo-animada-teal.svg")}
              alt=""
              aria-hidden="true"
              width={550}
              height={550}
              unoptimized
              className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(69,179,169,0.35)]"
            />
          </div>

          {/* Linha Superior Equilibrada: Marca Completa + Status e Cobertura */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-white/10">
            
            {/* Marca: Logo Vetorial Animada + Nome Oficial da Empresa */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src={assetPath("/images/efycaz-logo-animada-teal.svg")}
                  alt="EfyCaz Contabilidade"
                  width={80}
                  height={80}
                  unoptimized
                  priority
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(77,182,172,0.45)]"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    EfyCaz
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#45B3A9] tracking-normal">
                    Contabilidade
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md font-normal leading-relaxed">
                  Assessoria contábil, fiscal e estratégica de alta precisão para empresas em expansão.
                </p>
              </div>
            </div>

            {/* Lado Direito: Preenchimento Harmônico com Status e Contato Direto */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:justify-end">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#45B3A9] animate-pulse" />
                <span>Atendimento Digital em Todo o Brasil</span>
              </div>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#45B3A9] bg-[#45B3A9]/10 hover:bg-[#45B3A9]/20 border border-[#45B3A9]/30 transition-colors"
              >
                <span>(61) 3613-8796</span>
              </a>
            </div>

          </div>

          {/* Grid Principal Inferior */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-8 sm:pt-10">
            
            {/* Coluna 1: Proposta de Valor e Botão de Ação */}
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xl sm:text-2xl font-normal text-slate-100 leading-snug max-w-sm">
                Feito para empresários que buscam crescimento, segurança fiscal e redução de impostos.
              </p>

              <div className="pt-2">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-[#45B3A9] to-[#2B9E93] hover:from-[#4DB6AC] hover:to-[#36AAA0] text-white transition-all duration-300 shadow-[0_0_25px_rgba(69,179,169,0.4)] hover:shadow-[0_0_35px_rgba(77,182,172,0.6)] active:scale-95 border border-white/20"
                >
                  <span>Agendar avaliação</span>
                  <span className="font-bold text-base ml-0.5">›</span>
                </a>
              </div>
            </div>

            {/* Coluna 2: Menu */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wider mb-4">
                Menu
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">Início</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">Quem somos</a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">Soluções</a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-white transition-colors">Diferenciais</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Suporte & Institucional */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wider mb-4">
                Suporte
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">Perguntas frequentes</a>
                </li>
                <li>
                  <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Suporte WhatsApp
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">Seg a Sex • 08h às 18h</span>
                </li>
                <li>
                  <span className="text-slate-400">Águas Lindas de Goiás - GO</span>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Card de Contato Direto */}
            <div className="lg:col-span-4">
              <div className="bg-[#181A24]/90 rounded-2xl p-6 sm:p-7 border border-white/10 shadow-inner flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Contato</h4>
                  <a
                    href={`mailto:${company.primaryEmail}`}
                    className="text-sm text-slate-300 hover:text-brand-primary transition-colors break-all"
                  >
                    {company.primaryEmail}
                  </a>
                </div>

                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 hover:bg-[#45B3A9]/15 hover:border-[#45B3A9]/50 p-5 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 group"
                >
                  <Headphones className="w-6 h-6 text-[#45B3A9] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white">Fale conosco</span>
                </a>
              </div>
            </div>

          </div>

          {/* Rodapé com Informações Oficiais e CNPJ */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
            <span>© 2026 EfyCaz Contabilidade. Todos os direitos reservados.</span>
            <span>CNPJ: {company.cnpj} • CNAE: {company.cnae}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
