import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 overflow-hidden" id="home">
      {/* Left */}
      <div className="flex flex-col justify-end px-16 pb-20 pt-32 bg-paper relative z-10">
        <p className="animate-fade-up animate-delay-200 text-accent text-xs tracking-[0.15em] uppercase mb-6">
          Data &amp; Marketing Consulting
        </p>
        <h1 className="animate-fade-up animate-delay-400 font-syne font-extrabold text-[clamp(3.5rem,6vw,6rem)] leading-[0.95] tracking-tight mb-8">
          Turn Data into{' '}
          <em className="not-italic text-accent block">Growth.</em>
        </h1>
        <p className="animate-fade-up animate-delay-600 max-w-sm text-base leading-relaxed text-mid mb-12">
          SW Data helps businesses unlock the power of their data and marketing.
          We deliver strategy, insights, and results — no fluff, just impact.
        </p>
        <div className="animate-fade-up animate-delay-800 flex gap-4">
          <Link
            href="#contact"
            className="bg-ink text-paper font-syne font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-accent hover:-translate-y-0.5"
          >
            Work With Us
          </Link>
          <Link
            href="#about"
            className="border border-ink text-ink font-syne font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-ink hover:text-paper hover:-translate-y-0.5"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="bg-ink relative overflow-hidden flex items-center justify-center">
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Big background text */}
        <span className="absolute font-syne font-extrabold text-[22vw] text-white/[0.04] leading-none select-none pointer-events-none">
          SW
        </span>

        {/* Floating stat cards */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="animate-float bg-white/[0.06] border border-white/10 backdrop-blur-sm p-8 w-64">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
              Avg. Revenue Impact
            </p>
            <p className="font-syne font-bold text-3xl text-accent mb-1">+34%</p>
            <p className="text-xs text-white/50">after data strategy overhaul</p>
          </div>
          <div className="animate-float-delayed bg-white/[0.06] border border-white/10 backdrop-blur-sm p-8 w-64">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
              Marketing ROI
            </p>
            <p className="font-syne font-bold text-3xl text-white mb-1">3.8×</p>
            <p className="text-xs text-white/50">average across client campaigns</p>
          </div>
        </div>
      </div>
    </section>
  )
}
