'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

type Fields = {
    nombre: string
    empresa: string
    email: string
    cargo: string
    web: string
    cuello: string
}

type Errors = Partial<Record<keyof Fields, string>>

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const urlRegex = /^https?:\/\/.+\..+/

function validate(fields: Fields): Errors {
    const errors: Errors = {}
    if (!fields.nombre.trim()) errors.nombre = 'El nombre es obligatorio'
    else if (fields.nombre.trim().length < 2) errors.nombre = 'Mínimo 2 caracteres'

    if (!fields.empresa.trim()) errors.empresa = 'El nombre de la empresa es obligatorio'

    if (!fields.email.trim()) errors.email = 'El email es obligatorio'
    else if (!emailRegex.test(fields.email)) errors.email = 'Introduce un email válido'

    if (fields.web && !urlRegex.test(fields.web))
        errors.web = 'Debe empezar por https:// o http://'

    return errors
}

const inputBase = 'w-full bg-white/15 border text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors'
const inputOk   = 'border-white/30 focus:border-white/70'
const inputErr  = 'border-red-400/70 focus:border-red-400/90'

export default function CTAContacto() {
    const [enviado, setEnviado] = useState(false)
    const [fields, setFields] = useState<Fields>({
        nombre: '', empresa: '', email: '', cargo: '', web: '', cuello: '',
    })
    const [errors, setErrors] = useState<Errors>({})
    const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})

    const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const next = { ...fields, [key]: e.target.value }
        setFields(next)
        if (touched[key]) setErrors(validate(next))
    }

    const blur = (key: keyof Fields) => () => {
        setTouched((t) => ({ ...t, [key]: true }))
        setErrors(validate(fields))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const allTouched = Object.fromEntries(Object.keys(fields).map((k) => [k, true]))
        setTouched(allTouched)
        const errs = validate(fields)
        setErrors(errs)
        if (Object.keys(errs).length === 0) setEnviado(true)
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

    return (
        <section className="bg-[#254ba1] py-16 lg:py-24" id="contacto">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div>
                        <span className="text-[#c7d2fe] text-xs tracking-[0.2em] uppercase font-medium">
                            Diagnóstico estratégico
                        </span>
                        <h2
                            className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-8 leading-tight"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            30 minutos.
                            <br />
                            <span className="text-gradient-animated">Cero PowerPoint.</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                            Tú me cuentas tu operativa actual. Yo te digo si podemos ayudarte —
                            <span className="text-white/80"> a veces decimos que no, lo decimos en
                                directo y sin rodeos.</span>
                        </p>
                        <p className="text-white/60 leading-relaxed mb-10 max-w-md">
                            Si encajamos, sales con las 3-5 oportunidades de mayor ROI identificadas
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

                    {/* Right: form */}
                    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-10">
                        {enviado ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-[#4f46e5]/20 border border-[#4f46e5]/40 flex items-center justify-center mx-auto mb-6">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="4 14 11 21 24 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                                    ¡Mensaje recibido!
                                </h3>
                                <p className="text-white/60">Nos pondremos en contacto contigo en menos de 24h.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Nombre *</label>
                                        <input type="text" placeholder="Tu nombre" {...field('nombre')} />
                                        <ErrorMsg k="nombre" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Empresa *</label>
                                        <input type="text" placeholder="Nombre de tu empresa" {...field('empresa')} />
                                        <ErrorMsg k="empresa" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email *</label>
                                        <input type="email" placeholder="tu@empresa.com" {...field('email')} />
                                        <ErrorMsg k="email" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Cargo</label>
                                        <input type="text" placeholder="Tu cargo en la empresa" {...field('cargo')} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Página web</label>
                                    <input type="url" placeholder="https://tuempresa.com" {...field('web')} />
                                    <ErrorMsg k="web" />
                                </div>
                                <div>
                                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Tu principal cuello de botella</label>
                                    <textarea
                                        rows={4}
                                        placeholder="¿Qué proceso te quita más tiempo o te impide escalar? Cuanto más concreto, mejor preparamos la llamada."
                                        {...field('cuello')}
                                        className={`${inputBase} ${inputOk} resize-none`}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#c7d2fe] text-[#1e293b] font-semibold py-4 rounded-xl hover:bg-[#818cf8] transition-colors text-sm tracking-wide"
                                >
                                    Reservar diagnóstico (30 min, gratis)
                                </button>
                                <p className="text-center text-xs text-white/30">
                                    Respuesta con propuesta de horario en menos de 24 h laborables
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
