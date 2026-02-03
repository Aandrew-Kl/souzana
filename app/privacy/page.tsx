import type { Metadata } from "next"
import Container from "@/components/layout/Container"
import Prose from "@/components/typography/Prose"
import { pages } from "@/lib/content"

export const metadata: Metadata = {
  title: pages.privacy.title,
  description: pages.privacy.intro,
}

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/60 bg-muted py-24 sm:py-32">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-serif">
            {pages.privacy.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
            {pages.privacy.intro}
          </p>
        </Container>
      </section>
      <section className="py-24 sm:py-32">
        <Container>
          <Prose>
            {pages.privacy.sections.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Prose>
        </Container>
      </section>
    </div>
  )
}
