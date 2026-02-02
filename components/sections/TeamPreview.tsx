import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { home, teamMembers } from "@/lib/content"

export default function TeamPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow={home.teamPreview.eyebrow}
            title={home.teamPreview.title}
            description={home.teamPreview.description}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(0, 3).map((member) => (
              <Card key={member.name} className="gap-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/70">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 40vw, 90vw"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {member.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          <Button asChild variant="outline" className="h-11">
            <Link href={home.teamPreview.ctaHref}>
              {home.teamPreview.ctaLabel}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
