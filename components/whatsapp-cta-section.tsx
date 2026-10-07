import Link from 'next/link'
import { cta } from '@/lib/cta'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function WhatsAppCtaSection({
  title = 'Need help choosing the right safety shoe?',
  description = 'Tell us about your work environment, quantity and sizes. We will recommend suitable models and share prices and availability on WhatsApp.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(135deg,var(--accent)_0_14px,transparent_14px_28px)]"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="text-pretty leading-relaxed text-white/70">{description}</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton size="lg">Chat on WhatsApp</WhatsAppButton>
            <Link href="/catalog" className={cta({ variant: 'outlineLight', size: 'lg' })}>
              Browse Catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
