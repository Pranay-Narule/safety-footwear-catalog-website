import { siteConfig } from '@/config/site'
import type { Product } from '@/data/products'

export function buildWhatsAppUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildProductEnquiryMessage(product: Pick<Product, 'name' | 'code'>) {
  return `Hello, I am interested in ${product.name} (Product Code: ${product.code}). Please share the price and availability.`
}

export function buildProductWhatsAppUrl(product: Pick<Product, 'name' | 'code'>) {
  return buildWhatsAppUrl(buildProductEnquiryMessage(product))
}
