import { siteUrl } from '../lib/site';

// Generated once at build time (the site is a static export)
export const dynamic = 'force-static';

// The site is a single page; sections are anchors on it, which Google
// does not index separately, so only the home page belongs here.
export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
