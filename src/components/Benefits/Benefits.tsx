import React from "react";
import Image from "next/image";
import { Check, Shield, PieChart, MessageCircle, AlertCircle } from "lucide-react";

const benefitsData = [
  {
    id: "benefit-1",
    tag: "01 • Centralização & Dados",
    title: "Controle seus dados fiscais e financeiros em um só lugar",
    description:
      "A EfyCaz ajuda você a centralizar notas fiscais, despesas, faturamento e tributos em um painel claro. Tenha visão diária das entradas, saídas e previsibilidade de caixa sem planilhas confusas.",
    points: [
      "Notas fiscais organizadas e apuração automática",
      "Visibilidade clara de faturamento e lucro líquido",
      "Relatórios gerenciais descomplicados para o seu negócio",
    ],
  },
  {
    id: "benefit-2",
    tag: "02 • Elisão Fiscal & Economia",
    title: "Pague a menor alíquota legal com respaldo tributário",
    description:
      "Cada segmento possui regras e prerrogativas específicas. Nosso time analisa seu CNAE e estrutura societária para garantir que sua empresa não pague nenhum centavo a mais do que o estritamente legal.",
    points: [
      "Análise minuciosa de regime (Simples, Presumido ou Real)",
      "Revisão preventiva de bitributações e créditos",
      "Segurança jurídica contra autuações e notificações",
    ],
  },
  {
    id: "benefit-3",
    tag: "03 • Prevenção & CND",
    title: "Descubra pendências e desvios antes que virem problemas",
    description:
      "Monitoramos ativamente certidões negativas (CND) na Receita Federal, Estado e Município, além de conformidade no eSocial, para que seu CNPJ esteja sempre blindado e pronto para emitir notas e fechar contratos.",
    points: [
      "Auditoria preventiva de certidões e débitos",
      "Cumprimento rigoroso de todas as obrigações acessórias",
      "Tranquilidade para participar de licitações e parcerias",
    ],
  },
  {
    id: "benefit-4",
    tag: "04 • Suporte Dedicado",
    title: "Fale diretamente com um consultor pelo WhatsApp",
    description:
      "Nada de tickets que demoram dias para serem respondidos. Na EfyCaz, você conversa diretamente com nossa equipe especializada no WhatsApp oficial para tirar dúvidas rápidas e receber suas guias com tranquilidade.",
    points: [
      "Respostas rápidas para emissão de guias e notas",
      "Especialistas em plantão durante horário comercial",
      "Suporte humanizado e próximo ao empreendedor",
    ],
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 sm:py-32 bg-gradient-to-b from-[#ECEEF3] via-[#F5F7FA] to-[#F0F2F6] overflow-hidden relative">
      {/* Logo Gigante Vetorial Animada Cinza com Mais Destaque no Fundo Claro */}
      <div className="absolute top-1/2 right-[-20%] sm:right-[-10%] -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.22] pointer-events-none select-none">
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
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20 fade-in-section">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45B3A9]/15 border border-[#45B3A9]/30 text-xs font-bold text-[#1E7068] tracking-wider uppercase">
            <span>Diferenciais EfyCaz</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Seja o CNPJ bem organizado que o mercado exige de você
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Apresentamos uma gestão contábil moderna que protege seu patrimônio e libera seu tempo para você cuidar exclusivamente do crescimento da sua empresa.
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {benefitsData.map((benefit, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={benefit.id}
                className={"flex flex-col md:flex-row items-center gap-10 lg:gap-20 fade-in-section " + (isReversed ? "md:flex-row-reverse" : "")}
              >
                <div className="flex-1 w-full space-y-6 md:space-y-8">
                  <span className="inline-block font-mono text-sm font-extrabold text-[#1E7068] tracking-widest uppercase">
                    {benefit.tag}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {benefit.description}
                  </p>

                  <ul className="space-y-4 pt-2">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[#45B3A9]/15 flex items-center justify-center shrink-0 border border-[#45B3A9]/30">
                          <Check className="w-3 h-3 text-[#1E7068]" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 font-medium">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full relative">
                  <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#2C2F3A] to-[#1A1C23] border border-white/10 shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay" />
                    <div className="absolute right-[-10%] top-[-10%] w-[150%] h-[150%] bg-[#45B3A9]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#45B3A9]/10 transition-colors duration-700" />
                    
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      {index === 0 && (
                        <div className="w-full h-full bg-[#252732] rounded-xl border border-white/5 p-6 flex flex-col shadow-inner">
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                              <PieChart className="w-5 h-5 text-brand-primary" />
                            </div>
                            <span className="text-[10px] text-emerald-400 font-semibold">+18.4% vs mês anterior</span>
                          </div>
                          <div className="flex-1 flex items-end gap-3">
                            <div className="w-1/6 h-[30%] bg-white/5 rounded-t-sm" />
                            <div className="w-1/6 h-[45%] bg-white/5 rounded-t-sm" />
                            <div className="w-1/6 h-[60%] bg-white/5 rounded-t-sm" />
                            <div className="w-1/6 h-[50%] bg-white/5 rounded-t-sm" />
                            <div className="w-1/6 h-[85%] bg-brand-primary/80 rounded-t-sm shadow-[0_0_15px_rgba(79,193,189,0.3)]" />
                            <div className="w-1/6 h-[70%] bg-brand-primary/40 rounded-t-sm" />
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="w-full h-full bg-[#252732] rounded-xl border border-white/5 p-6 flex flex-col justify-center gap-4">
                          <div className="flex items-center gap-4 p-4 rounded-lg bg-[#2C2F3A]/50 border border-brand-primary/20">
                            <Shield className="w-8 h-8 text-brand-primary shrink-0" />
                            <div>
                              <p className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">Simulação</p>
                              <p className="text-sm text-slate-200 font-medium">Economia estimada: até 60% na guia mensal</p>
                            </div>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="w-full h-full bg-[#252732] rounded-xl border border-white/5 p-6 flex flex-col gap-3">
                          <span className="text-xs font-bold text-slate-400">Certidões & Regularidade</span>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <span className="text-slate-200">Receita Federal (CND)</span>
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <span className="text-slate-200">FGTS (CRF)</span>
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <span className="text-slate-200">Certidão Trabalhista (CNDT)</span>
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="w-full h-full bg-[#252732] rounded-xl border border-white/5 p-6 flex flex-col gap-4">
                          <div className="bg-[#1A1C23] rounded-lg p-4 rounded-tl-none border border-white/5 w-[85%]">
                            <p className="text-sm text-slate-300">Olá! As guias fiscais e o pró-labore do mês já foram conferidos e enviados.</p>
                          </div>
                          <div className="flex items-center gap-2 self-end">
                            <div className="flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-xs border border-brand-primary/20">
                              <MessageCircle className="w-3.5 h-3.5" />
                              <p className="font-bold">Tempo de resposta médio: minutos</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-4 right-6 flex items-center gap-2 opacity-30">
                      <div className="w-3 h-3 rounded-full bg-brand-primary" />
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase">Padrão EfyCaz</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

