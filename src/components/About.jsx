import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, Palette, Zap, Heart } from 'lucide-react'
import './About.css'

const traits = [
  { icon: <Code2 size={20} />, title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code.' },
  { icon: <Palette size={20} />, title: 'Design Eye', desc: 'Pixel-perfect UI/UX with attention to every detail.' },
  { icon: <Zap size={20} />, title: 'Performance', desc: 'Optimizing for speed and exceptional user experience.' },
  { icon: <Heart size={20} />, title: 'Passion', desc: 'Genuinely loving what I do — it shows in my work.' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="about" className="section about-section" ref={ref}>
      {/* Blobs */}
      <div className="blob blob-purple" style={{ width: 400, height: 400, bottom: -100, right: -100 }} />

      <div className="container">
        <div className="about-grid">
          {/* Left: image / visual */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-avatar-wrap">
              <div className="about-avatar">
                <span>SS</span>
              </div>
              <div className="about-badge-float">
                <span>🚀</span>
                <span>Open to Work</span>
              </div>
            </div>
            {/* Mini card */}
            <div className="about-mini-card card">
              <span className="about-mini-icon">💻</span>
              <div>
                <p className="about-mini-title">Full-Stack &amp; Game Dev</p>
                <p className="about-mini-sub">React · Node.js · Unity · C#</p>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-heading">
              Turning ideas into<br />
              <span className="gradient-text">beautiful products</span>
            </h2>
            <p className="about-para">
              Hey! I'm Sarthak, a full-stack developer and game dev enthusiast. I build
              modern web applications using the MERN stack and also work with Unity to
              create immersive 3D experiences. I care deeply about performance, clean
              architecture, and delightful user experiences.
            </p>
            <p className="about-para">
              When I'm not coding, you'll find me exploring new tech, working on game dev
              projects, or contributing to open source. I'm all about building things that
              are both technically solid and visually compelling.
            </p>

            <div className="about-traits">
              {traits.map((t, i) => (
                <motion.div
                  key={t.title}
                  className="about-trait"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="trait-icon">{t.icon}</div>
                  <div>
                    <p className="trait-title">{t.title}</p>
                    <p className="trait-desc">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
