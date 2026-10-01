"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Building,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { company } from "@/data/company";
import { WhatsAppIcon } from "@/components/Icons/WhatsAppIcon";

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "ME / EPP",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato Comercial Landing Page - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nTipo de Empresa: ${formData.businessType}\n\nMensagem:\n${formData.message}`
    );
    window.location.href = `mailto:${company.primaryEmail}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-brand-darker text-white overflow-hidden">
      {/* Background Decorativo com Marca d'água Grande do Emblema EfyCaz */}
      <div className="absolute inset-0 bg-subtle-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-brand-deep/80 rounded-full blur-[90px] pointer-events-none" />

      {/* Marca d'água gigante centralizada no fundo escuro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none">
        <Image
          src="/images/emblema.png"
          alt="EfyCaz Emblema"
          fill
          className="object-contain filter invert brightness-200"
          sizes="600px"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Bloco de Headline Principal do CTA Final no estilo Back4You */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="badge-pill mx-auto">
            <div className="relative w-3.5 h-3.5">
              <Image
                src="/images/emblema.png"
                alt="EfyCaz"
                fill
                className="object-contain filter invert brightness-200"
                sizes="14px"
              />
            </div>
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>Diagnóstico & Proposta Personalizada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Descubra o que a EfyCaz pode fazer pelo seu CNPJ!
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Dê o primeiro passo para ter uma contabilidade parceira, estratégica e comprometida com a proteção e o crescimento da sua empresa.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary text-base group"
            >
              <WhatsAppIcon className="w-5 h-5 text-slate-950 transition-transform group-hover:scale-110" />
              <span>Chamar no WhatsApp Oficial: {company.whatsapp}</span>
            </a>

            <a
              href={`tel:${company.phoneRaw}`}
              className="btn-pill-secondary text-base"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>Ligação Telefônica</span>
            </a>
          </div>
        </div>

        {/* Grid de Informações de Contato Oficiais e Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          
          {/* Lado Esquerdo: Cards de Contato & Placeholders Institucionais */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <Building className="w-5 h-5 text-brand-primary" aria-hidden="true" />
              <span>Canais de Atendimento Oficial</span>
            </h3>

            {/* Telefone Oficial Confirmado */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    Telefone Fixo
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    <a href={`tel:${company.phoneRaw}`} className="hover:text-brand-primary transition-colors">
                      {company.phone}
                    </a>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Horário comercial de segunda a sexta
                  </p>
                </div>
              </div>
            </div>

            {/* E-mails Oficiais Confirmados */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    E-mail Institucional
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white mt-0.5 break-all">
                    <a
                      href={`mailto:${company.primaryEmail}`}
                      className="hover:text-brand-primary transition-colors"
                    >
                      {company.primaryEmail}
                    </a>
                  </p>
                  <p className="text-xs text-slate-300 mt-1 break-all">
                    Secundário:{" "}
                    <a
                      href={`mailto:${company.secondaryEmail}`}
                      className="hover:underline text-slate-400"
                    >
                      {company.secondaryEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Endereço Físico Confirmado */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    Sede Operacional
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                    {company.address.street}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {company.address.neighborhood}, {company.address.city} - {company.address.state}
                  </p>
                  <p className="text-xs text-slate-400">
                    CEP: {company.address.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Oficial Confirmado - Destaque */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-brand-primary-deep/25 border-2 border-emerald-500/50 hover:border-emerald-400 transition-all glow-turquoise-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    WhatsApp Oficial da Empresa
                  </span>
                  <p className="text-xl font-bold text-white mt-0.5">
                    {company.whatsapp}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Atendimento ágil para dúvidas, orçamentos e consultoria contábil.
                  </p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-sm min-h-[40px] active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Iniciar conversa no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder de Redes Sociais */}
            <div className="p-4 rounded-xl bg-white/5 border border-dashed border-brand-primary/30">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Instagram Oficial
              </span>
              {company.instagram ? (
                <a
                  href={`https://instagram.com/${company.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-primary hover:underline mt-1 block"
                >
                  {company.instagram}
                </a>
              ) : (
                <span className="text-xs font-medium text-slate-400 mt-1 block">
                  [INSTAGRAM A DEFINIR]
                </span>
              )}
              {/* // TODO: INSERIR INSTAGRAM QUANDO DISPONÍVEL */}
            </div>

          </div>

          {/* Lado Direito: Formulário de Mensagem Direta em Tema Escuro */}
          <div className="lg:col-span-7 bg-[#282B36] text-white rounded-3xl p-7 sm:p-9 shadow-elevated border-2 border-brand-primary/30 glow-turquoise-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Envie uma mensagem
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Fale com a EfyCaz
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Preencha seus dados para receber o retorno dos nossos contadores.
                </p>
              </div>

              {/* Miniatura do logo da EfyCaz no topo do formulário */}
              <div className="relative w-12 h-12 rounded-2xl bg-[#1A1C23] p-2 hidden sm:flex items-center justify-center shrink-0 border border-brand-primary/30">
                <Image
                  src="/images/emblema.png"
                  alt="EfyCaz"
                  fill
                  className="object-contain filter invert brightness-200"
                  sizes="48px"
                />
              </div>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Mensagem encaminhada com sucesso!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Caso seu cliente de e-mail não tenha aberto automaticamente, você também pode nos contatar diretamente pelo WhatsApp{" "}
                  <strong className="text-brand-primary">{company.whatsapp}</strong> ou pelo e-mail{" "}
                  <strong className="text-brand-primary">{company.primaryEmail}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 text-xs font-bold text-brand-primary hover:underline min-h-[44px]"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5"
                    >
                      Seu Nome Completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#1A1C23] text-sm text-white placeholder:text-slate-500 focus:bg-[#181A22] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5"
                    >
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(XX) XXXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#1A1C23] text-sm text-white placeholder:text-slate-500 focus:bg-[#181A22] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5"
                    >
                      Seu E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="seuemail@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#1A1C23] text-sm text-white placeholder:text-slate-500 focus:bg-[#181A22] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5"
                    >
                      Tipo de Empresa
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#1A1C23] text-sm text-white focus:bg-[#181A22] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all min-h-[48px]"
                    >
                      <option value="ME / EPP" className="bg-[#1A1C23] text-white">Microempresa (ME) ou EPP</option>
                      <option value="MEI" className="bg-[#1A1C23] text-white">Microempreendedor Individual (MEI)</option>
                      <option value="Autônomo / Liberal" className="bg-[#1A1C23] text-white">Profissional Autônomo / Liberal</option>
                      <option value="Abertura de Empresa" className="bg-[#1A1C23] text-white">Quero Abrir uma Empresa</option>
                      <option value="Outro" className="bg-[#1A1C23] text-white">Outra Necessidade</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5"
                  >
                    Como podemos ajudar sua empresa? (Opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Conte brevemente sobre o que você precisa..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#1A1C23] text-sm text-white placeholder:text-slate-500 focus:bg-[#181A22] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-pill-primary w-full sm:w-auto text-sm"
                  >
                    <Send className="w-4 h-4 text-slate-950" aria-hidden="true" />
                    <span>Enviar Mensagem</span>
                  </button>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Seus dados serão utilizados exclusivamente para o contato de retorno sobre sua solicitação contábil.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
