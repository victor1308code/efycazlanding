"use client";

import React from "react";
import Image from "next/image";
import { Headphones } from "lucide-react";
import { company } from "@/data/company";

export function ContactCTA() {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-[#1E2028] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Principal Unificado no Estilo Back4You */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c2e28] via-[#09221e] to-[#061714] border border-[#45B3A9]/25 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Brilho de fundo sutil */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#45B3A9]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Linha Superior: Logo Animada se movimentando (sem redes sociais) */}
          <div className="flex items-center justify-between pb-8 sm:pb-12">
            <div className="relative w-48 sm:w-60 h-20 sm:h-24">
              <Image
                src="/images/efycaz-logo-animada-teal.svg"
                alt="EfyCaz Contabilidade"
                width={240}
                height={96}
                unoptimized
                priority
                className="w-full h-full object-contain object-left filter drop-shadow-[0_0_20px_rgba(77,182,172,0.3)]"
              />
            </div>
          </div>

          {/* Grid Principal Inferior */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-8 border-t border-white/10">
            
            {/* Coluna 1: Proposta de Valor e Botão de Ação */}
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xl sm:text-2xl font-normal text-slate-100 leading-snug max-w-sm">
                Feito para empresários que buscam crescimento, segurança fiscal e redução de impostos.
              </p>
              <p className="text-sm font-bold text-white tracking-wide">
                EfyCaz Contabilidade
              </p>

              <div className="pt-2">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#128D84] hover:bg-[#19AFA4] text-white transition-all duration-300 shadow-[0_0_20px_rgba(18,141,132,0.35)] hover:shadow-[0_0_30px_rgba(25,175,164,0.5)] active:scale-95 border border-white/20"
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
              <div className="bg-[#051713]/90 rounded-2xl p-6 sm:p-7 border border-white/10 shadow-inner flex flex-col justify-between space-y-6">
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
                  className="rounded-xl border border-white/15 bg-white/5 hover:bg-[#128D84]/20 hover:border-[#45B3A9]/40 p-5 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 group"
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
