"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

const specSheet = [
  { key: "UNIVERSITY", value: "Universitas Dian Nuswantoro" },
  { key: "FACULTY", value: "Teknik Informatika" },
  { key: "ORIENTATION", value: "Full-stack → Data" },
  { key: "PUBLICATION", value: "SINTA 3 · E-voting" },
]

const principles = [
  {
    index: "01.",
    title: "Engineering Foundation",
    body: "Problem-solving terstruktur dan pengalaman database dari project backend (MySQL, Supabase) jadi modal analitis — memahami data berarti memahami sistem yang menghasilkannya.",
    accent: "cyan",
  },
  {
    index: "02.",
    title: "Analytical Thinking",
    body: "Menerjemahkan pertanyaan bisnis menjadi temuan berbasis bukti — Python, SQL, dan Power BI dipakai untuk eksplorasi, pembersihan, dan visualisasi data.",
    accent: "violet",
  },
  {
    index: "03.",
    title: "Academic Rigor",
    body: "Riset e-voting blockchain yang dipublikasikan di jurnal SINTA 3 mengajarkan metode ilmiah: hipotesis, eksperimen terukur, dan dokumentasi yang dapat direproduksi.",
    accent: "cyan",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-[1200px] mx-auto px-5 md:px-12 py-20 border-t border-border"
    >
      <SectionHeader
        label="// 01. Identity & Direction"
        note="PROFILE_V1"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Portrait + spec sheet */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative rounded-[4px] bg-card border border-border p-2 overflow-hidden"
          >
            <div className="relative w-full h-[420px] overflow-hidden bg-substrate-1 rounded-[4px]">
              <Image
                src="../public/profile-photo.jpg"
                alt="Foto Aliffian Alham Maesanjaya"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute top-3 left-3 rounded-[4px] bg-background/80 backdrop-blur-sm border border-border px-2 py-1 font-mono text-label-sm uppercase tracking-[0.08em] text-secondary">
                SPEC: FULL-STACK → DATA
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-[4px] bg-background/80 backdrop-blur-sm border border-border px-3 py-2 font-mono text-code-snippet text-text-secondary">
                <span>ID: AAM-011</span>
                <span className="text-secondary font-medium">STATUS: OPEN TO WORK</span>
              </div>
            </div>
          </motion.div>

          {/* Spec sheet */}
          <div className="rounded-[4px] bg-card border border-border p-4 font-mono text-code-snippet text-text-tertiary flex flex-col gap-1.5">
            {specSheet.map((row) => (
              <div key={row.key} className="flex justify-between gap-4">
                <span>{row.key}</span>
                <span className="text-text-primary text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="font-sans text-headline-lg-mobile md:text-headline-lg text-text-primary mb-6 tracking-tight">
              Menjembatani software engineering dengan pengambilan keputusan
              berbasis data.
            </h2>
            <p className="font-mono text-body-lg text-text-secondary leading-relaxed mb-4">
              Saya memulai perjalanan sebagai full-stack developer — membangun
              aplikasi web dan mobile secara end-to-end: game puzzle Flutter
              offline-first, platform finansial, hingga sistem e-voting
              berbasis blockchain. Setiap project melatih satu hal yang sama:
              bagaimana <span className="text-text-primary">data mengalir</span>,
              bagaimana sistem memprosesnya, dan bagaimana keputusan diambil
              darinya.
            </p>
            <p className="font-mono text-body-lg text-text-secondary leading-relaxed">
              Sekarang saya mengarahkan fondasi itu ke analisis data. Pengalaman
              SQL dan desain database dari project backend, ditambah Python
              untuk eksplorasi statistik dan Power BI & Tableau untuk visualisasi,
              dipakai untuk menjawab pertanyaan praktis dengan bukti — bukan
              tebakan.
            </p>
          </motion.div>

          {/* Quote callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-[4px] bg-substrate-1 border border-border border-l-2 border-l-primary p-6"
          >
            <p className="font-mono text-label-md text-primary italic mb-2">
              “Saingan terbaik bukan yang banyak hype, tapi yang datanya rapi
              dan sistemnya bisa dijelaskan. Kode mengajar saya disiplin, data
              mengajar saya jujur.”
            </p>
            <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
              — Fian // Operating Principle
            </span>
          </motion.div>

          {/* Principles */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
              {"// CORE_OPERATING_PRINCIPLES"}
            </div>
            {principles.map((p) => {
              const accentBorder =
                p.accent === "cyan"
                  ? "hover:border-secondary/40"
                  : "hover:border-primary/40"
              const accentText =
                p.accent === "cyan" ? "text-secondary" : "text-primary"
              return (
              <div
                key={p.index}
                className={`flex items-start gap-4 rounded-[4px] p-4 bg-substrate-1 border border-border transition-colors duration-200 ${accentBorder}`}
              >
                <span
                  className={`mt-0.5 font-mono text-label-md font-bold ${accentText}`}
                >
                  {p.index}
                </span>
                <div>
                  <h4 className="font-sans text-headline-sm text-text-primary mb-1">
                    {p.title}
                  </h4>
                  <p className="font-mono text-body-md text-text-secondary leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}