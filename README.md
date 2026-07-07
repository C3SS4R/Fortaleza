# Shopping Fortaleza — Redesign conceptual

> ⚠️ **Projeto conceptual / portfólio.** Este site é um exercício de design e desenvolvimento, **sem qualquer afiliação, patrocínio ou relação oficial** com o Shopping Fortaleza de Luanda ou entidades associadas. Nomes de lojas, eventos, testemunhos, imagens e dados de contacto são **fictícios ou meramente ilustrativos**.

Redesign não-oficial do site institucional de um centro comercial costeiro na Baía de Luanda, com identidade visual própria inspirada na vista para o oceano Atlântico.

## Conceito de design

- **Tese:** *"O horizonte é o produto."* Todo o site se organiza à volta da linha onde o mar encontra o céu — recorrente no preloader, nos divisores de onda e no parallax.
- **Paleta "Horizonte Atlântico":** azuis do oceano (`abyss`, `ocean`, `lagoon`), dourado do pôr-do-sol (`sand`), coral como acento (`coral`) e branco espuma (`foam`).
- **Tipografia:** Archivo (variável, com eixo de largura) — wordmark monumental "expanded" nos títulos, corpo legível.
- **Cards em glassmorphism** sobre imagens costeiras, evocando varandas envidraçadas para o mar.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod · Swiper · ESLint · Prettier.

## Começar

```bash
npm install
cp .env.example .env.local   # opcional (ver abaixo)
npm run dev                  # http://localhost:3000
```

Requer **Node 18.17+** (recomendado Node 20).

### Variáveis de ambiente (opcionais)

Todas têm fallback — o site funciona sem `.env.local`.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (metadata, sitemap, robots) |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Endpoint do formulário de contacto. Sem ele, o form mostra sucesso mas não envia. |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED` | Embed do Google Maps da secção de localização |
| `NEXT_PUBLIC_WHATSAPP` | Número de WhatsApp (formato internacional sem `+`) |

## Estrutura

```
app/                 rotas (App Router) + SEO (sitemap, robots, manifest)
components/
  layout/            Navbar, Footer, Preloader, BackToTop, WhatsAppButton
  ui/                Reveal, Button, SectionHeader, PageHero, WaveDivider, CountUp…
  sections/          Hero, Stats, About, Amenities, Stores, Events, Testimonials…
  cards/             StoreCard, EventCard, TestimonialCard
lib/constants.ts     TODO o conteúdo/textos do site (fictício, trocável)
lib/utils.ts         helpers
types/index.ts       interfaces
```

Todo o conteúdo está centralizado em [`lib/constants.ts`](lib/constants.ts) — edite aí para trocar lojas, eventos, textos e dados de contacto.

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run lint` — ESLint
- `npm run format` — Prettier

---

Projeto de portfólio. Imagens via [Unsplash](https://unsplash.com).
