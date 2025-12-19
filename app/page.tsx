import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ProjectShowcase } from "@/components/project-showcase"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ProjectShowcase />
      <CTA />
      <Footer />
    </main>
  )
}
