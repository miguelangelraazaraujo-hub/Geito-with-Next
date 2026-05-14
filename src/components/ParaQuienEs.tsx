import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

const perfiles = [
  'Empresa B2B con equipo de entre 5 y 150 personas',
  'Tienes procesos repetibles que se hacen "a mano", en Excel o de cabeza',
  'Quieres crecer sin aumentar la plantilla en la misma proporción',
  'Tu equipo dedica horas cada semana a tareas que deberían estar automatizadas',
  'Has probado herramientas antes y no terminaron de encajar',
  'Buscas un resultado concreto, no un informe ni una hoja de ruta sin ejecución',
]

const noPerfiles = [
  'Buscas un chatbot para tu web. Hay SaaS por 30 €/mes que lo hacen',
  'Quieres "implantar IA" antes de ordenar la operativa. No trabajamos así',
  'Esperas un PDF de 80 páginas y un consultor que desaparezca. Eso lo hace Big4',
  'Tu negocio está en fase de tracción inicial. Ahora necesitas clientes, no automatización',
]

export default function ParaQuienEs() {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-24" id="para-quien">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <FadeIn direction="left">
            <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
              Para quién es
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1e293b] mt-4 mb-10 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Geito es para ti si...
            </h2>
            <FadeInStagger className="space-y-4" stagger={0.08}>
              {perfiles.map((p, i) => (
                <FadeInItem key={i}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c7d2fe]/15 border border-[#c7d2fe]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{p}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right" delay={0.15}>
            <span className="text-slate-400 text-xs tracking-[0.2em] uppercase font-medium">
              No es para ti si...
            </span>
            <h2
              className="text-2xl font-bold text-slate-400 mt-4 mb-10 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Seamos honestos
            </h2>
            <div className="space-y-4">
              {noPerfiles.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="3" x2="9" y2="9" />
                      <line x1="9" y1="3" x2="3" y2="9" />
                    </svg>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            {/* CTA inside */}
            <div className="mt-16 p-8 border border-[#c7d2fe]/25 rounded-2xl bg-[#eef2ff]">
              <p className="text-slate-600 mb-6 leading-relaxed">
                ¿En la frontera? Una llamada de 30 minutos lo aclara. Si no encajas, te
                lo decimos en directo y sales con un mini-roadmap. No perdemos tu tiempo.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#4f46e5] text-sm font-semibold hover:gap-4 transition-all"
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
