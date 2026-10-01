# EFYCAZ CONTABILIDADE — Design System Master

> **Gerado via UI/UX Pro Max Intelligence**  
> **Status:** Ativo / Fonte da Verdade (Global Source of Truth)  
> **Estilo Primário:** Swiss Modernism 2.0 + Minimal & Direct + Trust & Authority  
> **Conformidade:** WCAG 2.2 AA / AAA em contraste, alvos de toque e acessibilidade

---

## 1. Fundamentos e Filosofia de Design

* **Segmento:** Contabilidade Empresarial, Fiscal, Trabalhista e Consultiva.
* **Público-Alvo:** Pequenos e médios empresários, MEIs, autônomos e gestores de negócios.
* **Percepção Chave:** Organização, precisão, segurança técnica, proximidade humana e modernidade.
* **Anti-Patterns Banidos:**
  - ❌ Fotos clichês de aperto de mãos ou executivos sorrindo artificialmente para gráficos.
  - ❌ Gradientes excessivos de IA (roxo/magenta/neon).
  - ❌ Sombras pesadas e efeitos 3D desalinhados.
  - ❌ Texto em cinza claro ilegível sobre fundo cinza (gray-on-gray).
  - ❌ Métricas ou depoimentos inventados.
  - ❌ Elementos clicáveis menores que 44×44px no mobile.

---

## 2. Tokens de Cor e Contraste Acessível (WCAG 2.2)

| Token | Hex | Uso Primário | Contraste / A11y |
| :--- | :--- | :--- | :--- |
| `brand-darker` | `#23252E` | Textos principais, rodapé, títulos de alto contraste | 14.8:1 sobre branco (AAA) |
| `brand-deep` | `#323541` | Superfícies escuras, cards de destaque institucional | 11.2:1 sobre branco (AAA) |
| `brand-dark` | `#444754` | Fundo oficial da marca, cabeçalho escuro | 8.5:1 sobre branco (AAA) |
| `brand-primary` | `#4FC1BD` | Turquesa da marca: badges, bordas ativas, ícones | 8.5:1 com texto escuro |
| `brand-primary-deep` | `#20807D` | Turquesa escuro para botões com texto branco | 4.6:1 com texto branco (AA) |
| `brand-primary-light`| `#E9F8F7` | Fundo de badges, chips e estados ativos | Superfície suave |
| `text-dark` | `#1F232E` | Títulos e corpo de texto principal | 15.6:1 sobre branco (AAA) |
| `text-muted` | `#525866` | Parágrafos de apoio e descrições | 6.8:1 sobre branco (AA) |
| `brand-light` | `#F8F9FA` | Fundo de seções alternadas | Reduz fadiga visual |
| `brand-border` | `#E2E5EB` | Delimitação de cards e divisores | 1px clean hairline |

> **Nota de Acessibilidade UI/UX Pro Max:** O turquesa claro `#4FC1BD` deve ser utilizado com texto escuro `#1F232E` (alcançando contraste 8.5:1 - AAA) ou com versão aprofundada `#20807D` quando o texto for branco, assegurando legibilidade em qualquer dispositivo.

---

## 3. Escala Tipográfica (Swiss Grid System)

* **Família:** `Inter, system-ui, -apple-system, sans-serif`
* **Escala:**
  * **H1 (Hero Display):** `clamp(2.25rem, 5vw, 3.75rem)` (36px a 60px) | `font-bold` | `leading-[1.12]` | `tracking-tight (-0.025em)`
  * **H2 (Seções):** `clamp(1.75rem, 3.5vw, 2.5rem)` (28px a 40px) | `font-bold` | `leading-[1.2]` | `tracking-tight (-0.02em)`
  * **H3 (Cards/Módulos):** `1.25rem` (20px) | `font-bold` | `leading-snug`
  * **Body (Corpo de Texto):** `1rem` (16px) | `leading-relaxed (1.6)` | **Nunca abaixo de 16px no mobile** (evita zoom forçado no iOS Safari)
  * **Microcopy / Badges:** `0.75rem` a `0.875rem` (12px a 14px) | `font-semibold` | `tracking-wide (uppercase)`

---

## 4. Sistema Espacial e Alvos de Toque (Touch Targets)

* **Unidade Base:** `8px`
* **Escala:**
  * `4px` (space-1): espaçamento interno mínimo
  * `8px` (space-2): gap entre ícone e rótulo
  * `12px` (space-3): padding compacto
  * `16px` (space-4): padding padrão de botões e inputs
  * `24px` (space-6): gap entre cards
  * `32px` (space-8): padding de containers
  * `48px` (space-12): separação entre blocos de conteúdo
  * `64px` a `96px` (space-16/24): respiro vertical entre seções
* **Regra Touch UI/UX Pro Max:**
  * Todos os botões, links de menu e campos de formulário possuem altura mínima de **44px a 48px**.
  * Espaçamento mínimo de **8px** entre alvos de toque adjacentes.

---

## 5. Micro-Interações e Acessibilidade de Movimento

* **Durações de Transição:**
  * `150ms`: Hover, foco, alteração de cor de texto.
  * `200ms - 250ms`: Expansão de accordion, abertura de menu mobile, cards flutuantes.
* **Curva de Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (suave, responsivo, sem bounce exagerado).
* **Feedback de Pressionamento:** `active:scale-[0.98]`.
* **Anéis de Foco Visíveis:** `focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2`.
* **Prefers-Reduced-Motion:** Transições e animações zeradas ou reduzidas a `0.01ms` caso o usuário tenha ativado redução de movimento no sistema operacional.

---

## 6. Iconografia

* **Biblioteca:** Lucide Icons (SVG com stroke uniforme de `2px`).
* **Regra Semântica:** Ícones decorativos ao lado de texto visível contam com `aria-hidden="true"`. Ícones acionáveis contam com `aria-label` descritivo.
