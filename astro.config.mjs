// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Deploying to GitHub Pages:
//   • Project site (username.github.io/andres-portfolio):
//       set `site` to your Pages URL and `base` to '/andres-portfolio'.
//   • User site or custom domain (e.g. via public/CNAME):
//       set `site` to the domain and leave `base` as '/'.
// The bundled GitHub Action (.github/workflows/deploy.yml) builds and deploys.
export default defineConfig({
  // Custom domain (public/CNAME). Apex domain, served from the root.
  site: 'https://asjcoding.com',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
