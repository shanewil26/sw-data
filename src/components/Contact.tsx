'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/supabase'
import { trackEvent } from '@/components/GoogleAnalytics'

const SERVICES = [
  'Data Strategy',
  'Marketing Analytics',
  'Audience Insights',
  'Growth Consulting',
  'Other',
]

type FormState = {
  first_name: string
  last_name: string
  email: string
  service: string
  message: string
}

const empty: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(empty)
      // Track form submission in GA
      trackEvent('form_submit', 'contact', form.service)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputClass =
    'bg-white/5 border border-white/10 text-paper placeholder-white/25 px-4 py-3 text-sm font-dm outline-none focus:border-accent transition-colors duration-200 w-full'

  return (
    <section id="contact" className="py-32 px-16 bg-ink text-paper grid grid-cols-2 gap-24 items-start">
      {/* Left info */}
      <div>
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-6">Get In Touch</p>
        <h2 className="font-syne font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] leading-tight tracking-tight text-paper mb-8">
          Let's Build Something Together
        </h2>
        <div className="mt-2 divide-y divide-white/[0.08]">
          {[
            { label: 'Email', value: 'hello@swdata.com' },
            { label: 'Location', value: 'Available Worldwide' },
            { label: 'Response', value: 'Within 24 hours' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4 py-5 text-sm text-white/60">
              <span className="font-syne font-semibold text-paper w-24">{label}</span>
              {value}
            </div>
          ))}
        </div>
      </div>

      {/* Right form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">First Name</label>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Jane"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">Last Name</label>
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Smith"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">I'm interested in</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className={inputClass}
            style={{ background: '#0a0a0f' }}
          >
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            rows={5}
            className={inputClass + ' resize-none'}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="self-start mt-2 bg-accent text-white font-syne font-bold text-xs tracking-widest uppercase px-10 py-4 transition-all duration-200 hover:bg-[#ff5a38] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message →'}
        </button>

        {status === 'success' && (
          <div className="border border-accent bg-accent/10 text-accent font-syne text-sm px-4 py-3">
            ✓ Message sent! We'll be in touch within 24 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="border border-red-500 bg-red-500/10 text-red-400 font-syne text-sm px-4 py-3">
            Something went wrong. Please try again or email us directly.
          </div>
        )}
      </form>
    </section>
  )
}
