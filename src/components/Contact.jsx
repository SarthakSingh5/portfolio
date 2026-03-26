import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react'
import './Contact.css'

const contactDetails = [
  { icon: <Mail size={18} />, label: 'Email', value: 'sarthak3596@gmail.com', href: 'mailto:sarthak3596@gmail.com' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 93069 56061', href: 'tel:+919306956061' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'India', href: '#' },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="blob blob-purple" style={{ width: 500, height: 500, top: -100, right: -150 }} />
      <div className="blob blob-pink" style={{ width: 350, height: 350, bottom: 0, left: -100 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact-intro card">
              <h3 className="contact-intro-heading">I'm currently available</h3>
              <p className="contact-intro-text">
                Looking for freelance opportunities or full-time roles. If you need
                someone to build or improve your web presence, let's talk!
              </p>
              <div className="contact-avail">
                <span className="avail-dot" />
                <span>Available for work</span>
              </div>
            </div>

            {contactDetails.map((c) => (
              <a key={c.label} href={c.href} className="contact-detail-item card">
                <div className="contact-detail-icon">{c.icon}</div>
                <div>
                  <p className="contact-detail-label">{c.label}</p>
                  <p className="contact-detail-value">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sent ? (
              <div className="contact-success card">
                <CheckCircle size={48} className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={loading}
                  id="submit-btn"
                >
                  {loading ? (
                    <span className="spinner" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
