import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Trophy, Code2, Star, Flame } from 'lucide-react'
import './Achievements.css'

const achievements = [
  {
    icon: <Code2 size={26} strokeWidth={1.8} />,
    title: '350+ Problems Solved',
    desc: 'Solved over 350 coding problems on LeetCode, consistently strengthening problem-solving skills across data structures and algorithms.',
    color: '#f59e0b',
    tag: 'LeetCode',
  },
  {
    icon: <Flame size={26} strokeWidth={1.8} />,
    title: '100 Days Badge',
    desc: 'Earned the prestigious LeetCode 100 Days Badge in February 2025, demonstrating consistent daily practice and commitment to coding.',
    color: '#ef4444',
    tag: 'Feb 2025',
  },
  {
    icon: <Star size={26} strokeWidth={1.8} />,
    title: 'Contest Rating: 1478',
    desc: 'Achieved a contest rating of 1478 on LeetCode through competitive programming contests, reflecting solid algorithmic thinking under time pressure.',
    color: '#8b5cf6',
    tag: 'Competitive',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="achievements" className="section achievements-section" ref={ref}>
      <div className="blob blob-pink" style={{ width: 380, height: 380, top: -80, right: -100 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-heading">
            Milestones & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="section-subheading">
            Benchmarks I've hit on the journey of continuous learning and coding.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="achievement-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ '--ach-color': a.color }}
            >
              <div className="ach-glow" />
              <div className="ach-icon-wrap">
                {a.icon}
              </div>
              <div className="ach-body">
                <div className="ach-top">
                  <h3 className="ach-title">{a.title}</h3>
                  <span className="ach-tag">{a.tag}</span>
                </div>
                <p className="ach-desc">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
