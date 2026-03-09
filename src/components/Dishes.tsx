import { useEffect, useRef } from 'react'

const dishes = [
  {
    name: 'Skirt Steak',
    description: 'Corte de res premium con salsa de vino tinto y purée de papa trufado, acompañado de vegetales de temporada.',
    tag: 'Carnes',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233534__680d5b88.png?alt=media&token=a1923bd2-6303-4ec9-a7bb-5590305a06c6',
  },
  {
    name: 'Ceviche',
    description: 'Pescado fresco marinado en leche de tigre con ají amarillo, cebolla morada y tostones artesanales.',
    tag: 'Entradas',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233553__4ba12df8.png?alt=media&token=b04c0460-cb41-4112-bb8d-d3edcee3a0a4',
  },
  {
    name: 'Asian Salmon',
    description: 'Salmón glaseado con salsa teriyaki sobre arroz frito con vegetales asiáticos y semillas de ajonjolí.',
    tag: 'Mariscos',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233728__11a47715.png?alt=media&token=c1a0a7a0-49b1-4a55-987e-1e9ce673fd3e',
  },
  {
    name: 'Tuna Poke Bowl',
    description: 'Atún fresco con aguacate, zanahoria, edamame, pepino y arroz, aderezado con salsa ponzu.',
    tag: 'Especialidades',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233742__74bd1621.png?alt=media&token=bab7af65-31ee-44d2-9b10-ebf2bdbc78a2',
  },
  {
    name: 'Maki Roll',
    description: 'Rolls artesanales con cangrejo, aguacate y pepino, coronados con salsa spicy y panko crujiente.',
    tag: 'Sushi',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233752__17e4848d.png?alt=media&token=fe3fe100-b34d-414f-b9a1-00f0df47f5e6',
  },
  {
    name: 'Costillas Premium',
    description: 'Costillas de res cocinadas a fuego lento, servidas con acompañamientos de temporada.',
    tag: 'Carnes',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233716__d03a13ad.png?alt=media&token=58ebcc39-451f-4b39-9e10-78eecf846dfe',
  },
  {
    name: 'Risotto de Vino',
    description: 'Cremoso risotto con vino tinto, croutons dorados y microgreens frescos sobre plato hondo de cerámica.',
    tag: 'Pastas & Arroces',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233625__b191cadb.png?alt=media&token=76451056-486a-4ec8-b0c2-266a0f34c86f',
  },
  {
    name: 'Dulce de Leche Cake',
    description: 'Tarta de dulce de leche artesanal con helado de vainilla y flores comestibles.',
    tag: 'Postres',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fm99ftmTvmQhj0PQ3NgG57hJMCfA3%2FCapturadepantalla2026-03-08233803__ff6c639f.png?alt=media&token=e63a04c2-f748-4e36-be3b-b2d76a6b1c15',
  },
]

export default function Dishes() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" ref={sectionRef} className="py-28 lg:py-36 bg-[hsl(22,25%,6%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">Nuestra cocina</p>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[hsl(40,30%,92%)] leading-tight mb-6">
            Platos{' '}
            <span className="text-gold-gradient italic">Destacados</span>
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-sans text-[hsl(40,15%,60%)] text-base leading-relaxed max-w-xl mx-auto">
            Cada plato es una obra de arte creada con pasión, técnica y los mejores ingredientes seleccionados a diario.
          </p>
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className="dish-card reveal rounded-lg bg-[hsl(22,30%,8%)] border border-[hsl(35,20%,14%)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-img w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(22,30%,8%)] via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 section-label text-[0.6rem] bg-[hsl(20,40%,4%)]/80 px-3 py-1.5 rounded-full border border-[hsl(38,48%,61%)]/30 backdrop-blur-sm">
                  {dish.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-[hsl(40,25%,88%)] mb-2">{dish.name}</h3>
                <p className="font-sans text-xs text-[hsl(40,12%,52%)] leading-relaxed">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <a
            href="https://wa.me/18091234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-block px-10 py-4 rounded"
          >
            Ver Menú Completo
          </a>
        </div>
      </div>
    </section>
  )
}
