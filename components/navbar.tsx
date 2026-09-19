"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "01. About", href: "#about" },
  { label: "02. Skills", href: "#skills" },
  { label: "03. Projects", href: "#projects" },
  { label: "04. Stats", href: "#stats" },
  { label: "05. Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  /*
   * scrolled state ditoggle lewat IntersectionObserver pada sebuah sentinel
   * di atas halaman, BUKAN window.scrollY di tiap event scroll. Observer
   * hanya memanggil setState ketika threshold dilintasi (jarang), jadi
   * backdrop-blur toggle tidak men-trigger re-render per piksel scroll.
   */
  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel")
    if (!sentinel || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: "-56px 0px 0px 0px" }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300",
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="h-16 max-w-[1200px] mx-auto px-5 md:px-12 flex items-center justify-between gap-4">
          {/* Brand / monogram */}
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo-monogram.svg"
              alt="Monogram Aliffian Maesanjaya"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
              unoptimized
            />
            <span className="font-sans font-semibold tracking-tight text-text-primary uppercase hidden sm:inline-block">
              Fian.dev{" "}
              <span className="font-mono text-label-sm text-text-tertiary tracking-[0.08em]">
                {"// ANALYST"}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-label-md uppercase tracking-[0.08em] text-text-secondary hover:text-secondary transition-colors"
              >
                {"// "}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Status chip */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-substrate-1 border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-secondary">
              Open to work
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-text-secondary hover:text-secondary transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <nav className="max-w-[1200px] mx-auto px-5 md:px-12 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-3 rounded-[4px] font-mono text-label-md uppercase tracking-[0.08em] text-text-secondary hover:text-secondary hover:bg-substrate-1 transition-colors"
                >
                  {"// "}
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/fiannnn9090"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-3 rounded-[4px] font-mono text-label-md uppercase tracking-[0.08em] text-secondary hover:text-white hover:bg-substrate-1 transition-colors"
              >
                // github: fiannnn9090
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}