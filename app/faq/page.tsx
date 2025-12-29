"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive digital services including UI/UX design, web development, branding strategy, and digital consulting. Our approach is tailored to meet the unique needs of each client.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical project ranges from 4-12 weeks. We'll provide a detailed timeline during the discovery phase after understanding your specific requirements.",
    },
    {
      question: "What is your design process?",
      answer:
        "We follow a user-centered approach starting with discovery and research, moving through wireframing and prototyping, then design and development. We maintain close collaboration with clients throughout the entire process.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "We love working with startups and have experience across various industries and stages. We understand the unique challenges startups face and can help bring your vision to life efficiently.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-standard technologies including React, Next.js, TypeScript, Tailwind CSS, and more. We choose the best tools for each project based on requirements and scalability needs.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer post-launch support and maintenance packages. We can help with bug fixes, updates, feature additions, and performance optimization to keep your project running smoothly.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "We believe in transparent, regular communication. We typically use a combination of email, video calls, and project management tools to keep you updated on progress and gather feedback.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing based on project scope. This includes fixed-price projects, time-and-materials engagements, and retainer arrangements. We'll discuss the best model for your needs during consultation.",
    },
  ]

  return (
    <main className="min-h-[calc(100vh-8rem)]">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden transition-all">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-card transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 py-4 border-t border-border bg-card/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 p-8 bg-primary/5 border border-border rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Get in touch with us and we'll be happy to help clarify anything.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
