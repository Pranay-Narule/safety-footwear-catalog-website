'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import type { ProductImage } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductGallery({ images, productName }: { images: ProductImage[]; productName: string }) {
  const [index, setIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const current = images[index]
  const hasMultiple = images.length > 1

  const go = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length)

  return (
    <div className="flex flex-col gap-3">
      <div className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          className="absolute inset-0 cursor-zoom-in"
          aria-label={`Enlarge image: ${current.alt}`}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </button>
        <span className="pointer-events-none absolute top-3 right-3 flex size-9 items-center justify-center rounded-md bg-background/90 text-foreground shadow-sm">
          <Expand className="size-4" aria-hidden="true" />
        </span>
        {hasMultiple && (
          <>
            <GalleryArrow side="left" onClick={() => go(-1)} />
            <GalleryArrow side="right" onClick={() => go(1)} />
          </>
        )}
      </div>

      {hasMultiple && (
        <ul className="grid grid-cols-4 gap-2 sm:gap-3" aria-label={`${productName} images`}>
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}: ${img.alt}`}
                aria-current={i === index}
                className={cn(
                  'relative block aspect-square w-full overflow-hidden rounded-md border-2 bg-muted transition-colors',
                  i === index ? 'border-accent' : 'border-transparent hover:border-border',
                )}
              >
                <Image src={img.src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        aria-label={`${productName} image viewer`}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
        className="m-auto max-h-[90vh] w-[min(92vw,900px)] overflow-hidden rounded-lg bg-background p-0 backdrop:bg-black/80"
      >
        <div className="relative aspect-square w-full bg-muted">
          <Image src={current.src} alt={current.alt} fill sizes="900px" className="object-contain" />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-md bg-background text-foreground shadow"
            aria-label="Close image viewer"
          >
            <X className="size-5" />
          </button>
          {hasMultiple && (
            <>
              <GalleryArrow side="left" onClick={() => go(-1)} alwaysVisible />
              <GalleryArrow side="right" onClick={() => go(1)} alwaysVisible />
            </>
          )}
        </div>
      </dialog>
    </div>
  )
}

function GalleryArrow({
  side,
  onClick,
  alwaysVisible,
}: {
  side: 'left' | 'right'
  onClick: () => void
  alwaysVisible?: boolean
}) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous image' : 'Next image'}
      className={cn(
        'absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow transition-opacity',
        side === 'left' ? 'left-3' : 'right-3',
        !alwaysVisible && 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100',
      )}
    >
      <Icon className="size-5" />
    </button>
  )
}
