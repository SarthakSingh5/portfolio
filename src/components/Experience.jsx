import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Award, ExternalLink } from 'lucide-react'
import './Experience.css'

const certificates = [
  {
    title: 'Full Stack Development',
    issuer: 'Cipher School',
    color: '#7c3aed',
    link: 'https://drive.google.com/drive/folders/12DSiEJ026qU2sDaC8YG42Rj_XBq6M3FH',
  },
  {
    title: 'Advanced Computer Networks',
    issuer: 'NPTEL',
    color: '#0ea5e9',
    link: 'https://drive.google.com/drive/folders/12DSiEJ026qU2sDaC8YG42Rj_XBq6M3FH',
  },
  {
    title: 'Introduction to Hardware and Operating System',
    issuer: 'IBM',
    color: '#2563eb',
    link: 'https://drive.google.com/drive/folders/12DSiEJ026qU2sDaC8YG42Rj_XBq6M3FH',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    color: '#16a34a',
    link: 'https://drive.google.com/drive/folders/12DSiEJ026qU2sDaC8YG42Rj_XBq6M3FH',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="blob blob-purple" style={{ width: 400, height: 400, bottom: 0, left: -100 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Certifications</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subheading">
            Courses and certifications I've completed to sharpen my skills.
          </p>
        </motion.div>

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ '--cert-color': cert.color }}
            >
              <div className="cert-icon-wrap">
                <Award size={28} strokeWidth={1.8} />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <ExternalLink size={16} className="cert-ext-icon" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
