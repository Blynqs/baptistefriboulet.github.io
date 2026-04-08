import { GradientCard } from '../components/GradientCard'

/* ─── Tech data ──────────────────────────────────────────
   icon: Devicon CDN filename (without .svg) or null for fallback
   color: fallback pill color when no icon is available
──────────────────────────────────────────────────────── */
interface TechItem {
  label: string
  icon: string | null
  color?: string
}

interface TechSection {
  heading: string
  emoji: string
  items: TechItem[]
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

function iconUrl(name: string) {
  return `${DEVICON}/${name}/${name}-original.svg`
}

const TECH_SECTIONS: TechSection[] = [
  {
    heading: 'Programming Languages',
    emoji: '💻',
    items: [
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Python',     icon: 'python' },
      { label: 'HTML',       icon: 'html5' },
      { label: 'CSS',        icon: 'css3' },
    ],
  },
  {
    heading: 'Frameworks & Libraries',
    emoji: '🧩',
    items: [
      { label: 'React',      icon: 'react' },
      { label: 'Vue.js',     icon: 'vuejs' },
      { label: 'Node.js',    icon: 'nodejs' },
      { label: 'Express.js', icon: 'express' },
      { label: 'GraphQL',    icon: 'graphql' },
    ],
  },
  {
    heading: 'Tools & Methodologies',
    emoji: '🔧',
    items: [
      { label: 'Git',            icon: 'git' },
      { label: 'Docker',         icon: 'docker' },
      { label: 'Jira',           icon: 'jira' },
      { label: 'VS Code',        icon: 'vscode' },
      { label: 'Postman',        icon: 'postman' },
      { label: 'Android Studio', icon: 'androidstudio' },
      { label: 'Xcode',          icon: 'xcode' },
      { label: 'CI/CD',          icon: null, color: '#6366f1' },
      { label: 'Agile/Scrum',    icon: null, color: '#0ea5e9' },
    ],
  },
  {
    heading: 'Databases',
    emoji: '🗄️',
    items: [
      { label: 'MySQL',      icon: 'mysql' },
      { label: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
]

/* ─── Card wrapper ───────────────────────────────────── */
function Card({ children, className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <GradientCard
      className={`rounded-2xl border border-white/30 bg-neutral-900/40 p-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ${className}`}
      {...rest}
    >
      {children}
    </GradientCard>
  )
}

/* ─── Section heading ────────────────────────────────── */
function SectionHeading({ emoji, label }: { emoji: string; label: string }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold">
      <span>{emoji}</span>
      {label}
    </h2>
  )
}

/* ─── Single tech pill ───────────────────────────────── */
function TechPill({ item }: { item: TechItem }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:scale-105">
      {item.icon ? (
        <img
          src={iconUrl(item.icon)}
          alt={item.label}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          onError={(e) => {
            const img = e.currentTarget
            img.style.display = 'none'
            const fallback = img.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'flex'
          }}
        />
      ) : null}
      <span
        className="h-8 w-8 items-center justify-center rounded-md text-xs font-bold text-white"
        style={{
          display: item.icon ? 'none' : 'flex',
          backgroundColor: item.color ?? '#374151',
        }}
      >
        {item.label.slice(0, 2).toUpperCase()}
      </span>
      <span className="text-xs font-medium text-neutral-300 leading-tight">{item.label}</span>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────── */
export function About() {
  return (
    <div className="container mx-auto max-w-5xl px-5 pt-32 pb-20 space-y-6">

      {/* Top row: Journey + Technical Evolution */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* My Journey */}
        <Card data-reveal className="reveal-hidden">
          <SectionHeading emoji="🚀" label="My Journey" />
          <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-sm">
            <p>
              I've always been curious about how things work, and computers were a natural fit for that.
              I started tinkering on my own before college and never really stopped.
            </p>
            <p>
              I studied at Epitech Nantes from 2020 to 2025, where I got a Master in Expert Computer Science.
              It's a project-based school, which means you learn by doing, often under pressure, often in a team.
              That environment taught me a lot about ownership and getting things done.
            </p>
            <p>
              In 2023 I spent a year at Soongsil University in Seoul, studying Mobile Networks and Machine Learning
              and picking up some Korean on the side. It was a great experience, both technically and personally.
              During all of this I also co-built TidyBee, a carbon footprint monitoring tool for storage spaces,
              over about 30 months. We made it to the finals of Epitech Experience 2025.
            </p>
          </div>
        </Card>

        {/* Technical Evolution */}
        <Card data-reveal className="reveal-hidden">
          <SectionHeading emoji="⚡" label="Technical Evolution" />
          <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-sm">
            <p>
              Epitech started me with the fundamentals: C, memory, Unix systems, algorithms.
              It was tough but it gave me a solid base that made everything else easier to pick up.
            </p>
            <p>
              From there I moved into web development. I worked with Vue.js and TypeScript at Sopra Steria in 2021,
              then picked up GraphQL and PHP at Matos in 2023.
              My most recent position was at DJMA, where I spent 12 months rebuilding a backend API ecosystem
              for web, mobile and back-office platforms. We moved the whole thing away from WordPress
              to a modern centralized stack using React, JavaScript, GraphQL and proper CI/CD pipelines.
            </p>
            <p>
              TidyBee pushed me into different territory: microservices architecture, Python for ML features,
              and managing a product roadmap over two and a half years. That was probably where I grew the most.
            </p>
          </div>
        </Card>
      </div>

      {/* My Goals, full width */}
      <Card data-reveal className="reveal-hidden">
        <SectionHeading emoji="🎯" label="My Goals" />
        <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-sm max-w-3xl">
          <p>
            I just graduated and I'm available right now. I'm looking for a fullstack position, ideally in Paris,
            but I'm open to remote as well.
          </p>
          <p>
            I want to work in a team that takes the craft seriously: readable code, good architecture,
            things built to last. I'm not looking for a place to coast, I want to keep getting better
            and actually ship things that people use.
          </p>
          <p>
            Down the line I'd like to build something of my own. But first I want to find the right team,
            go deep, and do good work.
          </p>
        </div>
      </Card>

      {/* Technologies */}
      <div data-reveal className="reveal-hidden">
        <Card className="hover:scale-[1.005]!">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <span>🛠️</span>
            Technologies I'm familiar with
          </h2>

          <div className="space-y-8">
            {TECH_SECTIONS.map((section) => (
              <div key={section.heading}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  {section.emoji} {section.heading}
                </h3>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                  {section.items.map((item) => (
                    <TechPill key={item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

    </div>
  )
}
