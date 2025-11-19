import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with Spline cover */}
      <Navbar />
      <Hero />

      {/* Body sections */}
      <main className="relative z-10">
        <Features />
        <CTA />

        {/* Footer */}
        <footer id="contact" className="py-12 text-center text-blue-100/70">
          <p>Built with a modern, minimalist aesthetic.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
