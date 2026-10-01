"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, ArrowRight, MessageSquare, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";
import { company } from "@/data/company";
import { assetPath } from "@/utils/assets";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o floating CTA após rolar 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Menu flutuante expandido em Tema Escuro */}
      {isExpanded && (
        <div className="mb-3 w-80 bg-[#282B36] text-white rounded-3xl shadow-2xl border-2 border-brand-primary/40 p-4 animate-in slide-in-from-bottom-3 duration-200 glow-turquoise-sm">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl bg-brand-dark p-1 border border-white/10">
                <Image
                  src={assetPath("/images/emblema.png")}
                  alt="EfyCaz"
                  fill
                  className="object-contain filter invert brightness-200"
                  sizes="32px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-white">EfyCaz Contabilidade</p>
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  WhatsApp Online: {company.whatsapp}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Fechar painel rápido"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 space-y-2">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsExpanded(false)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-slate-950 text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <span className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                Conversar no WhatsApp
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 text-slate-200 text-xs font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                {company.phone}
              </span>
              <span className="text-[10px] text-slate-400">Ligar</span>
            </a>
          </div>
        </div>
      )}

      {/* Botão de Disparo Flutuante com Selo da EfyCaz */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative flex items-center gap-3 bg-brand-dark hover:bg-brand-deep text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-elevated border-2 border-brand-primary transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        aria-label="Abrir opções de atendimento rápido da EfyCaz"
      >
        {/* Emblema giratório ou pulsante suave com o logo oficial */}
        <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1 group-hover:bg-brand-primary/20 transition-colors">
          <Image
            src={assetPath("/images/emblema.png")}
            alt="Emblema EfyCaz"
            fill
            className="object-contain filter invert brightness-200 transition-transform duration-300 group-hover:scale-110"
            sizes="32px"
          />
        </div>

        <div className="text-left">
          <span className="block text-[10px] uppercase font-bold tracking-wider text-brand-primary">
            EfyCaz Contábil
          </span>
          <span className="block text-xs font-semibold text-white">
            {isExpanded ? "Fechar" : "Atendimento Rápido"}
          </span>
        </div>

        {/* Indicador de status pulsante */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary" />
        </span>
      </button>
    </div>
  );
}
