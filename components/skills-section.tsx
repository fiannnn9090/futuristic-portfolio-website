"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "MySQL", level: 82, category: "Backend" },
  { name: "UI/UX", level: 78, category: "Design" },
  { name: "GitHub", level: 85, category: "Tools" },
  { name: "Blockchain", level: 70, category: "Web3" },
  { name: "Cyber Security", level: 65, category: "Security" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a855f7]/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[#a855f7] text-sm font-mono mb-2">// skills</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e4e4e7] mb-2">
            Tech Stack
          </h2>
          <p className="text-[#71717a]">
            Teknologi dan tools yang saya kuasai
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-[#e4e4e7] group-hover:text-[#00f0ff] transition-colors">{skill.name}</span>
                  <span className="text-xs text-[#71717a] px-2 py-0.5 rounded bg-[#a855f7]/10 border border-[#a855f7]/20">
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm font-mono text-[#00f0ff]">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1.5 bg-[#1f1f2a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-[#00f0ff] to-[#a855f7] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-sm text-[#71717a] mb-4 font-mono">{"// currently_learning"}</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind", "Node.js", "Python"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-sm rounded-md bg-[#0a0a0f] border border-[#1f1f2a] text-[#71717a] hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
