# Webora — React + TypeScript

The Webora freelance portfolio for Yash Patel (Patel Yash), built with React. The migration retains the existing CSS, artwork, page structure, animation timings and 24 HTML URLs. React owns the menu, service filters, motion preference and WhatsApp enquiry form. Pages are rendered to HTML at build time, then hydrated in the browser, preserving SEO and direct links on GitHub Pages.

Live: https://yashvinodbhaipatel.github.io/webora-freelance/

## Run and build

Requires Node.js 22.13 or newer. Install with `npm install` (or `pnpm install` using the included lockfile), then:

```sh
npm run typecheck
npm run build
npm run check
npm start
```

Open http://127.0.0.1:4173. `build.mjs` bundles React with esbuild, renders all 24 routes using `react-dom/server`, adds SEO metadata and produces `dist/`. The client uses `hydrateRoot`; it does not replace the existing pages with blank client-only shells. Generated root HTML and `main.js` are also checked in for the current GitHub Pages main-branch/root deployment. Commit regenerated files after every change. No Node server is required in production.

## Edit the source

- `page-*.tsx`: individual page components, including inline SVG service illustrations. These are the source of page content; do not edit generated `.html` files.
- `react-app.tsx`: shared application shell and motion/dialog state.
- `react-header.tsx`, `react-footer.tsx`, `react-dialog.tsx`: shared components.
- `react-motion.ts`: scroll animation and intersection-observer lifecycle, with cleanup.
- `react-context.ts`: shared UI actions and state.
- `react-pages.ts`: typed route registry.
- `react-client.tsx` / `react-server.tsx`: hydration and prerendering entry points.
- `styles.css`: original responsive design and animation rules.
- `seo.mjs` and `page-heads.json`: search metadata and head defaults. Keep structured data consistent with visible content.
- `service-visuals.mjs`: service descriptions used by SEO; its older artwork generator is retained for reference. `brand-pages.mjs` is a legacy reference, not used by the React build. `pages.mjs` forwards to the React build for compatibility.

## Features and content

Seven animated service illustrations cover websites, Shopify, React Native apps, Meta/Google ads, UGC, influencer collaborations and 3D maps. They are service demonstrations, not commissioned client work or reported results. Responsive navigation, page-load and scroll animations, a motion toggle, reduced-motion support, and an accessible native enquiry dialog are retained.

Public contact: WhatsApp +91 8469030829; Instagram https://www.instagram.com/webora.co.in_/ . The form creates a WhatsApp draft for the visitor to review and send; the website does not save enquiries. Google Fonts are loaded with system fallbacks.

## SEO and indexing

Every route is prerendered with one primary heading, a unique title and description, canonical URL, social metadata and connected JSON-LD. The sitemap has all 24 public URLs. Visible content identifies Yash Patel and Patel Yash and describes remote services for the USA, Canada, India, the UK and Australia; these are service markets, not offices.

Add the URL-prefix property `https://yashvinodbhaipatel.github.io/webora-freelance/` to Google Search Console, verify ownership using the supplied HTML file or meta tag, then submit `sitemap.xml`. Verification and submission require the owner's account and have not been completed. The project-level `robots.txt` is informational: crawlers use the file at the domain root, which this GitHub project cannot control. Rankings, indexing and AI citations are not guaranteed.

## Validation

`npm run typecheck` checks the React TypeScript source. `npm run check` checks the generated routes, headings, local links, metadata and sitemap. Migration validation also compared normalized element attributes and visible text against the original on all 24 pages, plus browser checks for hydration, responsive navigation, filtering, dialog opening/closing and motion preferences.
