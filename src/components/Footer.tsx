export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.06] px-16 py-6 flex justify-between items-center text-white/30 text-xs">
      <span className="font-syne font-extrabold text-paper">
        SW<span className="text-accent">.</span>Data
      </span>
      <span>© {new Date().getFullYear()} SW Data. All rights reserved.</span>
    </footer>
  )
}
