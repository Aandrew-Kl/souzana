import Image from "next/image"
import Container from "@/components/layout/Container"
import SectionHeader from "@/components/layout/SectionHeader"
import { home } from "@/lib/content"

export default function FirmPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={home.firmPreview.eyebrow}
          title={home.firmPreview.title}
          description={home.firmPreview.description}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <ul className="space-y-3 text-sm text-muted-foreground">
              {home.firmPreview.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid gap-6 sm:grid-cols-2">
              {home.firmPreview.images.slice(0, 2).map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-border/50"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 24vw, 90vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-border/50">
            <Image
              src={home.firmPreview.images[2].src}
              alt={home.firmPreview.images[2].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 44vw, 90vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
