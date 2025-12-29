export default function ContentPage() {
  return (
    <main className="min-h-[calc(100vh-8rem)]">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Content & Insights</h1>
          <p className="text-lg text-muted-foreground">
            Explore our thoughts on design, development, and digital strategy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {[
            {
              title: "The Future of Web Design",
              date: "December 2025",
              category: "Design",
              excerpt:
                "Exploring emerging trends in web design and how they're shaping the future of digital interfaces. From AI-assisted design tools to immersive web experiences.",
            },
            {
              title: "Building Scalable Applications",
              date: "November 2025",
              category: "Development",
              excerpt:
                "Best practices for architecting applications that grow with your business. Learn about performance optimization, code organization, and deployment strategies.",
            },
            {
              title: "User-Centered Design Principles",
              date: "October 2025",
              category: "Design",
              excerpt:
                "Why putting users first isn't just good practice—it's essential for creating products that truly resonate. Real examples from projects we've shipped.",
            },
            {
              title: "The Role of AI in Development",
              date: "September 2025",
              category: "Development",
              excerpt:
                "How AI tools are transforming the development workflow. Productivity gains, challenges, and what developers need to know to stay ahead.",
            },
          ].map((article, index) => (
            <article key={index} className="border-b border-border pb-8 last:border-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span className="text-sm font-medium text-accent">{article.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-accent transition-colors cursor-pointer">
                {article.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
