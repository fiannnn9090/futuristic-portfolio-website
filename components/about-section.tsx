"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Gamepad2, Mountain, Trophy } from "lucide-react"

const stats = [
  { icon: Code2, value: "50+", label: "Project Selesai" },
  { icon: Trophy, value: "5+", label: "Tahun Coding" },
  { icon: Gamepad2, value: "10+", label: "Tournament" },
  { icon: Mountain, value: "15+", label: "Gunung Didaki" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[#00f0ff] text-sm font-mono mb-2">// about</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e4e4e7]">
            Tentang Saya
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-[#71717a] leading-relaxed">
              Saya adalah seorang mahasiswa Teknologi Informasi yang memiliki passion 
              mendalam dalam dunia pengembangan software. Sejak pertama kali menulis 
              baris kode, saya jatuh cinta dengan kemampuan teknologi untuk menciptakan 
              solusi inovatif.
            </p>
            <p className="text-[#71717a] leading-relaxed">
              Di luar dunia coding, saya adalah seorang <span className="text-[#a855f7]">gamer kompetitif</span> yang telah 
              mengikuti berbagai tournament. Gaming mengajarkan saya tentang strategi, 
              kerja tim, dan pentingnya terus berkembang.
            </p>
            <p className="text-[#71717a] leading-relaxed">
              Saya juga menyukai petualangan alam, terutama <span className="text-[#00f0ff]">mendaki gunung</span>. Kegiatan ini 
              memberikan perspektif baru dan mengajarkan nilai ketekunan serta kerendahan 
              hati di hadapan alam.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-5 rounded-lg bg-[#0a0a0f] border border-[#1f1f2a] hover:border-[#00f0ff]/30 transition-all duration-300 group"
              >
                <stat.icon className="w-6 h-6 text-[#00f0ff] mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-[#e4e4e7] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#71717a]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
