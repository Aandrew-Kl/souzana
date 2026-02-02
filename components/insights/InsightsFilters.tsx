"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { posts } from "@/lib/content"
import { formatDate } from "@/lib/format"

export default function InsightsFilters() {
  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category))),
    []
  )
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts
    return posts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={!activeCategory}
          className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
            !activeCategory
              ? "border-foreground/20 bg-foreground text-background"
              : "border-border/70 text-muted-foreground hover:text-foreground"
          }`}
        >
          Όλα
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
              activeCategory === category
                ? "border-foreground/20 bg-foreground text-background"
                : "border-border/70 text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Card key={post.slug} className="gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/70">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>{post.category}</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="outline">Insights</Badge>
              <Link
                href={`/insights/${post.slug}`}
                className="text-sm font-semibold text-foreground underline decoration-accent/60 underline-offset-4 transition-colors hover:decoration-accent"
              >
                Διαβάστε →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
