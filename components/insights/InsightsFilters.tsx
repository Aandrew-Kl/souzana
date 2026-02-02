import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { posts } from "@/lib/content"
import { formatDate } from "@/lib/format"

export default function InsightsFilters() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
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
  )
}
