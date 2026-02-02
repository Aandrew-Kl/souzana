import type { Metadata } from "next"
import Image from "next/image"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { teamMembers } from "@/lib/content"

export const metadata: Metadata = {
  title: "Η Ομάδα",
  description:
    "Γνωρίστε την ομάδα μας: δικηγόροι με εμπειρία σε εταιρικό δίκαιο, ακίνητα, εργατικό και συμμόρφωση.",
}

export default function TeamPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Η Ομάδα"
            title="Δημιουργούμε καθαρές λύσεις με συλλογική εμπειρία"
            description="Η ομάδα μας συνδυάζει νομική εξειδίκευση και πρακτική σκέψη, με κοινή μεθοδολογία εργασίας."
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
                  <p className="text-sm text-muted-foreground">
                    {member.bioLong}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Γλώσσες</p>
                    <p>{member.languages.join(" · ")}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Σπουδές</p>
                    <p>{member.education.join(" · ")}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
