"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-3xl lg:max-w-[820px] transition-all duration-300 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-4 floating-navbar ${
          isScrolled
            ? "shadow-2xl border-white/20 bg-[#1E2028]/60 backdrop-blur-xl"
            : "border-white/10 bg-[#1E2028]/35 backdrop-blur-md"
        }`}
      >
        <Link
          href="#inicio"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-full pl-1 shrink-0"
          aria-label="EfyCaz Contabilidade"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/efycaz-logo-header.svg"
              alt="EfyCaz Contabilidade"
              width={46}
              height={46}
              unoptimized
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(69,179,169,0.5)]"
            />
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center justify-center gap-5 lg:gap-7 flex-1"
          aria-label="Navegação principal"
        >
          <a href="#inicio" className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors">Início</a>
          <a href="#servicos" className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors">Serviços</a>
          <a href="#beneficios" className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors">Diferenciais</a>
          <a href="#faq" className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#45B3A9] hover:bg-[#3CA096] text-white transition-all duration-300 shadow-[0_0_20px_rgba(18,141,132,0.35)] hover:shadow-[0_0_25px_rgba(25,175,164,0.5)] active:scale-95 border border-white/20"
          >
            <span>Comece agora</span>
            <span className="text-white font-bold ml-0.5">›</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-primary" />
            ) : (
              <Menu className="w-5 h-5 text-brand-primary" />
            )}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 bg-[#1A1C23]/95 backdrop-blur-xl border border-white/15 rounded-3xl p-5 shadow-2xl z-50 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            <a href="#inicio" onClick={closeMenu} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">Início</a>
            <a href="#servicos" onClick={closeMenu} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">Serviços</a>
            <a href="#beneficios" onClick={closeMenu} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">Diferenciais</a>
            <a href="#faq" onClick={closeMenu} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10">FAQ</a>
            <div className="pt-3 border-t border-white/10">
              <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold bg-[#45B3A9] text-white">
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Comece agora ›</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
