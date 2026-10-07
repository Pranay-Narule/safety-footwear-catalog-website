/**
 * Central business configuration.
 * Replace every placeholder value below with your real business details.
 * All pages, buttons and links read from this file.
 */
export const siteConfig = {
  name: 'IronStride Safety',
  shortName: 'IronStride',
  tagline: 'Safety Footwear',
  description:
    'Explore reliable safety shoes, industrial footwear and protective work shoes.',
  // Production URL used for SEO, sitemap and Open Graph. Update after deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',

  contact: {
    // WhatsApp number in international format, digits only (country code + number).
    whatsappNumber: '919876543210',
    // Human-readable phone number shown on the site.
    phoneDisplay: '+91 98765 43210',
    // Phone number used for tel: links (with country code, no spaces).
    phoneLink: '+919876543210',
    email: 'sales@example.com',
    // Placeholder — replace with your registered business address.
    address: ['Your Business Name', 'Street address, Area', 'City, State – PIN Code', 'India'],
    // Placeholder — replace with your actual business hours.
    hours: [
      { days: 'Monday – Saturday', time: '9:30 AM – 6:30 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },

  whatsapp: {
    defaultMessage:
      'Hello, I would like to enquire about your safety footwear. Please share the catalog, prices and availability.',
  },
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const
