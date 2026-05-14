'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */

type Fields = {
  nombre: string
  empresa: string
  email: string
  equipo: string
  cuello: string
  decision: string
}

type Errors = Partial<Record<keyof Fields, string>>
type Step = 'form' | 'scheduling' | 'success'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string
        prefill?: { name?: string; email?: string; customAnswers?: Record<string, string> }
      }) => void
    }
  }
}

/* ── Constants ──────────────────────────────────────────────── */

const CALENDLY_URL = 'https://calendly.com/geito/30min'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputBase = 'w-full bg-white/15 border text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors'
const inputOk   = 'border-white/30 focus:border-white/70'
const inputErr  = 'border-red-400/70 focus:border-red-400/90'

const equipoOpciones = [
  { value: '',       label: 'Selecciona el tamaño de tu equipo' },
  { value: '5-20',   label: '5–20 personas  (Geito Core)' },
  { value: '20-60',  label: '20–60 personas  (Geito Growth)' },
  { value: '60-150', label: '60–150 personas  (Geito Scale)' },
  { value: '150+',   label: 'Más de 150 personas' },
]

/* ── Helpers ────────────────────────────────────────────────── */

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (!fields.nombre.trim()) errors.nombre = 'El nombre es obligatorio'
  else if (fields.nombre.trim().length < 2) errors.nombre = 'Mínimo 2 caracteres'
  if (!fields.empresa.trim()) errors.empresa = 'El nombre de la empresa es obligatorio'
  if (!fields.email.trim()) errors.email = 'El email es obligatorio'
  else if (!emailRegex.test(fields.email)) errors.email = 'Introduce un email válido'
  if (!fields.equipo) errors.equipo = 'Selecciona el tamaño de tu equipo'
  return errors
}

function loadCalendlyScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Calendly) return Promise.resolve()

  return new Promise((resolve) => {
    // CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }
    // JS
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => resolve() // continúa aunque falle
    document.head.appendChild(script)
  })
}

function openCalendly(fields: Fields) {
  window.Calendly?.initPopupWidget({
    url: CALENDLY_URL,
    prefill: {
      name: fields.nombre,
      email: fields.email,
      customAnswers: {
        a2: [
          `Empresa: ${fields.empresa}`,
          `Equipo: ${fields.equipo} personas`,
          fields.cuello ? `Cuello de botella: ${fields.cuello}` : '',
          fields.decision ? `Decisores: ${fields.decision}` : '',
        ].filter(Boolean).join('\n'),
      },
    },
  })
}

/* ── Component ──────────────────────────────────────────────── */

