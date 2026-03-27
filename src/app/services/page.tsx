import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'SW Growth offers data strategy, marketing analytics, growth marketing, and business intelligence consulting services to help businesses grow.',
}

const SERVICES = [
  {
    href: '/services/marketing-analytics',
    icon: '📣',
    title: 'Marketing Analytics',
    desc: 'Measure what matters. We help you build attribution models, understand channel performance, and optimise your marketing spend with confidence.',
    tags: ['Attribution Modelling', 'CAC & LTV', 'Channel Analytics', 'Campaign ROI'],
  },
  {
    href: '/services/growth-marketing',
    icon: '⚡',
    title: 'Growth Marketing',
    desc: 'From direct mail to digital — we design and execute data-driven growth programs that scale. Full-funnel strategy from acquisition to retention.',
    tags: ['Direct Mail', 'Funnel Optimisation', 'A/B Testing', 'Customer Acquisition'],
  },
  {
    href: '/services/data-strategy',
    icon: '📊',
    title: 'Data Strategy',
    desc: 'Build a data infrastructure that powers every decision. We help you choose the right tools, define your metrics, and create a single source of truth.',
    tags: ['Data Stack', 'Snowflake', 'dbt', 'Looker', 'KPI Frameworks'],
  },
  {
    href: '/services/business-intelligence',
    icon: '🎯',
    title: 'Business Intelligence',
    desc: 'Turn raw data into clear insight. We design dashboards, reporting frameworks and analytical models that drive better decisions across your organisation.',
    tags: ['Dashboarding', 'LTV Modelling', 'Predictive Analytics', 'Reporting'],
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="py-28 px-16 border-b border-line bg-paper">
        <div className="max-w-3xl">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">What We Do</p>
          <h1 className="font-syne font-extrabold text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] tracking-tight mb-6">
            Services Built Around <em className="not-italic text-accent">Your Data.</em>
          </h1>
          <p className="text-mid text-base leading-relaxed max-w-xl">
            We work with businesses at every stage — from startups building their first data
            stack to established companies looking to get more from their marketing spend.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 px-16 grid grid-cols-2 gap-8">
        {SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group p-10 border border-line relative transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Accent left bar */}
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-300 group-hover:h-full" />

            <div className="text-3xl mb-5">{s.icon}</div>
            <h2 className="font-syne font-extrabold text-xl mb-3">{s.title}</h2>
            <p className="text-mid text-sm leading-relaxed mb-6">{s.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-widest uppercase border border-line px-3 py-1 text-mid group-hover:border-accent/40 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 text-accent font-syne font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn More →
            </div>
          </Link>
        ))}
      </section>
    </PageShell>
  )
}
