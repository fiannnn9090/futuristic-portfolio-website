import { NextResponse } from "next/server"
import type { GithubStatsResponse } from "@/lib/github"

const GITHUB_USERNAME = "fiannnn9090"
const GITHUB_API = "https://api.github.com"

interface RawRepo {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  fork: boolean
}

export const dynamic = "force-dynamic"

function headers() {
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "fiannnn9090-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  }
}

/*
 * Semua angka GitHub diambil dari GitHub REST API publik di sisi server,
 * tidak ada satu pun yang di-hardcode di UI.
 */
export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, { headers: headers() }),
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
        headers: headers(),
      }),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: "github_fetch_failed", code: userRes.status },
        { status: 502 }
      )
    }

    const user = (await userRes.json()) as {
      login: string
      name: string | null
      avatar_url: string
      followers: number
      following: number
      public_repos: number
    }
    const repos = (await reposRes.json()) as RawRepo[]

    const nonFork = repos.filter((repo) => !repo.fork)
    const totalStars = nonFork.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    )

    const languageCounts = new Map<string, number>()
    for (const repo of nonFork) {
      if (repo.language) {
        languageCounts.set(
          repo.language,
          (languageCounts.get(repo.language) ?? 0) + 1
        )
      }
    }
    const topLanguage =
      [...languageCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null

    const recentRepos = nonFork.slice(0, 6).map((repo) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      updated_at: repo.updated_at,
      html_url: repo.html_url,
    }))

    const response: GithubStatsResponse = {
      login: user.login,
      name: user.name,
      avatar_url: user.avatar_url,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      totalStars,
      topLanguage,
      languages: Object.fromEntries(languageCounts),
      recentRepos,
      fetchedAt: new Date().toISOString(),
    }

    return NextResponse.json(response)
  } catch {
    return NextResponse.json(
      { error: "github_unreachable" },
      { status: 502 }
    )
  }
}