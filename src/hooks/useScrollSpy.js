/**
 * useScrollSpy.js
 * Observa qué sección está visible y devuelve su id.
 * @param {string[]} sectionIds - IDs de las secciones a observar
 * @returns {string} activeId — id de la sección activa
 */
import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, threshold = 0.45) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, threshold])

  return activeId
}
