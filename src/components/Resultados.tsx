'use client'

const resultados = [
  {
    metrica: '-60%',
    label: 'Tiempo en tareas repetitivas',
    descripcion: 'El equipo deja de hacer trabajo mecánico y se enfoca en tareas de valor.',
    compact: false,
  },
  {
    metrica: '100%',
    label: 'Trazabilidad de procesos',
    descripcion: 'Cada paso queda registrado. Sabes qué pasa, cuándo y por qué.',
    compact: false,
  },
  {
    metrica: '×3',
    label: 'Capacidad de escala',
    descripcion: 'Puedes crecer sin multiplicar el equipo en la misma proporción.',
    compact: false,
  },
  {
    metrica: 'Real-time',
    label: 'Datos para decidir',
    descripcion: 'Dashboards actualizados. Decisiones basadas en información, no en intuición.',
    compact: true,
  },
]

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

const logos = [
  { name: 'Grupo Alvare', weight: '700' },
  { name: 'TechFlow',     weight: '400' },
  { name: 'Nexora',       weight: '600' },
  { name: 'BrandCore',    weight: '700' },
  { name: 'Operativa',    weight: '400' },
]

const testimonios = [
  {
    quote: 'Geito nos ayudó a pasar de procesos caóticos y en papel a un sistema digital automatizado en menos de tres meses. Ahora el equipo dedica tiempo a lo que importa.',
    name: 'María Alcántara',
    role: 'Directora de Operaciones',
    company: 'Grupo Alvare',
    initials: 'MA',
  },
  {
    quote: 'Teníamos datos en cuatro herramientas distintas y nadie sabía qué era fiable. Con Geito centralizamos todo y por primera vez tomamos decisiones con información real.',
    name: 'Carlos Vega',
    role: 'CEO',
    company: 'TechFlow',
    initials: 'CV',
  },
  {
    quote: 'El método secuencial marcó la diferencia. Otros nos vendían automatización directamente. Geito insistió en ordenar primero, y tenían razón.',
    name: 'Laura Sánchez',
    role: 'Directora General',
    company: 'Nexora',
    initials: 'LS',
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
      <svg className="mx-auto mb-5 text-[#7fc244]/40" width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
        <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.8C10.4 4 7.6 7.2 7.2 12H13V24H0zm19 0V14.4C19 6.4 23.8 1.6 33.4 0L35 2.8C29.4 4 26.6 7.2 26.2 12H32V24H19z" transform="scale(0.9)"/>
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
                className="w-9 h-9 rounded-full bg-[#f5f5f0] border border-gray-200 flex items-center justify-center text-xs font-bold text-[#639922]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {testimonios[current].initials}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#0f1a0a]">{testimonios[current].name}</p>
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
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-5 h-1.5 bg-[#639922]'
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
          <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
            Resultados
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Lo que cambia cuando
            <br />
            todo encaja
          </h2>
        </FadeIn>

        {/* Metrics grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" stagger={0.1}>
          {resultados.map((r, i) => (
            <FadeInItem key={i}>
            <div className="group p-8 bg-[#f5f5f0] rounded-2xl hover:bg-[#0f1a0a] transition-all duration-300 h-full">
              <p
                className={`font-bold text-[#639922] mb-3 group-hover:text-[#7fc244] whitespace-nowrap ${r.compact ? 'text-3xl' : 'text-4xl'}`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {r.metrica}
              </p>
              <p className="text-sm font-semibold text-[#0f1a0a] mb-2 group-hover:text-white">
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
              Empresas que ya trabajan con Geito
            </p>

            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-12">
              {logos.map((logo) => (
                <span
                  key={logo.name}
                  className="text-gray-300 text-lg hover:text-gray-400 transition-colors cursor-default select-none"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: logo.weight }}
                >
                  {logo.name}
                </span>
              ))}
            </div>

            {/* Testimonial carousel */}
            <TestimonialCarousel />
          </div>
        </FadeIn>

        {/* Bottom statement */}
        <FadeIn delay={0.1}>
        <div className="bg-[#0f1a0a] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              El objetivo no es tener tecnología.
              <br />
              <span className="text-[#7fc244]">Es que funcione para ti.</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              Cada implementación de Geito está medida por impacto en el negocio,
              no por número de herramientas instaladas.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 bg-[#7fc244] text-[#0f1a0a] font-semibold px-8 py-4 rounded-full hover:bg-[#9fd660] transition-colors text-sm"
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