export default function CTAContacto() {
  const [step, setStep]     = useState<Step>('form')
  const [fields, setFields] = useState<Fields>({
    nombre: '', empresa: '', email: '', equipo: '', cuello: '', decision: '',
  })
  const [errors, setErrors]   = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [loading, setLoading] = useState(false)

  /* Escuchar evento de Calendly cuando se agenda la cita */
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        setStep('success')
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  const set = (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...fields, [key]: e.target.value }
      setFields(next)
      if (touched[key]) setErrors(validate(next))
    }

  const blur = (key: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors(validate(fields))
  }

  const field = (key: keyof Fields) => ({
    value: fields[key],
    onChange: set(key),
    onBlur: blur(key),
    className: `${inputBase} ${touched[key] && errors[key] ? inputErr : inputOk}`,
  })

  const ErrorMsg = ({ k }: { k: keyof Fields }) =>
    touched[k] && errors[k]
      ? <p className="mt-1.5 text-xs text-red-400">{errors[k]}</p>
      : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(fields).map((k) => [k, true]))
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    await loadCalendlyScript()
    setLoading(false)
    setStep('scheduling')
    openCalendly(fields)
  }

  return (
    <section className="bg-[#254ba1] py-16 lg:py-24" id="contacto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left copy ── */}
          <div>
            <span className="text-[#c7d2fe] text-xs tracking-[0.2em] uppercase font-medium">
              Diagnóstico operativo
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              60 minutos.
              <br />
              <span className="text-gradient-animated">Cero PowerPoint.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Tú me cuentas tu operativa actual. Analizamos los procesos con mayor potencial
              de ROI y te decimos si podemos ayudarte —{' '}
              <span className="text-white/80">a veces decimos que no, lo decimos en directo y sin rodeos.</span>
            </p>
            <p className="text-white/60 leading-relaxed mb-10 max-w-md">
              Si encajamos, sales con las 3–5 oportunidades de mayor ROI identificadas
              en vivo y un rango de inversión orientativo. Si no encajamos, sales con
              las mismas 3 oportunidades.
            </p>

            <div className="space-y-4">
              {[
                'Sin pedir teléfono · Sin newsletter',
                'Sin "asesor comercial" llamándote después',
                'Roadmap utilizable aunque no nos contrates',
                'Plazas limitadas: 3 nuevos clientes este trimestre',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <motion.polyline
                      points="3 9 7 13 15 5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: i * 0.35, ease: 'easeOut' }}
                    />
                  </svg>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right card ── */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-10 min-h-[420px] flex flex-col justify-center">

            {/* STEP: form */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Tu nombre *</label>
                    <input type="text" placeholder="Tu nombre" {...field('nombre')} />
                    <ErrorMsg k="nombre" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Empresa *</label>
                    <input type="text" placeholder="Nombre de tu empresa" {...field('empresa')} />
                    <ErrorMsg k="empresa" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email corporativo *</label>
                  <input type="email" placeholder="tu@empresa.com" {...field('email')} />
                  <ErrorMsg k="email" />
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Tamaño del equipo *</label>
                  <select
                    value={fields.equipo}
                    onChange={set('equipo')}
                    onBlur={blur('equipo')}
                    className={`${inputBase} ${touched.equipo && errors.equipo ? inputErr : inputOk} appearance-none cursor-pointer`}
                  >
                    {equipoOpciones.map((op) => (
                      <option key={op.value} value={op.value} className="bg-[#254ba1] text-white">
                        {op.label}
                      </option>
                    ))}
                  </select>
                  <ErrorMsg k="equipo" />
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                    ¿Cuál es tu mayor cuello de botella operativo?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="¿Qué proceso te quita más tiempo o te impide escalar?"
                    {...field('cuello')}
                    className={`${inputBase} ${inputOk} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                    ¿Hay más personas que participen en esta decisión?{' '}
                    <span className="text-white/30 normal-case tracking-normal">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="p.ej. Dirección general, IT, Operaciones..."
                    {...field('decision')}
                    className={`${inputBase} ${inputOk}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c7d2fe] text-[#1e293b] font-semibold py-4 rounded-xl hover:bg-[#818cf8] transition-colors text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                      </svg>
                      Cargando calendario…
                    </>
                  ) : (
                    'Solicitar diagnóstico operativo'
                  )}
                </button>
                <p className="text-center text-xs text-white/30">
                  Seleccionarás tu horario en el siguiente paso · Sin compromiso
                </p>
              </form>
            )}

            {/* STEP: scheduling (popup abierto) */}
            {step === 'scheduling' && (
              <motion.div
                className="text-center py-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Icono calendario */}
                <div className="w-16 h-16 rounded-full bg-[#c7d2fe]/10 border border-[#c7d2fe]/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c7d2fe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Selecciona tu horario
                </h3>
                <p className="text-white/50 text-sm mb-2">
                  El calendario se ha abierto en una ventana.
                </p>
                <p className="text-white/40 text-xs mb-8">
                  Enviando a <span className="text-white/60 font-medium">{fields.email}</span>
                </p>

                {/* Resumen del form */}
                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-left mb-8 space-y-2">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-3">Tus datos</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">Nombre</span>
                    <span className="text-white/80">{fields.nombre}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">Empresa</span>
                    <span className="text-white/80">{fields.empresa}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">Equipo</span>
                    <span className="text-white/80">{fields.equipo} personas</span>
                  </div>
                </div>

                <button
                  onClick={() => openCalendly(fields)}
                  className="w-full flex items-center justify-center gap-2 bg-[#c7d2fe] text-[#1e293b] font-semibold py-3.5 rounded-xl hover:bg-[#818cf8] transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Abrir calendario de nuevo
                </button>
                <button
                  onClick={() => setStep('form')}
                  className="mt-3 w-full text-white/30 hover:text-white/60 text-xs transition-colors py-2"
                >
                  ← Volver al formulario
                </button>
              </motion.div>
            )}

            {/* STEP: success */}
            {step === 'success' && (
              <motion.div
                className="text-center py-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Check animado */}
                <div className="w-16 h-16 rounded-full bg-[#4f46e5]/20 border border-[#4f46e5]/40 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <motion.polyline
                      points="4 14 11 21 24 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  ¡Cita confirmada!
                </h3>
                <p className="text-white/60 text-sm mb-1">
                  Diagnóstico operativo · 60 min
                </p>
                <p className="text-white/40 text-xs mb-8">
                  Recibirás la invitación de calendario en{' '}
                  <span className="text-white/60 font-medium">{fields.email}</span>
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-left space-y-3 mb-6">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Qué ocurre ahora</p>
                  {[
                    'Recibes email de confirmación con el enlace a la reunión',
                    'Revisamos tu formulario antes de la llamada',
                    'En 60 min identificamos tus oportunidades de ROI',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[#c7d2fe] text-xs font-mono mt-0.5 shrink-0">0{i + 1}</span>
                      <span className="text-white/60 text-xs leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-white/30 text-xs">
                  ¿Necesitas cambiar el horario? Usa el enlace del email de confirmación.
                </p>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
