import React from "react";
import Image from "next/image";
import { Check, X, ShieldAlert, Sparkles, ArrowRight, Zap } from "lucide-react";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";

export function Comparison() {
  return (
    <section id="comparativo" className="py-20 lg:py-28 bg-[#1A1C23] relative overflow-hidden">
      {/* Logo Gigante Vetorial Animada Cinza na Lateral Esquerda */}
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
      {/* Background orbs e grid sutil */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção no estilo Back4You */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="badge-pill mx-auto">
            <Zap className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
            <span>Transparência & Escolha Consciente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Você confia na sua atual contabilidade?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Muitos empresários só descobrem que a contabilidade anterior estava cometendo erros quando recebem uma notificação fiscal ou percebem que passaram anos recolhendo impostos além do necessário.
          </p>
        </div>

        {/* Matriz Comparativa Lado a Lado (Back4You Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Contabilidade Tradicional */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#1A1C23] border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400/90 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                    O modelo comum
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                    Contabilidade Tradicional
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                Foco exclusivo em burocracia básica e emissão de guias, sem visão de negócio ou proatividade.
              </p>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Limita-se a gerar e enviar guias de impostos nos últimos dias do mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Atendimento lento por e-mails formais e abertura de chamados demorados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Não analisa se o seu enquadramento tributário ainda é o mais econômico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Linguagem excessivamente técnica que deixa o empresário no escuro sobre seus números</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Trata sua empresa como apenas mais uma pasta em um arquivo burocrático</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 italic">
              Resultado: Mais impostos pagos, falta de clareza e insegurança fiscal.
            </div>
          </div>

          {/* Card 2: EfyCaz Contabilidade (Destaque Premium) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#252834] to-[#20222B] border-2 border-brand-primary flex flex-col justify-between relative overflow-hidden shadow-elevated glow-turquoise-sm">
            {/* Marca d'água sutil do brasão no fundo */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.07] pointer-events-none select-none">
              <Image
                src="/images/emblema.png"
                alt="EfyCaz Emblema"
                fill
                className="object-contain filter invert"
                sizes="192px"
              />
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-primary/30">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-brand-primary px-3 py-1 rounded-full shadow-xs">
                    Padrão EfyCaz
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                    Com a EfyCaz Contabilidade
                  </h3>
                </div>
                <div className="relative w-12 h-12 rounded-2xl bg-brand-primary/15 border border-brand-primary/40 flex items-center justify-center shrink-0 p-2">
                  <Image
                    src="/images/emblema.png"
                    alt="EfyCaz"
                    fill
                    className="object-contain filter invert brightness-200"
                    sizes="36px"
                  />
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-8 leading-relaxed font-normal">
                Inteligência contábil, proximidade e planejamento estratégico para proteger seu caixa e impulsionar seu crescimento.
              </p>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Planejamento Tributário Ativo:</strong> Análise individualizada para reduzir impostos dentro da lei</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Atendimento Ágil no WhatsApp:</strong> Comunicação rápida e direta com profissionais capacitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Acompanhamento Preventivo de CND:</strong> Certidões e obrigações fiscalizadas para blindar seu CNPJ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Relatórios Descomplicados:</strong> Informações claras e úteis que orientam a tomada de decisões</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Migração Descomplicada:</strong> Cuidamos de todo o processo de troca sem você ter atrito com o contador anterior</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-semibold text-brand-primary">
                Mais clareza, economia legal e segurança.
              </span>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-brand-primary hover:bg-brand-primary-hover text-slate-950 transition-all shadow-sm active:scale-95 glow-turquoise-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                <span>Migrar para a EfyCaz</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
