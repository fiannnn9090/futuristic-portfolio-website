import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { GithubSection } from "@/components/github-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Scroll sentinel for the navbar IntersectionObserver — replaces window scroll listener */}
      <div
        id="nav-sentinel"
        className="absolute top-0 left-0 w-px h-px pointer-events-none"
        aria-hidden
      />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <GithubSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}