# Andres Jimenez — Portfolio

A fast, static portfolio site built with [Astro](https://astro.build) + TypeScript.
Editorial design: Newsreader (serif) + Hanken Grotesk (sans) + JetBrains Mono,
warm-paper light theme and a dark theme, with a live-filtered work archive and a
writing section.

Implemented from a static design handoff (`Andres Portfolio.dc.html`).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data/
    portfolio.ts     # identity, projects, socials, marquee  ← edit content here
    posts.ts         # writing posts + article bodies
  layouts/Base.astro # <head>, fonts, theme bootstrap, scroll-reveal, header/footer
  components/         # Header (nav + theme toggle), Footer
  lib/url.ts         # base-path-aware internal links
  pages/
    index.astro      # home
    work/index.astro # archive with category/stack filter + search
    work/[id].astro  # case study (one per project)
    about.astro
    writing/index.astro
    writing/[id].astro
    contact.astro    # form opens the visitor's mail client (no backend)
    404.astro
  styles/global.css  # design tokens (light/dark), base, shared primitives
public/
  assets/og.svg      # social card
  favicon.svg  robots.txt  .nojekyll
```

All site content lives in `src/data/`. Add a project by appending to `projects`
in `portfolio.ts`; it appears on the home page, the work archive (with filtering),
and gets its own case-study page automatically. Add a post by appending to
`posts` in `posts.ts`.

## Things to personalize

Search for `TODO` in `src/data/portfolio.ts`:

- **`site.email`** — your public contact address (used on contact page + footer).
- **`site.location`** — your city, or `''` to hide.
- **`site.resumeUrl`** — drop a `resume.pdf` in `public/assets/` and link it.
- **`socials`** — your real LinkedIn URL.
- Outcome metrics in each project are honest but illustrative — refine with real numbers.

## Deploy — GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to
`main`. To enable: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

Set the URL in `astro.config.mjs`:

- **Project site** (`andresasj.github.io/andres-portfolio`): set
  `site: 'https://andresasj.github.io'` and `base: '/andres-portfolio'`.
- **User site** (`andresasj.github.io`) **or custom domain**: set `site` to that
  URL and keep `base: '/'`. For a custom domain, add `public/CNAME` containing the
  domain (e.g. `andresjimenez.dev`) — same pattern as your `kord-site` repo.

Internal links use `src/lib/url.ts`, so they respect `base` automatically.

Also deployable as-is to Cloudflare Pages, Netlify, or Vercel (build: `npm run build`,
output: `dist`).
