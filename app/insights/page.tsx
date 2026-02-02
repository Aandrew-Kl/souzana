import type { Metadata } from "next"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import InsightsFilters from "@/components/insights/InsightsFilters"
import { pages } from "@/lib/content"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Σύντομες σημειώσεις για κρίσιμα νομικά θέματα με καθαρή, πρακτική γλώσσα.",
}

export default function InsightsPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={pages.insights.eyebrow}
            title={pages.insights.title}
            description={pages.insights.description}
          />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <InsightsFilters />
        </Container>
      </section>
    </div>
  )
}
