import React from "react";
import { ArrowRight, BookOpen, Calendar, Tag } from "lucide-react";
import { company } from "@/data/company";

const articles = [
  {
    id: "regime-tributario",
    category: "Planejamento Tributário",
    date: "Atualizado 2026",
    title: "Como saber se sua empresa está no regime tributário mais econômico",
    summary:
      "Entenda as principais diferenças entre Simples Nacional, Lucro Presumido e Lucro Real, e como um estudo de enquadramento pode reduzir expressivamente a sua guia de impostos.",
    readTime: "4 min de leitura",
  },
  {
    id: "certidao-negativa",
    category: "Conformidade & CND",
    date: "Atualizado 2026",
    title: "Certidão Negativa de Débitos: por que ela é indispensável para o seu CNPJ",
    summary:
      "Descubra como o monitoramento preventivo de certidões evita surpresas na emissão de notas fiscais, perda de contratos importantes e bloqueios cadastrais na Receita Federal.",
    readTime: "3 min de leitura",
  },
  {
    id: "abertura-servicos",
    category: "Gestão Empresarial",
    date: "Atualizado 2026",
    title: "Abertura e estruturação de CNPJ para prestadores de serviços",
    summary:
      "Orientações práticas sobre a escolha do CNAE correto, definição de pró-labore dos sócios e regras essenciais de separação entre finanças pessoais e empresariais.",
    readTime: "5 min de leitura",
  },
];

export function Articles() {
  return (
    <section id="artigos" className="py-24 sm:py-32 bg-[#1A1C23] relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título de Seção Centralizado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 fade-in-section">
          <div className="badge-pill mx-auto">
            <BookOpen className="w-3.5 h-3.5 text-brand-primary" />
            <span>Conteúdo & Conhecimento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Artigos e Orientações para o seu Negócio
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Informações práticas, descomplicadas e diretas ao ponto sobre legislação tributária, gestão e segurança fiscal para empresas.
          </p>
        </div>

        {/* Grid de Cards Simples de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="fade-in-section rounded-3xl bg-[#242631] border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] group"
            >
              <div>
                {/* Metadados: Categoria e Data */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Resumo */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {article.summary}
                </p>
              </div>

              {/* Link Ler Mais */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-white transition-colors"
                >
                  <span>Ler mais</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <span className="text-[11px] text-slate-400">{article.date}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
