import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook that wraps IntersectionObserver for scroll-triggered animations.
 * Returns [ref, inView]
 */
export function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(el) // Animate once
      }
    }, { threshold: 0.15, ...options })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
