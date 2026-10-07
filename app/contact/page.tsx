import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { PageHeader } from '@/components/page-header'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { EnquiryForm } from '@/components/enquiry-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name} on WhatsApp, phone or email for safety footwear prices and availability.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const { contact } = siteConfig

  const channels = [
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: contact.phoneDisplay,
      href: buildWhatsAppUrl(),
      external: true,
      highlight: true,
    },
    { icon: Phone, label: 'Phone', value: contact.phoneDisplay, href: `tel:${contact.phoneLink}` },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="The fastest way to reach us is WhatsApp. Share the model, sizes and quantity you need."
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:px-8">
        <section aria-labelledby="channels-heading" className="flex flex-col gap-4">
          <h2 id="channels-heading" className="text-2xl font-extrabold">
            Contact details
          </h2>
          <ul className="flex flex-col gap-3">
            {channels.map(({ icon: Icon, label, value, href, external, highlight }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/25"
                >
                  <span
                    className={
                      highlight
                        ? 'flex size-11 shrink-0 items-center justify-center rounded-md bg-whatsapp text-white'
                        : 'flex size-11 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent'
                    }
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="font-semibold break-all">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-semibold">Address</h3>
                <address className="text-sm leading-relaxed text-muted-foreground not-italic">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-semibold">Business hours</h3>
                <dl className="text-sm text-muted-foreground">
                  {contact.hours.map(({ days, time }) => (
                    <div key={days} className="flex gap-2">
                      <dt>{`${days}:`}</dt>
                      <dd className="font-medium text-foreground">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="enquiry-heading" className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 id="enquiry-heading" className="text-2xl font-extrabold">
            Send an enquiry
          </h2>
          <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
            Fill in your details and we will open WhatsApp with your message ready to send. Nothing is stored on this
            website.
          </p>
          <EnquiryForm />
        </section>
      </div>
    </>
  )
}
