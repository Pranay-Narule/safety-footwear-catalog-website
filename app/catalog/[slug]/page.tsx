import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getCategory, getProductBySlug, getRelatedProducts, products } from '@/data/products'
import { cta } from '@/lib/cta'
import { ProductGallery } from '@/components/product-gallery'
import { ProductFeatures } from '@/components/product-features'
import { ProductSpecifications } from '@/components/product-specifications'
import { ProductGrid } from '@/components/product-grid'
import { WhatsAppButton } from '@/components/whatsapp-button'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const title = `${product.name} (${product.code})`
  return {
    title,
    description: product.shortDescription,
    alternates: { canonical: `/catalog/${product.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: product.shortDescription,
      images: [{ url: product.images[0].src, alt: product.images[0].alt }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const category = getCategory(product.category)
  const related = getRelatedProducts(product, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </li>
          <li className="flex items-center gap-1.5">
            <Link href="/catalog" className="hover:text-foreground">
              Catalog
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </li>
          <li aria-current="page" className="font-medium text-foreground">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="flex flex-col gap-5 lg:pt-2">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <Link
                href={`/catalog?category=${category.slug}`}
                className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase hover:bg-accent/25"
              >
                {category.name}
              </Link>
            )}
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              {`Code: ${product.code}`}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl">{product.name}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{product.shortDescription}</p>
          <p className="leading-relaxed text-foreground/85">{product.description}</p>

          <div className="flex flex-col gap-3 border-y border-border py-5 sm:flex-row">
            <WhatsAppButton product={product} size="lg" className="sm:flex-1" />
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className={cta({ variant: 'outline', size: 'lg', className: 'sm:flex-1' })}
            >
              <Phone aria-hidden="true" />
              Call to enquire
            </a>
          </div>

          <section aria-labelledby="sizes-heading" className="flex flex-col gap-3">
            <h2 id="sizes-heading" className="text-base font-bold">
              Available Sizes <span className="font-normal text-muted-foreground">(UK)</span>
            </h2>
            <ul className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <li
                  key={size}
                  className="flex h-10 min-w-10 items-center justify-center rounded-md border border-border bg-card px-3 text-sm font-semibold"
                >
                  {size}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section aria-labelledby="features-heading" className="mt-14">
        <h2 id="features-heading" className="mb-5 text-2xl font-extrabold">
          Product Features
        </h2>
        <ProductFeatures features={product.features} />
      </section>

      <section aria-labelledby="specs-heading" className="mt-14 max-w-3xl">
        <h2 id="specs-heading" className="mb-5 text-2xl font-extrabold">
          Specifications
        </h2>
        <ProductSpecifications product={product} />
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-16">
          <h2 id="related-heading" className="mb-6 text-2xl font-extrabold">
            Related Products
          </h2>
          <ProductGrid products={related} className="lg:grid-cols-4" />
        </section>
      )}
    </div>
  )
}
