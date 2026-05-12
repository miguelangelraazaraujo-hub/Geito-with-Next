const fases = [
  {
    numero: '1',
    titulo: 'Diagnóstico',
    duracion: '1 semana',
    descripcion:
      'Analizamos tu empresa: procesos actuales, herramientas, equipo y objetivos. Sin compromiso, sin coste.',
  },
  {
    numero: '2',
    titulo: 'Propuesta',
    duracion: '3-5 días',
    descripcion:
      'Diseñamos un plan de transformación personalizado, con etapas, plazos y presupuesto detallado.',
  },
  {
    numero: '3',
    titulo: 'Implementación',
    duracion: 'Según alcance',
    descripcion:
      'Ejecutamos cada etapa con tu equipo, asegurándonos de que todo queda bien documentado y adoptado.',
  },
  {
    numero: '4',
    titulo: 'Seguimiento',
    duracion: 'Continuo',
    descripcion:
      'No desaparecemos. Monitorizamos, ajustamos y seguimos mejorando los sistemas contigo.',
  },
]

import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

export default function ComoTrabajamos() {
  return (
    <section className="bg-[#f5f5f0] py-24 lg:py-32" id="como-trabajamos">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-16">
          <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
            Cómo trabajamos
          </span>

          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Un proceso transparente,
            <br />
            de principio a fin
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-[27px] top-10 bottom-10 w-px bg-[#639922]/20" />

          <FadeInStagger className="space-y-8" stagger={0.12}>
            {fases.map((fase, i) => (
              <FadeInItem key={i}>
                <div className="flex gap-8 items-start">
                  {/* Step circle */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-[#0f1a0a] border-2 border-[#639922]/40 flex items-center justify-center z-10">
                    <span
                      className="text-[#7fc244] font-bold text-lg"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {fase.numero}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#639922]/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="text-xl font-bold text-[#0f1a0a]"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {fase.titulo}
                      </h3>
                      <span className="text-xs text-[#639922] bg-[#f8fdf4] border border-[#639922]/20 px-3 py-1 rounded-full font-medium">
                        {fase.duracion}
                      </span>
                    </div>
                    <p className="text-gray-500 leading-relaxed">{fase.descripcion}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
