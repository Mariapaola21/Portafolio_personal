/**
 * useScrollReveal.js
 * Aplica animación fade-in cuando el elemento entra al viewport.
 * @returns {React.RefObject} ref — adjuntar al elemento a animar
 */
import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(22px)'
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
