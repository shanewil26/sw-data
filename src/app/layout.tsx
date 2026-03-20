import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SW Data — Data & Marketing Consulting',
  description:
    'SW Data helps businesses unlock the power of their data and marketing. Strategy, insights, and results.',
  keywords: ['data consulting', 'marketing analytics', 'audience insights', 'growth consulting'],
  openGraph: {
    title: 'SW Data — Data & Marketing Consulting',
    description: 'Turn data into growth. SW Data delivers strategy, insights, and results.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm font-light">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
