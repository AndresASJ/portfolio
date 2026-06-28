// Prefix an internal path with the configured base so links keep working
// whether the site is served from a domain root or a GitHub Pages subpath.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/'): string => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}` || '/';
};
