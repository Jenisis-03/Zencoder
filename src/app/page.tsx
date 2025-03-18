import Image from "next/image";
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { FAQ } from "@/components/sections/faq";
import BuiltToGrow from "@/components/sections/BuiltToGrow";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <Hero />
        <Features />
        <Testimonials />
        <BuiltToGrow/>
        <CTA />
        <FAQ/>
      </main>
      
      <Footer />
    </div>
  );
}
