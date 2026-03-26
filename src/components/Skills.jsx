import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Skills.css'

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'C++', level: 82 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 78 },
      { name: 'C#', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'C', level: 72 },
      { name: 'PHP', level: 65 },
      { name: 'SQL', level: 74 },
      { name: 'GDScript', level: 68 },
    ],
  },
  {
    label: 'Frameworks & Web',
    skills: [
      { name: 'React', level: 82 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'HTML & CSS', level: 88 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Unity', level: 78 },
      { name: 'Godot', level: 68 },
      { name: 'Blender', level: 65 },
      { name: 'MySQL', level: 74 },
      { name: 'MongoDB', level: 76 },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MongoDB / Mongoose', level: 76 },
      { name: 'MySQL', level: 74 },
    ],
  },
]

const techBadges = [
  'C++', 'C', 'C#', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL', 'GDScript',
  'React', 'Node.js', 'Express', 'HTML', 'CSS', 'Bootstrap', 'Tailwind',
  'Unity', 'Godot', 'Blender', 'MongoDB', 'Mongoose', 'MySQL',
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="blob blob-blue" style={{ width: 400, height: 400, top: -50, left: -100 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-heading">
            My Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subheading">
            Tools and technologies I've mastered and work with daily.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skill-group card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-bars">
                {group.skills.map((s, si) => (
                  <div key={s.name} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-level">{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 + gi * 0.1 + si * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          className="tech-badges"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {techBadges.map((tech) => (
            <span key={tech} className="tag tech-tag">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
