import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { navLinks, siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const footerCategories = [
  { label: 'Safety Shoes', slug: 'safety-shoes' },
  { label: 'Industrial Shoes', slug: 'industrial' },
  { label: 'Work Boots', slug: 'boots' },
  { label: 'Steel Toe', slug: 'steel-toe' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Reliable safety footwear for industrial, construction, warehouse and everyday work environments.
          </p>
        </div>

        <FooterColumn title="Navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Categories">
          {footerCategories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/catalog?category=${c.slug}`}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </li>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/50 sm:px-6 lg:px-8">
          {`© ${year} ${siteConfig.name}. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  )
}
