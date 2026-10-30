# SEO: Betty Karimi website

Living SEO record for the site. Update it every time SEO changes: tick items off, add a line to the change log.

## How the SEO works
- **One file to edit:** `src/seo/site.js` holds the page title, description, keywords, social preview image, Google structured data (her roles, companies, awards, expertise), email, phone, social links and the Google verification code.
- **Live address:** `.env.production` (`VITE_SITE_URL`). Change it when the custom domain is connected, then rebuild.
- **Build step:** `seo-plugin.js` runs during `npm run build`. It writes the `<head>` tags into `dist/index.html`, and creates `dist/sitemap.xml` and `dist/robots.txt`. Nothing to do by hand.
- **Social preview image:** `public/og-image.jpg` (1200 x 630).

## Current settings
| Item | Value |
|---|---|
| Live address | https://betty-karimi.spencetechandlogistics.workers.dev |
| Title | Betty Karimi \| Trade Finance Specialist & Founder, Recolte Limited |
| Description | Betty Karimi is a Nairobi trade finance specialist, Founder & MD of Recolte Limited, Vice Chairperson of RecoSIB LLP, Female CEO of the Year (COYA Awards 2026) and convener of the SHEconomy Summit 2026. |
| Main search terms | Betty Karimi; Recolte Limited; RecoSIB LLP; SHEconomy Summit 2026; trade finance Kenya; bid bonds Kenya; SME financing Nairobi; women in business Kenya |
| Structured data | Person (roles, companies, awards, expertise), ProfilePage, WebSite |
| Sitemap | /sitemap.xml (home page + 2 key photos) |
| robots.txt | Allow all, points to sitemap |

## Done
- [x] Title, description, keywords, author, canonical link
- [x] Social previews: Open Graph (WhatsApp, LinkedIn, Facebook) and X card, with a 1200 x 630 image
- [x] Google structured data: Person, ProfilePage, WebSite
- [x] sitemap.xml and robots.txt generated on every build
- [x] Text fallback for crawlers without JavaScript (`<noscript>` in `index.html`)
- [x] One `<h1>` (her name), descriptive alt text on every photo, `lang="en"`
- [x] Photos already small (all under 300 KB), lazy-loaded below the hero

## To do
- [ ] Connect a custom domain (e.g. bettykarimi.com or .co.ke), then update `VITE_SITE_URL` and rebuild
- [ ] Add her email and phone to `src/seo/site.js` (and `src/data/content.js` for the footer)
- [ ] Add her profile links to `sameAs` in `src/seo/site.js` (LinkedIn, Instagram, X, recolte website, RecoSIB website)
- [ ] Google Search Console: add the site, paste the verification code into `googleVerification`, rebuild, verify, then submit `/sitemap.xml`
- [ ] Bing Webmaster Tools: import from Search Console
- [ ] Ask Recolte Limited, RecoSIB LLP and the SHEconomy Summit sites to link to her site (strongest ranking signal for her name)
- [ ] Check the social preview with the LinkedIn Post Inspector and the Facebook Sharing Debugger after each change to the image or title
- [ ] Test with Google's Rich Results Test and PageSpeed Insights once live

## Change log
- **2026-10-30:** SEO set up. Added `src/seo/site.js`, `seo-plugin.js`, `.env.production`, `public/og-image.jpg`, `<noscript>` text, sitemap and robots.txt. Live address set to the workers.dev address until a domain is connected.
