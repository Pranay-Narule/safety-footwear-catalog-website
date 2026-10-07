import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Droplets, Footprints, Ruler, ShieldCheck } from 'lucide-react'
import { cta } from '@/lib/cta'
import { WhatsAppButton } from '@/components/whatsapp-button'

const highlights = [
  { icon: ShieldCheck, label: 'Steel & composite toe options' },
  { icon: Footprints, label: 'Anti-slip sole designs' },
  { icon: Droplets, label: 'Oil & water resistant models' },
  { icon: Ruler, label: 'Wide size range' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 pb-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Safety Footwear Catalog
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Safety Shoes Built for the <span className="text-accent">Workday.</span>
          </h1>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Reliable safety footwear designed for industrial, construction, warehouse and everyday work environments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/catalog" className={cta({ variant: 'accent', size: 'lg' })}>
              View Catalog
              <ArrowRight />
            </Link>
            <WhatsAppButton size="lg" variant="outlineLight">
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
          <Image
            src="/images/hero-shoe.png"
            alt="Black leather safety work shoe with orange stitching and rugged rubber sole"
            width={1408}
            height={768}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative h-auto w-full rounded-xl"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 py-5 text-sm font-medium text-white/80">
              <Icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
