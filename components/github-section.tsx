"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GitCommit, GitPullRequest, Star, Code2, Flame, Calendar } from "lucide-react"

const githubStats = {
  totalCommits: "1,200+",
  totalRepos: "45+",
  pullRequests: "120+",
  stars: "50+",
  currentStreak: "30",
  longestStreak: "90",
}

const recentActivity = [
  { type: "commit", message: "feat: implement blockchain voting system", repo: "e-voting-app", time: "2 jam lalu" },
  { type: "pr", message: "Add QRIS payment integration", repo: "kasir-app", time: "5 jam lalu" },
  { type: "commit", message: "fix: resolve authentication bug", repo: "resto-system", time: "1 hari lalu" },
  { type: "commit", message: "style: update UI components", repo: "gaming-profile", time: "2 hari lalu" },
]

const techStack = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "PHP", "Laravel", "MySQL", "MongoDB", "Tailwind CSS"
]

export function GithubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient-gaming">GitHub Activity</span>
          </h2>
          <p className="text-muted-foreground">
            Statistik dan aktivitas coding
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: GitCommit, value: githubStats.totalCommits, label: "Commits", color: "cyan" },
                { icon: Code2, value: githubStats.totalRepos, label: "Repos", color: "purple" },
                { icon: GitPullRequest, value: githubStats.pullRequests, label: "PRs", color: "cyan" },
                { icon: Star, value: githubStats.stars, label: "Stars", color: "purple" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg border bg-card transition-all duration-300 ${
                    stat.color === 'cyan' 
                      ? 'border-neon-cyan/20 hover:border-neon-cyan/50 hover:neon-glow-cyan' 
                      : 'border-neon-purple/20 hover:border-neon-purple/50 hover:neon-glow-purple'
                  }`}
                >
                  <stat.icon className={`w-4 h-4 mb-2 ${
                    stat.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'
                  }`} />
                  <div className={`text-xl font-bold ${
                    stat.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'
                  }`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Streak */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg border border-neon-cyan/20 bg-card hover:border-neon-cyan/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-foreground">Streak</span>
                </div>
                <Calendar className="w-4 h-4 text-neon-purple" />
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-2xl font-bold text-neon-cyan">{githubStats.currentStreak}</div>
                  <div className="text-xs text-muted-foreground">Current</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-neon-purple">{githubStats.longestStreak}</div>
                  <div className="text-xs text-muted-foreground">Longest</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-lg border border-neon-purple/20 bg-card"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Contributions</h3>
            <div className="grid grid-cols-12 gap-1">
              {[...Array(84)].map((_, i) => {
                const intensity = Math.random()
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: 0.3 + i * 0.005 }}
                    className={`aspect-square rounded-sm ${
                      intensity > 0.8
                        ? "bg-neon-cyan neon-glow-cyan"
                        : intensity > 0.6
                        ? "bg-neon-cyan/70"
                        : intensity > 0.4
                        ? "bg-neon-purple/50"
                        : intensity > 0.2
                        ? "bg-neon-purple/20"
                        : "bg-secondary"
                    }`}
                  />
                )
              })}
            </div>
            <div className="flex items-center justify-end gap-1.5 mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-0.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-secondary" />
                <div className="w-2.5 h-2.5 rounded-sm bg-neon-purple/20" />
                <div className="w-2.5 h-2.5 rounded-sm bg-neon-purple/50" />
                <div className="w-2.5 h-2.5 rounded-sm bg-neon-cyan/70" />
                <div className="w-2.5 h-2.5 rounded-sm bg-neon-cyan" />
              </div>
              <span>More</span>
            </div>
          </motion.div>

          {/* Recent Activity & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="p-5 rounded-lg border border-neon-cyan/20 bg-card">
              <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 text-sm group"
                    whileHover={{ x: 5 }}
                  >
                    {activity.type === "commit" ? (
                      <GitCommit className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                    ) : (
                      <GitPullRequest className="w-4 h-4 text-neon-purple mt-0.5 shrink-0" />
                    )}
                    <div className="min-w-0">
                      <p className="text-foreground truncate group-hover:text-neon-cyan transition-colors">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.repo} · {activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-lg border border-neon-purple/20 bg-card">
              <h3 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className={`px-2 py-1 text-xs rounded border ${
                      index % 2 === 0 
                        ? 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan' 
                        : 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
