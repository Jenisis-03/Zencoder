import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at TechCorp",
    content: "Zencoder has transformed our development workflow. The AI suggestions are incredibly accurate and context-aware.",
    avatar: "SC",
    image: "/avatars/sarah.jpg"
  },
  {
    name: "Alex Rodriguez",
    role: "Tech Lead at StartupX",
    content: "The integration with our existing tools was seamless. It's like having an expert pair programmer always available.",
    avatar: "AR",
    image: "/avatars/alex.jpg"
  },
  {
    name: "Emily Watson",
    role: "Full Stack Developer",
    content: "The code quality and documentation generated by Zencoder has significantly improved our team's productivity.",
    avatar: "EW",
    image: "/avatars/emily.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="container px-4 py-16 relative mx-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Loved By Professional Developers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who trust Zencoder for their daily coding tasks.
          </p>
        </div>
        
        {/* Responsive grid with centered cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/5 text-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="mt-4">
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}