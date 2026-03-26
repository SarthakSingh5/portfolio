import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import './Footer.css'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/SarthakSingh5', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/sarthak35/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:sarthak3596@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-gradient-bar" />
      <div className="container footer-inner">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollTop() }}>
              <span className="logo-icon">✦</span>
              <span className="logo-text">Portfolio</span>
            </a>
            <p className="footer-tagline">
              Building beautiful digital experiences, one pixel at a time.
            </p>
          </div>

          <nav className="footer-links">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="footer-link"
                onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Sarthak Singh. Crafted with ❤️ using React.
          </p>
          <motion.button
            className="back-to-top"
            onClick={scrollTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
