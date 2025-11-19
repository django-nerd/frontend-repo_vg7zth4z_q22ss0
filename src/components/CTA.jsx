export default function CTA() {
  return (
    <section id="get-started" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build something?</h2>
          <p className="mt-3 text-blue-100/80">
            Open the chat, describe your idea, and let the system generate a working app with a modern, minimalist interface.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">Get started</a>
            <a href="/test" className="px-5 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm transition-colors">Run system test</a>
          </div>
        </div>
      </div>
    </section>
  )
}
