import { useEffect, useRef } from 'react'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const info = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Tiradentes No. 11',
    sub: 'Santo Domingo, República Dominicana',
    href: 'https://maps.google.com/?q=Central+Gastronomica+Av+Tiradentes+Santo+Domingo',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+1 (809) 123-4567',
    sub: 'Llámanos o escríbenos',
    href: 'tel:+18091234567',
  },
  {
    icon: Clock,
    label: 'Horarios',
    value: 'Lunes – Domingo',
    sub: '12:00 PM – 11:00 PM',
    href: null,
  },
  {
    icon: Mail,
    label: 'Reservas',
    value: 'reservas@central.com.do',
    sub: 'Escríbenos para reservar',
    href: 'mailto:reservas@central.com.do',
  },
]

export default function Location() {
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
    <section id="ubicacion" ref={sectionRef} className="py-28 lg:py-36 bg-[hsl(22,25%,6%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">Encuéntranos</p>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[hsl(40,30%,92%)] leading-tight mb-6">
            Nuestra{' '}
            <span className="text-gold-gradient italic">Ubicación</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden border border-[hsl(35,20%,18%)] shadow-2xl" style={{ height: '480px' }}>
              <iframe
                title="Central Gastronómica - Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1234567890123!2d-69.9312297!3d18.4728661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561a7b68e5123%3A0x1a2b3c4d5e6f7a8b!2sAv.%20Tiradentes%2C%20Santo%20Domingo%2C%20República%20Dominicana!5e0!3m2!1ses!2sdo!4v1234567890123!5m2!1ses!2sdo"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Av+Tiradentes+11+Santo+Domingo+Republica+Dominicana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[hsl(38,48%,61%)] hover:text-[hsl(40,58%,70%)] transition-colors font-sans"
            >
              <MapPin size={14} />
              Abrir en Google Maps
            </a>
          </div>

          {/* Contact info */}
          <div className="reveal-right order-1 lg:order-2 flex flex-col gap-6">
            <div className="mb-2">
              <h3 className="font-serif text-2xl font-bold text-[hsl(40,25%,88%)] mb-3">
                Visítanos en el corazón de Santo Domingo
              </h3>
              <p className="font-sans text-[hsl(40,12%,55%)] text-sm leading-relaxed">
                Estamos ubicados en una de las avenidas más emblemáticas de Santo Domingo. Contamos con estacionamiento disponible y acceso sencillo desde cualquier punto de la ciudad.
              </p>
            </div>

            {info.map((item, i) => {
              const Icon = item.icon
              const content = (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 p-5 rounded-lg bg-[hsl(22,30%,8%)] border border-[hsl(35,20%,14%)] hover:border-[hsl(38,48%,61%)]/30 transition-all duration-300 ${
                    item.href ? 'cursor-pointer group' : ''
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-full border border-[hsl(38,48%,61%)]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[hsl(38,48%,61%)]/60 transition-colors duration-300">
                    <Icon size={16} className="text-[hsl(38,48%,61%)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-[hsl(40,12%,50%)] tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="font-sans font-semibold text-[hsl(40,25%,85%)] text-sm">{item.value}</p>
                    <p className="font-sans text-[hsl(40,12%,55%)] text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="no-underline">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
