import { getCategory, type Product } from '@/data/products'

export function ProductSpecifications({ product }: { product: Product }) {
  const rows: [string, string | undefined][] = [
    ['Product Code', product.code],
    ['Category', getCategory(product.category)?.name],
    ['Upper Material', product.upperMaterial],
    ['Sole Material', product.soleMaterial],
    ['Toe Protection', product.toeProtection],
    ['Closure', product.closure],
    ['Colour', product.color],
    ['Weight', product.weight],
    ['Available Sizes', product.sizes.join(', ')],
    ['Certifications', product.certifications?.join(', ')],
  ]

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <table className="w-full text-sm">
        <caption className="sr-only">{`${product.name} specifications`}</caption>
        <tbody>
          {rows
            .filter((row): row is [string, string] => Boolean(row[1]))
            .map(([label, value]) => (
              <tr key={label} className="border-b border-border last:border-0">
                <th scope="row" className="w-2/5 bg-muted/60 px-4 py-3 text-left font-medium text-muted-foreground">
                  {label}
                </th>
                <td className="px-4 py-3 font-medium text-foreground">{value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
