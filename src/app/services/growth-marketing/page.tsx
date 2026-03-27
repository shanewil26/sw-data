import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ServiceHero from '@/components/ServiceHero'
import ServiceContent from '@/components/ServiceContent'

export const metadata: Metadata = {
  title: 'Growth Marketing',
  description:
    'Full-funnel growth marketing consulting. From direct mail campaigns to digital acquisition — data-driven strategies that scale customer growth efficiently.',
}

const content = {
  hero: {
    label: 'Growth Marketing',
    title: 'Scalable Growth,',
    subtitle: 'built on data.',
    desc: 'We design and execute growth programs that scale — from direct mail to digital. Every channel, every campaign, every decision is rooted in data and tested against real results.',
  },
  sections: [
    {
      title: 'Direct Mail & Offline Marketing',
      body: `Direct mail remains one of the highest-performing acquisition channels when done right — delivering better approval rates, higher value customers, and stronger long-term retention than most digital channels. The key is data.

We build direct mail programs from the ground up: sourcing and cleaning address databases, building predictive models to identify the best prospects, designing the testing framework, and monitoring performance at every stage of the funnel. We've scaled programs from thousands of letters to millions annually, and the principles are the same at every level: send to the right people, test relentlessly, and measure everything.`,
    },
    {
      title: 'Digital Acquisition',
      body: `PPC, SEO, comparison sites, partnerships — digital acquisition channels offer scale but require rigorous management to generate real returns. We help you build and optimise digital programs that are genuinely data-driven, not just data-informed.

We set up proper attribution, build the bidding and targeting models that reflect actual customer value, and manage agencies and in-house teams to hold them accountable to the metrics that matter. We've found that most digital programs have significant inefficiency that can be reduced with better measurement and smarter targeting.`,
    },
    {
      title: 'Funnel Optimisation',
      body: `Acquisition is only the start. The difference between good and great growth programs is what happens after someone first engages with you. We map your full funnel — from first touch to activated customer — and find the leverage points where small improvements have the biggest impact on overall economics.

We build a simplified, consistent funnel definition that works across all channels, giving you apples-to-apples comparisons and a shared language for performance conversations across your organisation.`,
    },
    {
      title: 'Testing & Iteration',
      body: `The best growth programs are built on a culture of testing. We design structured testing frameworks that let you learn quickly and compound those learnings over time. This means testing offers, creative, targeting, timing, and channel mix — and having the analytical infrastructure to read results accurately.

We've tested everything from letter copy and envelope formats to headline APR rates and pre-approval messaging. The principle is always the same: have a hypothesis, design a clean test, read the results honestly, and act on them.`,
    },
  ],
  outcomes: [
    'End-to-end direct mail program design and execution',
    'Digital acquisition channels built on real attribution',
    'Funnel optimisation that improves unit economics',
    'Structured testing frameworks with clear learnings',
    'Scalable growth infrastructure for future campaigns',
  ],
}

export default function GrowthMarketingPage() {
  return (
    <PageShell>
      <ServiceHero {...content.hero} />
      <ServiceContent sections={content.sections} outcomes={content.outcomes} />
    </PageShell>
  )
}
