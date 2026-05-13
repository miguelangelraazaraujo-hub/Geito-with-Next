'use client'

const resultados = [
  {
    metrica: '−60%',
    label: 'Tiempo en tareas repetitivas',
    descripcion: 'Logística B2B, 35 empleados: pedido de 14 a 5 min. ~32 h/semana liberadas.',
    compact: false,
  },
  {
    metrica: '100%',
    label: 'Trazabilidad de procesos',
    descripcion: 'Cada paso registrado y auditable. Fin de las reuniones de "¿quién hizo qué cuándo?".',
    compact: false,
  },
  {
    metrica: '×3',
    label: 'Capacidad de escala',
    descripcion: 'Sumar el siguiente cliente deja de implicar sumar persona. El sistema absorbe el volumen.',
    compact: false,
  },
  {
    metrica: '< 4 meses',
    label: 'ROI medio del proyecto',
    descripcion: 'Las primeras automatizaciones se pagan desde el mes 1. ROI total típico antes del cuarto.',
    compact: true,
  },
]

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

const logos = [
  { name: 'Grupo Alvare', weight: '700' },
  { name: 'TechFlow', weight: '400' },
  { name: 'Nexora', weight: '600' },
  { name: 'BrandCore', weight: '700' },
  { name: 'Operativa', weight: '400' },
]

const testimonios = [
  {
    quote: 'En 11 semanas pasamos de procesos en papel a un sistema con 7 flujos automatizados. El equipo recuperó 28 h/semana. La inversión se devolvió en el mes 4.',
    name: 'Dirección de Operaciones',
    role: 'Logística B2B',
    company: '35 empleados',
    initials: 'OL',
  },
  {
    quote: 'Antes teníamos datos en cuatro herramientas y nadie sabía qué era fiable. Hoy hay un único dashboard. Las reuniones bajaron de hora a 20 minutos.',
    name: 'CEO',
    role: 'SaaS B2B',
    company: '22 empleados',
    initials: 'CS',
  },
  {
    quote: 'Otros nos vendían IA directamente. Geito insistió en ordenar primero los procesos. Tenían razón: ahora la IA aporta valor real, no humo.',
    name: 'Dirección General',
    role: 'Industrial',
    company: '48 empleados',
    initials: 'DI',
  },
]

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonios.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-2xl mx-auto text-center">
      <svg className="mx-auto mb-5 text-[#c7d2fe]/40" width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
        <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.8C10.4 4 7.6 7.2 7.2 12H13V24H0zm19 0V14.4C19 6.4 23.8 1.6 33.4 0L35 2.8C29.4 4 26.6 7.2 26.2 12H32V24H19z" transform="scale(0.9)" />
      </svg>

      <div className="relative overflow-hidden min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-gray-600 text-lg leading-relaxed italic mb-6">
              "{testimonios[current].quote}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-[#eef2ff] border border-gray-200 flex items-center justify-center text-xs font-bold text-[#4f46e5]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {testimonios[current].initials}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#1e293b]">{testimonios[current].name}</p>
                <p className="text-xs text-gray-400">{testimonios[current].role} · {testimonios[current].company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonios.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current
                ? 'w-5 h-1.5 bg-[#f59e0b]'
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Resultados() {
  return (
    <section className="bg-white py-24 lg:py-32" id="resultados">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-16">
          <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
            Resultados
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1e293b] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Lo que cambia cuando
            <br />
            todo encaja
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Cifras medias reales de nuestros clientes en los primeros 12 meses. No
            proyecciones. Auditables bajo NDA en la llamada de diagnóstico.
          </p>
        </FadeIn>

        {/* Metrics grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" stagger={0.1}>
          {resultados.map((r, i) => (
            <FadeInItem key={i}>
              <div className="group p-8 bg-[#eef2ff] rounded-2xl hover:bg-[#254ba1] transition-all duration-300 h-full">
                <p
                  className={`font-bold text-[#f59e0b] mb-3 group-hover:text-[#fbbf24] whitespace-nowrap ${r.compact ? 'text-3xl' : 'text-4xl'}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {r.metrica}
                </p>
                <p className="text-sm font-semibold text-[#1e293b] mb-2 group-hover:text-white">
                  {r.label}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-white/50">
                  {r.descripcion}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Social proof */}
        <FadeIn className="mb-20">
          <div className="border border-gray-100 rounded-3xl p-10 lg:p-12">
            <p className="text-center text-xs text-gray-400 tracking-[0.2em] uppercase font-medium mb-10">
              Sectores donde hemos implantado
            </p>

            {/* Sectors */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-12">
              {['Logística B2B', 'SaaS', 'Industrial', 'Servicios profesionales', 'E-commerce'].map((sector) => (
                <span
                  key={sector}
                  className="text-gray-400 text-sm tracking-wide cursor-default select-none"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500 }}
                >
                  {sector}
                </span>
              ))}
            </div>

            {/* Testimonial carousel */}
            <TestimonialCarousel />
          </div>
        </FadeIn>

        {/* Bottom statement */}
        <FadeIn delay={0.1}>
          <div className="bg-[#254ba1] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                El objetivo no es tener tecnología.
                <br />
                <span className="text-[#c7d2fe]">Es que funcione para ti.</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                Cada implementación de Geito está medida por impacto en el negocio,
                no por número de herramientas instaladas.
              </p>
            </div>
            <a
              href="#contacto"
              className="shrink-0 inline-flex items-center gap-2 bg-[#c7d2fe] text-[#1e293b] font-semibold px-8 py-4 rounded-full hover:bg-[#818cf8] transition-colors text-sm"
            >
              Empezar ahora
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
