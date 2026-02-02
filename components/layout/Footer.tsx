import Link from "next/link"
import Container from "@/components/layout/Container"
import { site } from "@/lib/content"

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-serif text-lg">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.seo.description}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Επικοινωνία</p>
          <p className="text-muted-foreground">{site.contact.address}</p>
          <p className="text-muted-foreground">{site.contact.hours}</p>
          <p className="text-muted-foreground">{site.contact.phone}</p>
          <p className="text-muted-foreground">{site.contact.email}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Γρήγοροι σύνδεσμοι</p>
          <div className="flex flex-col gap-2 text-muted-foreground">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Πολιτική Απορρήτου
            </Link>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Νομικές επισημάνσεις</p>
          {site.legal.footer.map((line) => (
            <p key={line} className="text-muted-foreground">
              {line}
            </p>
          ))}
        </div>
      </Container>
      <Container className="border-t border-border/60 py-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {site.name}. Με επιφύλαξη παντός δικαιώματος.</p>
      </Container>
    </footer>
  )
}
