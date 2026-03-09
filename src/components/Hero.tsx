import { useEffect, useRef } from 'react'

// SVG icons for social
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21l3.94-.948A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.32a8.32 8.32 0 01-4.24-1.155l-.303-.18-3.154.759.793-2.938-.198-.314A8.32 8.32 0 013.68 12C3.68 7.4 7.4 3.68 12 3.68c4.6 0 8.32 3.72 8.32 8.32 0 4.6-3.72 8.32-8.32 8.32z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1680946496238-5272d3c407fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGFyayUyMGx1eHVyeSUyMGRpbmluZ3xlbnwwfDB8fHwxNzczMDc2NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-[hsl(20,40%,4%)]/40" />

      {/* Social sidebar — desktop */}
      <div className="absolute left-8 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col items-center gap-5 z-10">
        <div className="w-px h-16 bg-[hsl(38,48%,61%)]/30" />
        <a
          href="https://www.instagram.com/centralgastronomica"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-[hsl(40,25%,65%)] hover:text-[hsl(38,48%,61%)]"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://wa.me/18091234567"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-[hsl(40,25%,65%)] hover:text-[hsl(38,48%,61%)]"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a
          href="https://www.facebook.com/centralgastronomica"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-[hsl(40,25%,65%)] hover:text-[hsl(38,48%,61%)]"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <div className="w-px h-16 bg-[hsl(38,48%,61%)]/30" />
      </div>

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <p className="section-label mb-6 tracking-[0.35em]">Santo Domingo · República Dominicana</p>

        {/* Title */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-[hsl(40,30%,92%)] leading-[1.08] mb-6">
          Central{' '}
          <span className="text-gold-gradient italic">Gastronómica</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[hsl(38,48%,61%)]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(38,48%,61%)]" />
          <div className="h-px w-16 bg-[hsl(38,48%,61%)]/50" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-lg lg:text-xl text-[hsl(40,20%,70%)] leading-relaxed max-w-xl mx-auto mb-12">
          Una experiencia culinaria única en Santo Domingo
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-gold px-8 py-4 rounded w-full sm:w-auto text-center"
          >
            Ver Menú
          </a>
          <a
            href="https://wa.me/18091234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold px-8 py-4 rounded w-full sm:w-auto text-center"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Mobile socials */}
        <div className="flex items-center justify-center gap-6 mt-10 lg:hidden">
          <a href="https://www.instagram.com/centralgastronomica" target="_blank" rel="noopener noreferrer"
            className="social-icon text-[hsl(40,25%,65%)]" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://wa.me/18091234567" target="_blank" rel="noopener noreferrer"
            className="social-icon text-[hsl(40,25%,65%)]" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href="https://www.facebook.com/centralgastronomica" target="_blank" rel="noopener noreferrer"
            className="social-icon text-[hsl(40,25%,65%)]" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="section-label text-[0.6rem] tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[hsl(38,48%,61%)] to-transparent" />
      </div>
    </section>
  )
}
