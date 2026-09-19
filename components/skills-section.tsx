"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

const categories = [
  {
    layer: "LAYER 00",
    title: "Data & Analytics",
    description: "Eksplorasi, pembersihan, dan visualisasi data untuk keputusan berbasis bukti.",
    footer: "// EVIDENCE_DRIVEN",
    accent: "cyan",
    skills: [
      { name: "Python", level: 70 },
      { name: "SQL", level: 74 },
      { name: "Excel", level: 72 },
      { name: "Power BI", level: 60 },
    ],
  },
  {
    layer: "LAYER 01",
    title: "Core Systems / Backend",
    description: "API, desain database, dan logika domain yang deterministik dan teruji.",
    footer: "// API_&_DATA_PIPELINES",
    accent: "violet",
    skills: [
      { name: "Node.js · Express", level: 80 },
      { name: "PHP · Laravel", level: 72 },
      { name: "MySQL", level: 76 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    layer: "LAYER 02",
    title: "Frontend & Mobile",
    description: "Antarmuka reaktif dan cepat — web maupun mobile native.",
    footer: "// INTERFACE_ENGINE",
    accent: "cyan",
    skills: [
      { name: "React", level: 78 },
      { name: "Next.js", level: 76 },
      { name: "TypeScript", level: 72 },
      { name: "Tailwind", level: 78 },
      { name: "Flutter / Dart", level: 70 },
    ],
  },
  {
    layer: "LAYER 03",
    title: "Tools & Infra",
    description: "Workflow kolaboratif dan infrastruktur ringan untuk ship cepat.",
    footer: "// DEPLOY_&_COLLAB",
    accent: "violet",
    skills: [
      { name: "Git / GitHub", level: 82 },
      { name: "Supabase", level: 70 },
      { name: "Docker", level: 55 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-[1200px] mx-auto px-5 md:px-12 py-20 border-t border-border"
    >
      <SectionHeader
        label="// 02. Technical Matrix & Stack"
        note="CAPABILITIES_MATRIX"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const accentValue =
            cat.accent === "cyan" ? "text-secondary" : "text-primary"
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-[4px] p-6 bg-card border border-border flex flex-col justify-between transition-colors duration-200 hover:bg-substrate-1"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                  <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
                    {cat.layer}
                  </span>
                  <span className={`font-mono text-label-sm ${accentValue}`}>
                    {"// "}
                    {cat.accent}
                  </span>
                </div>
                <h3 className="font-sans text-headline-sm text-text-primary mb-2">
                  {cat.title}
                </h3>
                <p className="font-mono text-code-snippet text-text-secondary mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-col gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-[4px] p-2 bg-substrate-1 border border-border font-mono text-label-md"
                    >
                      <span className="text-text-primary">{skill.name}</span>
                      <span className={accentValue}>{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`mt-6 pt-3 border-t border-border font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary`}
              >
                {cat.footer}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}