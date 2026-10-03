# Webora

A bespoke, responsive freelance creative portfolio in semantic HTML, CSS, and TypeScript, with compiled JavaScript included for simple static hosting.

## Run

Requires Node.js 22.13+ (Node 24 recommended). No package installation is needed.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. Deploy the contents of `dist/` to a static host, or serve the root files directly. Rebuild after editing `main.ts`; `main.js` is generated.

## Features

- Responsive typography and mobile navigation
- Scroll reveals, subtle scroll-linked artwork, and reduced-motion support
- Original CSS artwork, three explicitly labelled concept projects, and project detail dialogs
- Five service categories and accessible native disclosure controls
- WhatsApp enquiry composer with browser validation; visitors review and send messages in WhatsApp
- Direct Instagram and WhatsApp links

## Content

Brand: Webora. WhatsApp: +91 8469030829. Instagram: https://www.instagram.com/webora.co.in_/

Portfolio concepts are illustrative, not real client engagements. Replace them with verified projects as they become available. No fabricated testimonials or results are included. The form sends no messages automatically and stores no personal information. Fonts load from Google Fonts, with system fallbacks.

## Editing

- Content, social links, metadata: `index.html`
- Colours, layouts, artwork, responsive styles: `styles.css`
- Interactions and WhatsApp destination: `main.ts`
- Build and local server: `build.mjs` and `serve.mjs`

The design draws inspiration from the editorial scale of the supplied Screen Pilot reference, using original Webora copy and artwork. Hosting and domain setup are separate from this source delivery.
