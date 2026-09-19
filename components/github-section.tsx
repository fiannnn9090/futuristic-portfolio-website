"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, Users, Boxes, Code2, RefreshCw } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import type { GithubStatsResponse } from "@/lib/github"

function daysAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const days = Math.max(0, Math.floor(diff / 86_400_000))
  if (days === 0) return "hari ini"
  if (days === 1) return "1 hari lalu"
  if (days < 30) return `${days} hari lalu`
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function MetricSkeleton() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-[4px] p-5 bg-card border border-border"
        >
          <div className="h-3 w-24 rounded-[2px] bg-substrate-2 animate-pulse mb-3" />
          <div className="h-7 w-16 rounded-[2px] bg-substrate-2 animate-pulse mb-2" />
          <div className="h-3 w-32 rounded-[2px] bg-substrate-2 animate-pulse" />
        </div>
      ))}
    </>
  )
}

export function GithubSection() {
  const [data, setData] = useState<GithubStatsResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/github-stats", { cache: "no-store" })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setData((await res.json()) as GithubStatsResponse)
    } catch {
      setError(
        "Gagal mengambil data GitHub — kemungkinan rate-limit API. Coba lagi beberapa saat."
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const metricTiles = data
    ? [
        { icon: Users, label: "FOLLOWERS", value: String(data.followers), sub: `@${data.login}` },
        { icon: Boxes, label: "PUBLIC_REPOS", value: String(data.public_repos), sub: "Non-fork counts" },
        { icon: Star, label: "TOTAL_STARS", value: String(data.totalStars), sub: "Across all repos" },
        { icon: Code2, label: "TOP_LANGUAGE", value: data.topLanguage ?? "—", sub: "Most frequent" },
      ]
    : []

  return (
    <section
      id="stats"
      className="w-full max-w-[1200px] mx-auto px-5 md:px-12 py-20 border-t border-border"
    >
      <SectionHeader label="// 05. Telemetry & GitHub Repositories" note="LIVE_API_SOURCE" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Error fallback */}
        {error && !data && (
          <div className="rounded-[4px] p-6 bg-card border border-border mb-8">
            <p className="font-mono text-body-md text-text-secondary mb-4">
              <span className="text-primary">// WARN</span> {error}
            </p>
            <button
              onClick={load}
              className="inline-flex items-center gap-2 rounded-[4px] px-4 py-2 bg-substrate-1 border border-border font-mono text-label-md text-secondary hover:border-secondary transition-colors"
            >
              <RefreshCw size={14} />
              retry
            </button>
          </div>
        )}

        {/* 4 metric tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {loading && !data ? (
            <MetricSkeleton />
          ) : (
            metricTiles.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[4px] p-5 bg-card border border-border"
              >
                <stat.icon size={14} className="text-text-tertiary mb-3" />
                <div className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary mb-1 block">
                  {stat.label}
                </div>
                <div className="font-sans text-headline-lg font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="font-mono text-code-snippet text-text-secondary mt-1">
                  {stat.sub}
                </div>
              </div>
            ))
          )}
        </div>

        {data && (
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
            {/* Commit intensity matrix — placeholder netral */}
            <div className="lg:col-span-5 rounded-[4px] p-6 bg-card border border-border">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border font-mono text-code-snippet">
                <span className="text-text-primary font-semibold">
                  {"// COMMIT_INTENSITY_MATRIX"}
                </span>
                <span className="text-text-tertiary text-label-sm uppercase tracking-[0.08em]">
                  placeholder
                </span>
              </div>

              {/*
                TODO: perlu GitHub GraphQL API + token untuk contribution calendar
                asli, tidak tersedia lewat REST publik.
              */}
              <div className="flex items-center justify-between py-2">
                <span className="w-2 h-2 bg-substrate-2" />
                <div className="flex-1 mx-4 h-[148px] opacity-40 [background-image:repeating-linear-gradient(0deg,#1a1a24_0_9px,transparent_9px_12px),repeating-linear-gradient(90deg,#1a1a24_0_9px,transparent_9px_12px)]" />
                <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
                  GRID: GREY (STATIC)
                </span>
              </div>
              <div className="flex items-center justify-end gap-2 mt-3 font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
                <span>LOW</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-substrate-2 inline-block" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-substrate-2 inline-block" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-substrate-2 inline-block" />
                <span>HIGH</span>
              </div>
              <p className="mt-4 font-mono text-code-snippet text-text-tertiary leading-relaxed border-t border-border pt-4">
                {`// contribution calendar penuh butuh GraphQL API + token (TODO).
                // placeholder netral dipertahankan — tanpa data palsu.`}
              </p>
            </div>

            {/* Recent repos from API */}
            <div className="lg:col-span-7 rounded-[4px] p-6 bg-card border border-border">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border font-mono text-code-snippet">
                <span className="text-text-primary font-semibold">
                  {"// RECENT_REPOS"}
                </span>
                <span className="text-text-tertiary">REMOTE: github / fiannnn9090</span>
              </div>

              {data.recentRepos.length === 0 ? (
                <p className="py-6 font-mono text-code-snippet text-text-tertiary">
                  Belum ada repository publik.
                </p>
              ) : (
                <div className="flex flex-col divide-y divide-border">
                  {data.recentRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:translate-x-1 transition-transform group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-secondary font-semibold shrink-0">
                          {repo.language ?? "—"}
                        </span>
                        <span className="text-text-primary truncate group-hover:text-secondary transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 font-mono text-label-sm text-text-tertiary shrink-0">
                        <span className="inline-flex items-center gap-1">
                          <Star size={11} />
                          {repo.stars}
                        </span>
                        <span>{daysAgo(repo.updated_at)}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}