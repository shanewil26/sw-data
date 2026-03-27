import Link from 'next/link'

type Props = {
  label: string
  title: string
  subtitle: string
  desc: string
}

export default function ServiceHero({ label, title, subtitle, desc }: Props) {
  return (
    <section className="min-h-[55vh] grid grid-cols-2 overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-end px-16 pb-16 pt-28 bg-paper">
        <Link
          href="/services"
          className="text-mid text-xs tracking-widest uppercase mb-6 hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
        >
          ← All Services
        </Link>
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">{label}</p>
        <h1 className="font-syne font-extrabold text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] tracking-tight mb-6">
          {title}
          <em className="not-italic text-accent block">{subtitle}</em>
        </h1>
        <p className="text-mid text-base leading-relaxed max-w-sm">{desc}</p>
      </div>

      {/* Right — decorative */}
      <div className="bg-ink relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <span className="font-syne font-extrabold text-[18vw] text-white/[0.04] leading-none select-none pointer-events-none absolute">
          SW
        </span>
        <div className="relative z-10 flex flex-col gap-4 p-8">
          <div className="bg-white/[0.06] border border-white/10 px-6 py-4">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Approach</p>
            <p className="text-white font-syne font-bold text-sm">Data-first. Always.</p>
          </div>
          <div className="bg-white/[0.06] border border-white/10 px-6 py-4">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Delivery</p>
            <p className="text-white font-syne font-bold text-sm">Strategy to execution.</p>
          </div>
          <div className="bg-white/[0.06] border border-white/10 px-6 py-4">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Focus</p>
            <p className="text-white font-syne font-bold text-sm">Results that compound.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
