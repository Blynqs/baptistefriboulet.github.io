import { useRef, useState } from 'react'

type GradientCardProps = React.HTMLAttributes<HTMLDivElement>

/**
 * A card that renders a radial gradient highlight that follows the cursor.
 * Forwards all native div props (including data-reveal, className, etc.).
 */
export function GradientCard({ children, className = '', ...rest }: GradientCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [gradient, setGradient] = useState('none')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width)  * 100
    const y = ((e.clientY - rect.top)  / rect.height) * 100
    setGradient(
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
    )
  }

  const handleMouseLeave = () => setGradient('none')

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ backgroundImage: gradient, transition: 'background-image 0.3s ease-out' }}
      {...rest}
    >
      {children}
    </div>
  )
}
