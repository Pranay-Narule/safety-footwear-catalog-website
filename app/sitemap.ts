import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '')
  const staticRoutes = ['', '/catalog', '/about', '/contact'].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  const productRoutes = products.map((product) => ({
    url: `${base}/catalog/${product.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...staticRoutes, ...productRoutes]
}
