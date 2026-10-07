'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/config/site'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { WhatsAppButton } from '@/components/whatsapp-button'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  className={cn(
                    'relative block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                    isActive(pathname, link.href) && 'text-foreground',
                  )}
                >
                  {link.label}
                  {isActive(pathname, link.href) && (
                    <span className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-accent" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="sm">WhatsApp Us</WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  className={cn(
                    'flex h-12 items-center border-l-2 border-transparent px-3 text-base font-medium text-muted-foreground',
                    isActive(pathname, link.href) && 'border-accent bg-muted text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <WhatsAppButton size="lg" className="w-full">
                WhatsApp Us
              </WhatsAppButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
