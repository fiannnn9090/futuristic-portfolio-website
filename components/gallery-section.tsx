"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, Code2, Gamepad2, Mountain, Monitor } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Setup Coding",
    category: "Coding",
    icon: Code2,
    description: "Workspace untuk ngoding sehari-hari",
  },
  {
    id: 2,
    title: "Gaming Setup",
    category: "Gaming",
    icon: Monitor,
    description: "Battle station untuk competitive gaming",
  },
  {
    id: 3,
    title: "Summit Semeru",
    category: "Pendakian",
    icon: Mountain,
    description: "Puncak Mahameru 3.676 mdpl",
  },
  {
    id: 4,
    title: "Hackathon Team",
    category: "Coding",
    icon: Code2,
    description: "Tim hackathon nasional 2024",
  },
  {
    id: 5,
    title: "Tournament PUBGM",
    category: "Gaming",
    icon: Gamepad2,
    description: "Final tournament regional",
  },
  {
    id: 6,
    title: "Basecamp Rinjani",
    category: "Pendakian",
    icon: Mountain,
    description: "Perjalanan ke Gunung Rinjani",
  },
  {
    id: 7,
    title: "Workshop Tech",
    category: "Coding",
    icon: Code2,
    description: "Mengisi workshop web development",
  },
  {
    id: 8,
    title: "Sunrise di Prau",
    category: "Pendakian",
    icon: Mountain,
    description: "Golden sunrise Gunung Prau",
  },
]

const categories = ["Semua", "Coding", "Gaming", "Pendakian"]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient-gaming">Gallery</span>
          </h2>
          <p className="text-muted-foreground">
            Dokumentasi perjalanan di dunia coding, gaming, dan petualangan
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mt-4" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-8 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-background neon-glow-cyan"
                  : "bg-card border border-border text-muted-foreground hover:border-neon-cyan/50 hover:text-neon-cyan"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedImage(item.id)}
              className="relative aspect-square rounded-lg border border-border bg-card overflow-hidden cursor-pointer group hover:border-neon-cyan/50 transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px]" />
              
              {/* Placeholder with Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <item.icon className="w-12 h-12 text-muted-foreground/20 group-hover:text-neon-cyan/40 group-hover:scale-110 transition-all duration-300" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-sm font-semibold text-neon-cyan">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </div>

              {/* Corner Glow Effect */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-neon-purple/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full rounded-lg border border-neon-cyan/30 bg-card p-6 neon-glow-cyan"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-neon-cyan/10 transition-colors text-neon-cyan"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              {(() => {
                const item = galleryItems.find(i => i.id === selectedImage)
                if (!item) return null
                return (
                  <>
                    <div className="aspect-video bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-lg flex items-center justify-center mb-4 border border-border">
                      <item.icon className="w-20 h-20 text-neon-cyan/30" />
                    </div>
                    <h3 className="text-lg font-bold text-gradient-gaming mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
