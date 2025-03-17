import { Button } from "@/components/ui/button"
import Link from "next/link"

const fileTree = [
  {
    name: "products_api.py",
    icon: "🐍",
    active: true
  },
  {
    name: "pricing_service.py",
    icon: "🐍",
    active: false
  },
  {
    name: "orders_api.py",
    icon: "🐍",
    active: false,
    new: true
  }
]

const features = [
  {
    title: "Code Repair & Validation",
    description: "Our AI pipeline automatically repairs and validates your code, ensuring it meets best practices and industry standards.",
    code: `<span class="comment">// Example of code repair</span>
<span class="keyword">function</span> <span class="function">processData</span>(<span class="type">data</span>) {
  <span class="comment">// AI detects potential issues</span>
  <span class="keyword">if</span> (!data || !Array.isArray(data)) {
    <span class="keyword">throw</span> <span class="keyword">new</span> <span class="type">Error</span>('Invalid input');
  }

  <span class="comment">// AI suggests optimized implementation</span>
  <span class="keyword">return</span> data.filter(Boolean)
    .map(item => transform(item));
}`
  },
  {
    title: "Advanced Search & Analysis",
    description: "Powerful search capabilities including embeddings search, graph search, and full-text search powered by GROKKING technology.",
    code: `<span class="comment">// Advanced search implementation</span>
<span class="keyword">class</span> <span class="type">SearchEngine</span> {
  <span class="keyword">async</span> <span class="function">search</span>(query) {
    <span class="comment">// AI performs multi-modal search</span>
    <span class="keyword">const</span> results = <span class="keyword">await</span> Promise.all([
      this.embeddingsSearch(query),
      this.graphSearch(query),
      this.fullTextSearch(query)
    ]);

    <span class="keyword">return</span> this.rankResults(results);
  }
}`
  },
  {
    title: "Continuous Integration Pipeline",
    description: "Complete development pipeline from planning to security, integrated with your favorite tools and platforms.",
    code: `<span class="comment">// CI/CD pipeline configuration</span>
pipeline {
  stages {
    stage(<span class="string">'Plan'</span>) { ... }
    stage(<span class="string">'Code'</span>) { ... }
    stage(<span class="string">'Test'</span>) { ... }
    stage(<span class="string">'Build'</span>) { ... }
    stage(<span class="string">'Monitor'</span>) { ... }
    stage(<span class="string">'Fix'</span>) { ... }
    stage(<span class="string">'Secure'</span>) { ... }
  }
}`
  }
]

export function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="container relative">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              <div className="flex-1 lg:sticky lg:top-20">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 mb-6">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {feature.description}
                </p>
                {index === 0 && (
                  <div className="mt-8 p-6 rounded-xl border border-primary/10 bg-[#1a1b1e]">
                    <h3 className="text-sm font-medium text-center mb-6">AGENTIC PIPELINE</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="h-24 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                          CODE REPAIR
                        </div>
                        <svg className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="relative">
                        <div className="h-24 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                          SYNTAX CORRECTION
                        </div>
                      </div>
                      <div className="relative">
                        <div className="h-24 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                          CODE CORRECTION
                        </div>
                        <svg className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="relative">
                        <div className="h-24 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                          CODE VALIDATION
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-8 p-6 rounded-xl border border-primary/10 bg-[#1a1b1e]">
                    <h3 className="text-sm font-medium text-center mb-6">REPO GROKKING</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <div className="h-24 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                          PRE-PROCESSING
                        </div>
                      </div>
                      <div className="h-16 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                        EMBEDDINGS SEARCH
                      </div>
                      <div className="h-16 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                        GRAPH SEARCH
                      </div>
                      <div className="h-16 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                        FULL TEXT SEARCH
                      </div>
                      <div className="h-16 rounded-lg border border-primary/10 bg-[#2a2b2e] flex items-center justify-center text-sm font-medium">
                        LLMS
                      </div>
                    </div>
                  </div>
                )}
                <Button variant="outline" size="lg" className="text-base h-12 px-6 border-primary/10 hover:bg-primary/5 transition-all mt-8" asChild>
                  <Link href="/docs">Learn More</Link>
                </Button>
              </div>
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-[#1a1b1e]">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-[#2a2b2e]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {fileTree[0].name}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-48 border-r border-primary/10 bg-[#1a1b1e]">
                      <div className="p-2">
                        <div className="text-xs font-medium text-muted-foreground mb-2">Files</div>
                        <div className="space-y-1">
                          {fileTree.map((file) => (
                            <div
                              key={file.name}
                              className={`flex items-center gap-2 px-2 py-1 rounded text-sm ${
                                file.active
                                  ? "bg-primary/10 text-foreground"
                                  : "text-muted-foreground hover:bg-primary/5"
                              }`}
                            >
                              <span>{file.icon}</span>
                              <span className="flex-1 truncate">{file.name}</span>
                              {file.new && (
                                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-primary/20 text-primary">
                                  New
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col items-center py-4 text-xs text-muted-foreground/50 border-r border-primary/10 bg-[#2a2b2e]">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="h-6">{i + 1}</div>
                        ))}
                      </div>
                      <pre className="pl-12 p-4 overflow-x-auto">
                        <code className="code-snippet" dangerouslySetInnerHTML={{ __html: feature.code }} />
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-32 text-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 opacity-60 mb-16">
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-[#4CAF50]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2196F3]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-[#4CAF50]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-[#9E9E9E]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-[#607D8B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1976D2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L11 13.17l6.59-6.59L19 8l-7 9z"/>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 opacity-60 mb-16">
            <div className="h-8 px-4 rounded-full bg-muted/20 flex items-center justify-center text-xs font-medium">PLAN</div>
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="h-8 px-4 rounded-full bg-muted/20 flex items-center justify-center text-xs font-medium">CODE</div>
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="h-8 px-4 rounded-full bg-muted/20 flex items-center justify-center text-xs font-medium">TEST</div>
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="h-8 px-4 rounded-full bg-muted/20 flex items-center justify-center text-xs font-medium">BUILD</div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 mb-6">
            Ready to transform your development workflow?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Join thousands of developers using our AI-powered platform to write better code faster.
          </p>
          <Button size="lg" className="text-lg h-14 px-8 bg-[#FF5733] hover:bg-[#FF5733]/90 shadow-lg shadow-[#FF5733]/20 transition-all hover:shadow-xl hover:shadow-[#FF5733]/30" asChild>
            <Link href="/signup">Try For Free</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
