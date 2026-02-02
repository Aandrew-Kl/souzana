import { Clock3, Handshake, ShieldCheck } from "lucide-react"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"

const pillars = [
  {
    title: "Διακριτικότητα",
    description:
      "Καθαρά πρωτόκολλα εμπιστευτικότητας και επικοινωνία μόνο με τους απολύτως απαραίτητους ανθρώπους.",
    icon: ShieldCheck,
  },
  {
    title: "Στρατηγική συνεργασία",
    description:
      "Συμμετέχουμε στις επιχειρησιακές αποφάσεις με νομική ακρίβεια και πρακτικό πνεύμα.",
    icon: Handshake,
  },
  {
    title: "Άμεση ανταπόκριση",
    description:
      "Ορίζουμε σαφή χρονοδιαγράμματα και ενημερώνουμε υπεύθυνα σε κάθε στάδιο.",
    icon: Clock3,
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-muted">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow="Γιατί εμείς"
            title="Μια ήρεμη, μεθοδική προσέγγιση"
            description="Η ομάδα μας λειτουργεί ως στρατηγικός συνεργάτης, όχι ως απλός προμηθευτής υπηρεσιών."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="min-h-[220px] justify-between">
                <div className="flex size-11 items-center justify-center rounded-full border border-border/70">
                  <pillar.icon className="size-5 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
