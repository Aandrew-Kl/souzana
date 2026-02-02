import type { Metadata } from "next"
import Image from "next/image"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { pages, teamMembers } from "@/lib/content"

export const metadata: Metadata = {
  title: "Ομάδα",
  description:
    "Η ομάδα μας προσφέρει προσωπική συνεργασία με σαφή ρόλους και σταθερή επικοινωνία.",
}

export default function TeamPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={pages.team.eyebrow}
            title={pages.team.title}
            description={pages.team.description}
          />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.name} className="gap-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/70">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </div>
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
        </Container>
      </section>
    </div>
  )
}
