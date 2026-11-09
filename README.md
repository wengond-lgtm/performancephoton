# Performance Photon

English horticultural lighting website built from the supplied brand brief and SVG logo. Responsive layouts, a six-family product catalogue, product detail pages, a persistent inquiry list, brand pages, news empty states and a downloadable inquiry form.

## Local development

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Use the local URL printed by the server. To check types or produce a build:

```sh
npx tsc --noEmit
npm run build
```

The project uses the Sites Vinext starter and its Worker build integration. The Site identity is recorded in `.openai/hosting.json`. Keep that identity for future updates.

## Routes

- `/` — home
- `/products` — searchable, filterable catalogue
- `/products?category=greenhouse` — directly linked category
- `/products?new=true` — four 2026 preview positions
- `/products/[slug]` — product detail and inquiry selection
- `/brand` — brand approach and three capabilities
- `/news` — news categories with honest unpublished states
- `/contact` — selected products and a downloadable project inquiry
- `/privacy` — explanation of the preview’s browser storage and form behavior

## Content boundaries

All product illustrations are deliberately conceptual. Numbered product titles identify catalogue positions, not actual model numbers. Specifications, photography, contact information and news content have not been supplied. No invented company metrics, certifications, customer quotes or technical specifications are included.

The contact form creates a text file locally and supports copying it. It does not send email, store inquiries in a database or pretend that a message was delivered. Product selections persist in local storage; contact fields do not.

Read `CONTENT-NOTES.md` for the content decisions and the material needed before a public commercial launch.

## Main files

- `lib/catalog.ts` — product families and catalogue positions
- `components/site.tsx` — page content and interactive behavior
- `components/artwork.tsx` — replaceable concept illustrations
- `app/globals.css` — brand styling and responsive layouts
- `public/logo.svg` — original supplied logo

The private deployment is managed with the Sites workflow. Do not put repository credentials or service secrets in this project.
