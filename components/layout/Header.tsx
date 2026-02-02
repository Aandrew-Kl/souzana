"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          <span className="font-serif text-lg tracking-tight">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Κύρια πλοήγηση">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-muted-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-accent/70 after:transition-all hover:text-foreground hover:after:w-full",
                isActive(item.href) &&
                  "text-foreground after:w-full after:bg-accent"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="ml-2 h-9">
            <Link href="/contact">Κλείστε συνάντηση</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Άνοιγμα μενού"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle className="text-left font-serif text-lg">
                Πλοήγηση
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-base text-muted-foreground transition-colors hover:text-foreground",
                    isActive(item.href) && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/contact">Κλείστε συνάντηση</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
