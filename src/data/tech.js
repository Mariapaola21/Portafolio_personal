/**
 * tech.js — Stack tecnológico
 * Datos separados de la presentación (SRP).
 */

/** @typedef {{ id: number, name: string, icon: string, category: string }} TechItem */

/** @type {TechItem[]} */
export const TECH_STACK = [
  { id: 1,  name: 'Next.js',    icon: 'devicon-nextjs-plain',          category: 'Frontend'  },
  { id: 2,  name: 'React',      icon: 'devicon-react-original colored', category: 'Frontend'  },
  { id: 3,  name: 'Angular',    icon: 'devicon-angularjs-plain colored',category: 'Frontend'  },
  { id: 4,  name: 'TypeScript', icon: 'devicon-typescript-plain colored',category: 'Lenguaje' },
  { id: 5,  name: 'JavaScript', icon: 'devicon-javascript-plain colored',category: 'Lenguaje' },
  { id: 6,  name: 'Python',     icon: 'devicon-python-plain colored',   category: 'Backend'   },
  { id: 7,  name: 'FastAPI',    icon: 'devicon-fastapi-plain colored',  category: 'Backend'   },
  { id: 8,  name: 'Azure',      icon: 'devicon-azure-plain colored',    category: 'Cloud'     },
  { id: 9,  name: 'Terraform',  icon: 'devicon-terraform-plain colored',category: 'IaC'       },
  { id: 10, name: 'MongoDB',    icon: 'devicon-mongodb-plain colored',  category: 'NoSQL'     },
  { id: 11, name: 'MySQL',      icon: 'devicon-mysql-plain colored',    category: 'SQL'       },
  { id: 12, name: 'Git',        icon: 'devicon-git-plain colored',      category: 'DevOps'    },
  { id: 13, name: 'GitHub',     icon: 'devicon-github-original',        category: 'DevOps'    },
  { id: 14, name: 'Redux',      icon: 'devicon-redux-original colored', category: 'Frontend'  },
]
