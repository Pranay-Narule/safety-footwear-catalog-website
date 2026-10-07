import Image from 'next/image'
import Link from 'next/link'
import { formatSizeRange, getCategory, getFeature, type Product } from '@/data/products'
import { cta } from '@/lib/cta'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category)
  const href = `/catalog/${product.slug}`
  const badges = product.features.slice(0, 3)

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-muted" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.images[0].src}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 rounded bg-ink px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:top-3 sm:left-3">
          {category?.shortName}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-3 sm:p-5">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-[11px] text-muted-foreground">{product.code}</p>
          <h3 className="font-heading text-base font-bold leading-snug text-foreground sm:text-lg">
            <Link href={href} className="hover:text-accent focus-visible:underline">
              {product.name}
            </Link>
          </h3>
          <p className="hidden text-sm leading-relaxed text-muted-foreground sm:line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5" aria-label="Key features">
          {badges.map((slug) => (
            <li
              key={slug}
              className="rounded-sm border border-border bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground/80 sm:text-[11px]"
            >
              {getFeature(slug)?.label}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3 text-xs sm:text-sm">
          <span className="text-muted-foreground">
            Sizes <span className="font-semibold text-foreground">{formatSizeRange(product.sizes)}</span>
          </span>
          <span className="hidden text-muted-foreground sm:inline">Price on enquiry</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Link href={href} className={cn(cta({ variant: 'outline', size: 'sm' }), 'w-full')}>
            View Details
          </Link>
          <WhatsAppButton product={product} size="sm" className="w-full" label={`Enquire about ${product.name} on WhatsApp`}>
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </article>
  )
}
