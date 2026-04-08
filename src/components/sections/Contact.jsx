import { CONTACT_LINKS } from '../../data/contact'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLang } from '../../context/LangContext'
import {
  GitHubIcon, LinkedInIcon,
  EmailIcon, DiscordIcon, DownloadIcon,
} from '../icons/Icons'
import styles from './Contact.module.css'

const ICON_MAP = {
  github:   <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  email:    <EmailIcon />,
  discord:  <DiscordIcon />,
  cv:       <DownloadIcon />,
}

function BentoCard({ item, labels }) {
  const ref = useScrollReveal()
  const sizeClass = styles[item.size] || ''

  return (
    <a
      ref={ref}
      href={item.href}
      target={item.download ? undefined : '_blank'}
      rel="noreferrer"
      download={item.download || undefined}
      className={`${styles.card} ${sizeClass}`}
      aria-label={labels.name}
    >
      <div className={styles.icon} aria-hidden="true">{ICON_MAP[item.type]}</div>
      {item.size === 'wide' ? (
        <>
          <div className={styles.text}>
            <span className={styles.name}>{labels.name}</span>
            <span className={styles.sub}>{labels.sub}</span>
          </div>
          <span className={styles.action}>{labels.action}</span>
        </>
      ) : (
        <>
          <span className={styles.name}>{labels.name}</span>
          <span className={styles.sub}>{labels.sub}</span>
        </>
      )}
    </a>
  )
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section className={styles.contact} id="contacto">
      <p className="section-label">{c.label}</p>
      <h2 className={`section-title ${styles.lightTitle}`}>{c.title}</h2>
      <div className={styles.grid}>
        {CONTACT_LINKS.map((item) => (
          <BentoCard key={item.id} item={item} labels={c.links[item.id]} />
        ))}
      </div>
    </section>
  )
}
