'use client'

import { Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { cta } from '@/lib/cta'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none sm:text-sm'

function composeMessage(form: HTMLFormElement) {
  const data = new FormData(form)
  const get = (key: string) => String(data.get(key) ?? '').trim()
  return [
    'Hello, I would like to make an enquiry.',
    `Name: ${get('name')}`,
    get('company') && `Company: ${get('company')}`,
    get('phone') && `Phone: ${get('phone')}`,
    `Message: ${get('message')}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export function EnquiryForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    window.open(buildWhatsAppUrl(composeMessage(e.currentTarget)), '_blank', 'noopener,noreferrer')
  }

  function handleEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form
    if (!form || !form.reportValidity()) return
    const subject = encodeURIComponent('Safety footwear enquiry')
    const body = encodeURIComponent(composeMessage(form))
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </Field>
        <Field label="Company (optional)" htmlFor="company">
          <input id="company" name="company" autoComplete="organization" className={fieldClass} />
        </Field>
      </div>
      <Field label="Phone (optional)" htmlFor="phone">
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </Field>
      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="e.g. Need 20 pairs of ProGuard X1, sizes 7–10"
          className={fieldClass}
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={cta({ variant: 'whatsapp', size: 'lg', className: 'sm:flex-1' })}>
          <WhatsAppIcon aria-hidden="true" />
          Send via WhatsApp
        </button>
        <button type="button" onClick={handleEmail} className={cta({ variant: 'outline', size: 'lg', className: 'sm:flex-1' })}>
          <Mail aria-hidden="true" />
          Send via Email
        </button>
      </div>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
