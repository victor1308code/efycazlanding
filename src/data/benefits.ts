import { BenefitItem } from "@/types";

/**
 * ============================================================================
 * DIFERENCIAIS INSTITUCIONAIS
 * ============================================================================
 * Foco em atributos qualitativos reais e percepção de valor:
 * Clareza, proximidade, organização e foco em soluções para empresas.
 */
export const benefitsSectionData = {
  badge: "Pilares de Gestão",
  title: "Seja o CNPJ bem organizado que o mercado exige de você:",
  subtitle:
    "Ter uma empresa lucrativa exige mais do que vender bem. Exige retaguarda contábil blindada, previsibilidade fiscal e tranquilidade com a Receita Federal.",
};

export const benefits: BenefitItem[] = [
  {
    id: "controle-dados",
    number: "01",
    title: "Controle seus dados e documentos",
    description:
      "A EfyCaz centraliza e organiza notas fiscais, despesas, faturamento e tributos em um fluxo simples e transparente, sem perda de prazos.",
    iconName: "BarChart3",
    badge: "Visibilidade Total",
  },
  {
    id: "reduza-impostos",
    number: "02",
    title: "Pague a alíquota justa com respaldo legal",
    description:
      "Encontre o parâmetro correto da lei para o seu CNAE. O planejamento tributário individualizado evita que você pague tributos que contabilidades comuns deixam passar.",
    iconName: "ShieldCheck",
    badge: "Economia Real",
  },
  {
    id: "prevencao-riscos",
    number: "03",
    title: "Descubra desvios antes de virarem problemas",
    description:
      "Acompanhamento preventivo de certidões negativas (CND), conformidade do eSocial e obrigações para evitar surpresas, multas ou bloqueios.",
    iconName: "FileSearch",
    badge: "Segurança Ativa",
  },
  {
    id: "suporte-agil",
    number: "04",
    title: "Emissão ágil e atendimento direto no WhatsApp",
    description:
      "Tire dúvidas rápidas e resolva demandas de faturamento sem esperar dias em filas de chamados ou tickets burocráticos.",
    iconName: "Zap",
    badge: "Sem Espera",
  },
  {
    id: "empresa-independente",
    number: "05",
    title: "Construa uma empresa sólida e independente",
    description:
      "Com a retaguarda fiscal protegida por especialistas, você ganha estabilidade, tempo livre e segurança para focar exclusivamente nos seus clientes e no seu crescimento.",
    iconName: "TrendingUp",
    badge: "Crescimento Sustentável",
  },
];
