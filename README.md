# Betty Karimi: single-page site (React + Vite)

Same layout family as the Lilian Manegene site, themed in purple (Betty's favourite) and green (corporate).

## Where things are
- `src/data/content.js`: ALL text (name, roles, ticker words, stats, about, career path, ventures, SHEconomy, awards, milestones, gallery, contact).
- `src/sections/`: Hero, Stats, About (bio + career path), Ventures, She (SHEconomy band), Recognition (tabbed awards and milestones), Gallery (lightbox), Contact.
- `src/components/`: Navbar (pill nav, active link, scroll progress bar), Footer, Count (count-up numbers).
- `src/styles.css`: colours are at the top (`--purple`, `--deep`, `--green`, `--green2`). Change them there.
- `public/images/`: photos. Replace a file keeping the same name, or change the path in `content.js`.

## Animations
Hero name rises in, roles and buttons fade up in sequence, portrait arch slides up, orbit rings spin around the portrait, award seal pops in and floats, scrolling ticker (pauses on hover), purple-to-green scroll progress bar, count-up stats and SHEconomy 1,000,000 counter, sections slide in from left/right as you scroll, ledger rows fill on hover, gallery zooms on hover with a lightbox. All motion turns off for visitors who set "reduce motion".

## SEO
- Edit SEO text in `src/seo/site.js`; the live address is in `.env.production`. See `SEO.md` for what is done and what is left.

## Run and deploy
- `npm install` then `npm run dev`.
- Deploy (Cloudflare Workers): `npm run build` then `npx wrangler deploy`, or push to the connected repo.

## Open items
- Contact email, phone, socials and Formspree id are blank in `content.js` (empty ones are hidden).
