import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { home } from "@/lib/content"
import Link from "next/link"

export default function TrustSignals() {
  return (
    <section className="py-24 sm:py-32 bg-muted/40">
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
          <Link
            href={home.trust.ctaHref}
            className="inline-flex text-sm font-semibold text-foreground underline decoration-accent/60 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {home.trust.ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  )
}
