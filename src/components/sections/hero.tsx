import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.015]" />
      <div className="container relative flex flex-col items-center text-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="inline-flex items-center rounded-2xl bg-muted/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-primary/10 mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5733] to-[#FF8C1A]">
            MEET YOUR NEW CODING COMPANION
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 mb-8 max-w-[800px] leading-[1.1]">
          Write better code faster with AI
        </h1>
        <p className="mt-6 text-xl text-muted-foreground sm:text-2xl max-w-2xl leading-relaxed mb-12">
          Experience the future of coding with our AI-powered assistant that helps you write cleaner, more efficient code.
          Get real-time suggestions and automated improvements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
          <Button size="lg" className="text-lg h-14 px-8 bg-[#FF5733] hover:bg-[#FF5733]/90 shadow-lg shadow-[#FF5733]/10 transition-all hover:shadow-xl hover:shadow-[#FF5733]/20" asChild>
            <Link href="/signup">Try For Free</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-primary/10 hover:bg-primary/5 transition-all" asChild>
            <Link href="/docs">View Documentation</Link>
          </Button>
        </div>
        <div className="mt-32 flex flex-col items-center">
          <h2 className="text-lg font-medium text-muted-foreground mb-12">
            Works with your favorite tools
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 sm:gap-12 opacity-60">
            <div className="h-8 w-8 bg-muted/20 rounded-lg" />
            <div className="h-8 w-8 bg-muted/20 rounded-lg" />
            <div className="h-8 w-8 bg-muted/20 rounded-lg" />
            <div className="h-8 w-8 bg-muted/20 rounded-lg" />
            <div className="h-8 w-8 bg-muted/20 rounded-lg" />
            <div className="h-8 w-8 bg-muted/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
