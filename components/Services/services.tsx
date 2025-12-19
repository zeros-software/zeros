export function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "Full-stack applications with React, Next.js, Node.js, and modern databases.",
    },
    {
      number: "02",
      title: "Mobile Development",
      description: "Native iOS and Android apps, plus cross-platform solutions with React Native.",
    },
    {
      number: "03",
      title: "Blockchain",
      description: "Smart contracts, DeFi protocols, and decentralized applications.",
    },
    {
      number: "04",
      title: "Brand & Design",
      description: "Visual identity, UI/UX design, and design systems.",
    },
  ]

  return (
    <section id="services" className="border-t border-border/20">
      <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <h2 className="text-mono text-3xl font-bold tracking-tight mb-16 lg:text-4xl">Our services</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
          {services.map((service) => (
            <div key={service.number} className="space-y-4">
              <div className="text-sm font-mono text-muted-foreground">{service.number}</div>
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
