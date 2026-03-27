import Link from 'next/link'

type Section = {
  title: string
  body: string
}

type Props = {
  sections: Section[]
  outcomes: string[]
}

export default function ServiceContent({ sections, outcomes }: Props) {
  return (
    <article className="py-20 px-16 grid grid-cols-3 gap-16 border-t border-line">
      {/* Main content */}
      <div className="col-span-2 space-y-14">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-syne font-extrabold text-xl mb-4">{s.title}</h2>
            {s.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-mid text-sm leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Outcomes */}
        <div className="border border-line p-8">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-5">What You Get</p>
          <ul className="space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm text-mid">
                <span className="text-accent mt-0.5 shrink-0">→</span>
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-ink p-8">
          <p className="text-white font-syne font-extrabold text-lg mb-3 leading-tight">
            Ready to get started?
          </p>
          <p className="text-white/50 text-xs leading-relaxed mb-6">
            Let's talk about what you're trying to achieve and how we can help.
          </p>
          <Link
            href="/contact"
            className="block text-center bg-accent text-white font-syne font-bold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:bg-[#ff5a38]"
          >
            Get In Touch →
          </Link>
        </div>

        {/* Other services */}
        <div>
          <p className="text-xs tracking-widest uppercase text-mid mb-4">Other Services</p>
          <div className="space-y-2">
            {[
              { label: 'Marketing Analytics', href: '/services/marketing-analytics' },
              { label: 'Growth Marketing', href: '/services/growth-marketing' },
              { label: 'Data Strategy', href: '/services/data-strategy' },
              { label: 'Business Intelligence', href: '/services/business-intelligence' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-sm text-mid hover:text-accent transition-colors duration-200 py-1 border-b border-line/50 last:border-0"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
