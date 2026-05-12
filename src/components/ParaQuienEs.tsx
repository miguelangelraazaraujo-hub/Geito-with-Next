const perfiles = [
  'Empresa B2B de 10 a 50 personas facturando entre 1M y 10M €',
  'Procesos repetibles que ahora se hacen "a mano" o en Excel',
  'Has invertido antes en herramientas que nadie acabó usando',
  'Tu equipo dedica 10+ horas a la semana a tareas mecánicas',
  'Quieres crecer sin duplicar la plantilla en la misma proporción',
  'Estás dispuesto a invertir entre 9.000 € y 25.000 € en los próximos 90 días',
]

const noPerfiles = [
  'Buscas un chatbot para tu web. Hay SaaS por 30 €/mes que lo hacen',
  'Quieres "implantar IA" antes de ordenar la operativa. No trabajamos así',
  'Esperas un PDF de 80 páginas y un consultor que desaparezca. Eso lo hace Big4',
  'Tu empresa factura menos de 500.000 € al año. Aún necesitas vender más, no automatizar',
]

import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

export default function ParaQuienEs() {
  return (
    <section className="bg-[#0f1a0a] py-24 lg:py-32" id="para-quien">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <FadeIn direction="left">
            <span className="text-[#7fc244] text-xs tracking-[0.2em] uppercase font-medium">
              Para quién es
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-10 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Geito es para ti si...
            </h2>
            <FadeInStagger className="space-y-4" stagger={0.08}>
              {perfiles.map((p, i) => (
                <FadeInItem key={i}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#639922]/20 border border-[#639922]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#7fc244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    </div>
                    <p className="text-white/80 leading-relaxed">{p}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right" delay={0.15}>
            <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-medium">
              No es para ti si...
            </span>
            <h2
              className="text-2xl font-bold text-white/40 mt-4 mb-10 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Seamos honestos
            </h2>
            <div className="space-y-4">
              {noPerfiles.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="3" x2="9" y2="9" />
                      <line x1="9" y1="3" x2="3" y2="9" />
                    </svg>
                  </div>
                  <p className="text-white/40 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            {/* CTA inside */}
            <div className="mt-16 p-8 border border-[#7fc244]/20 rounded-2xl bg-[#7fc244]/5">
              <p className="text-white/80 mb-6 leading-relaxed">
                ¿En la frontera? Una llamada de 30 minutos lo aclara. Si no encajas, te
                lo decimos en directo y sales con un mini-roadmap. No perdemos tu tiempo.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#7fc244] text-sm font-semibold hover:gap-4 transition-all"
              >
                Reservar diagnóstico (gratis, 30 min)
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
