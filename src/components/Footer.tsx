import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21l3.94-.948A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[hsl(20,40%,3%)] border-t border-[hsl(35,20%,12%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-serif text-2xl font-bold text-gold-gradient block">Central</span>
              <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[hsl(38,30%,45%)]">Gastronómica</span>
            </div>
            <p className="font-sans text-sm text-[hsl(40,12%,50%)] leading-relaxed mb-6">
              Una experiencia culinaria premium en el corazón de Santo Domingo. Ingredientes frescos, ambiente sofisticado y cocina de excelencia.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/centralgastronomica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[hsl(35,20%,20%)] rounded-lg flex items-center justify-center text-[hsl(40,15%,55%)] hover:text-[hsl(38,48%,61%)] hover:border-[hsl(38,48%,61%)]/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/18091234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[hsl(35,20%,20%)] rounded-lg flex items-center justify-center text-[hsl(40,15%,55%)] hover:text-[hsl(38,48%,61%)] hover:border-[hsl(38,48%,61%)]/50 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.facebook.com/centralgastronomica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[hsl(35,20%,20%)] rounded-lg flex items-center justify-center text-[hsl(40,15%,55%)] hover:text-[hsl(38,48%,61%)] hover:border-[hsl(38,48%,61%)]/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[hsl(38,30%,45%)] mb-6 font-medium">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {['Inicio', 'Nosotros', 'Menú', 'Reseñas', 'Ubicación'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace('é', 'e').replace('ó', 'o').replace('ú', 'u').replace('ñ', 'n')}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const href = `#${link.toLowerCase()
                        .replace('é', 'e').replace('ó', 'o').replace('ú', 'u').replace('ñ', 'n')
                        .replace('inicio', 'inicio')
                        .replace('nosotros', 'nosotros')
                        .replace('menu', 'menu')
                        .replace('resenas', 'resenas')
                        .replace('ubicacion', 'ubicacion')}`
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="font-sans text-sm text-[hsl(40,12%,55%)] hover:text-[hsl(38,48%,61%)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[hsl(38,30%,45%)] mb-6 font-medium">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://maps.google.com/?q=Av+Tiradentes+11+Santo+Domingo" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group">
                  <MapPin size={14} className="text-[hsl(38,48%,61%)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-sans text-sm text-[hsl(40,12%,55%)] group-hover:text-[hsl(40,20%,70%)] transition-colors leading-relaxed">
                    Av. Tiradentes No. 11,<br />Santo Domingo, R.D.
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+18091234567" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-[hsl(38,48%,61%)] flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-sm text-[hsl(40,12%,55%)] group-hover:text-[hsl(40,20%,70%)] transition-colors">
                    +1 (809) 123-4567
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:reservas@central.com.do" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-[hsl(38,48%,61%)] flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-sm text-[hsl(40,12%,55%)] group-hover:text-[hsl(40,20%,70%)] transition-colors">
                    reservas@central.com.do
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[hsl(38,30%,45%)] mb-6 font-medium">Horarios</h4>
            <div className="flex items-start gap-3">
              <Clock size={14} className="text-[hsl(38,48%,61%)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                {[
                  { day: 'Lunes – Miércoles', hours: '12:00 PM – 10:00 PM' },
                  { day: 'Jueves – Viernes', hours: '12:00 PM – 11:00 PM' },
                  { day: 'Sábado', hours: '12:00 PM – 12:00 AM' },
                  { day: 'Domingo', hours: '12:00 PM – 10:00 PM' },
                ].map((h) => (
                  <div key={h.day}>
                    <p className="font-sans text-xs text-[hsl(40,15%,60%)] font-medium">{h.day}</p>
                    <p className="font-sans text-xs text-[hsl(40,12%,48%)]">{h.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(35,20%,12%)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[hsl(40,10%,40%)] text-center sm:text-left">
            © {new Date().getFullYear()} Central Gastronómica. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-[hsl(40,10%,35%)]">
            Santo Domingo, República Dominicana
          </p>
        </div>
      </div>
    </footer>
  )
}
