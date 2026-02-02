import { ScrollText, Scale, Building2, ShieldCheck } from "lucide-react"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { trustSignals } from "@/lib/content"

const icons = [ScrollText, Building2, Scale, ShieldCheck]

export default function TrustSignals() {
  return (
    <section className="py-16 sm:py-24 bg-muted">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow="Εμπιστοσύνη"
            title="Σταθερά σημεία αναφοράς"
            description="Επιλέγουμε την ποιότητα αντί της προβολής, με συνέπεια και επαγγελματική ευθύνη."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {trustSignals.map((signal, index) => {
              const Icon = icons[index % icons.length]
              return (
                <Card key={signal.title} className="flex-row items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full border border-border/70">
                    <Icon className="size-4 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {signal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {signal.description}
                    </p>
                  </div>
                </Card>
              )}
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
