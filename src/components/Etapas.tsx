'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const INTERVAL_MS = 11000

const etapas = [
  {
    numero: '01',
    titulo: 'Procesos',
    tagline: '2-3 semanas',
    descripcion:
      'Mapeamos cada flujo crítico de tu empresa. Salimos con la lista de los 5-15 procesos donde la automatización paga su coste en menos de 90 días. En el último cliente identificamos 23 oportunidades en esta fase.',
    resultado: 'Mapa de procesos firmado y priorizado por ROI',
    color: 'bg-[#0f172a]',
    accent: 'text-[#c7d2fe]',
    border: 'border-[#c7d2fe]',
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
    tagline: '2-4 semanas',
    descripcion:
      'Implementamos las herramientas mínimas necesarias para que tu equipo trabaje sin papel ni Excel-ping-pong. Sin sobredimensionar: tu pyme no necesita SAP. Solo lo que mueve la aguja en tu sector.',
    resultado: 'Stack digital operativo y equipo formado',
    color: 'bg-[#eef2ff]',
    accent: 'text-[#4f46e5]',
    border: 'border-[#4f46e5]',
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
    tagline: '3-5 semanas',
    descripcion:
      'Conectamos tus sistemas y dejamos en producción al menos 3 flujos automatizados que liberan 8-15 horas/semana al equipo. Garantizado en contrato. Tu gente deja de copiar datos y se dedica a lo que aporta valor real.',
    resultado: 'Mínimo 3 automatizaciones en producción y midiendo impacto',
    color: 'bg-[#0f172a]',
    accent: 'text-[#c7d2fe]',
    border: 'border-[#c7d2fe]',
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
    tagline: '2-4 semanas',
    descripcion:
      'Solo cuando los datos están limpios y los procesos definidos, la IA tiene sentido. La aplicamos donde mueve la aguja: análisis predictivo, generación de contenido a escala, asistentes internos, soporte a decisiones. Sin IA decorativa.',
    resultado: 'IA integrada en al menos 2 procesos críticos del negocio',
    color: 'bg-[#eef2ff]',
    accent: 'text-[#4f46e5]',
    border: 'border-[#4f46e5]',
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiva((prev) => (prev + 1) % etapas.length)
    }, INTERVAL_MS)
  }, [])

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startInterval])

  const handleClick = (i: number) => {
    setActiva(i)
    startInterval()
  }

  return (
    <section className="bg-[#f8fafc] py-24 lg:py-32" id="metodologia">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
            Nuestra metodología
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1e293b] mt-4 mb-6 leading-tight"
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
                onClick={() => handleClick(i)}
                className={`relative w-full text-left p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${activa === i
                  ? 'bg-[#254ba1] border-[#c7d2fe] shadow-lg shadow-[#4f46e5]/10'
                  : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
              >
                {/* Progress bar */}
                {activa === i && (
                  <motion.div
                    key={activa}
                    className="absolute bottom-0 left-0 h-0.5 bg-[#c7d2fe]/50 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
                    style={{ width: '100%' }}
                  />
                )}
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${activa === i ? 'text-[#c7d2fe]' : 'text-gray-300'
                      }`}
                  >
                    {e.numero}
                  </span>
                  <span
                    className={`text-lg font-semibold ${activa === i ? 'text-white' : 'text-[#1e293b]'
                      }`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {e.titulo}
                  </span>
                  <span
                    className={`ml-auto text-sm ${activa === i ? 'text-[#c7d2fe]/70' : 'text-gray-400'
                      }`}
                  >
                    {e.tagline}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="bg-[#254ba1] rounded-2xl p-8 lg:p-10 border border-[#c7d2fe]/20 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activa}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="text-[#c7d2fe] mb-6">{etapa.icon}</div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {etapa.titulo}
                </h3>
                <p className="text-[#c7d2fe] text-sm mb-6">{etapa.tagline}</p>
                <p className="text-white/70 leading-relaxed mb-8">{etapa.descripcion}</p>
                <div className="flex items-start gap-3 bg-[#818CF8]/50 rounded-xl p-4 border border-[#c7d2fe]/20">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <polyline points="3 9 7 13 15 5" />
                  </svg>
                  <span className="text-[#c7d2fe] text-sm font-medium">{etapa.resultado}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
