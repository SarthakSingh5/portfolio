import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink, Github, Star } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'CMS — Content Management System',
    desc: 'A full-stack MERN Content Management System with role-based access control, a rich text editor, user authentication with JWT, and a real-time analytics dashboard. Features admin and regular-user interfaces.',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
    category: 'Full-Stack',
    stars: 0,
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    demo: '#',
    repo: 'https://github.com/SarthakSingh5/CMS',
    featured: true,
  },
  {
    title: 'Apradh 3D',
    desc: 'A Unity 3D game project built with C# and custom HLSL shaders. Features a 3D environment with ShaderLab-based visual effects, custom game logic, and immersive gameplay mechanics.',
    tags: ['Unity', 'C#', 'ShaderLab', 'HLSL', 'Game Dev'],
    category: 'Game Dev',
    stars: 0,
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    demo: '#',
    repo: 'https://github.com/SarthakSingh5/Apradh3DTrial',
    featured: true,
  },
  {
    title: 'Automated Deadlock Detection Tool',
    desc: 'A C++ / Python tool that monitors resource allocation and detects deadlocks in an OS environment using a Resource Allocation Graph (RAG). Includes real-time cycle detection, deadlock resolution via process preemption, a logging system, and configurable allocation through JSON files.',
    tags: ['Python', 'C++', 'OS Concepts', 'Algorithms', 'RAG'],
    category: 'Tool',
    stars: 0,
    gradient: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    demo: '#',
    repo: 'https://github.com/SarthakSingh5/automated-deadlock-detection-tool',
    featured: false,
  },
]

const filters = ['All', 'Full-Stack', 'Game Dev', 'Tool']

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="blob blob-pink" style={{ width: 500, height: 500, top: 100, right: -200 }} />

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-heading">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subheading">
            A selection of projects I'm proud of — from quick experiments to full production apps.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'filter-active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className={`project-card card ${project.featured ? 'project-featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              layout
            >
              {/* Top gradient bar */}
              <div className="project-gradient-bar" style={{ background: project.gradient }} />

              <div className="project-card-inner">
                {project.featured && <span className="project-featured-badge">Featured</span>}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="project-footer">
                  <div className="project-stars">
                    <Star size={13} />
                    <span>{project.stars}</span>
                  </div>
                  <div className="project-links">
                    <a href={project.repo} className="project-link" aria-label="GitHub Repo">
                      <Github size={16} />
                    </a>
                    <a href={project.demo} className="project-link" aria-label="Live Demo">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
