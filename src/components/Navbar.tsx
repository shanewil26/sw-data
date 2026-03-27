'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-16 py-5 bg-paper/90 backdrop-blur-sm border-b border-line/50">
      <Link href="/" className="font-syne font-extrabold text-sm tracking-widest text-ink uppercase">
        SW<span className="text-accent">.</span>Growth
      </Link>
      <ul className="flex gap-10 list-none">
        {NAV_ITEMS.map(({ label, href }) => {
          const isActive =
            href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs tracking-widest uppercase relative transition-colors duration-200
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0
                  after:h-px after:bg-accent after:transition-all after:duration-300
                  ${isActive
                    ? 'text-accent after:w-full'
                    : 'text-ink after:w-0 hover:after:w-full'
                  }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
