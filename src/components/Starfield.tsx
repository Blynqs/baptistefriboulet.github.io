import { useRef } from 'react'
import { useMouseParallax } from '../hooks/useMouseParallax'

export function Starfield() {
  const ref = useRef<HTMLDivElement>(null)
  useMouseParallax(ref)

  return (
    <>
      <div ref={ref} className="starfield" aria-hidden="true" />
      <div className="light-beam" aria-hidden="true" />
    </>
  )
}
