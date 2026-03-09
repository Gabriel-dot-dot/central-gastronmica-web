import { useEffect, useRef } from 'react'

const reviews = [
  {
    name: 'Hugo Monteleone',
    initials: 'HM',
    rating: 5,
    text: 'Gorgeous place, amazing food. The skirt steak and Asian salmon were divine. Great wine and service.',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Oscar C. Albor',
    initials: 'OA',
    rating: 5,
    text: 'Great atmosphere with indoor and outdoor seating. The ceviche, fries and drinks were highlights.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Anna Garant',
    initials: 'AG',
    rating: 5,
    text: 'Beautiful restaurant and everything I\'ve tried has been absolutely delicious. Can\'t recommend it enough!',
    date: 'Hace 3 semanas',
  },
  {
    name: 'Belkys Díaz',
    initials: 'BD',
    rating: 5,
    text: 'Great place for dinner with groups, nice music and fun atmosphere. An amazing experience every time.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Matt Mason',
    initials: 'MM',
    rating: 5,
    text: 'One of the better restaurants in Santo Domingo with stunning dining spaces. Highly recommended!',
    date: 'Hace 2 meses',
  },
  {
    name: 'María Rodríguez',
    initials: 'MR',
    rating: 5,
    text: 'El ambiente es increíble, la comida excepcional y el servicio impecable. Sin duda el mejor restaurante de la ciudad.',
    date: 'Hace 3 días',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="hsl(38,48%,61%)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
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
    <section id="resenas" ref={sectionRef} className="py-28 lg:py-36 bg-[hsl(20,40%,4%)] relative overflow-hidden">
      {/* Subtle bg accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(38,48%,61%), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">Lo que dicen</p>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[hsl(40,30%,92%)] leading-tight mb-6">
            Nuestros{' '}
            <span className="text-gold-gradient italic">Clientes</span>
          </h2>
          <div className="gold-divider mx-auto mb-8" />

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-[hsl(22,30%,8%)] border border-[hsl(35,20%,15%)] rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="hsl(38,48%,61%)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="font-serif text-[hsl(38,48%,61%)] font-semibold text-lg">4.8</span>
            <span className="font-sans text-[hsl(40,12%,55%)] text-sm">en Google Reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="review-card reveal p-7 rounded-lg"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Reviewer info */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(38,48%,55%)] to-[hsl(35,42%,40%)] flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-[hsl(20,40%,4%)] text-sm">{review.initials}</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[hsl(40,25%,85%)] text-sm">{review.name}</p>
                    <p className="font-sans text-[hsl(40,12%,50%)] text-xs mt-0.5">{review.date}</p>
                  </div>
                </div>
                <StarRating count={review.rating} />
              </div>

              {/* Quote */}
              <svg className="w-6 h-6 text-[hsl(38,48%,61%)]/30 mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <p className="font-sans text-[hsl(40,15%,65%)] text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <div className="text-center mt-14 reveal">
          <a
            href="https://g.co/kgs/centralgastronomica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[hsl(40,12%,55%)] hover:text-[hsl(38,48%,61%)] transition-colors text-sm font-sans"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}
