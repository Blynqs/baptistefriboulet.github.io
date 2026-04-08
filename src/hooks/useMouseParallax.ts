import { useEffect, useRef } from 'react'

/**
 * Applies a subtle parallax translate to the starfield element based on
 * the current mouse position. Max offset is 8 px in each direction.
 */
export function useMouseParallax(ref: React.RefObject<HTMLElement | null>) {
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const xRatio = (e.clientX / window.innerWidth  - 0.5) * 2 // -1 … 1
        const yRatio = (e.clientY / window.innerHeight - 0.5) * 2
        const MAX = 8
        el.style.transform = `translate(${xRatio * MAX}px, ${yRatio * MAX}px)`
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [ref])
}
