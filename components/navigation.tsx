"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors">
            Studio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/content" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Content
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/content"
              className="block px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Content
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="block px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
