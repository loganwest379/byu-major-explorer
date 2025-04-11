"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#002E5D]">BYU Marriott</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#002E5D] transition-colors">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-[#002E5D] transition-colors">
            Explore Majors
          </Link>
          <Link href="/compare" className="text-sm font-medium hover:text-[#002E5D] transition-colors">
            Compare Majors
          </Link>
          <Link href="/careers" className="text-sm font-medium hover:text-[#002E5D] transition-colors">
            Career Insights
          </Link>
          <Link href="/career-paths" className="text-sm font-medium hover:text-[#002E5D] transition-colors">
            Career Path Explorer
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#002E5D] transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#002E5D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="text-sm font-medium hover:text-[#002E5D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Explore Majors
            </Link>
            <Link
              href="/compare"
              className="text-sm font-medium hover:text-[#002E5D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Compare Majors
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium hover:text-[#002E5D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Career Insights
            </Link>
            <Link
              href="/career-paths"
              className="text-sm font-medium hover:text-[#002E5D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Career Path Explorer
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[#002E5D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
