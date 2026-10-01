export interface CompanyInfo {
  name: string;
  brandName: string;
  tagline: string;
  subtagline: string;
  headline: string;
  subheadline: string;
  cnpj: string;
  phone: string;
  phoneRaw: string;
  primaryEmail: string;
  secondaryEmail: string;
  cnae: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  // Informações de WhatsApp e Redes
  whatsapp: string; // Ex: "(61) 3613-8796"
  whatsappRaw: string; // "556136138796"
  whatsappUrl: string; // "https://wa.me/556136138796?text=..."
  instagram: string; // Ex: "@efycazcontabilidade" ou vazio
  contactLink: string; // "#contato" ou link direto WhatsApp
  copyrightYear: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface BenefitItem {
  id: string;
  number?: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
