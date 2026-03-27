import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ServiceHero from '@/components/ServiceHero'
import ServiceContent from '@/components/ServiceContent'

export const metadata: Metadata = {
  title: 'Data Strategy',
  description:
    'Data strategy consulting for growing businesses. We help you build the right data stack, define your metrics, and create a single source of truth that scales.',
}

const content = {
  hero: {
    label: 'Data Strategy',
    title: 'One Source of Truth,',
    subtitle: 'for your whole business.',
    desc: 'The right data infrastructure doesn\'t just store numbers — it powers decisions at every level of your organisation. We help you build it right the first time.',
  },
  sections: [
    {
      title: 'Choosing the Right Data Stack',
      body: `The modern data stack has never been more powerful — or more confusing. Snowflake, dbt, Looker, BigQuery, Redshift, Fivetran — the options are endless and the wrong choices are expensive to undo. We help you cut through the noise and build a stack that fits your stage, your team, and your ambitions.

Our recommended foundation for most growing businesses is Snowflake as the data warehouse, dbt for modelling and transformation, and Looker or a similar BI tool for self-serve analytics. This combination gives you transparency on costs, strong data lineage, and the ability to decentralise analytics across your organisation without losing consistency.`,
    },
    {
      title: 'Data Modelling & dbt',
      body: `Raw data is not analytics. The work of turning raw data into reliable business metrics happens in your data models — and poorly built models are one of the most common sources of confusion, inconsistency, and mistrust in data teams.

We build dbt models with a clear Core layer that defines your canonical metrics — revenue, customers, churn, CAC, LTV — and protects them from being changed without proper sign-off. This Core becomes the foundation that all other analysis builds on. Teams can create their own models outside Core and promote them when they're ready, keeping innovation possible without compromising consistency.`,
    },
    {
      title: 'Metrics Definition & KPI Frameworks',
      body: `Before you can build a great data infrastructure, you need to agree on what you're measuring and why. We facilitate the process of defining your most important metrics — with your finance, product, and marketing teams — so that when you build, you're building the right things.

This means agreeing on definitions that seem obvious but rarely are: what counts as a customer, when does revenue get recognised, how do you handle refunds. Getting these right upfront saves enormous rework downstream.`,
    },
    {
      title: 'Centralise to Decentralise',
      body: `The goal of good data infrastructure is to make great analytics available everywhere in your organisation — not just in the data team. We build centralised data foundations so that your marketing, finance, product, and customer teams can all answer their own questions with confidence, using the same numbers.

We've rolled out data training programs across organisations of 200+ people, giving teams the SQL and BI skills to be self-sufficient while maintaining the data quality standards that make that self-service reliable.`,
    },
  ],
  outcomes: [
    'Right-sized data stack recommendation and implementation',
    'dbt Core models that become your source of truth',
    'Agreed metric definitions across finance and marketing',
    'Self-serve analytics capability across your organisation',
    'Data training and onboarding programs for your team',
  ],
}

export default function DataStrategyPage() {
  return (
    <PageShell>
      <ServiceHero {...content.hero} />
      <ServiceContent sections={content.sections} outcomes={content.outcomes} />
    </PageShell>
  )
}
