import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ServiceHero from '@/components/ServiceHero'
import ServiceContent from '@/components/ServiceContent'

export const metadata: Metadata = {
  title: 'Marketing Analytics',
  description:
    'Data-driven marketing analytics consulting. We build attribution models, CAC and LTV frameworks, and channel performance dashboards that help you spend smarter.',
}

const content = {
  hero: {
    label: 'Marketing Analytics',
    title: 'Know Exactly What\'s Working',
    subtitle: 'and what isn\'t.',
    desc: 'Most businesses are flying blind with their marketing spend. We build the measurement frameworks, attribution models, and reporting systems that turn data into decisions.',
  },
  sections: [
    {
      title: 'Attribution That Actually Makes Sense',
      body: `Understanding which channels drive value is one of the hardest problems in marketing — and one of the most important. We build attribution models that are simple enough to be trusted across your organisation, while sophisticated enough to give you a real picture of channel performance.

Our approach balances analytical rigour with practicality. Getting 90% of attribution right and having everyone understand it is far more valuable than a perfect model nobody uses. We use logical attribution trees for offline and online channels, and help you set up the tracking infrastructure to make it work.`,
    },
    {
      title: 'CAC, LTV & Payback Modelling',
      body: `Customer Acquisition Cost and Lifetime Value are the two most important numbers in your business — but most companies calculate them inconsistently, or not at all. We build robust CAC and LTV models that account for channel, cohort, and customer segment, giving you a clear view of which customers are worth acquiring and at what cost.

We model payback periods at a campaign level, helping you understand when you'll see your money back and whether your unit economics are sustainable. This becomes your north star for marketing investment decisions.`,
    },
    {
      title: 'Channel Performance & Funnel Analytics',
      body: `We build a consistent funnel definition across all your marketing channels so you can make apples-to-apples comparisons. Every step — from impression to application to activation — is measured the same way regardless of source.

This consistency is what allows you to make confident decisions about where to invest. We set up the tracking, build the dashboards, and define the headline metrics that become the shared language of your marketing team.`,
    },
    {
      title: 'Data-Driven Campaign Optimisation',
      body: `Good measurement is only valuable if it drives action. We work with your team to translate analytics into optimisation decisions — improving response rates, approval rates, and conversion at every stage of the funnel.

We build cluster models to understand which audience segments perform best, and use this to continuously sharpen targeting and messaging. The goal is always to improve the ratio of value generated to spend, not just to hit volume targets.`,
    },
  ],
  outcomes: [
    'Clear attribution across online and offline channels',
    'CAC and LTV models your whole team understands',
    'Payback period visibility at campaign level',
    'Consistent funnel metrics across all channels',
    'Dashboards that drive weekly decisions',
  ],
}

export default function MarketingAnalyticsPage() {
  return (
    <PageShell>
      <ServiceHero {...content.hero} />
      <ServiceContent sections={content.sections} outcomes={content.outcomes} />
    </PageShell>
  )
}
