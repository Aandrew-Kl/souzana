import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Button } from "@/components/ui/button"
import { home } from "@/lib/content"

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="rounded-3xl border border-border/50 bg-card p-12 md:p-16">
          <SectionHeader
            eyebrow="Επικοινωνία"
            title={home.finalCta.title}
            description={home.finalCta.description}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={home.finalCta.ctaHref}>{home.finalCta.ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
