"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"

const stats = [
  {
    label: "// PROJECTS_SHIPPED",
    value: "4+",
    sub: "Web · Mobile · Game",
  },
  {
    label: "// ANALYTICS_STACK",
    value: "Python / SQL",
    sub: "Current learning focus",
  },
  {
    label: "// RESEARCH_PUB",
    value: "SINTA 3",
    sub: "E-voting journal",
  },
  {
    label: "// ESPORT_LEAD",
    value: "2023–2025",
    sub: "Free Fire Div. Head",
  },
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full max-w-[1200px] mx-auto px-5 md:px-12 md:pt-20 pt-16 pb-20"
    >
      {/* Ambient depth — max opacity 0.05, nothing else glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-glow-violet -z-10 pointer-events-none" />
      <div className="absolute bottom-4 left-10 w-80 h-80 rounded-full bg-glow-cyan -z-10 pointer-events-none" />

      {/* Eyebrow telemetry */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-card border border-border font-mono text-label-sm uppercase tracking-[0.08em] text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          System: Online
        </span>
        <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
          {"// NODE: 0xAAM · SEMARANG, ID"}
        </span>
        <span className="hidden sm:inline font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
          {"// UPTIME: 998+ DAYS"}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="font-sans text-display-hero-mobile md:text-display-hero tracking-tighter uppercase text-text-primary">
          Aliffian{" "}
          <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Maesanjaya
          </span>
        </h1>

        <p className="font-sans text-headline-md md:text-headline-lg text-text-secondary mt-4 max-w-3xl font-normal tracking-tight">
          Full-Stack Developer{" "}
          <span className="text-secondary">→</span> Data Analyst / Data Scientist{" "}
          <span className="text-primary">(in progress)</span>
        </p>

        <p className="font-mono text-body-lg text-text-secondary max-w-2xl mt-6 leading-relaxed">
          Mahasiswa Teknik Informatika di{" "}
          <span className="text-text-primary">Universitas Dian Nuswantoro</span>{" "}
          — biasa membangun aplikasi web &amp; mobile secara full-stack, sekarang
          memperdalam analisis data dengan Python, SQL, dan Power BI. Software
          engineering jadi fondasi untuk berpikir analitis berbasis data.
        </p>
      </motion.div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4 mt-10 mb-16">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-secondary text-secondary-foreground font-mono text-label-md font-semibold uppercase tracking-[0.08em] border border-secondary glow-cyan transition-all duration-200 hover:bg-white hover:text-background hover:shadow-[0_0_20px_rgba(0,240,255,0.45)]"
        >
          Explore Projects
          <ArrowDown size={16} className="rotate-[-90deg]" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-transparent text-text-primary border border-border font-mono text-label-md uppercase tracking-[0.08em] transition-all duration-200 hover:border-primary hover:text-primary"
        >
          Contact / Resume
          <FileText size={16} />
        </a>
      </div>

      {/* Metric strip — 12-col modular grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-6 rounded-[4px] bg-card border border-border transition-colors duration-200 hover:border-line-strong"
          >
            <div className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary mb-1.5">
              {stat.label}
            </div>
            <div className="font-sans text-headline-md md:text-headline-lg font-bold text-text-primary">
              {stat.value}
            </div>
            <div className="font-mono text-code-snippet text-text-secondary mt-1">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}