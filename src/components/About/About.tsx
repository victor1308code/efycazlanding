import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, MapPin, Building, Award, Check } from "lucide-react";
import { aboutSectionData } from "@/data/about";
import { company } from "@/data/company";

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#1A1C23] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 -ml-24 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Identidade Institucional & Moldura com o Logo Oficial */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Moldura do Bloco Visual Institucional */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#1A1C23] via-brand-deep to-brand-dark p-8 sm:p-10 text-white shadow-elevated border-2 border-brand-primary/30 overflow-hidden glow-turquoise-sm">
                
                {/* Marca d'água animada do Emblema */}
                <div className="absolute -right-10 -bottom-10 w-52 h-52 opacity-10 pointer-events-none animate-float-slow select-none">
                  <Image
                    src="/images/emblema.png"
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
                          src="/images/emblema.png"
                          alt="Emblema EfyCaz"
                          fill
                          className="object-contain filter invert brightness-200"
                          sizes="64px"
                        />
                      </div>
                    </div>

                    <div className="relative h-10 w-36">
                      <Image
                        src="/images/logo-dark.png"
                        alt="EfyCaz Contabilidade"
                        fill
                        className="object-contain object-left"
                        sizes="144px"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
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
                      <Building className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>CNPJ: <strong className="font-semibold text-white">{company.cnpj}</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-brand-primary shrink-0" />
                      <span className="text-emerald-400 font-semibold">{aboutSectionData.officialData.status}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{company.address.full}</span>
                    </div>
                  </div>

                  {/* Placeholder de Foto da Equipe ou Sede */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-dashed border-brand-primary/30 text-center">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Sede estruturada em Águas Lindas de Goiás com capacidade para atendimento presencial e digital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Flutuante de Confiança (Animado) */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 bg-[#2C2F3A] p-4 rounded-2xl shadow-elevated border border-brand-primary/40 items-center gap-3.5 animate-float-reverse text-white glow-turquoise-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Segurança & Ética</p>
                  <p className="text-[11px] text-brand-primary font-semibold">Profissionais Registrados</p>
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito: Texto Institucional Neutro & Pilares */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="badge-pill">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/images/emblema.png"
                  alt="EfyCaz"
                  fill
                  className="object-contain filter invert brightness-200"
                  sizes="14px"
                />
              </div>
              <span>{aboutSectionData.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {aboutSectionData.title}
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-normal">
              <p>{aboutSectionData.paragraph1}</p>
              <p>{aboutSectionData.paragraph2}</p>
            </div>

            {/* Pilares Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {aboutSectionData.pillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-2xl bg-[#2C2F3A] border border-white/10 hover:border-brand-primary/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
                    <h4 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
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
                className="btn-pill-primary text-sm"
              >
                <span>Falar com a Equipe EfyCaz</span>
                <span className="w-5 h-5 rounded-full bg-slate-950/20 flex items-center justify-center text-xs">
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
