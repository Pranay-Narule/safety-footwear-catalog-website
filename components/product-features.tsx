import { getFeature, type FeatureSlug } from '@/data/products'
import { FeatureIcon } from '@/components/feature-icon'

export function ProductFeatures({ features }: { features: FeatureSlug[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {features.map((slug) => {
        const feature = getFeature(slug)
        if (!feature) return null
        return (
          <li key={slug} className="flex gap-3 rounded-lg border border-border bg-card p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
              <FeatureIcon feature={slug} className="size-5" />
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="font-semibold text-foreground">{feature.label}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
