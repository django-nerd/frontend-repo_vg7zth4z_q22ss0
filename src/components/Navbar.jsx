import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '/test', label: 'System Test' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Flames" className="h-8 w-8" />
          <span className="text-white font-semibold tracking-tight">Flames Blue</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-blue-100/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors backdrop-blur-sm border border-white/15"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden text-white/90"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block w-full px-3 py-2 rounded-lg text-blue-100/90 hover:text-white hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="block text-center w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15"
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </header>
  )
}
