import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { practiceAreas } from "@/lib/content"
import { iconMap } from "@/lib/icons"

export default function PracticeAreasPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="order-2 space-y-12 lg:order-1">
            <SectionHeader
              eyebrow="Τομείς"
              title="Εξειδίκευση με βάθος"
              description="Επικεντρωνόμαστε σε τομείς όπου η ακρίβεια και η πρόληψη ρίσκου κάνουν τη διαφορά."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {practiceAreas.slice(0, 3).map((area) => {
                const Icon = iconMap[area.icon]
                return (
                  <Card key={area.slug} className="transition-colors">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-background">
                        <Icon className="size-4 text-accent" />
                      </span>
                      {area.title}
                    </div>
                    <CardContent className="space-y-4">
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
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <Button asChild variant="outline" className="h-11">
              <Link href="/practice-areas">Όλοι οι τομείς</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border/70">
              <Image
                src="/images/practice-1.jpg"
                alt="Αφαιρετική εικόνα δικαστικής αίθουσας"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32vw, 90vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
