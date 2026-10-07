import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { cta, type CtaProps } from '@/lib/cta'
import { buildProductWhatsAppUrl, buildWhatsAppUrl } from '@/lib/whatsapp'
import type { Product } from '@/data/products'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

interface WhatsAppButtonProps extends CtaProps {
  product?: Pick<Product, 'name' | 'code'>
  message?: string
  children?: ReactNode
  className?: string
  label?: string
}

export function WhatsAppButton({
  product,
  message,
  children = 'Enquire on WhatsApp',
  variant = 'whatsapp',
  size,
  className,
  label,
}: WhatsAppButtonProps) {
  const href = product ? buildProductWhatsAppUrl(product) : buildWhatsAppUrl(message)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(cta({ variant, size }), className)}
    >
      <WhatsAppIcon />
      {children}
    </a>
  )
}
