import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label={`${siteConfig.name} home`}>
      <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <ShieldCheck className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-lg font-extrabold uppercase tracking-tight',
            inverted ? 'text-white' : 'text-foreground',
          )}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={cn(
            'text-[10px] font-semibold uppercase tracking-[0.2em]',
            inverted ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  )
}
