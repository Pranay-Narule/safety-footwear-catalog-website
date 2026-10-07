'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import {
  categories,
  features,
  products,
  type CategorySlug,
  type FeatureSlug,
} from '@/data/products'
import { cn } from '@/lib/utils'
import { cta } from '@/lib/cta'
import { ProductGrid } from '@/components/product-grid'
import { WhatsAppButton } from '@/components/whatsapp-button'

const categorySlugs = new Set<string>(categories.map((c) => c.slug))
const featureSlugs = new Set<string>(features.map((f) => f.slug))

export function CatalogBrowser() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const categoryParam = searchParams.get('category')
  const activeCategory = categoryParam && categorySlugs.has(categoryParam) ? (categoryParam as CategorySlug) : null
  const activeFeatures = (searchParams.get('features')?.split(',') ?? []).filter((f): f is FeatureSlug =>
    featureSlugs.has(f),
  )

  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [filtersOpen, setFiltersOpen] = useState(false)

  function updateParams(next: { category?: string | null; features?: string[]; q?: string }) {
    const params = new URLSearchParams(searchParams.toString())
    if (next.category !== undefined) {
      if (next.category) params.set('category', next.category)
      else params.delete('category')
    }
    if (next.features !== undefined) {
      if (next.features.length) params.set('features', next.features.join(','))
      else params.delete('features')
    }
    if (next.q !== undefined) {
      if (next.q.trim()) params.set('q', next.q)
      else params.delete('q')
    }
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  function toggleFeature(slug: FeatureSlug) {
    const next = activeFeatures.includes(slug)
      ? activeFeatures.filter((f) => f !== slug)
      : [...activeFeatures, slug]
    updateParams({ features: next })
  }

  function clearAll() {
    setQuery('')
    router.replace(pathname, { scroll: false })
  }

  const normalizedQuery = query.trim().toLowerCase()
  const filtered = products.filter((p) => {
    if (activeCategory && p.category !== activeCategory) return false
    if (activeFeatures.some((f) => !p.features.includes(f))) return false
    if (
      normalizedQuery &&
      !p.name.toLowerCase().includes(normalizedQuery) &&
      !p.code.toLowerCase().includes(normalizedQuery)
    )
      return false
    return true
  })

  const activeCount = (activeCategory ? 1 : 0) + activeFeatures.length + (normalizedQuery ? 1 : 0)

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
      <aside className="lg:w-64 lg:shrink-0" aria-label="Product filters">
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            aria-controls="catalog-filters"
            className={cn(cta({ variant: 'outline', size: 'md' }), 'flex-1')}
          >
            <SlidersHorizontal />
            Filters
            {activeCount > 0 && (
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">{activeCount}</span>
            )}
          </button>
        </div>

        <div
          id="catalog-filters"
          className={cn(
            'mt-4 flex-col gap-8 rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24 lg:mt-0 lg:flex',
            filtersOpen ? 'flex' : 'hidden',
          )}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="catalog-search" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Search
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  updateParams({ q: e.target.value })
                }}
                placeholder="Name or code, e.g. SS001"
                className="h-11 w-full rounded-md border border-input bg-background pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
              />
            </div>
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Category
            </legend>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              <FilterChip active={!activeCategory} onClick={() => updateParams({ category: null })}>
                All Products
              </FilterChip>
              {categories.map((c) => (
                <FilterChip
                  key={c.slug}
                  active={activeCategory === c.slug}
                  onClick={() => updateParams({ category: activeCategory === c.slug ? null : c.slug })}
                >
                  {c.shortName}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Features
            </legend>
            <div className="flex flex-col gap-1">
              {features.map((f) => {
                const checked = activeFeatures.includes(f.slug)
                return (
                  <label
                    key={f.slug}
                    className="flex min-h-10 cursor-pointer items-center gap-3 rounded-md px-2 text-sm text-foreground hover:bg-muted"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleFeature(f.slug)}
                      className="size-4 accent-[var(--accent)]"
                    />
                    {f.label}
                  </label>
                )
              })}
            </div>
          </fieldset>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              <X className="size-4" aria-hidden="true" />
              Clear all filters
            </button>
          )}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'product' : 'products'}
        </p>

        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-card px-6 py-16 text-center">
            <h2 className="font-heading text-xl font-bold">No products match your filters</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Try removing a filter, or send us your requirement on WhatsApp and we&apos;ll help you find the right shoe.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={clearAll} className={cta({ variant: 'outline' })}>
                Clear filters
              </button>
              <WhatsAppButton>Ask on WhatsApp</WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'min-h-10 rounded-md border px-3 text-left text-sm font-medium transition-colors lg:border-transparent',
        active
          ? 'border-primary bg-primary text-primary-foreground lg:border-primary'
          : 'border-border bg-background text-foreground hover:bg-muted lg:bg-transparent',
      )}
    >
      {children}
    </button>
  )
}
