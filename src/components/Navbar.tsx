import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[hsl(20,40%,4%)]/95 backdrop-blur-md border-b border-[hsl(35,20%,18%)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNav('#inicio') }}
            className="flex flex-col items-start group"
          >
            <span className="font-serif text-xl font-bold tracking-wide text-gold-gradient">
              Central
            </span>
            <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[hsl(38,30%,55%)] -mt-0.5">
              Gastronómica
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="nav-link text-[hsl(40,25%,75%)] hover:text-[hsl(38,48%,61%)] text-sm font-sans font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/18091234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex btn-gold px-5 py-2.5 rounded text-xs"
            >
              Reservar Mesa
            </a>
            <button
              className="lg:hidden text-[hsl(40,25%,75%)] hover:text-[hsl(38,48%,61%)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[hsl(20,40%,4%)]/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-[hsl(40,25%,75%)] hover:text-[hsl(38,48%,61%)]"
          onClick={() => setMobileOpen(false)}
        >
          <X size={26} />
        </button>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            className="font-serif text-3xl text-[hsl(40,30%,85%)] hover:text-[hsl(38,48%,61%)] transition-colors"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/18091234567"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 btn-gold px-8 py-3 rounded"
        >
          Reservar Mesa
        </a>
      </div>
    </>
  )
}
