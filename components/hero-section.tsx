"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Terminal, ChevronDown } from "lucide-react"

const roles = ["Programmer", "Gamer", "Pendaki Gunung", "Tech Enthusiast"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#00f0ff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Gradient Ambient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00f0ff] opacity-[0.04] blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#a855f7] opacity-[0.05] blur-[150px] rounded-full" />

      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Terminal Style Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a0a0f] border border-[#1f1f2a] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <code className="text-sm text-[#71717a] font-mono">~/portfolio</code>
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Name with Accent */}
            <div className="space-y-2">
              <p className="text-[#71717a] text-lg font-mono">
                <span className="text-[#a855f7]">const</span> developer <span className="text-[#a855f7]">=</span>
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-[#e4e4e7]">Your</span>
                <span className="text-[#00f0ff] text-glow-cyan">Name</span>
              </h1>
            </div>

            {/* Role Typing */}
            <div className="flex items-center gap-3 text-xl md:text-2xl">
              <span className="text-[#71717a] font-mono">{">"}</span>
              <span className="text-[#e4e4e7]">Seorang</span>
              <span className="text-[#00f0ff] font-semibold font-mono">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-6 bg-[#00f0ff] ml-1 align-middle"
                />
              </span>
            </div>

            {/* Description */}
            <p className="text-[#71717a] text-lg max-w-xl leading-relaxed">
              Mahasiswa Teknologi Informasi yang passionate dalam dunia coding, 
              gaming kompetitif, dan petualangan alam.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#00f0ff] text-[#050508] font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_#00f0ff40]"
            >
              <span className="relative z-10">Explore Projects</span>
              <ChevronDown className="w-4 h-4 relative z-10 rotate-[-90deg]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#1f1f2a] text-[#a1a1aa] font-medium rounded-lg transition-all hover:border-[#a855f7] hover:text-[#a855f7] hover:shadow-[0_0_20px_#a855f720]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-[#1f1f2a]"
          >
            <div className="flex flex-wrap gap-8 md:gap-16">
              {[
                { value: "10+", label: "Projects" },
                { value: "2+", label: "Tahun Coding" },
                { value: "5+", label: "Tech Stack" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-[#e4e4e7]">
                    <span className="text-[#00f0ff]">{stat.value.charAt(0)}</span>
                    {stat.value.slice(1)}
                  </p>
                  <p className="text-sm text-[#71717a] font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 border-2 border-[#1f1f2a] rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-[#00f0ff] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
