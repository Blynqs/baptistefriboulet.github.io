import { useEffect, useState } from 'react'

/**
 * Two panels that slide out left/right on mount, revealing the page beneath.
 * The page content fades+scales in after the panels separate.
 */
export function DistortionOverlay({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    // Small delay so the browser paints the panels before animating
    const t1 = setTimeout(() => setRevealed(true), 50)
    const t2 = setTimeout(() => setContentVisible(true), 500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <>
      {/* Distortion panels */}
      <div className={`distortion-left${revealed ? ' revealed' : ''}`} />
      <div className={`distortion-right${revealed ? ' revealed' : ''}`} />

      {/* Page content */}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'scale(1)' : 'scale(0.97)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        {children}
      </div>
    </>
  )
}
