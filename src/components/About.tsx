import { useEffect, useRef } from 'react'
import { Flame, Leaf, Users, Star } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Ingredientes Frescos',
    desc: 'Seleccionamos los mejores ingredientes locales e importados cada día para garantizar sabores auténticos.',
  },
  {
    icon: Flame,
    title: 'Cocina Abierta',
    desc: 'Observa a nuestros chefs crear obras de arte culinarias en nuestra cocina abierta de concepto premium.',
  },
  {
    icon: Users,
    title: 'Interior & Terraza',
    desc: 'Espacios elegantes interiores y terraza exterior, perfectos para cenas íntimas o reuniones especiales.',
  },
  {
    icon: Star,
    title: 'Ambiente Sofisticado',
    desc: 'Un entorno diseñado para que cada visita sea una experiencia memorable e irrepetible.',
  },
]

const stats = [
  { value: '5+', label: 'Años de excelencia' },
  { value: '4.8', label: 'Calificación promedio' },
  { value: '200+', label: 'Reseñas cinco estrellas' },
  { value: '50+', label: 'Platos en el menú' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-28 lg:py-36 bg-[hsl(20,40%,4%)] relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(38,48%,61%), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">Nuestra historia</p>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[hsl(40,30%,92%)] leading-tight mb-6">
            Sobre{' '}
            <span className="text-gold-gradient italic">Central</span>
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-sans text-[hsl(40,15%,65%)] text-lg leading-relaxed max-w-2xl mx-auto">
            Central Gastronómica es más que un restaurante — es una experiencia culinaria premium en el corazón de Santo Domingo. Combinamos ingredientes frescos, técnica impecable y un ambiente sofisticado para crear momentos que perduran.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="reveal group text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[hsl(38,48%,61%)]/30 mb-5 group-hover:border-[hsl(38,48%,61%)]/60 group-hover:bg-[hsl(38,48%,61%)]/5 transition-all duration-300">
                  <Icon size={22} className="text-[hsl(38,48%,61%)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[hsl(40,25%,85%)] mb-3">{f.title}</h3>
                <p className="font-sans text-sm text-[hsl(40,12%,55%)] leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[hsl(35,20%,18%)] rounded-lg overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal py-10 px-8 text-center ${
                i < stats.length - 1 ? 'border-r border-[hsl(35,20%,18%)]' : ''
              } bg-[hsl(22,30%,6%)] hover:bg-[hsl(22,30%,9%)] transition-colors duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-serif text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">{s.value}</div>
              <div className="font-sans text-xs text-[hsl(40,12%,55%)] tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
