"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Mountain, Award, Users, Gamepad2, Medal, GraduationCap } from "lucide-react"

const achievements = [
  {
    year: "2024",
    title: "Juara 2 Hackathon Nasional",
    category: "Teknologi",
    icon: Trophy,
    description: "Kompetisi pengembangan aplikasi berbasis AI tingkat nasional",
    color: "cyan",
  },
  {
    year: "2024",
    title: "Top 10 Tournament PUBG Mobile",
    category: "Gaming",
    icon: Gamepad2,
    description: "Turnamen esports regional dengan 500+ tim peserta",
    color: "purple",
  },
  {
    year: "2023",
    title: "Pendakian Gunung Semeru",
    category: "Pendakian",
    icon: Mountain,
    description: "Summit puncak tertinggi Pulau Jawa (3.676 mdpl)",
    color: "cyan",
  },
  {
    year: "2023",
    title: "Sertifikat AWS Cloud Practitioner",
    category: "Sertifikasi",
    icon: Award,
    description: "Sertifikasi cloud computing dari Amazon Web Services",
    color: "purple",
  },
  {
    year: "2023",
    title: "Ketua Divisi IT - Himpunan",
    category: "Organisasi",
    icon: Users,
    description: "Memimpin tim pengembangan sistem informasi himpunan",
    color: "cyan",
  },
  {
    year: "2022",
    title: "MVP Tournament Valorant",
    category: "Gaming",
    icon: Medal,
    description: "Most Valuable Player di turnamen kampus",
    color: "purple",
  },
  {
    year: "2022",
    title: "Pendakian 7 Gunung Jawa",
    category: "Pendakian",
    icon: Mountain,
    description: "Menyelesaikan ekspedisi Seven Summits of Java",
    color: "cyan",
  },
  {
    year: "2021",
    title: "Beasiswa Prestasi Akademik",
    category: "Akademik",
    icon: GraduationCap,
    description: "Beasiswa penuh untuk prestasi akademik semester 1-4",
    color: "purple",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient-gaming">Prestasi</span>
          </h2>
          <p className="text-muted-foreground">
            Perjalanan prestasi di bidang teknologi, gaming, dan petualangan alam
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan md:-translate-x-px" />

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className={`w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center ${
                    achievement.color === 'cyan' 
                      ? 'border-neon-cyan neon-glow-cyan' 
                      : 'border-neon-purple neon-glow-purple'
                  }`}
                >
                  <achievement.icon className={`w-4 h-4 ${
                    achievement.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'
                  }`} />
                </motion.div>
              </div>

              {/* Content Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`p-5 rounded-lg border bg-card transition-all duration-300 hover:${
                    achievement.color === 'cyan' ? 'border-neon-cyan/50' : 'border-neon-purple/50'
                  } ${
                    achievement.color === 'cyan' 
                      ? 'border-neon-cyan/20 hover:neon-glow-cyan' 
                      : 'border-neon-purple/20 hover:neon-glow-purple'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                      achievement.color === 'cyan' 
                        ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' 
                        : 'bg-neon-purple/10 text-neon-purple border border-neon-purple/30'
                    }`}>
                      {achievement.year}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
