import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero section">
      {/* Background blobs */}
      <div className="blob blob-purple" style={{ width: 500, height: 500, top: -100, left: -150 }} />
      <div className="blob blob-pink" style={{ width: 400, height: 400, top: 100, right: -100 }} />
      <div className="blob blob-blue" style={{ width: 350, height: 350, bottom: -50, left: '30%' }} />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-content">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dot" />
          Available for work
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hi, I'm <span className="gradient-text">Sarthak Singh</span><br />
          I Build Digital<br />
          <span className="gradient-text">Experiences</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Full-stack developer & game dev enthusiast crafting modern web applications
          and immersive digital experiences with clean code and an eye for design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Get In Touch
          </a>

        </motion.div>

        {/* Socials */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            { icon: <Github size={18} />, href: 'https://github.com/SarthakSingh5', label: 'GitHub' },
            { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/sarthak35/', label: 'LinkedIn' },
            { icon: <Phone size={18} />, href: 'tel:+919306956061', label: 'Phone' },
            { icon: <Mail size={18} />, href: 'mailto:sarthak3596@gmail.com', label: 'Email' },
          ].map((s) => (
            <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}
