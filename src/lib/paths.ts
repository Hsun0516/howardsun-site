export const withBase = (base: string, href: string) => {
  if (/^https?:\/\//.test(href)) {
    return href;
  }

  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedHref = href.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedHref}`;
};
