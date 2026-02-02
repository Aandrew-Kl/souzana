import type { Metadata } from "next"
import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { practiceAreas } from "@/lib/content"
import { iconMap } from "@/lib/icons"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Τομείς Δικαίου",
  description:
    "Οι βασικοί τομείς εξειδίκευσης του γραφείου μας: εταιρικό, ακίνητα, εργατικό, διαφορές και συμμόρφωση.",
}

export default function PracticeAreasPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Τομείς Δικαίου"
            title="Εξειδίκευση με σαφή στρατηγική"
            description="Η ομάδα μας καλύπτει επιλεγμένους τομείς με έμφαση στην ποιότητα και τη συνέπεια."
          />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon]
              return (
                <Card key={area.slug} className="gap-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="inline-flex size-10 items-center justify-center rounded-full border border-border/70">
                      <Icon className="size-4 text-accent" />
                    </span>
                    {area.title}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {area.shortDescription}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {area.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border/70 bg-card p-10 md:flex-row md:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Συνεργασία
            </p>
            <h2 className="text-2xl font-semibold font-serif">
              Χτίζουμε σταθερές σχέσεις εμπιστοσύνης
            </h2>
            <p className="text-sm text-muted-foreground">
              {site.name} · {site.location}
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Προγραμματίστε συνάντηση</Link>
          </Button>
        </Container>
      </section>
    </div>
  )
}
