# Ammar Alasfoor — personal portfolio

A responsive, accessible portfolio built with Next.js App Router, TypeScript, and Tailwind CSS 4. Hallmark’s Cobalt direction supplies the typography, restrained blue palette, hairline rules, and light/dark themes. Fonts are served locally.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Visit http://127.0.0.1:3000. The theme follows your system preference until you choose a mode; your selection persists locally.

## Build and preview the static export

```sh
npm run build
npm run preview
```

`next.config.ts` uses `output: 'export'`, trailing slashes, and unoptimized images. `out/` contains the generated website, including `.nojekyll`, the downloadable CV, metadata, social preview image, robots.txt, sitemap.xml, and a 404 page. No Node server is required in production. `next start` is not used for an exported site.

## GitHub Pages preparation

The site targets the root of `https://a-alasfoor.github.io`, so it requires no base path. When you choose to publish, upload the **contents of `out/`** as the GitHub Pages artifact. Preserve its `.nojekyll` file so `_next/` assets are served. No automatic deployment workflow is enabled, and this project has not been deployed.

If you move to a project repository or a custom domain, update `next.config.ts`, the metadata URL in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and structured data in `app/page.tsx` as appropriate before building.

## Update content

- `lib/portfolio.ts`: verified profile, project descriptions, and technical skills.
- `components/sections.tsx`: about, experience, education, and contact sections.
- `components/hero.tsx`: opening statement and project navigation.
- `public/Ammar-Alasfoor-CV.pdf`: exact CV supplied for this task.
- `tokens.css`: both theme palettes, type, spacing, and motion tokens.
- `app/globals.css`: responsive layouts and component styles.

Personal facts come from `Ammar_Alasfoor_CV-re.pdf`, supplemented by the owner’s detailed ECONX project explanation. No employment metrics, project URLs, testimonials, or product screenshots have been invented. Projects use typographic title plates. Real screenshots can replace these plates when available; retain the project name as accessible text. Recommended captures: a 1440×1000 desktop view of ECONX, the Sijilat document workflow, and the Social Network feed. Share only material cleared for public use.

## Verification

```sh
npm run typecheck
node scripts/verify.mjs
node .agents/skills/hallmark/scripts/sloplint.mjs app/globals.css app/page.tsx components/hero.tsx components/header.tsx components/sections.tsx --genre modern-minimal --render --url http://127.0.0.1:3000
```

Browser checks require a running preview and Google Chrome. Set `CHROME_PATH` for another Chrome location and `PORTFOLIO_URL` to test a different local port. Verification checks both themes with axe, widths from 320 to 1920 pixels, anchor targets, mobile navigation, project disclosures, persisted theme choice, reduced motion, no-JavaScript content, and the CV response. Results are written to `.hallmark/qa/results.json`.

Regenerate the static social image and favicon with `node scripts/generate-assets.mjs` after branding changes.
