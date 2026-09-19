"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    index: "01",
    tag: "// GAME ENGINE & LOGIC",
    title: "Number Shift: Offline-First Puzzle Game",
    description:
      "Puzzle game Flutter yang fully offline-first tanpa backend. Menunjukkan sisi logika & aturan berbasis data: sistem scoring dengan combo multiplier (hingga ×5), bonus Perfect Match, 6 Challenge level deterministik yang terkunci berurutan, dan spec gameplay terdokumentasi (GAME_RULES_FINAL.md).",
    badges: ["Flutter", "Dart", "Offline-first"],
    metrics: [
      { label: "GAME_MODES:", value: "Endless · Challenge" },
      { label: "COMBO_MULTIPLIER:", value: "up to ×5" },
    ],
    image: "/gallery/number-shift-board.png",
    overlay: "BOARD 9×12 · 108 TILES",
    flip: true,
    source: "https://github.com/fiannnn9090",
  },
  {
    index: "02",
    tag: "// FINANCIAL ANALYTICS",
    title: "RAPI: Personal Finance Tracker",
    description:
      "Aplikasi pencatat keuangan dengan lapisan analitik paling relevan untuk narasi data: health score gauge, alokasi anggaran 50/30/20, dan rule-based advice. Dibangun dengan Next.js, Capacitor (mobile), dan Supabase sebagai backend — menonjolkan cara data transaksi diubah menjadi insight visual.",
    badges: ["Next.js", "Capacitor", "Supabase"],
    metrics: [
      { label: "BUDGET_MODEL:", value: "50 / 30 / 20" },
      { label: "OUTPUT:", value: "Health Score Gauge" },
    ],
    image: "/gallery/rapi-analytics.png",
    overlay: "ANALYTICS DASHBOARD",
    flip: false,
    source: "https://github.com/fiannnn9090",
  },
  {
    index: "03",
    tag: "// DISTRIBUTED LEDGER",
    title: "E-Voting Blockchain: Research Implementation",
    description:
      "Riset keamanan & auditabilitas e-voting dengan tiga ledger paralel (Vote / Candidate / Audit), verifikasi integritas memakai Merkle Tree per-blok dan tanda tangan RSA-2048. Hasil riset dipublikasikan sebagai naskah jurnal SINTA 3 — bukti rigor akademik dan cara berpikir analitis.",
    badges: ["Node.js", "MySQL", "RSA-2048", "Merkle Tree"],
    metrics: [
      { label: "LEDGERS:", value: "3 Parallel" },
      { label: "INTEGRITY:", value: "Merkle Root / Block" },
    ],
    image: null,
    overlay: "LEDGER & AUDIT CHAIN",
    flip: true,
    source: "https://github.com/fiannnn9090",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1200px] mx-auto px-5 md:px-12 py-20 border-t border-border"
    >
      <SectionHeader
        label="// 03. Featured Work"
        note="PROD_INDEX: 3_ACTIVE"
      />

      <div className="flex flex-col gap-16">
        {projects.map((project) => {
          const accentBorder =
            project.index === "02"
              ? "hover:border-primary/40"
              : "hover:border-secondary/40"
          const accentTitle =
            project.index === "02"
              ? "group-hover:text-primary"
              : "group-hover:text-secondary"
          const accentBadge =
            project.index === "02" ? "text-primary" : "text-secondary"

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`group rounded-[4px] bg-card border border-border p-6 md:p-10 transition-colors duration-200 ${accentBorder}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Content */}
                <div
                  className={`flex flex-col gap-5 ${
                    project.flip ? "lg:col-span-6 order-2 lg:order-1" : "lg:col-span-6"
                  }`}
                >
                  <div className="flex items-center gap-3 font-mono text-label-sm uppercase tracking-[0.08em]">
                    <span className={`font-bold ${accentBadge}`}>
                      {"PROJECT_0"}
                      {project.index}
                    </span>
                    <span className="hidden sm:inline text-text-tertiary">
                      {project.tag}
                    </span>
                  </div>

                  <h3
                    className={`font-sans text-headline-lg-mobile md:text-headline-lg text-text-primary transition-colors duration-200 ${accentTitle}`}
                  >
                    {project.title}
                  </h3>

                  <p className="font-mono text-body-md text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Spec badges */}
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-[4px] px-2.5 py-1 bg-substrate-1 border border-line-strong font-mono text-code-snippet uppercase tracking-[0.05em] text-text-secondary"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Telemetry metrics */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-border font-mono text-code-snippet">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-text-tertiary block mb-0.5">
                          {m.label}
                        </span>
                        <span className="text-text-primary font-semibold">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-1">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-mono text-label-md text-secondary hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                      case_study
                    </a>
                    {/* TODO: ganti ke link repo asli masing-masing project (repo private saat ini) */}
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-label-md text-text-secondary hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      source
                    </a>
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`${
                    project.flip ? "lg:col-span-6 order-1 lg:order-2" : "lg:col-span-6"
                  }`}
                >
                  {project.image ? (
                    <div className="relative rounded-[4px] overflow-hidden bg-substrate-1 border border-border aspect-video">
                      <Image
                        src={project.image}
                        alt={`Screenshot ${project.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 right-2 rounded-[4px] px-2 py-0.5 font-mono text-label-sm uppercase tracking-[0.08em] text-secondary bg-substrate-1/90 border border-border">
                        {project.overlay}
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-[4px] overflow-hidden bg-substrate-1 border border-border aspect-video flex items-center justify-center">
                      {/* schematic placeholder — screenshot belum tersedia */}
                      <div className="absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(0deg,transparent,transparent_19px,#00f0ff_19px,#00f0ff_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,#00f0ff_19px,#00f0ff_20px)]" />
                      <div className="relative text-center px-6">
                        <div className="font-mono text-label-sm uppercase tracking-[0.08em] text-secondary mb-2">
                          {project.overlay}
                        </div>
                        <p className="font-mono text-code-snippet text-text-tertiary">
                          {"// screenshot pending upload"}
                        </p>
                      </div>
                      <div className="absolute bottom-2 right-2 rounded-[4px] px-2 py-0.5 font-mono text-label-sm uppercase tracking-[0.08em] text-primary bg-substrate-1/90 border border-border">
                        SCHEMATIC_PLACEHOLDER
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}