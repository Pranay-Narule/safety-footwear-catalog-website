import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Category } from '@/data/products'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/catalog?category=${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-4 sm:p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">{category.name}</h3>
          <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">{category.description}</p>
        </div>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
