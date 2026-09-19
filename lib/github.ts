export interface GithubRepoSummary {
  name: string
  description: string | null
  language: string | null
  stars: number
  updated_at: string
  html_url: string
}

export interface GithubStatsResponse {
  login: string
  name: string | null
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  totalStars: number
  topLanguage: string | null
  languages: Record<string, number>
  recentRepos: GithubRepoSummary[]
  fetchedAt: string
}