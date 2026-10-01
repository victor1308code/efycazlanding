"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqs, faqSectionData } from "@/data/faq";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";
import { assetPath } from "@/utils/assets";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-10 sm:pt-12 lg:pt-14 pb-14 sm:pb-18 lg:pb-20 bg-gradient-to-b from-[#ECEEF3] via-[#F4F6F9] to-[#E2E6EE] relative overflow-hidden">
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-10 sm:mb-12 fade-in-section">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#45B3A9]/15 border border-[#45B3A9]/30 text-xs font-bold text-[#1E7068] tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#1E7068]" />
            <span>{faqSectionData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {faqSectionData.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {faqSectionData.subtitle}
          </p>
        </div>

        {/* Lista Accordion (Cards Brancos sobre Fundo Claro) */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/90 transition-all duration-200 overflow-hidden shadow-sm hover:border-[#45B3A9]"
              >
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45B3A9] min-h-[48px]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#128D84] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caixa de suporte caso ainda tenha dúvidas */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-sm text-slate-600">
              Converse diretamente com nossos especialistas pelo WhatsApp oficial.
            </p>
          </div>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#128D84] hover:bg-[#19AFA4] text-white transition-all shadow-md active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Tirar dúvidas agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
