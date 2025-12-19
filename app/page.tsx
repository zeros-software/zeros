import { Hero } from "@/components/Hero/hero"
import { Services } from "@/components/Services/services"
import { ProjectShowcase } from "@/components/Project-showcase/project-showcase"
import { CTA } from "@/components/cta/cta"
import { Header } from "@/components/Header/header"
import { Footer } from "@/components/Footer/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      {/* <ProjectShowcase /> */}
      <CTA />
      <Footer />
    </main>
  )
}
