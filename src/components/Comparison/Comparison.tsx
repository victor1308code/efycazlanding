import React from "react";
import Image from "next/image";
import { Check, X, ShieldAlert, Sparkles, ArrowRight, Zap } from "lucide-react";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";
import { assetPath } from "@/utils/assets";

export function Comparison() {
  return (
    <section
      id="comparativo"
      className="pt-16 lg:pt-20 pb-20 lg:pb-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1E2028 0%, #1E2028 58%, #272C3B 68%, #3C4254 77%, #5E667B 84%, #8E97AB 91%, #C6CDD9 96%, #F5F7FA 100%)",
      }}
    >
      {/* Logo Gigante Vetorial Animada VERDE no fundo escuro com Mais Destaque */}
      <div className="absolute top-[38%] left-[-15%] sm:left-[-8%] -translate-y-1/2 w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] opacity-[0.25] pointer-events-none select-none">
        <Image
          src={assetPath("/images/efycaz-logo-animada-teal.svg")}
          alt=""
          aria-hidden="true"
          width={950}
          height={950}
          unoptimized
          className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(69,179,169,0.35)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção no estilo Back4You */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45B3A9]/15 border border-[#45B3A9]/40 text-xs font-bold uppercase tracking-wider text-[#45B3A9] shadow-xs backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-[#45B3A9]" aria-hidden="true" />
            <span>Transparência & Escolha Consciente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
            Você confia na sua atual contabilidade?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Muitos empresários só descobrem que a contabilidade anterior estava cometendo erros quando recebem uma notificação fiscal ou percebem que passaram anos recolhendo impostos além do necessário.
          </p>
        </div>

        {/* Matriz Comparativa Lado a Lado (Back4You Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Contabilidade Tradicional */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    O modelo comum
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                    Contabilidade Tradicional
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Foco exclusivo em burocracia básica e emissão de guias, sem visão de negócio ou proatividade.
              </p>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Limita-se a gerar e enviar guias de impostos nos últimos dias do mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Atendimento lento por e-mails formais e abertura de chamados demorados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Não analisa se o seu enquadramento tributário ainda é o mais econômico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Linguagem excessivamente técnica que deixa o empresário no escuro sobre seus números</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Trata sua empresa como apenas mais uma pasta em um arquivo burocrático</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-rose-600 font-semibold italic">
              Resultado: Mais impostos pagos, falta de clareza e insegurança fiscal.
            </div>
          </div>

          {/* Card 2: EfyCaz Contabilidade (Destaque Premium Branco com borda Verde) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border-2 border-[#45B3A9] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Marca d'água sutil do brasão no fundo */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.06] pointer-events-none select-none">
              <Image
                src={assetPath("/images/emblema.png")}
                alt="EfyCaz Emblema"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#128D84] px-3.5 py-1 rounded-full shadow-xs">
                    Padrão EfyCaz
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                    Com a EfyCaz Contabilidade
                  </h3>
                </div>
                <div className="relative w-12 h-12 rounded-2xl bg-[#45B3A9]/15 border border-[#45B3A9]/40 flex items-center justify-center shrink-0 p-2">
                  <Image
                    src={assetPath("/images/efycaz-logo-header.svg")}
                    alt="EfyCaz"
                    fill
                    className="object-contain"
                    sizes="36px"
                  />
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-8 leading-relaxed font-normal">
                Inteligência contábil, proximidade e planejamento estratégico para proteger seu caixa e impulsionar seu crescimento.
              </p>

              <ul className="space-y-4 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#128D84] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong className="text-slate-900">Planejamento Tributário Ativo:</strong> Análise individualizada para reduzir impostos dentro da lei</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#128D84] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong className="text-slate-900">Atendimento Ágil no WhatsApp:</strong> Comunicação rápida e direta com profissionais capacitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#128D84] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong className="text-slate-900">Acompanhamento Preventivo de CND:</strong> Certidões e obrigações fiscalizadas para blindar seu CNPJ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#128D84] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong className="text-slate-900">Relatórios Descomplicados:</strong> Informações claras e úteis que orientam a tomada de decisões</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#128D84] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong className="text-slate-900">Migração Descomplicada:</strong> Cuidamos de todo o processo de troca sem você ter atrito com o contador anterior</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-[#128D84]">
                Mais clareza, economia legal e segurança.
              </span>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#128D84] hover:bg-[#19AFA4] text-white transition-all shadow-md active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Migrar para a EfyCaz</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
