'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { trackEvent } from '@/components/GoogleAnalytics'

export default function EmailCapture() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      // Check if already signed up
      const { data: existing } = await supabase
        .from('email_signups')
        .select('id, confirmed')
        .eq('email', email)
        .single()

      if (existing?.confirmed) {
        setStatus('success')
        return
      }

      // Generate a simple token
      const token = crypto.randomUUID()

      // Upsert signup record with pending status
      const { error } = await supabase
        .from('email_signups')
        .upsert({
          first_name: firstName,
          email,
          confirmed: false,
          confirmation_token: token,
          source: typeof window !== 'undefined' ? window.location.pathname : '/',
        }, { onConflict: 'email' })

      if (error) throw error

      // Send confirmation email via our API route
      const res = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, token }),
      })

      if (!res.ok) throw new Error('Failed to send confirmation email')

      setStatus('success')
      setFirstName('')
      setEmail('')
      trackEvent('email_signup', 'mailing_list', window.location.pathname)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="py-20 px-16 bg-accent/[0.06] border-y border-accent/20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">Stay Informed</p>
        <h2 className="font-syne font-extrabold text-3xl tracking-tight mb-3">
          Get Data & Marketing Insights
        </h2>
        <p className="text-mid text-sm leading-relaxed mb-8">
          Join our mailing list for practical insights on data strategy, marketing analytics,
          and growth — delivered straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-accent/10 border border-accent text-accent font-syne text-sm px-6 py-4 max-w-md mx-auto">
            ✓ Almost there! Check your inbox for a confirmation email and click the link to subscribe.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="First name"
              required
              className="flex-1 bg-white border border-line text-ink placeholder-mid/60 px-4 py-3 text-sm outline-none focus:border-accent transition-colors duration-200"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-[2] bg-white border border-line text-ink placeholder-mid/60 px-4 py-3 text-sm outline-none focus:border-accent transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-ink text-paper font-syne font-bold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:bg-accent hover:-translate-y-0.5 disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-500 text-xs mt-3">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-mid text-xs mt-4">
          No spam, ever. Unsubscribe at any time. By subscribing you agree to our privacy policy.
        </p>
      </div>
    </section>
  )
}
