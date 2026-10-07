import { Activity, Droplet, Droplets, Footprints, Shield, ShieldCheck, Wind, Zap, type LucideIcon } from 'lucide-react'
import type { FeatureSlug } from '@/data/products'

const featureIcons: Record<FeatureSlug, LucideIcon> = {
  'steel-toe': Shield,
  'composite-toe': ShieldCheck,
  'anti-slip': Footprints,
  'oil-resistant': Droplet,
  'water-resistant': Droplets,
  'electrical-hazard': Zap,
  breathable: Wind,
  'shock-absorbing': Activity,
}

export function FeatureIcon({ feature, className }: { feature: FeatureSlug; className?: string }) {
  const Icon = featureIcons[feature]
  return <Icon className={className} aria-hidden="true" />
}
