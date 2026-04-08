/**
 * FlipCard.jsx — Card con efecto flip 3D
 * Props:
 *  - project: datos del proyecto
 *  - positionClass: clase CSS de posición en el carrusel
 *  - isFlipped: boolean para mostrar el reverso
 *  - onClick: handler de click
 */
import styles from './FlipCard.module.css'
import { GitHubIcon, ExternalLinkIcon } from '../icons/Icons'

export default function FlipCard({ project, positionClass, isFlipped, onClick, lang = 'es', flipLabel = 'Toca para ver más →', githubLabel = 'GitHub', demoLabel = 'Live Demo' }) {
  // title y description pueden ser string o { es, en, hi }
  const title = typeof project.title === 'object' ? project.title[lang] : project.title
  const description = typeof project.description === 'object' ? project.description[lang] : project.description
  return (
    <div
      className={`${styles.card} ${positionClass} ${isFlipped ? styles.flipped : ''}`}
      onClick={onClick}
    >
      {/* Sombra flotante */}
      <div className={styles.shadow} />

      <div className={styles.inner}>
        {/* Botones laterales izquierdos (volumen) */}
        <div className={styles.btnVolUp} />
        <div className={styles.btnVolDown} />
        <div className={styles.btnMute} />
        {/* ── FRENTE ── */}
        <div className={styles.front}>
          <div className={styles.imgWrap}>
            <div className={`${styles.placeholder} ${styles[`color${project.colorIndex}`]}`}>
              <div className={styles.waveLines} />
              <span className={styles.cardName}>{project.cardName}</span>
            </div>
          </div>
          <div className={styles.frontBody}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.tags}>
              {project.frontTags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <span className={styles.hint}>{flipLabel}</span>
          </div>
        </div>

        {/* ── REVERSO ── */}
        <div className={styles.back}>
          <h3 className={styles.backTitle}>{title}</h3>
          <p className={styles.backDesc}>{description}</p>
          <div className={styles.tags}>
            {project.backTags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
          <div className={styles.backLinks}>
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}
               onClick={(e) => e.stopPropagation()}>
              <GitHubIcon /> {githubLabel}
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className={styles.link}
               onClick={(e) => e.stopPropagation()}>
              <ExternalLinkIcon /> {demoLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
