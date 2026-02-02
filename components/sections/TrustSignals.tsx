import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { home } from "@/lib/content"

export default function TrustSignals() {
  return (
    <section className="py-16 sm:py-24 bg-muted">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow={home.trust.eyebrow}
            title={home.trust.title}
            description={home.trust.description}
          />
          <ul className="grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
            {home.trust.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 size-1.5 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
