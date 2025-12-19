export function ProjectShowcase() {
  const projects = [
    {
      title: "Trading Platform",
      description: "Real-time cryptocurrency exchange with advanced charting and portfolio management.",
      year: "2024",
    },
    {
      title: "Healthcare System",
      description: "Patient management and telemedicine platform for medical practices.",
      year: "2024",
    },
    {
      title: "E-commerce Platform",
      description: "Multi-vendor marketplace with integrated payments and logistics.",
      year: "2023",
    },
    {
      title: "DeFi Protocol",
      description: "Decentralized lending and borrowing platform on Ethereum.",
      year: "2023",
    },
  ]

  return (
    <section id="work" className="border-t border-border/20">
      <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-border/10 pb-16 last:border-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">{project.year}</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
