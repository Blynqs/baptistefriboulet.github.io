import { Link } from 'react-router'
import { DistortionOverlay } from '../components/DistortionOverlay'

export function Home() {
  return (
    <DistortionOverlay>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Inline nav — only on home */}
        <nav className="absolute top-0 inset-x-0 z-20 flex justify-center gap-10 pt-8 text-sm font-medium">
          <Link to="/about"    className="text-neutral-400 hover:text-white transition-colors duration-300">About</Link>
          <Link to="/projects" className="text-neutral-400 hover:text-white transition-colors duration-300">Projects</Link>
          <Link to="/contact"  className="text-neutral-400 hover:text-white transition-colors duration-300">Contact</Link>
        </nav>

        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="font-black leading-none tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            Baptiste Friboulet
          </h1>
          <p className="text-neutral-300 font-light max-w-2xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Full-stack developer, trained at Epitech. Passionate about building
            elegant products at the intersection of great engineering and great design.
          </p>
        </div>
      </div>
    </DistortionOverlay>
  )
}
