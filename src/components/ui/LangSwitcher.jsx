import { useLang } from '../../context/LangContext'
import styles from './LangSwitcher.module.css'

const LANGS = [
  { code: 'es', label: 'ES', flag: '🇨🇴' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'hi', label: 'हि', flag: '🇮🇳' },
]

export default function LangSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className={styles.switcher}>
      {LANGS.map(({ code, label, flag }) => (
        <button
          key={code}
          className={`${styles.btn} ${lang === code ? styles.active : ''}`}
          onClick={() => setLang(code)}
          aria-label={`Cambiar idioma a ${label}`}
        >
          <span className={styles.flag}>{flag}</span>
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  )
}
