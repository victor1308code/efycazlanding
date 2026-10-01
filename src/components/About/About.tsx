import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, MapPin, Building, Check } from "lucide-react";
import { aboutSectionData } from "@/data/about";
import { company } from "@/data/company";
import { assetPath } from "@/utils/assets";

export function About() {
  return (
    <section id="sobre" className="pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 bg-gradient-to-b from-[#F5F7FA] via-[#F8F9FA] to-[#ECEEF3] relative overflow-hidden">
      {/* Logo Gigante Vetorial Animada Cinza com Mais Destaque no Fundo Claro */}
      <div className="absolute top-1/2 right-[-18%] sm:right-[-10%] -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.22] pointer-events-none select-none">
        <Image
          src={assetPath("/images/efycaz-logo-animada-cinza.svg")}
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
          unoptimized
          className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(160,165,181,0.2)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Identidade Institucional & Moldura com o Logo Oficial */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Moldura do Bloco Visual Institucional (Card Escuro Âncora sobre o fundo claro) */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#242733] via-[#2B2E3B] to-[#1E2028] p-8 sm:p-10 text-white shadow-2xl border border-white/10 overflow-hidden">
                
                {/* Marca d'água animada do Emblema */}
                <div className="absolute -right-10 -bottom-10 w-52 h-52 opacity-10 pointer-events-none select-none">
                  <Image
                    src={assetPath("/images/emblema.png")}
                    alt="Símbolo EfyCaz"
                    fill
                    className="object-contain filter invert brightness-200"
                    sizes="208px"
                  />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Selo e Logo Oficial da EfyCaz */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-brand-primary/40 p-2.5 flex items-center justify-center shrink-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={assetPath("/images/efycaz-logo-header.svg")}
                          alt="Emblema EfyCaz"
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-xl font-extrabold text-white block">EfyCaz</span>
                      <span className="text-xs font-semibold text-[#45B3A9] tracking-wider uppercase">Contabilidade</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#45B3A9]">
                      Institucional & Registro Oficial
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {company.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      {aboutSectionData.officialData.cnaeDesc}
                    </p>
                  </div>

                  {/* Dados Cadastrais Verificados */}
                  <div className="pt-4 border-t border-white/15 space-y-3 text-xs text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Building className="w-4 h-4 text-[#45B3A9] shrink-0" />
                      <span>CNPJ: <strong className="font-semibold text-white">{company.cnpj}</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-[#45B3A9] shrink-0" />
                      <span className="text-emerald-400 font-semibold">{aboutSectionData.officialData.status}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#45B3A9] shrink-0 mt-0.5" />
                      <span>{company.address.full}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-dashed border-[#45B3A9]/30 text-center">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Sede estruturada em Águas Lindas de Goiás com capacidade para atendimento presencial e digital.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito: Texto Institucional Neutro & Pilares */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45B3A9]/15 border border-[#45B3A9]/30 text-xs font-bold text-[#1E7068] tracking-wider uppercase">
              <span>{aboutSectionData.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {aboutSectionData.title}
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
              <p>{aboutSectionData.paragraph1}</p>
              <p>{aboutSectionData.paragraph2}</p>
            </div>

            {/* Pilares Institucionais com Cards Claros */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              {aboutSectionData.pillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#45B3A9] transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1E7068] shrink-0" aria-hidden="true" />
                    <h4 className="text-sm font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Secundário Pílula */}
            <div className="pt-2">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-[#45B3A9] to-[#2B9E93] hover:from-[#4DB6AC] hover:to-[#36AAA0] text-white transition-all shadow-[0_0_20px_rgba(69,179,169,0.3)] hover:shadow-[0_0_25px_rgba(77,182,172,0.45)] active:scale-95"
              >
                <span>Falar com a Equipe EfyCaz</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  →
                </span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
