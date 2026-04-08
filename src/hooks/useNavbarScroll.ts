import { useEffect, useRef, useState } from 'react'

/**
 * Returns whether the navbar should be visible.
 * Visible when: at the top of the page, or the user is scrolling up.
 */
export function useNavbarScroll(threshold = 100) {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < threshold || currentY < lastScrollY.current) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return visible
}
