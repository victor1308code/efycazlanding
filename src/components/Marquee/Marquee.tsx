import React from "react";
import Image from "next/image";

export function Marquee() {
  const items = [
    "Contabilidade Consultiva",
    "Assessoria Fiscal & Tributária",
    "Departamento Pessoal & Folha",
    "Abertura & Regularização de Empresas",
    "Planejamento Tributário",
    "Relatórios & Clareza Financeira",
    "Conformidade & Segurança Jurídica",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative py-4 bg-gradient-to-r from-[#ECEEF3] via-[#F8F9FA] to-[#ECEEF3] border-y border-slate-300/70 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#ECEEF3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#ECEEF3] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0">
            <div className="relative w-5 h-5 opacity-90 transition-transform duration-300 hover:scale-110">
              <Image
                src="/images/emblema.png"
                alt="EfyCaz Emblema"
                fill
                className="object-contain"
                sizes="20px"
              />
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase flex items-center gap-2">
              <span>{text}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
