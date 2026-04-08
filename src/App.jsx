import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import { LangProvider } from './context/LangContext'
import ErrorBoundary from './components/ErrorBoundary'

const Projects = lazy(() => import('./components/sections/Projects'))
const Tech     = lazy(() => import('./components/sections/Tech'))
const About    = lazy(() => import('./components/sections/About'))
const Contact  = lazy(() => import('./components/sections/Contact'))

export default function App() {
  useEffect(() => {
    if (typeof window.__hideSplash === 'function') window.__hideSplash()
  }, [])

  return (
    <ErrorBoundary>
      <LangProvider>
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <Projects />
            <Tech />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </LangProvider>
    </ErrorBoundary>
  )
}
