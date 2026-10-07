import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  as?: 'h1' | 'h2'
  className?: string
  inverted?: boolean
}

export function SectionHeading({ eyebrow, title, description, as: Tag = 'h2', className, inverted }: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-3', className)}>
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          'font-heading font-extrabold',
          Tag === 'h1' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl',
          inverted ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn('text-pretty leading-relaxed', inverted ? 'text-white/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </div>
  )
}
