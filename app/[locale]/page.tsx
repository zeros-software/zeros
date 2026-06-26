import { QuoteModalProvider } from "@/components/quote-modal-context"
import { QuoteModal } from "@/components/QuoteModal/quote-modal"
import { Header } from "@/components/Header/header"
import { Hero } from "@/components/Hero/hero"
import { Services } from "@/components/Services/services"
import { Experience } from "@/components/Experience/experience"
import { Footer } from "@/components/Footer/footer"

export default function Home() {
  return (
    <QuoteModalProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Services />
        <Experience />
        <Footer />
      </main>
      <QuoteModal />
    </QuoteModalProvider>
  )
}
