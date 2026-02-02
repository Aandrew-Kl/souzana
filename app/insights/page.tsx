import type { Metadata } from "next"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import InsightsFilters from "@/components/insights/InsightsFilters"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Σύντομες αναλύσεις και πρακτικές σημειώσεις για ζητήματα εταιρικού δικαίου, ακινήτων και συμμόρφωσης.",
}

export default function InsightsPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Insights"
            title="Καθαρή νομική σκέψη, χωρίς περιττό θόρυβο"
            description="Επιλεγμένες σημειώσεις που βοηθούν στη λήψη αποφάσεων με πρακτικό τρόπο."
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
