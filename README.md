# Equa Website

The public website and top of the Equa customer acquisition funnel.

Built with **React 18 + TypeScript + Vite**. Deployed to **Azure Static Web Apps** on every push to `main`.

---

## Purpose

The website is the front door to the Equa product. Its job is to:

1. Build credibility with marketing leaders
2. Explain the problem Equa solves
3. Introduce the STPM methodology
4. Drive visitors into the freemium AI strategy tool
5. Convert qualified users into conversations and customers

---

## Customer Funnel

```
LinkedIn / Conference / Referral / Outbound

        ↓

equa.now (Homepage)

        ↓

Solution Page
(methodology + brand film)

        ↓

Try Equa (/try)

        ↓

Freemium AI Strategy Tool
(segmentation → targeting → positioning → messaging)

        ↓

Saved Projects

        ↓

Strategy Conversation

        ↓

Paid Software and/or Consulting
```

---

## Architecture

The website is a single-page React application using **React Router** for client-side navigation.

```
src/
  components/
    Header.tsx       — site header with nav and Try Equa CTA
    Footer.tsx       — site footer with links and branding
    Layout.tsx       — shell: skip link + Header + main + Footer
    Hero.tsx         — reusable page-level hero (overline / headline / subheadline)
    CTA.tsx          — reusable dark CTA section (primary + optional secondary action)

  pages/
    HomePage.tsx     — homepage: hero, STPM overview, credibility logos, CTA
    SolutionPage.tsx — solution: hero, problem, workflow pipeline, audiences, outcomes, CTA
    TeamPage.tsx     — founders, pillars, CTA
    BoardPage.tsx    — advisory board, logo network, CTA
    ContactPage.tsx  — contact placeholder (Phase 1)
    TryEquaPage.tsx  — freemium product placeholder (Phase 3)

  content/
    advisors.ts      — advisor data and logo list

  App.tsx            — router and route declarations
  main.tsx           — React entry point
  styles.css         — global design system
  config.ts          — shared URLs and analytics helpers
```

Static assets live in `public/`:
- `public/images/` — founder photos and logo
- `public/advisors/` — advisor headshots
- `public/logos/` — org/brand SVGs

---

## Roadmap

### Phase 1 — Current: Credibility & Curiosity

- [x] Homepage
- [x] Solution page
- [x] Team page
- [x] Advisory board
- [x] Contact placeholder
- [ ] Brand film on Solution page

Primary goal: establish trust, generate curiosity, drive "Try Equa" clicks.

---

### Phase 2 — Brand Film

Embed the Equa brand film on the Solution page.

The homepage stays lightweight and conversion-focused. The Solution page tells the full story.

---

### Phase 3 — Freemium Product

Build the Equa AI strategy tool at `/try`.

Users will be able to:
- Create an account
- Describe their company and challenge
- Run AI-powered STPM workflows
- Save and revisit projects
- Share or download results

The freemium tool becomes the primary CTA for the entire site.

**Architecture note:** `TryEquaPage.tsx` is the entry point. Phase 3 adds:
- Auth layer (likely Clerk or similar)
- User account context
- Saved projects API
- AI workflow engine

---

### Phase 4 — Proof & Conversion

Expand credibility and close rate:
- Customer logos and testimonials
- Case studies and product walkthroughs
- Usage analytics (Mixpanel or PostHog)
- CRM integration (HubSpot)

---

## Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173` by default.

---

## Build

```bash
npm run build
```

Output goes to `dist/`. TypeScript is compiled first (`tsc`), then Vite bundles.

---

## Deployment

Every push to `main` automatically deploys to **Azure Static Web Apps** via GitHub Actions.

The `staticwebapp.config.json` handles SPA routing (all paths fall back to `index.html`).

---

## Design Philosophy

- Fewer words. Fewer screens. Fewer clicks.
- One primary action per page.
- Trust before features.
- Homepage sells the problem. Solution page explains the vision. Freemium tool delivers value.
- Product experience is the best marketing.
- Simple beats clever.

---

## What to Change

| Goal | File |
|------|------|
| Page copy and layout | `src/pages/` |
| Nav, header, footer | `src/components/Header.tsx`, `src/components/Footer.tsx` |
| Shared hero or CTA | `src/components/Hero.tsx`, `src/components/CTA.tsx` |
| All styling | `src/styles.css` |
| Routing | `src/App.tsx` |
| Advisor data | `src/content/advisors.ts` |
| URLs and analytics | `src/config.ts` |
| HTML metadata / favicon | `index.html` |
| Images, fonts, video | `public/` |

---

## Success Metrics

The website succeeds when visitors:

1. Understand the problem Equa solves.
2. Trust the team and methodology.
3. Click "Try Equa."
4. Complete at least one strategy workflow.
5. Save a project and return.
6. Become paying customers or book a strategy session.
