import Link from 'next/link'
import { cta } from '@/lib/cta'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="font-mono text-sm font-semibold text-accent">404</p>
      <h1 className="text-3xl font-extrabold sm:text-4xl">Page not found</h1>
      <p className="text-muted-foreground">The page or product you are looking for does not exist.</p>
      <Link href="/catalog" className={cta({ variant: 'accent', size: 'lg' })}>
        Browse Catalog
      </Link>
    </section>
  )
}
