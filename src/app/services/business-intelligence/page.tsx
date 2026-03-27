import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ServiceHero from '@/components/ServiceHero'
import ServiceContent from '@/components/ServiceContent'

export const metadata: Metadata = {
  title: 'Business Intelligence',
  description:
    'Business intelligence and analytics consulting. LTV modelling, predictive analytics, dashboarding, and reporting frameworks that drive better decisions.',
}

const content = {
  hero: {
    label: 'Business Intelligence',
    title: 'Data That Drives',
    subtitle: 'better decisions.',
    desc: 'Raw data is only valuable when it becomes insight. We build the analytical models, dashboards, and reporting frameworks that translate your data into clear, actionable intelligence.',
  },
  sections: [
    {
      title: 'LTV & Gross Margin Modelling',
      body: `Understanding the true lifetime value of your customers is the foundation of every good commercial decision — pricing, acquisition spend, retention investment, product development. We build actual gross margin models on a month-by-month basis for every customer, incorporating all revenue and cost elements to give you a complete picture of customer value.

The model covers interest revenue, spend revenue, fees, bad debt, cost of capital, servicing costs, and repayment behaviour. This becomes your source of truth for understanding which customers are most valuable and why — and which segments you should be prioritising across every part of the business.`,
    },
    {
      title: 'Predictive Analytics',
      body: `Waiting for actual results to understand the value of a new customer cohort is expensive — it slows down decision-making and makes it hard to course-correct quickly. We build predictive models that give you an early read on customer quality, payback period, and expected lifetime value within weeks of acquisition.

These models use the early behavioural signals — spend patterns, repayment behaviour, engagement — to predict long-term outcomes. They become your north star metric, replacing lagging volume numbers with leading indicators of business health.`,
    },
    {
      title: 'Dashboards & Reporting',
      body: `A great dashboard is one that gets used. We design reporting that is simple, trusted, and actionable — not a showcase of every metric you could possibly track. We work with you to identify the 5-10 numbers that genuinely drive decisions and build them into a daily or weekly reporting cadence that your whole organisation can rely on.

We build in Looker, Tableau, or whichever BI tool fits your stack, and always ensure the underlying models are defined in dbt so there's a clear lineage from raw data to dashboard number. No black boxes, no manual manipulation.`,
    },
    {
      title: 'Credit & Risk Modelling',
      body: `For businesses with a credit or financial services element, understanding risk is central to everything. We have deep experience building credit scoring models, probability of default calculations, and credit limit optimisation frameworks that balance risk and commercial opportunity.

We've built internal credit scores that combine bureau data with behavioural signals, modelled optimal credit limit strategies across thousands of customers, and developed covenant monitoring systems for debt funders. We understand both the analytical and the commercial sides of credit risk.`,
    },
  ],
  outcomes: [
    'Actual gross margin model for every customer cohort',
    'Predictive LTV model for early channel assessment',
    'Trusted dashboards used across the whole organisation',
    'Credit and risk frameworks built for your context',
    'Analytical team capability building and training',
  ],
}

export default function BusinessIntelligencePage() {
  return (
    <PageShell>
      <ServiceHero {...content.hero} />
      <ServiceContent sections={content.sections} outcomes={content.outcomes} />
    </PageShell>
  )
}
