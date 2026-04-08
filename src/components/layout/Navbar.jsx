import { useState } from 'react'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useLang } from '../../context/LangContext'
import LangSwitcher from '../ui/LangSwitcher'
import styles from './Navbar.module.css'

const SECTION_IDS = ['inicio', 'proyectos', 'tecnologias', 'sobre-mi', 'contacto']
const HREFS = ['#inicio', '#proyectos', '#tecnologias', '#sobre-mi', '#contacto']

export default function Navbar() {
  const scrolled = useNavbarScroll()
  const activeId = useScrollSpy(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  const close = () => setOpen(false)

  // Cerrar drawer con Escape
  const handleOverlayKey = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter') close()
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>Maria Paola Anaya</div>

        <ul className={styles.links}>
          {t.nav.map((label, i) => (
            <li key={HREFS[i]}>
              <a href={HREFS[i]} className={activeId === SECTION_IDS[i] ? styles.active : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <LangSwitcher />
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {t.nav.map((label, i) => (
            <li key={HREFS[i]}>
              <a
                href={HREFS[i]}
                className={activeId === SECTION_IDS[i] ? styles.active : ''}
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.drawerLang}><LangSwitcher /></div>
      </div>

      {open && (
        <div
          className={styles.overlay}
          onClick={close}
          onKeyDown={handleOverlayKey}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        />
      )}
    </>
  )
}
