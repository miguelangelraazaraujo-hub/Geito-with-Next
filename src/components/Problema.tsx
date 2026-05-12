const problemas = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="M15 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
    titulo: 'Cuatro herramientas, cero verdad común',
    descripcion:
      'Cada departamento usa sus propios sistemas y nadie sabe qué dato es el bueno. Las reuniones se van en reconciliar Excel, no en decidir.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    titulo: '12-18 horas a la semana en tareas mecánicas',
    descripcion:
      'Copiar datos entre herramientas, enviar los mismos emails, rellenar informes. Son ~70.000 €/año de salario haciendo trabajo que un sistema haría en minutos.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    titulo: 'Decisiones por intuición, no por dato',
    descripcion:
      'Sin trazabilidad en tiempo real, decides con el dashboard mental del director. Funcionó hasta cierto tamaño. A partir de ahí, es ruleta.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    titulo: 'Sumas personas, no escala',
    descripcion:
      'Cada cliente nuevo cuesta lo mismo en horas-equipo que el anterior. Eso no es crecer: es sumar coste fijo al mismo ritmo que el ingreso.',
  },
]

import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

export default function Problema() {
  return (
    <section className="bg-white py-24 lg:py-32" id="problema">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-16">
          <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
            El problema
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ¿Te suena familiar?
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            La mayoría de empresas tienen los mismos cuellos de botella. No es falta de
            talento, es falta de estructura digital.
          </p>
        </FadeIn>

        {/* Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
          {problemas.map((p, i) => (
            <FadeInItem key={i}>
              <div className="group p-8 border border-gray-100 rounded-2xl hover:border-[#639922]/40 hover:bg-[#f8fdf4] transition-all duration-300 h-full">
                <div className="text-[#639922] mb-5">{p.icon}</div>
                <h3
                  className="text-xl font-semibold text-[#0f1a0a] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p.titulo}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{p.descripcion}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Closing statement */}
        <FadeIn delay={0.2} className="mt-16 border-l-4 border-[#639922] pl-8 max-w-2xl">
          <p className="text-xl text-[#0f1a0a] font-medium leading-relaxed">
            Cada trimestre que pospones esto son ~17.000 € en horas-equipo que no recuperarás.
          </p>
          <p className="text-gray-400 mt-3 text-sm">
            El método no es opcional. El momento sí.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
