/**
 * Product catalog data.
 *
 * All products below are PLACEHOLDERS for demonstrating the layout.
 * Replace names, codes, descriptions, specifications and images with your real catalog.
 * Product images live in /public/images/products — swap the files or update the paths.
 *
 * Optional fields (upperMaterial, soleMaterial, etc.) are only displayed when present.
 * Only add `certifications` that your products actually hold.
 */

export type CategorySlug =
  | 'safety-shoes'
  | 'industrial'
  | 'steel-toe'
  | 'boots'
  | 'slip-resistant'
  | 'executive'

export type FeatureSlug =
  | 'steel-toe'
  | 'composite-toe'
  | 'anti-slip'
  | 'oil-resistant'
  | 'water-resistant'
  | 'electrical-hazard'
  | 'breathable'
  | 'shock-absorbing'

export interface Category {
  slug: CategorySlug
  name: string
  shortName: string
  description: string
  image: string
}

export interface Feature {
  slug: FeatureSlug
  label: string
  description: string
}

export interface ProductImage {
  src: string
  alt: string
}

export interface Product {
  id: string
  slug: string
  name: string
  code: string
  category: CategorySlug
  shortDescription: string
  description: string
  images: ProductImage[]
  features: FeatureSlug[]
  sizes: number[]
  featured?: boolean
  color?: string
  upperMaterial?: string
  soleMaterial?: string
  toeProtection?: string
  closure?: string
  weight?: string
  certifications?: string[]
}

export const categories: Category[] = [
  {
    slug: 'safety-shoes',
    name: 'Safety Shoes',
    shortName: 'Safety Shoes',
    description: 'Everyday protective shoes for factory floors and site work.',
    image: '/images/products/proguard-x1.png',
  },
  {
    slug: 'industrial',
    name: 'Industrial Safety Shoes',
    shortName: 'Industrial',
    description: 'Heavy-duty builds for demanding plant and manufacturing roles.',
    image: '/images/products/forge-industrial.png',
  },
  {
    slug: 'steel-toe',
    name: 'Steel Toe Shoes',
    shortName: 'Steel Toe',
    description: 'Reinforced toe caps for protection against impact and compression.',
    image: '/images/products/detail-toe.png',
  },
  {
    slug: 'boots',
    name: 'Work Boots',
    shortName: 'Boots',
    description: 'High-ankle support for construction, mining and outdoor sites.',
    image: '/images/products/terrain-boot.png',
  },
  {
    slug: 'slip-resistant',
    name: 'Slip Resistant Shoes',
    shortName: 'Slip Resistant',
    description: 'Grip-focused soles for wet, oily and polished surfaces.',
    image: '/images/products/gripmax-slip.png',
  },
  {
    slug: 'executive',
    name: 'Executive Safety Shoes',
    shortName: 'Executive',
    description: 'Formal styling with protective construction for supervisors.',
    image: '/images/products/executive-oxford.png',
  },
]

export const features: Feature[] = [
  { slug: 'steel-toe', label: 'Steel Toe', description: 'Steel toe cap helps protect against impact and compression.' },
  { slug: 'composite-toe', label: 'Composite Toe', description: 'Lightweight, metal-free toe protection.' },
  { slug: 'anti-slip', label: 'Anti Slip', description: 'Tread pattern designed for better grip on smooth floors.' },
  { slug: 'oil-resistant', label: 'Oil Resistant', description: 'Sole compound that resists degradation from oils and fuels.' },
  { slug: 'water-resistant', label: 'Water Resistant', description: 'Treated upper that helps keep water out.' },
  { slug: 'electrical-hazard', label: 'Electrical Hazard', description: 'Non-conductive construction for electrical work areas.' },
  { slug: 'breathable', label: 'Breathable', description: 'Ventilated lining for comfort through long shifts.' },
  { slug: 'shock-absorbing', label: 'Shock Absorbing', description: 'Cushioned midsole reduces fatigue from standing and walking.' },
]

