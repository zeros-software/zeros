export function Stats() {
  const stats = [
    {
      value: "50+",
      label: "Projects delivered",
    },
    {
      value: "2018",
      label: "Established",
    },
    {
      value: "15+",
      label: "Team members",
    },
  ]

  return (
    <section className="border-b border-border/10">
      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold tracking-tight lg:text-6xl mb-3">{stat.value}</div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
