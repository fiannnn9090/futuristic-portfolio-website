"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

const artifacts = [
  {
    index: "ART_01",
    tag: "GAME_ENGINE",
    tagAccent: "cyan",
    title: "Number Shift — Endless Board",
    description: "Board 9×12 (108 tile) dengan sistem combo, Perfect Match, dan deteksi deadlock deterministik.",
    image: "/gallery/number-shift-board.png",
  },
  {
    index: "ART_02",
    tag: "FINANCIAL_ANALYTICS",
    tagAccent: "violet",
    title: "RAPI — Analisis Keuangan",
    description: "Health score gauge, alokasi 50/30/20, dan rule-based advice dari data transaksi.",
    image: "/gallery/rapi-analytics.png",
  },
  {
    index: "ART_03",
    tag: "BLOCKCHAIN_LEDGER",
    tagAccent: "cyan",
    title: "E-Voting — Ledger & Audit",
    description: "Tiga ledger paralel (Vote/Candidate/Audit) dengan Merkle Tree & RSA-2048.",
    image: null,
  },
]

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="w-full max-w-[1200px] mx-auto px-5 md:px-12 py-20 border-t border-border"
    >
      <SectionHeader label="// 06. Project Artifacts & Lab" note="SANDBOX: ACTIVE" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artifacts.map((artifact, i) => {
          const tagColor =
            artifact.tagAccent === "cyan" ? "text-secondary" : "text-primary"
          const hoverBorder =
            artifact.tagAccent === "cyan"
              ? "hover:border-secondary/40"
              : "hover:border-primary/40"
          return (
            <motion.div
              key={artifact.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`group rounded-[4px] bg-card border border-border overflow-hidden transition-colors duration-200 flex flex-col ${hoverBorder}`}
            >
              <div className="relative aspect-square w-full bg-substrate-1 overflow-hidden">
                {artifact.image ? (
                  <Image
                    src={artifact.image}
                    alt={artifact.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(0deg,transparent,transparent_19px,#00f0ff_19px,#00f0ff_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,#00f0ff_19px,#00f0ff_20px)]" />
                    <div className="relative text-center">
                      <p className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
                        {"// screenshot pending"}
                      </p>
                    </div>
                  </div>
                )}
                <div
                  className={`absolute top-2 left-2 rounded-[4px] px-2 py-0.5 bg-substrate-1/90 border border-border font-mono text-label-sm uppercase tracking-[0.08em] ${tagColor}`}
                >
                  {artifact.tag}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary mb-1">
                  {artifact.index}
                </span>
                <h4 className="font-sans text-headline-sm text-text-primary mb-2">
                  {artifact.title}
                </h4>
                <p className="font-mono text-code-snippet text-text-secondary leading-relaxed">
                  {artifact.description}
                </p>
              </div>

              <div className="pt-4 mt-auto px-5 pb-4 border-t border-border flex items-center justify-between font-mono text-label-sm uppercase tracking-[0.08em]">
                <span className={tagColor}>[ view_artifact ↗ ]</span>
                <span className="text-text-tertiary">{`0${i + 1}`}</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}