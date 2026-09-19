"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

const milestones = [
  {
    period: "2023–2025",
    tag: "[ LEADERSHIP ]",
    title: "Ketua Divisi Free Fire",
    body: "UKM Esport Universitas Dian Nuswantoro — memimpin pengembangan tim, jadwal latihan, dan strategi turnamen antarkampus.",
    accent: "cyan",
  },
  {
    period: "2026",
    tag: "[ RESEARCH ]",
    title: "Publikasi Jurnal SINTA 3",
    body: "Riset keamanan & auditabilitas e-voting (Merkle Tree, RSA-2048) dari project E-Voting Blockchain dipublikasikan sebagai naskah jurnal.",
    accent: "violet",
  },
  {
    period: "2026",
    tag: "[ GAME_SHIPPED ]",
    title: "Number Shift — Puzzle Game",
    body: "Menulis game puzzle mobile offline-first sebagai solo developer: dari spec gameplay, algoritma shift deterministik, hingga build Android & iOS.",
    accent: "cyan",
  },
  {
    period: "2026",
    tag: "[ DATA_PRODUCT ]",
    title: "RAPI Analytics Layer",
    body: "Membangun lapisan analitik keuangan: health score gauge, alokasi 50/30/20, dan rule-based advice berbasis transaksi nyata.",
    accent: "violet",
  },
]

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="w-full max-w-[1200px] mx-auto px-5 md:px-12 py-20 border-t border-border"
    >
      <SectionHeader
        label="// 04. Recognition & Milestones"
        note="VALIDATION_LOG"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((milestone) => {
          const accentValue =
            milestone.accent === "cyan" ? "text-secondary" : "text-primary"
          const accentHover =
            milestone.accent === "cyan"
              ? "hover:border-secondary/50"
              : "hover:border-primary/50"
          return (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`rounded-[4px] p-6 bg-card border border-border transition-colors duration-200 ${accentHover}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-label-md font-bold ${accentValue}`}>
                  {milestone.period}
                </span>
                <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
                  {milestone.tag}
                </span>
              </div>
              <h4 className="font-sans text-headline-sm text-text-primary mb-2">
                {milestone.title}
              </h4>
              <p className="font-mono text-code-snippet text-text-secondary leading-relaxed">
                {milestone.body}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}