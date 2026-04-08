import { useLang } from '../../context/LangContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.videoBg}>
        <video autoPlay muted loop playsInline>
          <source src="/VIDE.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>{h.label}</p>
        <h1 className={styles.title}>
          {h.title[0]}<br />{h.title[1]}<br />
          <em>{h.title[2]}</em>
        </h1>
        <p className={styles.subtitle}>{h.subtitle}</p>
        <div className={styles.cta}>
          <a href="#proyectos" className={styles.btn}>{h.cta1}</a>
          <a href="/cv.pdf" className={`${styles.btn} ${styles.btnGhost}`} download>
            {h.cta2}
          </a>
        </div>
      </div>

      <div className={styles.scroll}>↓</div>
    </section>
  )
}
