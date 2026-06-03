# equa-website

One-page marketing site for Equa. Built with React 18 + TypeScript + Vite. Deployed to Azure Static Web Apps on every push to `main`.

## File Map

| File | Role |
|---|---|
| `src/App.tsx` | The entire one-page site — all sections (hero, problem, solution, why, founders, contact, footer) live here as one component |
| `src/styles.css` | All styling — CSS custom properties, layout, cards, buttons, responsive breakpoints |
| `index.html` | HTML shell — sets `<title>`, meta description, favicon reference, mounts React root |
| `src/main.tsx` | React entry point — wires App into the DOM, imports styles.css |
| `vite.config.ts` | Build config — minimal, just the React plugin and host binding |
| `package.json` | Dependencies: React, Vite, TypeScript only |

## What to Change

- **Copy, sections, structure:** `src/App.tsx`
- **Colors, typography, spacing, layout:** `src/styles.css` — design tokens are CSS variables in `:root`
- **Page title, meta description, favicon:** `index.html`
- **Static assets (images, fonts):** Create a `public/` folder — Vite serves it at the root

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build   # outputs to dist/
```

Pushing to `main` triggers the Azure Static Web Apps GitHub Actions workflow, which builds and deploys automatically. The workflow config is at `.github/workflows/azure-static-web-apps-happy-rock-07d884e1e.yml`.
