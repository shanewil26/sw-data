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
  title: {
    default: 'SW Data — Data & Marketing Consulting',
    template: '%s | SW Data',
  },
  description:
    'SW Data is a specialist data and marketing consultancy offering data strategy, marketing analytics, audience insights, direct mail marketing, and growth consulting services.',
  keywords: [
    'data consulting',
    'marketing consulting',
    'growth consulting',
    'data strategy',
    'marketing analytics',
    'direct marketing',
    'direct mail marketing',
    'audience insights',
    'data services',
    'marketing data services',
    'data consultancy',
    'digital marketing consultant',
    'customer data platform',
    'marketing ROI',
  ],
  authors: [{ name: 'SW Data' }],
  creator: 'SW Data',
  publisher: 'SW Data',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://swgrowth.co.uk',
    siteName: 'SW Data',
    title: 'SW Data — Data & Marketing Consulting',
    description:
      'Specialist data and marketing consultancy. We help businesses grow through data strategy, marketing analytics, direct marketing, and audience insight.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SW Data — Data & Marketing Consulting',
    description:
      'Specialist data and marketing consultancy. We help businesses grow through data strategy, marketing analytics, direct marketing, and audience insight.',
  },
  alternates: {
    canonical: 'https://swgrowth.co.uk',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://swgrowth.co.uk/#business',
      name: 'SW Data',
      url: 'https://swgrowth.co.uk',
      description:
        'SW Data is a specialist data and marketing consultancy helping businesses grow through data strategy, marketing analytics, audience insights, direct mail marketing, and growth consulting.',
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      serviceType: [
        'Data Consulting',
        'Marketing Consulting',
        'Growth Consulting',
        'Data Strategy',
        'Marketing Analytics',
        'Direct Mail Marketing',
        'Direct Marketing',
        'Audience Insights',
        'Data Services',
      ],
      knowsAbout: [
        'Data Strategy',
        'Marketing Analytics',
        'Direct Marketing',
        'Direct Mail Marketing',
        'Audience Segmentation',
        'Customer Data',
        'Growth Consulting',
        'Marketing ROI',
        'Data Services',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SW Data Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data Strategy',
              description:
                'Build a scalable data infrastructure that powers every business decision. SW Data helps companies design and implement data strategies that drive measurable results.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Marketing Analytics',
              description:
                'Measure what matters. SW Data optimises marketing campaigns using data-driven analytics to improve ROI and reduce wasted spend.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Direct Mail Marketing',
              description:
                'Expert direct mail and direct marketing consulting. SW Data helps businesses target the right audiences with precision data to maximise direct marketing effectiveness.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Audience Insights',
              description:
                'Deep customer and audience analysis to help businesses understand who their customers are, what they want, and how to reach them effectively.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Growth Consulting',
              description:
                'End-to-end growth consulting from audit to execution. SW Data acts as a full-service growth partner for businesses looking to scale.',
            },
          },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@swgrowth.co.uk',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://swgrowth.co.uk/#website',
      url: 'https://swgrowth.co.uk',
      name: 'SW Data',
      description: 'Data and Marketing Consulting',
      publisher: {
        '@id': 'https://swgrowth.co.uk/#business',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What data consulting services does SW Data offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SW Data offers data strategy, marketing analytics, audience insights, direct mail marketing consulting, and growth consulting services to businesses worldwide.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does SW Data offer direct mail marketing consulting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. SW Data specialises in direct mail and direct marketing consulting, helping businesses build targeted audience lists, optimise campaign data, and improve direct marketing ROI.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can SW Data help grow my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SW Data acts as a full-service growth partner — from initial data audit through to strategy and execution. Services include data strategy, marketing analytics, audience segmentation, and direct marketing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries does SW Data work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SW Data works with businesses across a wide range of industries, helping any organisation that wants to make better use of their data to improve marketing performance and drive growth.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-dm font-light">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
