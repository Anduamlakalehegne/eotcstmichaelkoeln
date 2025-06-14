import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export default function FormsLinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="" subtitle="" />
      <main className="py-16">{children}</main>
      <Footer />
    </div>
  )
}
