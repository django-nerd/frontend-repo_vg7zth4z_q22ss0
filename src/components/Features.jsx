import { Sparkles, Rocket, Layers } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Natural language design',
    desc: 'Describe your vision and see it rendered instantly with tasteful defaults.',
  },
  {
    icon: Layers,
    title: 'Production-ready stack',
    desc: 'Modern React, Tailwind, and FastAPI — built to scale from the start.',
  },
  {
    icon: Rocket,
    title: 'Ship faster',
    desc: 'Iterate in minutes, not weeks. Preview changes live as you go.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur-sm hover:border-white/20 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 border border-white/20">
                <it.icon size={24} />
              </div>
              <h3 className="text-white text-lg font-semibold">{it.title}</h3>
              <p className="text-blue-100/80 mt-2 text-sm">{it.desc}</p>
              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-white/5 blur-2xl group-hover:scale-125 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
