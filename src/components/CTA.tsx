import { useEffect, useRef } from 'react'

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(24,35%,8%) 0%, hsl(22,25%,6%) 50%, hsl(20,40%,4%) 100%)',
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 0%, hsl(38,48%,61%), transparent)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(38,48%,61%), transparent)' }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(38,48%,61%)]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(38,48%,61%)]/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <p className="section-label mb-6">Una mesa te espera</p>
        </div>

        <div className="reveal">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[hsl(40,30%,92%)] leading-tight mb-6">
            Reserva tu mesa y vive{' '}
            <span className="text-gold-gradient italic">la experiencia</span>
            {' '}Central Gastronómica
          </h2>
        </div>

        <div className="reveal">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-[hsl(38,48%,61%)]/40" />
            <div className="w-1 h-1 rounded-full bg-[hsl(38,48%,61%)]" />
            <div className="h-px w-12 bg-[hsl(38,48%,61%)]/40" />
          </div>
        </div>

        <div className="reveal">
          <p className="font-sans text-[hsl(40,15%,60%)] text-lg leading-relaxed mb-12">
            Momentos únicos, sabores memorables. Te esperamos en el corazón de Santo Domingo.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/18091234567?text=Hola!%20Me%20gustaría%20hacer%20una%20reserva%20en%20Central%20Gastronómica."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 rounded text-center"
          >
            Reservar ahora
          </a>
          <a
            href="tel:+18091234567"
            className="btn-outline-gold px-10 py-4 rounded text-center"
          >
            Llamar al restaurante
          </a>
        </div>
      </div>
    </section>
  )
}
