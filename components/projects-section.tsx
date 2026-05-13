"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Blocks, ShoppingBag, CreditCard, Utensils, Gamepad2 } from "lucide-react"

const projects = [
  {
    title: "Sistem E-Voting Blockchain",
    description: "Sistem pemungutan suara elektronik berbasis blockchain untuk transparansi dan keamanan data voting.",
    tech: ["React", "Solidity", "Web3.js", "Node.js"],
    icon: Blocks,
    demo: "#",
    github: "#",
  },
  {
    title: "Website Toko Kosmetik",
    description: "E-commerce modern untuk produk kecantikan dengan fitur keranjang, wishlist, dan pembayaran.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    icon: ShoppingBag,
    demo: "#",
    github: "#",
  },
  {
    title: "Aplikasi Kasir QRIS",
    description: "Aplikasi point of sale dengan integrasi pembayaran QRIS untuk UMKM.",
    tech: ["React", "Node.js", "MongoDB", "QRIS API"],
    icon: CreditCard,
    demo: "#",
    github: "#",
  },
  {
    title: "Sistem Informasi Rumah Makan",
    description: "Sistem manajemen restoran lengkap dengan pemesanan dan inventory.",
    tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
    icon: Utensils,
    demo: "#",
    github: "#",
  },
  {
    title: "Website Biodata Gaming",
    description: "Platform profil gamer dengan statistik game dan achievement showcase.",
    tech: ["React", "Tailwind", "Steam API", "Discord API"],
    icon: Gamepad2,
    demo: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[#00f0ff] text-sm font-mono mb-2">// projects</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e4e4e7] mb-2">
            Project Portfolio
          </h2>
          <p className="text-[#71717a]">
            Koleksi project yang telah saya kerjakan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group"
            >
              <div className={`h-full rounded-lg border bg-[#0a0a0f] transition-all duration-300 overflow-hidden ${
                hoveredIndex === index 
                  ? 'border-[#00f0ff]/50 shadow-[0_0_30px_#00f0ff15]' 
                  : 'border-[#1f1f2a] hover:border-[#a855f7]/30'
              }`}>
                {/* Project Icon Header */}
                <div className="relative h-36 bg-gradient-to-br from-[#00f0ff]/5 to-[#a855f7]/5 flex items-center justify-center">
                  <project.icon className={`w-12 h-12 transition-all duration-300 ${
                    hoveredIndex === index ? 'text-[#00f0ff] scale-110' : 'text-[#71717a]/30'
                  }`} />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-[#050508]/95 flex items-center justify-center gap-3"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] rounded-md hover:bg-[#00f0ff]/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] rounded-md hover:bg-[#a855f7]/20 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-[#e4e4e7] mb-2 group-hover:text-[#00f0ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#71717a] text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#a855f7]/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
