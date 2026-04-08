/**
 * Projects.jsx — Sección de proyectos con carrusel 3D y flip cards
 * Usa useCarousel para gestionar el estado de navegación.
 */
import { useState } from 'react'
import { PROJECTS } from '../../data/projects'
import { useCarousel } from '../../hooks/useCarousel'
import { useLang } from '../../context/LangContext'
import FlipCard from '../ui/FlipCard'
import styles from './Projects.module.css'

/** Mapea el índice relativo a la clase CSS de posición */
function getPositionClass(diff) {
  if (diff === 0)  return styles.active
  if (diff === -1) return styles.left1
  if (diff <= -2)  return styles.left2
  if (diff === 1)  return styles.right1
  return styles.right2
}

export default function Projects() {
  const { current, goTo, goNext, goPrev, onInteract, dragHandlers } = useCarousel(PROJECTS.length)
  const [flipped, setFlipped] = useState(null)
  const { t, lang } = useLang()
  const p = t.projects

  /** Solo voltea la card activa */
  const handleCardClick = (index) => {
    onInteract()
    if (index !== current) {
      goTo(index)
      setFlipped(null)
    } else {
      setFlipped((prev) => (prev === index ? null : index))
    }
  }

  return (
    <section className={styles.projects} id="proyectos">
      <div className={styles.titleWrap}>
        <p className="section-label">{p.label}</p>
        <h2 className="section-title">{p.title}</h2>
      </div>

      <div className={styles.carouselWrapper}>
        {/* Flecha anterior */}
        <button className={styles.btn} onClick={() => { onInteract(); goPrev() }} aria-label="Anterior">←</button>

        {/* Track con perspectiva 3D */}
        <div
          className={styles.track}
          {...dragHandlers}
          style={{ cursor: 'grab' }}
        >
          {PROJECTS.map((project, i) => {
            const diff = i - current
            const posClass = getPositionClass(diff)
            return (
              <FlipCard
                key={project.id}
                project={project}
                lang={lang}
                positionClass={posClass}
                isFlipped={flipped === i}
                onClick={() => handleCardClick(i)}
                flipLabel={p.flip}
                githubLabel={p.github}
                demoLabel={p.demo}
              />
            )
          })}
        </div>

        {/* Flecha siguiente */}
        <button className={styles.btn} onClick={() => { onInteract(); goNext() }} aria-label="Siguiente">→</button>
      </div>

      {/* Dots indicadores */}
      <div className={styles.dots}>
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { onInteract(); goTo(i) }}
            aria-label={`Ir al proyecto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
