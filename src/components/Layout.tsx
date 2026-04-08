import { Outlet, useLocation } from 'react-router'
import { Starfield } from './Starfield'
import { Navbar } from './Navbar'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Re-observe on every route change so new [data-reveal] elements are picked up
  useScrollReveal('[data-reveal]', location.pathname)

  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-x-hidden">
      {/* Fixed backgrounds */}
      <Starfield />

      {/* Navbar — hidden on home (home has its own inline nav) */}
      {!isHome && <Navbar backTo="/" />}

      {/* Page content sits above the starfield (z-10) */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  )
}
