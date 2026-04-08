import { useLang } from '../../context/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <p>{t.footer}</p>
    </footer>
  )
}
