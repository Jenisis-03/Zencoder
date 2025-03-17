"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type NavItem = {
  name: string
  description?: string
  href: string
}

type NavGroup = {
  group: string
  items: NavItem[]
}

type NavSection = {
  name: string
  href: string
  featured?: {
    name: string
    title: string
    href: string
    cta: string
  }
  items?: (NavGroup | NavItem)[]
}

const navigation: NavSection[] = [
  { 
    name: "PRODUCT", 
    href: "/product",
    items: [
      {
        group: "Technology",
        items: [
          { name: "Repo Grokking™", description: "Deep code insights", href: "/product/grokking" },
          { name: "Agentic Pipeline", description: "Streamline dev processes", href: "/product/pipeline" }
        ]
      },
      {
        group: "Product",
        items: [
          { name: "All Features", description: "Complete feature set", href: "/product/features" },
          { name: "Coding Agent", description: "Autonomous AI agent", href: "/product/agent" },
          { name: "Integrations", description: "Seamless tool integrations", href: "/product/integrations" }
        ]
      }
    ]
  },
  { 
    name: "RESOURCES", 
    href: "/resources",
    featured: {
      name: "Live Webinar",
      title: "Ship Faster with New Zencoder Features",
      href: "/resources/webinar",
      cta: "Register"
    },
    items: [
      { name: "Resource Hub", href: "/resources/hub" },
      { name: "Blog", description: "Tech insights and news", href: "/resources/blog" },
      { name: "Documentation", description: "Quick guides and docs", href: "/resources/docs" },
      { name: "Webinars", description: "Live interactive webinars", href: "/resources/webinars" },
      { name: "Events", description: "Upcoming company events", href: "/resources/events" },
      { name: "Community", description: "Slack user community", href: "/resources/community" },
      { name: "Customer Stories", href: "/resources/stories" }
    ]
  },
  { 
    name: "PRICING", 
    href: "/pricing" 
  },
  { 
    name: "ENTERPRISE", 
    href: "/enterprise",
    featured: {
      name: "For Teams",
      title: "Enterprise-grade development solutions",
      href: "/enterprise/contact",
      cta: "Contact Sales"
    },
    items: [
      {
        group: "Solutions",
        items: [
          { name: "Team Features", description: "Collaborative workflows", href: "/enterprise/teams" },
          { name: "Security", description: "Enterprise-grade protection", href: "/enterprise/security" },
          { name: "Integrations", description: "Custom deployment", href: "/enterprise/integrations" }
        ]
      },
      { name: "Case Studies", description: "Success stories", href: "/enterprise/case-studies" },
      { name: "Contact Sales", description: "Get in touch", href: "/enterprise/contact" }
    ]
  },
  { 
    name: "COMPANY", 
    href: "/company",
    featured: {
      name: "Latest News",
      title: "Revolutionizing Development with AI",
      href: "/company/news",
      cta: "Read More"
    },
    items: [
      {
        group: "About Us",
        items: [
          { name: "Our Story", description: "Mission and vision", href: "/company/about" },
          { name: "Leadership", description: "Meet our team", href: "/company/team" },
          { name: "Careers", description: "Join our mission", href: "/company/careers" }
        ]
      },
      {
        group: "Connect",
        items: [
          { name: "Blog", description: "Tech insights and news", href: "/company/blog" },
          { name: "Contact", description: "Get in touch", href: "/company/contact" },
          { name: "Partners", description: "Strategic alliances", href: "/company/partners" }
        ]
      }
    ]
  }
]

export function Navbar() {
  return (
    <nav className="px-4 py-4 bg-background/80 backdrop-blur-md text-foreground fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="mr-2 text-[#FF5733]">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="8" fill="currentColor"/>
              <circle cx="8" cy="12" r="4" fill="currentColor"/>
              <circle cx="28" cy="12" r="4" fill="currentColor"/>
              <circle cx="8" cy="24" r="4" fill="currentColor"/>
              <circle cx="28" cy="24" r="4" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF5733] to-[#FF8C1A]">zencoder</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            item.items ? (
              <div key={item.name} className="relative group">
                <button className="nav-link text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors focus:outline-none">
                  {item.name}
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="nav-dropdown bg-background/95 border border-white/10 rounded-lg p-4 min-w-[320px] shadow-xl">
                    {item.featured && (
                      <div className="featured-item mb-4 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-[#FF5733] text-xs font-medium mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733]" />
                          {item.featured.name}
                        </div>
                        <div className="text-sm font-medium text-white mb-2">{item.featured.title}</div>
                        <Link href={item.featured.href} className="inline-block text-xs font-medium text-[#FF5733] hover:text-[#FF8C1A] transition-colors">
                          {item.featured.cta} →
                        </Link>
                      </div>
                    )}
                    {item.items.map((section, idx) => (
                      'group' in section ? (
                        <div key={section.group} className={idx > 0 ? 'mt-4' : ''}>
                          <div className="text-xs font-medium text-white/50 mb-2">{section.group}</div>
                          <div className="grid gap-2">
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="dropdown-item block p-2 rounded-md hover:bg-white/5 transition-colors"
                              >
                                <div className="text-sm font-medium text-white">{subItem.name}</div>
                                {subItem.description && (
                                  <div className="text-xs text-white/70">{subItem.description}</div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={section.name}
                          href={section.href}
                          className="dropdown-item block p-2 rounded-md hover:bg-white/5 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">{section.name}</div>
                          {section.description && (
                            <div className="text-xs text-white/70">{section.description}</div>
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="nav-link px-4 py-2 text-white text-sm font-medium hover:text-white/80 transition-colors">
            LOG IN
          </Link>
          <Link href="/signup" className="cta-button px-6 py-2 bg-[#FF5733] text-white text-sm font-medium rounded-full hover:bg-[#FF8C1A] transition-colors">
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open Menu" className="md:hidden text-white hover:text-white/80 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background text-white">
            <div className="flex flex-col gap-6 pt-6">
              {navigation.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <div className="flex flex-col gap-4 pl-4">
                      {item.featured && (
                        <div className="featured-item p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-[#FF5733] text-xs font-medium mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733]" />
                            {item.featured.name}
                          </div>
                          <div className="text-sm font-medium text-white mb-2">{item.featured.title}</div>
                          <Link href={item.featured.href} className="inline-block text-xs font-medium text-[#FF5733] hover:text-[#FF8C1A] transition-colors">
                            {item.featured.cta} →
                          </Link>
                        </div>
                      )}
                      {item.items.map((section) => (
                        'group' in section ? (
                          <div key={section.group}>
                            <div className="text-xs font-medium text-white/50 mb-2">{section.group}</div>
                            <div className="flex flex-col gap-2">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="dropdown-item block py-1 hover:bg-white/5 transition-colors"
                                >
                                  <div className="text-sm font-medium text-white">{subItem.name}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-white/70">{subItem.description}</div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={section.name}
                            href={section.href}
                            className="dropdown-item block py-1 hover:bg-white/5 transition-colors"
                          >
                            <div className="text-sm font-medium text-white">{section.name}</div>
                            {section.description && (
                              <div className="text-xs text-white/70">{section.description}</div>
                            )}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Link href="/login" className="w-full px-4 py-2 text-center text-white text-sm border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                  LOG IN
                </Link>
                <Link href="/signup" className="cta-button w-full px-4 py-2 text-center text-white text-sm rounded-full">
                  GET STARTED
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
