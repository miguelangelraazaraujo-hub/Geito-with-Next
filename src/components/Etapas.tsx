'use client'

import { useState } from 'react'

const etapas = [
  {
    numero: '01',
    titulo: 'Procesos',
    tagline: 'La base de todo',
    descripcion:
      'Antes de digitalizar nada, hay que entender cómo trabaja tu empresa. Mapeamos tus procesos clave, identificamos ineficiencias y establecemos una base clara sobre la que construir.',
    resultado: 'Mapa de procesos documentado y priorizado',
    color: 'bg-[#0f1a0a]',
    accent: 'text-[#7fc244]',
    border: 'border-[#7fc244]',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="8" height="8" rx="1" />
        <rect x="16" y="4" width="8" height="8" rx="1" />
        <rect x="4" y="16" width="8" height="8" rx="1" />
        <rect x="16" y="16" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Digitalización',
    tagline: 'Del papel al sistema',
    descripcion:
      'Trasladamos esos procesos a herramientas digitales adecuadas para tu sector y tamaño. Sin sobredimensionar, sin complejidad innecesaria. Solo lo que tu empresa realmente necesita.',
    resultado: 'Herramientas digitales operativas y equipo formado',
    color: 'bg-[#f8fdf4]',
    accent: 'text-[#3B6D11]',
    border: 'border-[#639922]',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="22" height="16" rx="2" />
        <path d="M10 22v2M18 22v2M7 26h14" />
        <path d="M8 12h12M8 16h8" />
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Automatización',
    tagline: 'Que trabaje solo',
    descripcion:
      'Con n8n como núcleo, conectamos tus herramientas y automatizamos los flujos repetitivos. Tu equipo deja de hacer tareas mecánicas y se enfoca en lo que aporta valor real.',
    resultado: 'Flujos automatizados con n8n en producción',
    color: 'bg-[#0f1a0a]',
    accent: 'text-[#7fc244]',
    border: 'border-[#7fc244]',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" />
        <circle cx="14" cy="14" r="4" />
        <path d="M7.05 7.05l2.83 2.83M18.12 18.12l2.83 2.83M7.05 20.95l2.83-2.83M18.12 9.88l2.83-2.83" />
      </svg>
    ),
  },
  {
    numero: '04',
    titulo: 'Inteligencia Artificial',
    tagline: 'Inteligencia sobre la base',
    descripcion:
      'Con procesos ordenados, digitalizados y automatizados, la IA tiene sentido. La incorporamos donde genera impacto real: análisis predictivo, generación de contenido, asistentes internos o toma de decisiones.',
    resultado: 'IA integrada en los procesos de negocio',
    color: 'bg-[#f8fdf4]',
    accent: 'text-[#3B6D11]',
    border: 'border-[#639922]',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V13h-4v-2.5A4 4 0 0 1 14 3z" />
        <path d="M10 13H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-3" />
        <circle cx="10" cy="18" r="1" />
        <circle cx="14" cy="18" r="1" />
        <circle cx="18" cy="18" r="1" />
      </svg>
    ),
  },
]

export default function Etapas() {
  const [activa, setActiva] = useState(0)
  const etapa = etapas[activa]

  return (
    <section className="bg-[#f5f5f0] py-24 lg:py-32" id="metodologia">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
            Nuestra metodología
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Las 4 etapas de
            <br />
            la transformación
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Un método secuencial y sin atajos. Cada etapa construye sobre la anterior.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Selector */}
          <div className="space-y-3">
            {etapas.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiva(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activa === i
                    ? 'bg-[#0f1a0a] border-[#7fc244] shadow-lg shadow-[#639922]/10'
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      activa === i ? 'text-[#7fc244]' : 'text-gray-300'
                    }`}
                  >
                    {e.numero}
                  </span>
                  <span
                    className={`text-lg font-semibold ${
                      activa === i ? 'text-white' : 'text-[#0f1a0a]'
                    }`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {e.titulo}
                  </span>
                  <span
                    className={`ml-auto text-sm ${
                      activa === i ? 'text-[#7fc244]/70' : 'text-gray-400'
                    }`}
                  >
                    {e.tagline}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="bg-[#0f1a0a] rounded-2xl p-8 lg:p-10 border border-[#7fc244]/20 min-h-[320px]">
            <div className="text-[#7fc244] mb-6">{etapa.icon}</div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {etapa.titulo}
            </h3>
            <p className="text-[#7fc244] text-sm mb-6">{etapa.tagline}</p>
            <p className="text-white/70 leading-relaxed mb-8">{etapa.descripcion}</p>
            <div className="flex items-start gap-3 bg-[#7fc244]/10 rounded-xl p-4 border border-[#7fc244]/20">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#7fc244" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <polyline points="3 9 7 13 15 5" />
              </svg>
              <span className="text-[#7fc244] text-sm font-medium">{etapa.resultado}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
