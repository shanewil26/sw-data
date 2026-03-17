'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-16 py-5 mix-blend-multiply">
      <Link href="/" className="font-syne font-extrabold text-sm tracking-widest text-ink uppercase">
        SW<span className="text-accent">.</span>Data
      </Link>
      <ul className="flex gap-10 list-none">
        <li>
          <Link
            href="#about"
            className="text-ink text-xs tracking-widest uppercase relative
              after:content-[''] after:absolute after:bottom-[-2px] after:left-0
              after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300
              hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-ink text-xs tracking-widest uppercase relative
              after:content-[''] after:absolute after:bottom-[-2px] after:left-0
              after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300
              hover:after:w-full"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
