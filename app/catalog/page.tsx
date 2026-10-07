import type { Metadata } from 'next'
import { Suspense } from 'react'
import { products } from '@/data/products'
import { PageHeader } from '@/components/page-header'
import { CatalogBrowser } from '@/components/catalog-browser'
import { ProductGrid } from '@/components/product-grid'

export const metadata: Metadata = {
  title: 'Safety Shoe Catalog',
  description:
    'Browse our full range of safety shoes, steel toe shoes, work boots, slip resistant and executive safety footwear.',
  alternates: { canonical: '/catalog' },
}

export default function CatalogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Safety Footwear Catalog"
        description="Filter by category or protection feature, then enquire on WhatsApp for price and availability."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Suspense fallback={<ProductGrid products={products} />}>
          <CatalogBrowser />
        </Suspense>
      </div>
    </>
  )
}
