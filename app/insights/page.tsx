import type { Metadata } from "next"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import InsightsList from "@/components/insights/InsightsList"
import { pages } from "@/lib/content"

export const metadata: Metadata = {
  title: pages.insights.title,
  description: pages.insights.description,
}

export default function InsightsPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/60 bg-muted py-24 sm:py-32">
        <Container>
          <SectionHeader
            eyebrow={pages.insights.eyebrow}
            title={pages.insights.title}
            description={pages.insights.description}
          />
        </Container>
      </section>
      <section className="py-24 sm:py-32">
        <Container>
          <InsightsList />
        </Container>
      </section>
    </div>
  )
}
