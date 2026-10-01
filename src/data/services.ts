import { ServiceItem } from "@/types";

export const servicesSectionData = {
  badge: "Soluções Estratégicas",
  title: "Diminuir impostos e burocracia é só o começo.",
  subtitle:
    "Primeiro colocamos a contabilidade da sua empresa em ordem com rigor técnico. Mas isso é apenas o começo. Nosso trabalho é profissionalizar a rotina contábil, fiscal e financeira do seu negócio com dados, clareza e atendimento próximo.",
};

export const services: ServiceItem[] = [
  {
    id: "contabilidade",
    number: "01",
    title: "Contabilidade Estratégica",
    description: "Deixamos sua empresa 100% regularizada. Emitimos balancetes mensais claros para que você entenda exatamente para onde o dinheiro está indo, sem contabilidade de 'gaveta'.",
    iconName: "Calculator",
    badge: "Essencial"
  },
  {
    id: "fiscal",
    number: "02",
    title: "Inteligência Fiscal & Tributária",
    description: "Não seja pego de surpresa pelo leão. Analisamos seu regime de tributação anualmente para garantir que você pague o mínimo de imposto permitido por lei.",
    iconName: "ReceiptText",
  },
  {
    id: "dp",
    number: "03",
    title: "Departamento Pessoal Ágil",
    description: "Admissão, demissão, folha de pagamento e gestão de benefícios sem dor de cabeça. Reduza riscos de passivos trabalhistas com nossos alertas preventivos.",
    iconName: "Users",
  },
  {
    id: "abertura",
    number: "04",
    title: "Abertura de Empresas e Filiais",
    description: "Resolvemos toda a burocracia na Junta Comercial, Receita e Prefeitura. Estruturamos o contrato social ideal para proteger seus bens físicos e jurídicos.",
    iconName: "Building2",
  },
  {
    id: "bpo",
    number: "05",
    title: "Terceirização Financeira (BPO)",
    description: "Terceirize o contas a pagar, receber e conciliação bancária conosco. Ganhe tempo para focar nas vendas enquanto nós cuidamos da burocracia.",
    iconName: "TrendingUp",
    badge: "Mais procurado"
  },
  {
    id: "auditoria",
    number: "06",
    title: "Auditoria e Revisão de Processos",
    description: "Revisamos os últimos 5 anos da sua empresa em busca de impostos pagos a mais que podem ser restituídos direto para a sua conta bancária.",
    iconName: "FileCheck2",
  }
];
