import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to every element matching `selector`
 * inside the given container (defaults to document). When an element enters
 * the viewport it receives the `reveal-visible` class; the `reveal-hidden`
 * class controls the initial invisible state and must be applied in JSX.
 */
// routeKey should be location.pathname so the effect re-runs on every navigation
export function useScrollReveal(selector = '[data-reveal]', routeKey?: string) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            entry.target.classList.remove('reveal-hidden')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [selector, routeKey])
}
