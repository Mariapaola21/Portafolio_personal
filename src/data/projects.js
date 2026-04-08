/**
 * projects.js — Datos estáticos de proyectos
 * Las descripciones están en los 3 idiomas soportados.
 */

export const PROJECTS = [
  {
    id: 1,
    cardName: 'Materiales Prestige',
    title: 'Materiales Prestige',
    frontTags: ['React', 'Vite', 'Tailwind CSS'],
    description: {
      es: 'Sitio premium para empresa de carpintería e interiores. Splash screen, cursor personalizado, 3D con Three Fiber, scroll con Lenis y lazy loading por secciones.',
      en: 'Premium site for a carpentry and interiors company. Animated splash screen, custom cursor, 3D with Three Fiber, Lenis scroll and section-based lazy loading.',
      hi: 'कारपेंट्री और इंटीरियर कंपनी के लिए प्रीमियम साइट। स्प्लैश स्क्रीन, कस्टम कर्सर, Three Fiber से 3D, Lenis स्क्रॉल और लेज़ी लोडिंग।',
    },
    backTags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'React Router'],
    github: 'https://github.com/Mariapaola21/Materials-prestige',
    demo: 'https://materials-prestige.vercel.app/',
    colorIndex: 1,
  },
  {
    id: 2,
    cardName: 'Tienda E-Commerce',
    title: {
      es: 'Tienda de Ropa',
      en: 'Clothing Store',
      hi: 'कपड़ों की दुकान',
    },
    frontTags: ['FastAPI', 'Angular', 'JWT'],
    description: {
      es: 'Backend FastAPI con JWT, roles admin/cliente, catálogo con variantes por talla/color/stock y gestión de pedidos. Frontend Angular 21 con Tailwind, carrito y lazy loading.',
      en: 'FastAPI backend with JWT, admin/client roles, catalog with size/color/stock variants and order management. Angular 21 frontend with Tailwind, cart and lazy loading.',
      hi: 'JWT के साथ FastAPI बैकएंड, एडमिन/क्लाइंट रोल, साइज़/कलर/स्टॉक वेरिएंट कैटलॉग और ऑर्डर मैनेजमेंट। Tailwind, कार्ट और लेज़ी लोडिंग के साथ Angular 21 फ्रंटएंड।',
    },
    backTags: ['FastAPI', 'Python', 'Angular', 'Tailwind', 'SQLite', 'JWT'],
    github: 'https://github.com/Mariapaola21/tienda_de_ropa',
    demo: 'https://tienda-de-ropa-pi.vercel.app/shop',
    colorIndex: 2,
  },
  {
    id: 3,
    cardName: 'FemPloy',
    title: {
      es: 'FemPloy — Bolsa de Empleo',
      en: 'FemPloy — Job Board',
      hi: 'FemPloy — जॉब बोर्ड',
    },
    frontTags: ['React', 'Netlify', 'Scrum'],
    description: {
      es: 'Aplicación web de bolsa de empleo desarrollada en React con consumo de APIs, despliegue en Netlify y gestión del proyecto con Scrum y Trello.',
      en: 'Job board web app built with React, API consumption, deployed on Netlify and managed with Scrum and Trello.',
      hi: 'React में बनी जॉब बोर्ड वेब ऐप, API कंज़म्पशन, Netlify पर डिप्लॉय और Scrum व Trello से प्रबंधित।',
    },
    backTags: ['React', 'APIs', 'GitHub', 'Netlify', 'Scrum'],
    github: 'https://github.com/Mariapaola21',
    demo: '#',
    colorIndex: 3,
  },
]
