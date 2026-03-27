import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with SW Growth. Talk to us about data strategy, marketing analytics, growth consulting, or any other data and marketing challenge.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-28 px-16 bg-paper border-b border-line">
          <div className="max-w-2xl">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">Let's Talk</p>
            <h1 className="font-syne font-extrabold text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] tracking-tight mb-6">
              Start a <em className="not-italic text-accent">Conversation.</em>
            </h1>
            <p className="text-mid text-base leading-relaxed">
              Whether you have a specific project in mind or just want to explore what's possible,
              we'd love to hear from you. We typically respond within 24 hours.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
