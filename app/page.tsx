import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance mb-6">
              Modern Digital Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We create beautifully designed and thoughtfully engineered digital products that inspire and delight.
              Every pixel is intentional.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <Link
              href="/content"
              className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-card transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design",
                description:
                  "Thoughtfully crafted interfaces that are both beautiful and functional. We focus on user experience and visual excellence.",
              },
              {
                title: "Development",
                description:
                  "Clean, scalable code built with modern technologies. Performance and maintainability are our priorities.",
              },
              {
                title: "Strategy",
                description:
                  "Understanding your goals and crafting solutions that drive real results. Every project is unique.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent"></div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary/5 border border-border rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to start your project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life. We're excited to work with you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
