/**
 * useCarousel.js
 * - Navegación por flechas, dots, drag y swipe
 * - Auto-rotación circular cuando el usuario no interactúa
 */
import { useState, useCallback, useRef, useEffect } from 'react'

const AUTO_DELAY = 3000   // ms entre avances automáticos
const IDLE_RESET = 5000   // ms de inactividad para reanudar auto-rotación

export function useCarousel(total) {
  const [current, setCurrent] = useState(0)
  const dragStart   = useRef(null)
  const touchStart  = useRef(null)
  const autoTimer   = useRef(null)
  const idleTimer   = useRef(null)

  // Avance circular
  const goNext = useCallback(() => {
    setCurrent(c => (c + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setCurrent(c => (c - 1 + total) % total)
  }, [total])

  const goTo = useCallback((index) => {
    setCurrent(((index % total) + total) % total)
  }, [total])

  // ── Auto-rotación ──────────────────────────────────
  const startAuto = useCallback(() => {
    clearInterval(autoTimer.current)
    autoTimer.current = setInterval(goNext, AUTO_DELAY)
  }, [goNext])

  const stopAuto = useCallback(() => {
    clearInterval(autoTimer.current)
  }, [])

  // Pausa al interactuar, reanuda tras IDLE_RESET ms
  const onInteract = useCallback(() => {
    stopAuto()
    clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(startAuto, IDLE_RESET)
  }, [stopAuto, startAuto])

  // Arrancar al montar
  useEffect(() => {
    startAuto()
    return () => {
      clearInterval(autoTimer.current)
      clearTimeout(idleTimer.current)
    }
  }, [startAuto])

  // ── Drag mouse ────────────────────────────────────
  const onMouseDown = useCallback((e) => {
    dragStart.current = e.pageX
    onInteract()
  }, [onInteract])

  const onMouseUp = useCallback((e) => {
    if (dragStart.current === null) return
    const diff = dragStart.current - e.pageX
    if (diff > 50) goNext()
    else if (diff < -50) goPrev()
    dragStart.current = null
  }, [goNext, goPrev])

  // ── Touch / swipe ─────────────────────────────────
  const onTouchStart = useCallback((e) => {
    touchStart.current = e.touches[0].clientX
    onInteract()
  }, [onInteract])

  const onTouchEnd = useCallback((e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 50) goNext()
    else if (diff < -50) goPrev()
    touchStart.current = null
  }, [goNext, goPrev])

  return {
    current,
    goTo,
    goNext,
    goPrev,
    onInteract,
    dragHandlers: { onMouseDown, onMouseUp, onTouchStart, onTouchEnd },
  }
}
