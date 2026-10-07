import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories, features, getFeaturedProducts } from '@/data/products'
import { cta } from '@/lib/cta'
import { Hero } from '@/components/hero'
import { SectionHeading } from '@/components/section-heading'
import { CategoryCard } from '@/components/category-card'
import { ProductGrid } from '@/components/product-grid'
import { FeatureIcon } from '@/components/feature-icon'
import { WhatsAppCtaSection } from '@/components/whatsapp-cta-section'

export default function HomePage() {
  const featured = getFeaturedProducts(6)
  const highlightFeatures = features.slice(0, 4)

  return (
    <>
      <Hero />

      <section aria-labelledby="categories-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Shop by Category"
          description="Find footwear matched to your work environment and protection needs."
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured-heading" className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="Featured Products"
              description="Popular models trusted for daily work across sites and plants."
            />
            <Link href="/catalog" className={cta({ variant: 'outline', className: 'self-start sm:self-auto' })}>
              View full catalog
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ProductGrid products={featured} className="mt-10" />
        </div>
      </section>

      <section aria-labelledby="why-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Built to protect"
          title="Protection features that matter on the job"
          description="Every model in our range lists its protective features clearly, so you can choose with confidence."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlightFeatures.map((feature) => (
            <li key={feature.slug} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-md bg-accent/15 text-accent">
                <FeatureIcon feature={feature.slug} className="size-5" />
              </span>
              <h3 className="text-lg font-bold">{feature.label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <WhatsAppCtaSection />
    </>
  )
}
