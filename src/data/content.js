// Everything on the site lives here. Edit text, swap photos in /public/images, keep the same file names (or update the paths below).
export const person = {
  name: 'Betty Karimi',
  short: 'Betty',
  headline: 'Unlocking capital for Africa’s enterprises.',
  roles: ['Founder & Managing Director, Recolte Limited', 'Vice Chairperson, RecoSIB LLP', 'Convener, SHEconomy Summit 2026'],
  intro:
    'A visionary entrepreneur, trade finance specialist and purpose-driven business leader with over 20 years of experience across trade finance, procurement, business development, enterprise development and strategic partnerships.',
  portrait: '/images/portrait.jpg',
  // Words that scroll across the purple band under the hero.
  ticker: ['Trade Finance', 'SME Empowerment', 'Bid Bonds', 'Financial Inclusion', 'Women in Business', 'Strategic Partnerships'],
}

// The "Career path" list in About. `period` is the small label on the left.
export const career = [
  { period: 'Current', title: 'Founder & Managing Director', org: 'Recolte Limited', short: 'RL' },
  { period: 'Current', title: 'Vice Chairperson', org: 'RecoSIB LLP', short: 'RS' },
  { period: '2026', title: 'Founder & Convener', org: 'SHEconomy Summit 2026', short: 'SH' },
  { period: 'Previously', title: 'Head of Trade Finance', org: 'Premier Credit Limited', short: 'PC' },
  { period: 'Previously', title: 'Business Development Manager', org: 'InvesteQ Capital', short: 'IQ' },
]

export const contact = {
  // Fill these in before publishing. Empty values are hidden automatically.
  email: '',
  phone: '',
  location: 'Nairobi, Kenya',
  linkedin: '',
  instagram: '',
  x: '',
  formspree: '', // optional: your Formspree form id, e.g. 'xyzabcde'
}

export const stats = [
  { value: '20+', label: 'Years in trade finance and enterprise development' },
  { value: '5,000+', label: 'SMEs enabled to access capital' },
  { value: '30 min', label: 'Bid bond processing, a model she pioneered' },
  { value: '1M', label: 'Women millionaires in five years: the SHEconomy ambition' },
]

export const about = {
  title: 'Business success should translate into economic and social transformation.',
  body: [
    'Betty champions a people-centred approach to business anchored in integrity, innovation, collaboration and strategic partnerships. She is driven by a strong commitment to financial inclusion, SME empowerment and social impact.',
    'She previously served as Head of Trade Finance at Premier Credit Limited and as Business Development Manager at InvesteQ Capital, developing trade finance strategies, managing operations, identifying new market opportunities, strengthening client relationships and driving revenue growth.',
    'Her ambition is an Africa where financial barriers do not limit enterprise potential.',
  ],
  values: ['Integrity', 'Innovation', 'Collaboration', 'Strategic partnerships'],
  image: '/images/podium-portrait.jpg',
}

export const ventures = [
  {
    tag: 'Vice Chairperson',
    name: 'RecoSIB LLP',
    text: 'Co-founded and helped build a trade finance powerhouse that provides working capital to SMEs and contractors. Designed and implemented financing products that have enabled more than 5,000 SMEs to execute projects across construction, ICT, supply chain and NGO services.',
    points: ['LPO financing', 'Invoice discounting', 'Contract financing', 'Reverse factoring'],
  },
  {
    tag: 'Founder & Managing Director',
    name: 'Recolte Limited',
    text: 'Provides strategic leadership in fast, accessible and collateral-light trade finance. Pioneered a 30-minute bid bond processing model and built partnerships with leading financial and insurance institutions to give SMEs a competitive edge in tendering and contract execution.',
    points: ['Bid bonds', 'Performance guarantees', 'Bonding facilities', '30-minute processing'],
  },
]

export const sheconomy = {
  title: 'SHEconomy Summit 2026',
  text: 'As founder and convener, Betty is championing the ambition of creating one million women millionaires within five years, by opening access to procurement opportunities, trade finance and strategic business networks.',
  image: '/images/sheconomy.jpg',
}

export const awards = [
  {
    year: '2026',
    title: 'Female CEO of the Year',
    by: 'COYA Awards 2026',
    text: 'Recognising her leadership in trade finance and SME empowerment.',
    image: '/images/coya-stage.jpg',
  },
  {
    year: '2026',
    title: 'Business Maestro',
    by: 'Tally Solutions Africa MSME Honours 2026',
    text: 'Awarded to Recolte Limited for its contribution to SME development.',
    image: '/images/business-maestro-trophy.jpg',
  },
]

export const milestones = [
  { title: 'Pioneer of 30-minute bid bond processing', text: 'A faster financing solution for SMEs participating in tenders.' },
  { title: 'Founder and convener, SHEconomy Summit 2026', text: 'Championing one million women millionaires within five years.' },
  { title: 'Co-founder, RecoSIB LLP', text: 'Expanding access to LPO financing, invoice discounting, contract financing and reverse factoring.' },
  { title: 'Kenya–Sri Lanka business cooperation', text: 'Took part in discussions with the Sri Lankan High Commission in July 2026.' },
  { title: 'Women’s economic empowerment leadership', text: 'Promoting access to procurement, trade finance and strategic business networks.' },
  { title: 'Industry thought leadership', text: 'Contributing to national discussions on procurement, financial inclusion and women-led enterprises, including the 2026 Women in Procurement and Supply Chain Conference.' },
]

export const gallery = [
  // span: 'wide' = two columns, 'tall' = two rows. The current mix fills the grid with no gaps.
  { src: '/images/sheconomy.jpg', caption: 'Convening the SHEconomy Summit 2026', span: 'wide' },
  { src: '/images/coya-stage.jpg', caption: 'COYA Awards 2026, Female CEO of the Year', span: 'wide' },
  { src: '/images/business-maestro-trophy.jpg', caption: 'Business Maestro, Tally MSME Honours 2026', span: 'tall' },
  { src: '/images/msme-honours.jpg', caption: 'MSME Honours 2026 honourees', span: 'wide' },
  { src: '/images/wcf-africa-summit.jpg', caption: 'WCF Africa Summit, Nairobi', span: 'tall' },
  { src: '/images/coya-group.jpg', caption: 'COYA Awards 2026', span: 'wide' },
]
