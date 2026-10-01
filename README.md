# EFYCAZ CONTABILIDADE — Landing Page Institucional

Landing page moderna, responsiva, acessível e orientada a conversão desenvolvida para a **EfyCaz Contabilidade**.

## 🎨 Identidade Visual e Design System

Construído com base na identidade visual do logotipo da marca:
- **Cor Primária (Turquesa/Ciano):** `#4FC1BD` (hover: `#3EAFAB`, escuro: `#35A9A6`, suave: `#E9F8F7`)
- **Fundo Grafite/Slate:** `#444754` (profundo: `#323541`, escuro: `#23252E`)
- **Branco:** `#FFFFFF`
- **Fundo Claro / Superfície:** `#F8F9FA` / `#F3F5F7`
- **Tipografia:** Inter (sem serifa, alta legibilidade e suporte completo ao português)
- **Símbolo:** Elemento alado/caduceu com linhas modernas e puras

---

## 🏗️ Arquitetura do Projeto

```text
/src
  /app
    globals.css          # Tokens de design, classes de acessibilidade e animações
    layout.tsx           # SEO, Open Graph, Metadata, Fontes e Acessibilidade
    page.tsx             # Composição semântica das seções da landing page
  /components
    /Header              # Barra de navegação sticky com blur suave e menu responsivo
    /Hero                # Primeira dobra de alto impacto com card de clareza contábil
    /Services            # 6 soluções contábeis modulares em cards elegantes
    /Benefits            # Diferenciais focados em transparência e tranquilidade
    /HowItWorks          # Jornada em 4 passos simples
    /About               # Seção institucional com dados cadastrais reais
    /FAQ                 # Accordion com as 6 dúvidas frequentes
    /ContactCTA          # Seção escura de conversão + formulário direto
    /Footer              # Rodapé completo com dados cadastrais e navegação
  /data
    company.ts           # Centralização de dados da empresa e placeholders
    services.ts          # Lista e descrição dos serviços contábeis
    benefits.ts          # Pilares e diferenciais qualitativos
    howItWorks.ts        # Etapas do processo de atendimento
    faq.ts               # Perguntas e respostas do FAQ
    navigation.ts        # Estrutura de links do Header e Footer
  /types
    index.ts             # Interfaces TypeScript
/public
  /images
    logo-light.png       # Logo principal fundo claro
    logo-dark.png        # Logo versão fundo escuro
    logo-perfil.png      # Logo de alta resolução para Open Graph
    emblema.png          # Selo emblemático circular
```

---

## ⚙️ Como Personalizar Dados e Placeholders

Todas as informações institucionais e comerciais estão centralizadas em um único arquivo:
👉 **[`src/data/company.ts`](file:///c:/Users/victorh.admin/Downloads/LANDING%20PAGE%20HALLEY/src/data/company.ts)**

### Inserir WhatsApp no Futuro:
1. Abra `src/data/company.ts`.
2. Altere `whatsapp: "55619XXXXXXXX"` e, se desejar direcionar todos os botões diretamente para o WhatsApp, atualize a constante `CONTACT_LINK`:
   ```ts
   export const CONTACT_LINK = "https://wa.me/55619XXXXXXXX?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20EfyCaz";
   ```

### Inserir Instagram Oficial:
1. Em `src/data/company.ts`, preencha `instagram: "@efycazcontabilidade"`.

### Inserir Foto da Equipe ou da Sede:
1. Coloque a foto em `public/images/equipe.jpg`.
2. Abra `src/components/About/About.tsx` no local indicado pelo comentário `// TODO: INSERIR FOTO DA EQUIPE OU DA SEDE`.

---

## 🚀 Como Executar o Projeto

> **Atenção:** Conforme solicitado, a porta padrão configurada é **3005** (evitando a porta 3000).

```bash
# Instalar dependências (caso não tenha instalado)
npm install

# Iniciar servidor de desenvolvimento (porta 3005)
npm run dev

# Gerar build de produção
npm run build

# Executar build de produção (porta 3005)
npm run start
```

Acesse no navegador:
[http://localhost:3005](http://localhost:3005)
