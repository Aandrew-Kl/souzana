import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-border/70 bg-card p-12 md:p-16">
          <SectionHeader
            eyebrow="Επικοινωνία"
            title="Ας συζητήσουμε τις ανάγκες σας με εχεμύθεια"
            description="Επικοινωνήστε για μια πρώτη αξιολόγηση της υπόθεσής σας."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Κλείστε συνάντηση</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/practice-areas">Δείτε τους τομείς</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
