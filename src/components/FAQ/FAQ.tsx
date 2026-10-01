"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqs, faqSectionData } from "@/data/faq";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#1A1C23] relative overflow-hidden">
      {/* Logo Gigante Vetorial Animada Cinza na Lateral Direita */}
      <div className="absolute top-1/2 right-[-20%] sm:right-[-12%] -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] opacity-[0.05] pointer-events-none select-none">
        <Image
          src="/images/efycaz-logo-animada-cinza.svg"
          alt="EfyCaz"
          width={900}
          height={900}
          unoptimized
          className="w-full h-full object-contain"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-14">
          <div className="badge-pill mx-auto">
            <HelpCircle className="w-3.5 h-3.5 text-brand-primary" />
            <span>{faqSectionData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {faqSectionData.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {faqSectionData.subtitle}
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-[#2C2F3A] rounded-2xl border border-white/10 transition-all duration-200 overflow-hidden shadow-xs hover:border-brand-primary/40"
              >
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary min-h-[48px]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-brand-primary text-slate-950 rotate-180"
                        : "bg-white/10 text-slate-300"
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
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/10 animate-in fade-in-50 duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caixa de suporte caso ainda tenha dúvidas */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#282B36] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-elevated">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Sua dúvida não foi listada aqui?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Nossa equipe está à disposição para esclarecer as particularidades da sua empresa no WhatsApp.
            </p>
          </div>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary shrink-0 text-xs sm:text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>Falar com especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
}
