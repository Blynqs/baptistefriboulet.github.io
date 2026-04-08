import { Link, useLocation } from 'react-router'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

interface NavbarProps {
  /** Show back-arrow link pointing to this path */
  backTo?: string
}

export function Navbar({ backTo }: NavbarProps) {
  const visible = useNavbarScroll()
  const location = useLocation()

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`transition-colors duration-300 ${
        location.pathname === to ? 'text-white' : 'text-neutral-400 hover:text-white'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 h-16 flex items-center justify-between px-8 transition-transform duration-300 ${
        visible ? 'navbar-visible' : 'navbar-hidden'
      }`}
    >
      {/* Left — back arrow or spacer */}
      <div className="w-24">
        {backTo ? (
          <Link
            to={backTo}
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
            aria-label="Go back to home"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            Home
          </Link>
        ) : null}
      </div>

      {/* Center — nav links */}
      <nav className="flex items-center gap-8 text-sm font-medium">
        {navLink('/about',    'About')}
        {navLink('/projects', 'Projects')}
        {navLink('/contact',  'Contact')}
      </nav>

      {/* Right — spacer */}
      <div className="w-24" />
    </header>
  )
}
