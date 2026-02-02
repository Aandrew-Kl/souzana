import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/content"

export default function TeamPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow="Ομάδα"
            title="Έμπειροι συνεργάτες με κοινή μεθοδολογία"
            description="Συνδυάζουμε εμπειρία σε συναλλαγές, ακίνητα και συμμόρφωση με πρακτική προσέγγιση."
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
                  <p className="text-sm text-muted-foreground">
                    {member.bioShort}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <Button asChild variant="outline" className="h-11">
            <Link href="/team">Γνωρίστε την ομάδα</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
