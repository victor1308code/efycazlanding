import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Building, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";
import { company } from "@/data/company";
import { footerNavigation } from "@/data/navigation";
import { assetPath } from "@/utils/assets";

export function Footer() {
  return (
    <footer className="bg-brand-darker text-slate-300 border-t border-brand-primary/20 pt-16 pb-12 relative overflow-hidden">
      {/* Marca d'água sutil no canto inferior do rodapé */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-5 pointer-events-none select-none">
        <Image
          src={assetPath("/images/emblema.png")}
          alt="Efycaz"
          fill
          className="object-contain filter invert"
          sizes="256px"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Marca & Identidade */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="#inicio"
              className="inline-block relative h-14 w-52 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
              aria-label="Efycaz Contabilidade"
            >
              <Image
                src={assetPath("/images/logo-dark.png")}
                alt="Efycaz Contabilidade"
                fill
                className="object-contain object-left"
                sizes="208px"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {company.tagline}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2 font-semibold text-slate-200">
                <Building className="w-4 h-4 text-brand-primary" aria-hidden="true" />
                <span>CNPJ: {company.cnpj}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-primary" aria-hidden="true" />
                <span>{company.cnae}</span>
              </p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span>Navegação</span>
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm" aria-label="Links do rodapé">
              {footerNavigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand-primary transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato & Sede */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span>Atendimento e Localização</span>
            </p>

            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wide text-emerald-400 block font-bold">
                    WhatsApp Oficial
                  </span>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-primary font-bold transition-colors"
                  >
                    {company.whatsapp}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-[11px] uppercase tracking-wide text-slate-400 block font-semibold">
                    Telefone
                  </span>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="text-white hover:text-brand-primary font-bold transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div className="overflow-hidden">
                  <span className="text-[11px] uppercase tracking-wide text-slate-400 block font-semibold">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${company.primaryEmail}`}
                    className="text-white hover:text-brand-primary font-medium transition-colors break-all"
                  >
                    {company.primaryEmail}
                  </a>
                  <span className="text-xs text-slate-400 block break-all">
                    {company.secondaryEmail}
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-[11px] uppercase tracking-wide text-slate-400 block font-semibold">
                    Endereço Oficial
                  </span>
                  <p className="text-white font-normal leading-snug">
                    {company.address.full}
                  </p>
                </div>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wide text-slate-400 block mb-2 font-semibold">
                Redes Sociais
              </span>
              <div className="flex items-center gap-3">
                {company.instagram ? (
                  <a
                    href={`https://instagram.com/${company.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-primary hover:underline font-semibold"
                  >
                    {company.instagram}
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    [INSTAGRAM A DEFINIR]
                  </span>
                )}
                {/* // TODO: INSERIR LINKS DE REDES SOCIAIS OFICIAIS */}
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior: Direitos Autorais & Selo de Autenticidade */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="relative w-5 h-5">
              <Image
                src={assetPath("/images/emblema.png")}
                alt="Efycaz"
                fill
                className="object-contain filter invert brightness-200"
                sizes="20px"
              />
            </div>
            <p>© {company.copyrightYear} Efycaz Contabilidade. Todos os direitos reservados.</p>
          </div>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 hover:text-white transition-colors p-1.5 rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary"
            aria-label="Voltar ao início da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
          </a>
        </div>

      </div>
    </footer>
  );
}
