import Image from "next/image"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    label: "github.com/fiannnn9090",
    href: "https://github.com/fiannnn9090",
    icon: Github,
    accent: "secondary",
  },
  {
    label: "linkedin.com/in/aliffian-maesanjaya",
    href: "https://www.linkedin.com/in/aliffian-maesanjaya",
    icon: Linkedin,
    accent: "violet",
  },
]

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Gallery", href: "#gallery" },
]

export function Footer() {
  return (
    <>
      {/* ===== Contact section ===== */}
      <section
        id="contact"
        className="w-full max-w-[1200px] mx-auto px-5 md:px-12 pt-20 pb-24 border-t border-border"
      >
        <div className="relative rounded-[4px] p-6 md:p-10 bg-card border border-border overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-glow-cyan pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2 font-mono text-label-sm uppercase tracking-[0.08em] text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Transmission Channel: Ready
              </div>
              <h2 className="font-sans text-headline-lg-mobile md:text-headline-lg text-text-primary tracking-tight">
                Inisiasi kontak &amp; kolaborasi data
              </h2>
              <p className="font-mono text-body-lg text-text-secondary max-w-xl leading-relaxed">
                Terbuka untuk peluang sebagai{" "}
                <span className="text-text-primary">Data Analyst / Data Scientist</span>{" "}
                (entry level) maupun proyek full-stack, riset, dan kolaborasi
                berbasis data.
              </p>

              <div className="rounded-[4px] p-4 bg-substrate-1 border border-border font-mono text-code-snippet max-w-lg">
                <div className="flex items-center justify-between text-text-tertiary mb-1.5">
                  <span>CONTACT_PREF:</span>
                  <span className="text-secondary">[ EMAIL ]</span>
                </div>
                <div className="text-text-primary select-all">
                  aliffianmsj@gmail.com
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2.5 rounded-[4px] p-5 bg-substrate-1 border border-border">
                <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary mb-1">
                  {"// DIRECT_DISPATCH"}
                </span>

                <a
                  href="mailto:aliffianmsj@gmail.com"
                  className="rounded-[4px] p-3 bg-substrate-2 border border-border font-mono text-code-snippet text-text-primary hover:border-secondary transition-colors flex items-center justify-between gap-2"
                >
                  <span className="truncate">aliffianmsj@gmail.com</span>
                  <Mail size={15} className="text-secondary shrink-0" />
                </a>

                {contactLinks.map((link) => {
                  const hoverBorder =
                    link.accent === "secondary"
                      ? "hover:border-secondary"
                      : "hover:border-primary"
                  const iconColor =
                    link.accent === "secondary"
                      ? "text-secondary shrink-0"
                      : "text-primary shrink-0"
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-[4px] p-3 bg-substrate-2 border border-border font-mono text-code-snippet text-text-primary transition-colors flex items-center justify-between gap-2 ${hoverBorder}`}
                    >
                      <span className="truncate">{link.label}</span>
                      <link.icon size={15} className={iconColor} />
                    </a>
                  )
                })}

                <a
                  href="#contact"
                  className="mt-2 rounded-[4px] px-6 py-3 bg-secondary text-secondary-foreground font-mono text-label-md font-semibold uppercase tracking-[0.08em] border border-secondary glow-cyan text-center transition-all duration-200 hover:bg-white"
                >
                  Start Conversation <ArrowUpRight size={14} className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer bar ===== */}
      <footer className="w-full bg-background border-t border-border py-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-code-snippet text-text-secondary">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Image
              src="/logo-monogram.svg"
              alt="Monogram Aliffian Maesanjaya"
              width={24}
              height={24}
              className="h-6 w-auto"
              unoptimized
            />
            <span className="text-text-tertiary">
              © {new Date().getFullYear()} FIAN.DEV. ALL_SYSTEMS_OPERATIONAL.
            </span>
            <span className="hidden lg:inline px-2 py-0.5 rounded-[4px] bg-substrate-1 font-mono text-label-sm uppercase tracking-[0.08em] text-secondary">
              BUILD_V3.0
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-label-sm uppercase tracking-[0.08em] text-text-secondary hover:text-secondary transition-colors"
              >
                [{link.label}]
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>SYS.NORMAL</span>
          </div>
        </div>
      </footer>
    </>
  )
}