const sharedDetails = {
  sole: { src: '/images/products/detail-sole.png', alt: 'Underside view showing the rubber tread pattern' },
  toe: { src: '/images/products/detail-toe.png', alt: 'Front view of the reinforced toe area' },
  back: { src: '/images/products/detail-back.png', alt: 'Rear view showing the padded collar and heel' },
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'proguard-x1',
    name: 'ProGuard X1',
    code: 'SS001',
    category: 'steel-toe',
    featured: true,
    shortDescription: 'Low-ankle leather safety shoe with steel toe and oil-resistant sole.',
    description:
      'The ProGuard X1 is a dependable everyday safety shoe for factory floors, warehouses and workshops. A full-grain leather upper, cushioned insole and steel toe cap combine protection with all-day comfort.',
    images: [
      { src: '/images/products/proguard-x1.png', alt: 'ProGuard X1 black leather steel toe safety shoe, side view' },
      sharedDetails.toe,
      sharedDetails.sole,
      sharedDetails.back,
    ],
    features: ['steel-toe', 'oil-resistant', 'anti-slip', 'shock-absorbing'],
    sizes: [6, 7, 8, 9, 10, 11],
    color: 'Black',
    upperMaterial: 'Full-grain leather',
    soleMaterial: 'Dual-density PU',
    toeProtection: 'Steel toe cap',
    closure: 'Lace-up',
  },
  {
    id: '2',
    slug: 'terrain-pro-boot',
    name: 'Terrain Pro Boot',
    code: 'WB101',
    category: 'boots',
    featured: true,
    shortDescription: 'High-ankle nubuck work boot built for construction and outdoor sites.',
    description:
      'Terrain Pro offers high-ankle support and a rugged lug sole for uneven ground. The padded collar and steel toe make it a solid choice for construction, mining and outdoor work.',
    images: [
      { src: '/images/products/terrain-boot.png', alt: 'Terrain Pro tan nubuck high-ankle work boot' },
      sharedDetails.sole,
      sharedDetails.back,
    ],
    features: ['steel-toe', 'anti-slip', 'oil-resistant', 'water-resistant'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    color: 'Tan',
    upperMaterial: 'Nubuck leather',
    soleMaterial: 'Rubber lug sole',
    toeProtection: 'Steel toe cap',
    closure: 'Lace-up with speed hooks',
  },
  {
    id: '3',
    slug: 'executive-guard',
    name: 'Executive Guard',
    code: 'EX201',
    category: 'executive',
    featured: true,
    shortDescription: 'Formal oxford-style safety shoe for supervisors and site visits.',
    description:
      'Executive Guard looks like a formal office shoe while offering protective construction underneath. Ideal for managers, engineers and supervisors who move between office and plant.',
    images: [
      { src: '/images/products/executive-oxford.png', alt: 'Executive Guard black formal oxford safety shoe' },
      sharedDetails.sole,
    ],
    features: ['composite-toe', 'anti-slip', 'shock-absorbing'],
    sizes: [6, 7, 8, 9, 10, 11],
    color: 'Black',
    upperMaterial: 'Polished leather',
    soleMaterial: 'Rubber',
    toeProtection: 'Composite toe cap',
    closure: 'Lace-up',
  },
  {
    id: '4',
    slug: 'gripmax-slip-on',
    name: 'GripMax Slip-On',
    code: 'SR301',
    category: 'slip-resistant',
    featured: true,
    shortDescription: 'Elastic-sided slip-on with a fine-tread slip resistant sole.',
    description:
      'GripMax is designed for kitchens, food processing and wet work areas. The fine tread pattern helps maintain grip on wet and oily floors, and the slip-on design is quick to wear.',
    images: [
      { src: '/images/products/gripmax-slip.png', alt: 'GripMax black slip-on safety shoe with elastic sides' },
      sharedDetails.sole,
    ],
    features: ['anti-slip', 'oil-resistant', 'water-resistant'],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    color: 'Black',
    upperMaterial: 'Smooth leather',
    soleMaterial: 'Slip resistant rubber',
    closure: 'Slip-on with elastic gussets',
  },
  {
    id: '5',
    slug: 'airflow-sport',
    name: 'AirFlow Sport',
    code: 'SS002',
    category: 'safety-shoes',
    featured: true,
    shortDescription: 'Lightweight sporty safety shoe with breathable mesh and composite toe.',
    description:
      'AirFlow Sport brings trainer-style comfort to the workplace. A breathable knit upper and metal-free composite toe keep weight low for logistics, warehouse and assembly line work.',
    images: [
      { src: '/images/products/airflow-sport.png', alt: 'AirFlow Sport grey and black mesh safety trainer' },
      sharedDetails.sole,
    ],
    features: ['composite-toe', 'breathable', 'shock-absorbing', 'anti-slip'],
    sizes: [6, 7, 8, 9, 10, 11],
    color: 'Grey / Black',
    upperMaterial: 'Breathable knit mesh',
    soleMaterial: 'EVA + rubber',
    toeProtection: 'Composite toe cap',
    closure: 'Lace-up',
  },
  {
    id: '6',
    slug: 'forge-industrial',
    name: 'Forge Industrial',
    code: 'IN401',
    category: 'industrial',
    featured: true,
    shortDescription: 'Heavy-duty mid-ankle shoe with scuff guard for plant work.',
    description:
      'Forge Industrial is built for heavy manufacturing, fabrication and engineering environments. A scuff-guard toe overlay and dual-density sole handle hard daily use.',
    images: [
      { src: '/images/products/forge-industrial.png', alt: 'Forge Industrial dark brown leather mid-ankle safety shoe' },
      sharedDetails.toe,
      sharedDetails.sole,
    ],
    features: ['steel-toe', 'oil-resistant', 'anti-slip', 'shock-absorbing'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    color: 'Dark Brown',
    upperMaterial: 'Buffalo leather',
    soleMaterial: 'Dual-density PU / rubber',
    toeProtection: 'Steel toe cap',
    closure: 'Lace-up',
  },
  {
    id: '7',
    slug: 'hydroshield-boot',
    name: 'HydroShield Boot',
    code: 'WB102',
    category: 'boots',
    shortDescription: 'Water resistant high-ankle boot with sealed seams.',
    description:
      'HydroShield is made for monsoon conditions, wet sites and outdoor maintenance. Sealed seams and a treated upper help keep feet dry, with a rugged rubber sole for traction.',
    images: [
      { src: '/images/products/hydroshield-boot.png', alt: 'HydroShield black water resistant high-ankle boot' },
      sharedDetails.sole,
      sharedDetails.back,
    ],
    features: ['steel-toe', 'water-resistant', 'anti-slip'],
    sizes: [7, 8, 9, 10, 11],
    color: 'Black',
    upperMaterial: 'Water-treated leather',
    soleMaterial: 'Rubber',
    toeProtection: 'Steel toe cap',
    closure: 'Lace-up with pull tab',
  },
  {
    id: '8',
    slug: 'voltguard-eh',
    name: 'VoltGuard EH',
    code: 'IN402',
    category: 'industrial',
    shortDescription: 'Strap-closure safety shoe designed for electrical work areas.',
    description:
      'VoltGuard EH uses metal-free construction for electrical maintenance and utility work. The hook-and-loop strap makes it quick to wear and remove between tasks.',
    images: [
      { src: '/images/products/voltguard-eh.png', alt: 'VoltGuard EH black strap-closure safety shoe' },
      sharedDetails.sole,
    ],
    features: ['composite-toe', 'electrical-hazard', 'anti-slip', 'breathable'],
    sizes: [6, 7, 8, 9, 10, 11],
    color: 'Black / Grey',
    upperMaterial: 'Leather with mesh lining',
    soleMaterial: 'Rubber',
    toeProtection: 'Composite toe cap',
    closure: 'Hook-and-loop strap',
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getCategory(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)
}

export function getFeature(slug: FeatureSlug) {
  return features.find((feature) => feature.slug === slug)
}

export function getFeaturedProducts(limit = 6) {
  return products.filter((product) => product.featured).slice(0, limit)
}

export function getRelatedProducts(product: Product, limit = 4) {
  const others = products.filter((p) => p.id !== product.id)
  const sameCategory = others.filter((p) => p.category === product.category)
  const sharedFeatures = others
    .filter((p) => p.category !== product.category)
    .map((p) => ({ p, score: p.features.filter((f) => product.features.includes(f)).length }))
    .sort((a, b) => b.score - a.score)
    .map(({ p }) => p)
  return [...sameCategory, ...sharedFeatures].slice(0, limit)
}

export function formatSizeRange(sizes: number[]) {
  if (sizes.length === 0) return ''
  const sorted = [...sizes].sort((a, b) => a - b)
  return sorted.length === 1 ? `${sorted[0]}` : `${sorted[0]}–${sorted[sorted.length - 1]}`
}
