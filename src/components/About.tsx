const pillars = [
  {
    icon: '📊',
    title: 'Data Strategy',
    desc: 'Build a scalable data infrastructure that powers every decision.',
  },
  {
    icon: '📣',
    title: 'Marketing Analytics',
    desc: 'Measure what matters. Optimise campaigns with confidence.',
  },
  {
    icon: '🎯',
    title: 'Audience Insights',
    desc: 'Know your customers deeply and reach them at the right moment.',
  },
  {
    icon: '⚡',
    title: 'Growth Consulting',
    desc: 'From audit to execution — a full-service growth partner.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-16 grid grid-cols-2 gap-24 items-center border-t border-line"
    >
      <div>
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-6">About SW Data</p>
        <h2 className="font-syne font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] leading-tight tracking-tight mb-6">
          Where Data Meets Marketing Intelligence
        </h2>
        <p className="text-base leading-relaxed text-mid mb-4">
          SW Data is a boutique consulting firm focused on helping businesses make smarter,
          faster decisions. We bridge the gap between raw data and real marketing outcomes.
        </p>
        <p className="text-base leading-relaxed text-mid">
          Whether you're looking to understand your customers better, optimise your campaigns,
          or build a data-first culture — we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="p-7 border border-line relative group transition-all duration-300
              hover:border-accent
              before:content-[''] before:absolute before:top-0 before:left-0
              before:w-[3px] before:h-0 before:bg-accent before:transition-all before:duration-300
              hover:before:h-full"
          >
            <div className="text-2xl mb-3">{p.icon}</div>
            <h3 className="font-syne font-bold text-sm mb-2">{p.title}</h3>
            <p className="text-xs text-mid leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
