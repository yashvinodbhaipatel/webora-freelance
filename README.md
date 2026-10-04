# Webora

A bespoke, responsive freelance creative portfolio in semantic HTML, CSS, and TypeScript, with compiled JavaScript included for simple static hosting.

## Run

Requires Node.js 22.13+ (Node 24 recommended). No package installation is needed.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. Deploy the contents of `dist/` to a static host, or serve the root files directly. Rebuild after editing `main.ts`; `main.js` is generated.

## Pages

24 static pages: Home, Work, Services, Technology, About, Insights, Careers & collaboration, Contact, seven service pages, five service demonstration pages, three original articles, and Privacy. Every page has its own title and description.

## Expertise presented

HTML, CSS, JavaScript, TypeScript, React, React Native, Node.js, PHP, SQL, MongoDB, and Shopify design/development, plus marketing, UGC, influencer campaigns, and 3D maps. The portfolio itself remains a lightweight static HTML/CSS/TypeScript website.

## Features

- Responsive typography and mobile navigation
- Branded page-load curtain, staggered headline reveals, page transitions, scroll progress, parallax artwork, moving type bands, and stacked service cards
- Reduced-motion support and a persistent pause-motion control
- Filterable service illustrations and linked project, service, and article detail pages
- Seven original animated SVG service illustrations: Meta/Google ads, Shopify, websites, mobile apps, UGC, influencer collaborations, and 3D maps
- Seven service categories and accessible native disclosure controls
- WhatsApp enquiry composer with browser validation; visitors review and send messages in WhatsApp
- Direct Instagram and WhatsApp links

## Content

Brand: Webora. WhatsApp: +91 8469030829. Instagram: https://www.instagram.com/webora.co.in_/

Service demonstrations are illustrative, not real client engagements. Replace them with verified projects as they become available. No fabricated testimonials or results are included. The form sends no messages automatically and stores no personal information. Fonts load from Google Fonts, with system fallbacks.

## Editing

- Homepage and shared header/footer: `index.html`
- Additional page content and templates: `pages.mjs` and `brand-pages.mjs` (generate the other HTML files during build)
- Service artwork and homepage illustration galleries: `service-visuals.mjs` (generated into the marked sections of `index.html`)
- Colours, layouts, artwork, responsive styles: `styles.css`
- Interactions and WhatsApp destination: `main.ts`
- Build and local server: `build.mjs` and `serve.mjs`

The design draws inspiration from the editorial scale of the supplied Screen Pilot reference, using original Webora copy and artwork. Hosting and domain setup are separate from this source delivery. Rebuild after edits to regenerate all pages. The generated HTML and compiled JavaScript are checked in so the site can also be served without a build step.
