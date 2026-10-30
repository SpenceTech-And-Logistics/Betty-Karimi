// SEO settings for the whole site. This is the ONE place to edit SEO text.
// seo-plugin.js reads it at build time and writes the <head> tags,
// structured data (for Google), sitemap.xml and robots.txt.
// Keep this file plain JavaScript with no imports.
// The live address is set in .env.production (VITE_SITE_URL).

export const SITE = {
  name: "Betty Karimi",
  title: "Betty Karimi | Trade Finance Specialist & Founder, Recolte Limited",
  description:
    "Betty Karimi is a Nairobi trade finance specialist, Founder & MD of Recolte Limited, Vice Chairperson of RecoSIB LLP, Female CEO of the Year (COYA Awards 2026) and convener of the SHEconomy Summit 2026.",
  keywords: [
    "Betty Karimi",
    "Recolte Limited",
    "RecoSIB LLP",
    "SHEconomy Summit 2026",
    "trade finance Kenya",
    "bid bonds Kenya",
    "SME financing Nairobi",
    "women in business Kenya",
  ],

  // Social preview (WhatsApp, LinkedIn, Facebook, X). 1200 x 630 image in /public.
  image: "/og-image.jpg",
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Betty Karimi speaking at the SHEconomy Summit 2026",
  locale: "en_KE",
  themeColor: "#2a1040",

  // About the person (used for Google's structured data).
  jobTitle: "Founder & Managing Director",
  worksFor: [
    { name: "Recolte Limited", role: "Founder & Managing Director" },
    { name: "RecoSIB LLP", role: "Vice Chairperson" },
  ],
  formerEmployers: ["Premier Credit Limited", "InvesteQ Capital"],
  awards: [
    "Female CEO of the Year, COYA Awards 2026",
    "Business Maestro, Tally Solutions Africa MSME Honours 2026 (Recolte Limited)",
  ],
  knowsAbout: [
    "Trade finance",
    "Bid bonds and performance guarantees",
    "LPO financing",
    "Invoice discounting",
    "SME financing",
    "Procurement",
    "Women's economic empowerment",
  ],
  city: "Nairobi",
  country: "KE",

  // Fill these in when you have them. Empty values are left out automatically.
  email: "",
  telephone: "",
  // Her profile links (LinkedIn, Instagram, X, company site). Helps Google link them to her.
  sameAs: [],

  // Google Search Console "HTML tag" verification code (just the content="..." value).
  googleVerification: "",
};
