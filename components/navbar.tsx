"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal } from "lucide-react"

const navItems = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Skill", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Prestasi", href: "#achievements" },
  { name: "Gallery", href: "#gallery" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-[#1f1f2a] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="flex items-center gap-2 text-lg font-bold"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#00f0ff]" />
            </div>
            <span className="text-[#e4e4e7] font-mono text-sm">
              <span className="text-[#00f0ff]">dev</span>.portfolio
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm text-[#71717a] hover:text-[#e4e4e7] transition-colors rounded-md hover:bg-[#1f1f2a]/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#71717a] hover:text-[#00f0ff] hover:bg-[#1f1f2a] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col py-4 gap-1 border-t border-[#1f1f2a]">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#71717a] hover:text-[#e4e4e7] hover:bg-[#1f1f2a] transition-colors py-2.5 px-3 rounded-md text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
