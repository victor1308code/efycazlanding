import React from "react";
import Image from "next/image";

export function Marquee() {
  const items = [
    "Abertura de Empresa",
    "Troca de Contador",
    "BPO Financeiro",
    "Planejamento Tributário",
    "Contabilidade Consultiva",
    "Assessoria Fiscal & Tributária",
    "Departamento Pessoal & Folha",
    "Regularização de CNPJ",
    "Blindagem Patrimonial",
    "Certidões Negativas (CND)",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="w-full relative py-3 bg-gradient-to-r from-[#ECEEF3] via-[#F5F7FA] to-[#ECEEF3] border-y border-slate-300/60 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#ECEEF3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#ECEEF3] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-3.5 whitespace-nowrap">
        {repeated.map((text, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold text-slate-800 shrink-0 hover:border-[#45B3A9] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#45B3A9]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
