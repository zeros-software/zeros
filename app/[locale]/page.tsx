import { Hero } from "@/components/Hero/hero"
import { Services } from "@/components/Services/services"
import { CTA } from "@/components/cta/cta"
import { Header } from "@/components/Header/header"
import { Footer } from "@/components/Footer/footer"
import { About } from "@/components/About/about"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}
