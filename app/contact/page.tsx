import type { Metadata } from "next"
import Image from "next/image"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import ContactForm from "@/components/forms/ContactForm"
import { Button } from "@/components/ui/button"
import { pages, site } from "@/lib/content"

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε για μια σύντομη αρχική αξιολόγηση με σαφή πλαίσιο.",
}

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={pages.contact.eyebrow}
            title={pages.contact.title}
            description={pages.contact.description}
          />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-10">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/70">
              <Image
                src={pages.contact.officeImage.src}
                alt={pages.contact.officeImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 90vw"
              />
            </div>
            <div className="rounded-3xl border border-border/70 bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Γραφείο
              </p>
              <h3 className="mt-3 text-2xl font-semibold font-serif">
                {site.city}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>{site.contact.address}</p>
                <p>{site.contact.hours}</p>
                <p>{site.contact.phone}</p>
                <p>{site.contact.email}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-border/80 bg-muted px-6 py-10 text-center text-xs text-muted-foreground">
                Χάρτης περιοχής (placeholder)
              </div>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Επικοινωνία
              </p>
              <h3 className="mt-3 text-xl font-semibold font-serif">
                Κλείστε σύντομη συνάντηση
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Επιβεβαιώνουμε χρόνο και πλαίσιο μέσα από απλή ανταλλαγή
                πληροφοριών.
              </p>
              <Button className="mt-6" size="lg">
                Κλείστε συνάντηση
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {site.legal.message}
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
