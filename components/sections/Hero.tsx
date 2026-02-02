import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="border-b border-border/60 bg-background">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              ΑΘΗΝΑ
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-serif">
              Στρατηγική νομική καθοδήγηση με διακριτικότητα και ακρίβεια.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Προσφέρουμε τεκμηριωμένη υποστήριξη με έμφαση στη σαφήνεια των επιλογών
              και στη μείωση του ρίσκου.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Ζητήστε συνάντηση</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/practice-areas">Οι τομείς μας</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Σαφείς χρεώσεις, εχεμύθεια και έγκαιρη ενημέρωση σε κάθε στάδιο.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70">
              <Image
                src="/images/hero.jpg"
                alt="Διακριτικό γραφειακό περιβάλλον με νομικές λεπτομέρειες"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 0px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
