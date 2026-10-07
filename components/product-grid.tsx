import type { Product } from '@/data/products'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/product-card'

export function ProductGrid({ products, className }: { products: Product[]; className?: string }) {
  return (
    <ul className={cn('grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3', className)}>
      {products.map((product) => (
        <li key={product.id} className="flex">
          <div className="flex w-full flex-col [&>article]:flex-1">
            <ProductCard product={product} />
          </div>
        </li>
      ))}
    </ul>
  )
}
