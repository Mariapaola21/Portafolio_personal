/**
 * contact.js — Links de contacto para el Bento Grid
 */

export const CONTACT_LINKS = [
  {
    id: 'github',
    name: 'GitHub',
    sub: 'Ver repositorios →',
    href: 'https://github.com/Mariapaola21',
    size: 'lg',   // bento-lg = span 2 cols
    type: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    sub: 'Conectar',
    href: 'https://www.linkedin.com/in/maria-paola-anaya-correa-34188a333',
    size: 'md',
    type: 'linkedin',
  },

  {
    id: 'email',
    name: 'Correo Electrónico',
    sub: 'pa4742621@gmail.com',
    href: 'mailto:pa4742621@gmail.com',
    size: 'wide',  // span 2 cols, row layout
    type: 'email',
    action: 'Enviar Mensaje',
  },
  {
    id: 'discord',
    name: 'Discord',
    sub: 'mariapaola0377_63442',
    href: 'https://discord.com/users/mariapaola0377_63442',
    size: 'md',
    type: 'discord',
  },
  {
    id: 'cv',
    name: 'Descargar CV',
    sub: 'PDF',
    href: '/cv.pdf',
    size: 'md',
    type: 'cv',
    download: true,
  },
]
