"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, MessageCircle, Heart, Code2, Gamepad2 } from "lucide-react"

const footerLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Prestasi", href: "#achievements" },
  { name: "Gallery", href: "#gallery" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://discord.com", label: "Discord" },
]

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-neon-cyan/20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-purple/10 blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Gamepad2 className="w-6 h-6 text-neon-cyan" />
            <span className="text-2xl font-bold text-gradient-gaming">PORTFOLIO</span>
          </div>
          <blockquote className="text-lg text-muted-foreground italic max-w-xl mx-auto">
            {'"The best way to predict the future is to create it."'}
          </blockquote>
          <p className="text-sm text-neon-purple mt-2">— Peter Drucker</p>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.nav>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className={`p-3 rounded-lg border transition-all duration-300 ${
                index % 2 === 0 
                  ? 'border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:neon-glow-cyan' 
                  : 'border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 hover:neon-glow-purple'
              }`}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-semibold text-gradient-gaming">Developer Portfolio</span>
            <span className="text-neon-cyan">·</span>
            <span className="flex items-center gap-1">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink" /> dan <Code2 className="w-3.5 h-3.5 text-neon-cyan" />
            </span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with Next.js, Tailwind CSS, dan Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
