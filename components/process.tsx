import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Process() {
  const steps = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your vision, goals, and requirements. Together, we create a roadmap for success.",
    },
    {
      title: "Design & Prototype",
      description:
        "Our designers craft beautiful, intuitive interfaces that your users will love. See your idea come to life.",
    },
    {
      title: "Development & Testing",
      description: "Our developers build robust, scalable solutions with clean code and comprehensive testing.",
    },
    {
      title: "Launch & Support",
      description: "We deploy your product and provide ongoing support to ensure continued success and growth.",
    },
  ]

  return (
    <section id="process" className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A proven process that delivers
            </h2>
            <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
              We've refined our development process over years of delivering successful projects. From concept to
              launch, we're with you every step of the way.
            </p>
            <div className="mt-8">
              <Button size="lg">Start Your Journey</Button>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
