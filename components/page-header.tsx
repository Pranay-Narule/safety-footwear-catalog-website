import { SectionHeading } from '@/components/section-heading'

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-border bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} inverted />
      </div>
    </section>
  )
}
