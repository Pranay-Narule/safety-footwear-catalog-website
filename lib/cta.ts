import { cva, type VariantProps } from 'class-variance-authority'

export const cta = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:pointer-events-none',
  {
    variants: {
      variant: {
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        dark: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-border bg-background text-foreground hover:bg-muted',
        outlineLight: 'border border-white/25 bg-transparent text-white hover:bg-white/10',
        whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp/90',
      },
      size: {
        sm: 'h-9 px-3 text-sm [&_svg]:size-4',
        md: 'h-11 px-5 text-sm [&_svg]:size-4',
        lg: 'h-12 px-6 text-base [&_svg]:size-5',
      },
    },
    defaultVariants: { variant: 'dark', size: 'md' },
  },
)

export type CtaProps = VariantProps<typeof cta>
