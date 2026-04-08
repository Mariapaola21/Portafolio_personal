import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLang } from '../../context/LangContext'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()
  const { t } = useLang()
  const a = t.about

  return (
    <section className={styles.about} id="sobre-mi">
      <div ref={ref} className={styles.inner}>
        <div className={styles.photoWrap}>
          <div className={styles.frame}>
            <img
              src="/foto.jpg"
              alt="Maria Paola Anaya Correa"
              loading="eager"
              decoding="async"
              style={{ imageRendering: 'high-quality' }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className={styles.placeholder}>Tu Foto</div>
          </div>
        </div>

        <div className={styles.text}>
          <p className="section-label">{a.label}</p>
          <h2 className={styles.title}>
            {a.titleLine1}<br />
            <span className={styles.serif}>{a.titleLine2}</span>
          </h2>
          <p className={styles.body}>
            {a.body1.split('SENA').map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<strong>SENA</strong></span>
                : <span key={i}>{part}</span>
            )}
          </p>
          <p className={styles.body}>
            {a.body2.split('Terraform').map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<strong>Terraform</strong></span>
                : <span key={i}>{part}</span>
            )}
          </p>

          <div className={styles.stats}>
            {a.stats.map(({ num, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
