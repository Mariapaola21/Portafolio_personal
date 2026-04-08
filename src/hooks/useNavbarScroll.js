/**
 * useNavbarScroll.js
 * Detecta si el usuario ha hecho scroll para aplicar sombra al navbar.
 * @returns {boolean} scrolled — true cuando scrollY > 40
 */
import { useState, useEffect } from 'react'

export function useNavbarScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
