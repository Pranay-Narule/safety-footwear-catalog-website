import type { Metadata } from 'next'
import { BadgeCheck, Footprints, Headset, Shield, Wrench } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { PageHeader } from '@/components/page-header'
import { WhatsAppCtaSection } from '@/components/whatsapp-cta-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: `${siteConfig.name} provides reliable safety footwear for professionals and businesses looking for dependable protection, comfort and durability.`,
  alternates: { canonical: '/about' },
}

const pillars = [
  {
    icon: BadgeCheck,
    title: 'Quality',
    body: 'We select footwear built with solid materials and careful construction, so each pair performs shift after shift.',
  },
  {
    icon: Shield,
    title: 'Protection',
    body: 'Our range covers toe protection, slip resistance and other protective features suited to a variety of work environments.',
  },
  {
    icon: Footprints,
    title: 'Comfort',
    body: 'Cushioned insoles, supportive fits and breathable linings help reduce fatigue during long working hours.',
  },
  {
    icon: Wrench,
    title: 'Durability',
    body: 'Hard-wearing uppers and robust outsoles are chosen to stand up to demanding daily use.',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    body: 'Message us on WhatsApp for help choosing models, sizes and quantities for individuals or teams.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={`About ${siteConfig.name}`}
        description="We provide reliable safety footwear for professionals and businesses looking for dependable protection, comfort and durability."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Footwear you can rely on</h2>
            {/* Placeholder copy — replace with your own business story. */}
            <p className="leading-relaxed text-muted-foreground">
              {`${siteConfig.name} supplies safety shoes and work boots for people who need dependable protection on the job — from factory floors and warehouses to construction sites and offices.`}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Whether you need a single pair or footwear for an entire team, we help you find suitable models and
              sizes, and share prices and availability directly on WhatsApp.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 last:sm:col-span-2">
                <span className="flex size-11 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhatsAppCtaSection />
    </>
  )
}
