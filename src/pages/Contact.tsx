import { GradientCard } from '../components/GradientCard'

/* ─── Inline SVG icons ───────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function CVIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  )
}

/* ─── Data ───────────────────────────────────────────── */
interface ContactItem {
  label: string
  value: string
  href: string
  description: string
  Icon: () => React.ReactElement
  accentColor: string
}

const CONTACTS: ContactItem[] = [
  {
    label: 'LinkedIn',
    value: 'baptiste-friboulet',
    href: 'https://www.linkedin.com/in/baptiste-friboulet/',
    description: 'Connect with me professionally',
    Icon: LinkedInIcon,
    accentColor: 'rgba(10, 102, 194, 0.15)',
  },
  {
    label: 'Email',
    value: 'bpt.frb@gmail.com',
    href: 'mailto:bpt.frb@gmail.com',
    description: 'Send me a message',
    Icon: EmailIcon,
    accentColor: 'rgba(255, 255, 255, 0.06)',
  },
  {
    label: 'GitHub',
    value: 'Blynqs',
    href: 'https://github.com/Blynqs',
    description: 'Check out my code',
    Icon: GitHubIcon,
    accentColor: 'rgba(255, 255, 255, 0.06)',
  },
  {
    label: 'CV',
    value: 'Download PDF',
    href: '/Baptiste_FRIBOULET_INGENIEUR_FULLSTACK.pdf',
    description: 'My full résumé',
    Icon: CVIcon,
    accentColor: 'rgba(255, 255, 255, 0.06)',
  },
]

/* ─── Page ───────────────────────────────────────────── */
export function Contact() {
  return (
    <div className="container mx-auto max-w-4xl px-5 pt-36 pb-20">
      <div className="grid gap-6 sm:grid-cols-2">
        {CONTACTS.map((c) => (
          <GradientCard
            key={c.label}
            data-reveal
            className="reveal-hidden rounded-2xl border border-white/30 bg-neutral-900/40 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <a
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex flex-col items-center text-center gap-5 p-8"
            >
              {/* Icon box */}
              <span
                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 text-white transition-all duration-300"
                style={{ backgroundColor: c.accentColor }}
              >
                <c.Icon />
              </span>

              {/* Label + value */}
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-1">{c.label}</p>
                <p className="font-semibold text-white">{c.value}</p>
              </div>

              <p className="text-sm text-neutral-400 font-light">{c.description}</p>
            </a>
          </GradientCard>
        ))}
      </div>
    </div>
  )
}
