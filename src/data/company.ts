import { CompanyInfo } from "@/types";

/**
 * ============================================================================
 * EFYCAZ CONTABILIDADE — DADOS E CONFIGURAÇÕES DA EMPRESA
 * ============================================================================
 * Centralização completa das informações institucionais, de contato e links.
 * Altere as constantes abaixo para atualizar o site em um único local.
 */

// Link principal de conversão (WhatsApp Oficial Efycaz)
export const WHATSAPP_NUMBER = "(61) 3613-8796";
export const WHATSAPP_RAW = "556136138796";
export const WHATSAPP_URL = "https://wa.me/556136138796?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Efycaz%20Contabilidade.";

export const CONTACT_LINK = WHATSAPP_URL;

export const company: CompanyInfo = {
  name: "Efycaz Contabilidade",
  brandName: "EFYCAZ",
  tagline: "Contabilidade simples, estratégica e feita para o crescimento do seu negócio.",
  subtagline: "Organização • Segurança • Estratégia",
  headline: "Contabilidade que simplifica o seu negócio.",
  subheadline:
    "Tenha mais clareza para cuidar da sua empresa enquanto a Efycaz cuida da sua contabilidade com organização, proximidade e segurança.",
  
  // Informações Cadastrais Oficiais
  cnpj: "24.011.423/0001-75",
  cnae: "6920-6/01 - Atividades de contabilidade",
  
  // Canais de Contato Confirmados (Telefone e WhatsApp integrados)
  phone: "(61) 3613-8796",
  phoneRaw: "556136138796",
  whatsapp: WHATSAPP_NUMBER,
  whatsappRaw: WHATSAPP_RAW,
  whatsappUrl: WHATSAPP_URL,

  primaryEmail: "contato@efycazcontabilidade.com.br",
  secondaryEmail: "efycaz.contabil@gmail.com",
  
  // Endereço Oficial Confirmado
  address: {
    street: "Quadra 6, Lote 18, Salas 104 e 105",
    neighborhood: "Jardim Brasília",
    city: "Águas Lindas de Goiás",
    state: "GO",
    zip: "72915-000",
    full: "Quadra 6, Lote 18, Salas 104 e 105, Jardim Brasília, Águas Lindas de Goiás - GO, CEP 72915-000",
  },

  // ========================================================================
  // REDES SOCIAIS (PREENCHER QUANDO DISPONÍVEL)
  // ========================================================================
  // TODO: INSERIR INSTAGRAM OFICIAL DA EMPRESA (Ex: "@efycazcontabilidade")
  instagram: "",

  contactLink: CONTACT_LINK,
  copyrightYear: 2026,
};
