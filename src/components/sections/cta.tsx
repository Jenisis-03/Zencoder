import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="container py-16 md:py-24">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] opacity-20" />
        <div className="relative px-6 py-16 md:px-12 backdrop-blur-sm border border-primary/10 rounded-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Code Smarter. Stay in Flow.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of developers using Zencoder to build better software, faster.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
