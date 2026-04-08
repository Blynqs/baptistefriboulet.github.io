import { GradientCard } from '../components/GradientCard'

/* ─── Placeholder data ───────────────────────────────── */
interface Project {
  title: string
  date: string
  description: string
  tags: string[]
  borderColor: string
}

const FEATURED: Project[] = [
  {
    title: 'Project Alpha',
    date: 'Coming soon',
    description:
      'A placeholder for an upcoming featured project. Details will be added once the project is ready to share.',
    tags: ['React', 'TypeScript', 'Node.js'],
    borderColor: 'border-amber-500/50',
  },
  {
    title: 'Project Beta',
    date: 'Coming soon',
    description:
      'Another upcoming project — placeholder content for now.',
    tags: ['Python', 'PostgreSQL', 'Docker'],
    borderColor: 'border-purple-500/50',
  },
  {
    title: 'Project Gamma',
    date: 'Coming soon',
    description: 'Third featured project placeholder.',
    tags: ['C++', 'CMake'],
    borderColor: 'border-cyan-500/50',
  },
  {
    title: 'Project Delta',
    date: 'Coming soon',
    description: 'Fourth featured project placeholder.',
    tags: ['React Native', 'Expo'],
    borderColor: 'border-emerald-500/50',
  },
]

const MINOR_TITLES = [
  'Side Project 1',
  'Side Project 2',
  'Side Project 3',
  'Side Project 4',
  'Side Project 5',
  'Side Project 6',
]

/* ─── Card components ────────────────────────────────── */
function FeaturedCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <GradientCard
      className={`flex flex-col rounded-2xl border ${project.borderColor} bg-neutral-900/40 p-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ${large ? 'h-full' : ''}`}
    >
      <p className="mb-2 text-xs font-medium text-neutral-400">{project.date}</p>
      <h3 className={`font-bold text-white mb-3 ${large ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>
      <p className="text-sm text-neutral-300 font-light leading-relaxed flex-1">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </GradientCard>
  )
}

function MinorCard({ title }: { title: string }) {
  return (
    <GradientCard className="rounded-xl border border-white/20 bg-neutral-900/40 p-5 shadow-[0_0_15px_rgba(255,255,255,0.07)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/40">
      <p className="text-xs font-medium text-neutral-400 mb-1">Placeholder</p>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="mt-2 text-xs text-neutral-400 font-light">Details coming soon.</p>
    </GradientCard>
  )
}

/* ─── Page ───────────────────────────────────────────── */
export function Projects() {
  const [main, ...rest] = FEATURED

  return (
    <div className="container mx-auto max-w-6xl px-5 pt-32 pb-20">
      {/* Featured — asymmetric grid */}
      <div data-reveal className="reveal-hidden grid gap-6 lg:grid-cols-2">
        {/* Large card */}
        <FeaturedCard project={main} large />

        {/* Three smaller cards stacked */}
        <div className="flex flex-col gap-6">
          {rest.map((p) => (
            <FeaturedCard key={p.title} project={p} />
          ))}
        </div>
      </div>

      {/* Minor projects — masonry-style */}
      <div data-reveal className="reveal-hidden mt-12">
        <h2 className="mb-6 text-xl font-semibold text-neutral-300">
          Other projects
        </h2>
        <div className="columns-1 gap-5 sm:columns-2 md:columns-3">
          {MINOR_TITLES.map((title) => (
            <div key={title} className="mb-5 break-inside-avoid">
              <MinorCard title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
