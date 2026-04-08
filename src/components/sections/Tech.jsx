import { useState } from 'react'
import { useLang } from '../../context/LangContext'
import styles from './Tech.module.css'

const KEYS = [
  { name: 'React',      icon: 'devicon-react-original colored',       cat: 'FRONTEND' },
  { name: 'Angular',    icon: 'devicon-angularjs-plain colored',      cat: 'FRONTEND' },
  { name: 'Next.js',    icon: 'devicon-nextjs-plain',                 cat: 'FRONTEND' },
  { name: 'Redux',      icon: 'devicon-redux-original colored',       cat: 'FRONTEND' },
  { name: 'Tailwind',   icon: 'devicon-tailwindcss-original colored', cat: 'FRONTEND' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored',     cat: 'LENGUAJE' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored',     cat: 'LENGUAJE' },
  { name: 'Python',     icon: 'devicon-python-plain colored',         cat: 'BACKEND'  },
  { name: 'FastAPI',    icon: 'devicon-fastapi-plain colored',        cat: 'BACKEND'  },
  { name: 'PHP',        icon: 'devicon-php-plain colored',            cat: 'BACKEND'  },
  { name: 'Laravel',    icon: 'devicon-laravel-plain colored',        cat: 'BACKEND'  },
  { name: 'Bootstrap',  icon: 'devicon-bootstrap-plain colored',      cat: 'FRONTEND' },
  { name: 'Docker',     icon: 'devicon-docker-plain colored',         cat: 'DEVOPS'   },
  { name: 'Git',        icon: 'devicon-git-plain colored',            cat: 'DEVOPS'   },
  { name: 'GitHub',     icon: 'devicon-github-original',              cat: 'DEVOPS'   },
  { name: 'Terraform',  icon: 'devicon-terraform-plain colored',      cat: 'IAC'      },
  { name: 'Azure',      icon: 'devicon-azure-plain colored',          cat: 'CLOUD'    },
  { name: 'MySQL',      icon: 'devicon-mysql-plain colored',          cat: 'SQL'      },
  { name: 'MongoDB',    icon: 'devicon-mongodb-plain colored',        cat: 'NOSQL'    },
  { name: 'Antigravity',icon: 'devicon-google-plain colored',         cat: 'AI'       },
]

function Key({ name, icon, cat }) {
  return (
    <div className={styles.key}>
      <div className={styles.keyCap}>
        <i className={icon} aria-hidden="true" />
        <span className={styles.keyName}>{name}</span>
        <span className={styles.keyCat}>{cat}</span>
      </div>
    </div>
  )
}

export default function Tech() {
  const [pos, setPos] = useState(0)
  const { t } = useLang()
  const tech = t.tech

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setPos(p => (p + 1) % 3)
    }
  }

  return (
    <section className={styles.tech} id="tecnologias">
      <p className="section-label">{tech.label}</p>
      <h2 className={styles.skillsTitle}>{tech.title}</h2>
      <p className={styles.hint}>{tech.hint}</p>

      <div className={styles.scene}>
        <div
          role="button"
          tabIndex={0}
          aria-label={tech.hint}
          className={`${styles.keyboard} ${styles['pos' + pos]}`}
          onClick={() => setPos(p => (p + 1) % 3)}
          onKeyDown={handleKeyDown}
        >
          <div className={`${styles.key} ${styles.keyBig}`}>
            <div className={styles.keyCap}>
              <span className={styles.keyQuote}>
                {tech.quote.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </span>
            </div>
          </div>

          {KEYS.map((k) => <Key key={k.name} {...k} />)}
        </div>
      </div>
    </section>
  )
}
