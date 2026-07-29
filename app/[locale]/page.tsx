import { QuoteModalProvider } from "@/components/quote-modal-context"
import { QuoteModal } from "@/components/QuoteModal/quote-modal"
import { Header } from "@/components/Header/header"
import { Hero } from "@/components/Hero/hero"
import { Services } from "@/components/Services/services"
import { Experience } from "@/components/Experience/experience"
import { Footer } from "@/components/Footer/footer"
import {
  SITE_URL,
  getLocaleSeo,
  getLocaleUrl,
} from "@/lib/site-config"
import {
  type Locale,
  defaultLocale,
  isValidLocale,
} from "@/lib/translations"

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomePageProps) {
  const { locale: localeParam } = await params
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale
  const seo = getLocaleSeo(locale)
  const pageUrl = getLocaleUrl(locale)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Zeros",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description: seo.description,
        email: "hello@zeros.com.ar",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressCountry: "AR",
        },
        areaServed: ["Argentina", "Mexico", "United States"],
        knowsAbout: [
          "Web application development",
          "Mobile app development",
          "Artificial intelligence",
          "Blockchain development",
          "Product design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Zeros",
        url: SITE_URL,
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  }

  return (
    <QuoteModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
