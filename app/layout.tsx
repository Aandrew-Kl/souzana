import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { site } from "@/lib/site"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "el_GR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: site.url,
    areaServed: "Αθήνα, Ελλάδα",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Αθήνα",
      postalCode: "106 72",
      addressCountry: "GR",
    },
    telephone: site.phone,
    email: site.email,
  }

  return (
    <html lang="el" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-background text-foreground font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </body>
    </html>
  )
}
