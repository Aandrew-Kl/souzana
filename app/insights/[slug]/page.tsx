import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import Prose from "@/components/typography/Prose"
import { pages, posts } from "@/lib/content"
import { estimateReadingTime, formatDate, slugify } from "@/lib/format"

const buildToc = (content: typeof posts[number]["content"]) =>
  content
    .filter((block) => block.type === "heading")
    .map((block) => ({
      text: block.text,
      id: slugify(block.text),
      level: block.level,
    }))

export const dynamicParams = false

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = posts.find((item) => item.slug === params.slug)
  if (!post) {
    return { title: "Insight" }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function InsightDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug)
  if (!post) {
    notFound()
  }

  const toc = buildToc(post.content)
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {post.category}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-serif">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{estimateReadingTime(post.content)}</span>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl">
              {post.excerpt}
            </p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-border/70">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <article>
            <Prose>
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  const Heading = block.level === 2 ? "h2" : "h3"
                  return (
                    <Heading key={block.text + index} id={slugify(block.text)}>
                      {block.text}
                    </Heading>
                  )
                }
                if (block.type === "paragraph") {
                  return <p key={block.text + index}>{block.text}</p>
                }
                if (block.type === "list") {
                  return (
                    <ul key={block.items.join("-") + index}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                }
                return null
              })}
            </Prose>
            <p className="mt-10 text-sm text-muted-foreground">
              {pages.insights.note}
            </p>
          </article>
          <aside className="space-y-6">
            <Card className="gap-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Περιεχόμενα
              </div>
              <div className="space-y-2 text-sm">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-muted-foreground transition-colors hover:text-foreground ${
                      item.level === 3 ? "pl-3" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </Card>
            <Card className="gap-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {pages.insights.relatedLabel}
              </div>
              <div className="space-y-3 text-sm">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="text-foreground/80 underline decoration-accent/50 underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </Container>
      </section>
    </div>
  )
}
