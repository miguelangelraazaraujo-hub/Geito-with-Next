'use client'

import { motion } from 'motion/react'
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

const incluido = [
    {
        titulo: 'Diagnóstico Geito',
        descripcion:
            'Auditoría de procesos en 5 días con mapa de oportunidades priorizadas por ROI.',
        valor: '2.000 €',
        bonus: false,
    },
    {
        titulo: 'Roadmap personalizado',
        descripcion: 'Plan secuencial con etapas, plazos y presupuesto cerrado.',
        valor: '1.500 €',
        bonus: false,
    },
    {
        titulo: 'Implementación de las 4 etapas',
        descripcion:
            'Procesos, digitalización, automatización e IA. Con tu equipo, no para él.',
        valor: 'desde 8.000 €',
        bonus: false,
    },
    {
        titulo: '3 automatizaciones en producción',
        descripcion:
            'Mínimo garantizado: flujos identificados como cuellos de botella en marcha.',
        valor: 'Incluido',
        bonus: false,
    },
    {
        titulo: 'Formación del equipo + documentación viva',
        descripcion:
            'Tu gente sabe operar el sistema. Sin dependencia técnica externa.',
        valor: '1.200 €',
        bonus: true,
    },
    {
        titulo: 'Dashboard de impacto en tiempo real',
        descripcion:
            'Horas ahorradas, transacciones automatizadas y ROI medidos en directo.',
        valor: '800 €',
        bonus: true,
    },
    {
        titulo: '90 días de seguimiento post-launch',
        descripcion: 'Ajustes, optimización y soporte sin coste adicional.',
        valor: '3.000 €',
        bonus: true,
    },
]

const garantias = [
    {
        numero: '01',
        titulo: 'Garantía de oportunidades',
        texto:
            'Si en el diagnóstico no identificamos al menos 5 procesos con ROI, no facturamos la propuesta.',
    },
    {
        numero: '02',
        titulo: 'Garantía de tiempo',
        texto:
            'Sistema operativo en 90 días o seguimos trabajando sin coste adicional hasta que lo esté.',
    },
    {
        numero: '03',
        titulo: 'Garantía de resultado',
        texto:
            'Si a los 6 meses no has recuperado la inversión en horas-equipo medibles, te devolvemos la diferencia.',
    },
]

export default function LaOferta() {
    return (
        <section className="bg-white py-16 lg:py-24 relative overflow-hidden" id="oferta">
            {/* Subtle radial accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.06), transparent 70%)',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Header */}
                <FadeIn className="max-w-2xl mb-16">
                    <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
                        La oferta
                    </span>
                    <h2
                        className="text-4xl lg:text-5xl font-bold text-[#0f172a] mt-4 mb-6 leading-tight"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        Sistema Geito 90.
                        <br />
                        <span className="text-[#c7d2fe]">Todo lo que incluye.</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Un paquete cerrado, sin sorpresas, con compromiso de plazos y resultados.
                        Esto es lo que recibes desde el día uno.
                    </p>
                </FadeIn>

                {/* Value stack */}
                <FadeIn>
                    <div className="bg-[#eef2ff] border border-slate-200 rounded-3xl p-6 lg:p-10">
                        <FadeInStagger className="divide-y divide-slate-100" stagger={0.06}>
                            {incluido.map((item, i) => (
                                <FadeInItem key={i}>
                                    <div className="flex items-start gap-5 py-5 first:pt-0 last:pb-0">
                                        {/* Check icon */}
                                        <div className="shrink-0 w-9 h-9 rounded-full bg-[#c7d2fe]/10 border border-[#c7d2fe]/30 flex items-center justify-center mt-0.5">
                                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 9 7 13 15 5" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <h3
                                                    className="text-[#1e293b] font-semibold text-base lg:text-lg"
                                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                                >
                                                    {item.titulo}
                                                </h3>
                                                {item.bonus && (
                                                    <span className="text-[10px] text-[#d97706] bg-[#fef3c7] border border-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wider font-medium">
                                                        Bonus
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {item.descripcion}
                                            </p>
                                        </div>

                                        {/* Value */}
                                        <div className="shrink-0 text-right">
                                            <span
                                                className={`text-sm font-bold whitespace-nowrap ${item.valor === 'Incluido' ? 'text-[#c7d2fe]' : 'text-slate-400'
                                                    }`}
                                                style={{ fontFamily: "'Syne', sans-serif" }}
                                            >
                                                {item.valor === 'Incluido' ? '✓ Incluido' : item.valor}
                                            </span>
                                        </div>
                                    </div>
                                </FadeInItem>
                            ))}
                        </FadeInStagger>

                        {/* Total bar */}
                        <div className="mt-8 pt-6 border-t border-[#c7d2fe]/30 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div>
                                <p className="text-slate-400 text-xs tracking-[0.2em] uppercase mb-2">
                                    Valor total equivalente
                                </p>
                                <p
                                    className="text-2xl lg:text-3xl text-slate-300 line-through"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    16.500 €
                                </p>
                            </div>
                            <div className="lg:text-right">
                                <p className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase mb-2">
                                    Tu inversión, paquete cerrado
                                </p>
                                <p
                                    className="text-4xl lg:text-5xl font-bold text-[#f59e0b]"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    desde 8.900 €
                                </p>
                                <p className="text-slate-400 text-xs mt-2">
                                    Pago en hitos · Sin permanencia · IVA no incluido
                                </p>
                            </div>
                        </div>

                        {/* Internal-team anchor */}
                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <p className="text-slate-400 text-xs leading-relaxed">
                                <span className="text-slate-500">Equivalente con equipo interno:</span> analista
                                de procesos + dev integrador + AI engineer = 120.000–180.000 €/año en
                                España. Tú pagas un proyecto cerrado con resultado garantizado.
                            </p>
                        </div>

                        {/* What's NOT included */}
                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <p className="text-slate-400 text-xs tracking-[0.2em] uppercase mb-3">
                                Lo que NO incluye (honestidad)
                            </p>
                            <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
                                <li>· Licencias de software (las contratas tú a tu nombre)</li>
                                <li>· Comisión sobre tus herramientas (cobramos cero al proveedor)</li>
                                <li>· Hardware ni infraestructura cloud</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                {/* Scarcity */}
                <FadeIn className="mt-8" delay={0.05}>
                    <div className="flex items-center justify-center gap-3 text-sm">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                        <p className="text-slate-500">
                            Aceptamos <span className="text-[#1e293b] font-semibold">3 clientes nuevos por trimestre</span>.
                            <span className="text-slate-400"> Es la capacidad real con calidad. </span>
                            <span className="text-[#c7d2fe] font-semibold">Plazas disponibles este trimestre: <motion.span
                                className="text-[#f59e0b] font-bold"
                                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.15, 1] }}
                                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                                style={{ display: 'inline-block' }}
                            >2</motion.span>.</span>
                        </p>
                    </div>
                </FadeIn>

                {/* Guarantees */}
                <FadeIn className="mt-20" delay={0.1}>
                    <div className="text-center mb-10">
                        <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
                            Triple garantía
                        </span>
                        <h3
                            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mt-4 leading-tight"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Todo el riesgo es nuestro.
                        </h3>
                    </div>

                    <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-5" stagger={0.1}>
                        {garantias.map((g) => (
                            <FadeInItem key={g.numero}>
                                <div className="h-full bg-[#eef2ff] border border-[#c7d2fe]/20 rounded-2xl p-7 hover:border-[#c7d2fe]/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#c7d2fe]/10 border border-[#c7d2fe]/30 flex items-center justify-center">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c7d2fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                                                <polyline points="9 12 11 14 15 10" />
                                            </svg>
                                        </div>
                                        <span
                                            className="text-[#4f46e5] text-xs font-mono font-bold tracking-wider"
                                        >
                                            {g.numero}
                                        </span>
                                    </div>
                                    <h4
                                        className="text-[#1e293b] font-bold text-lg mb-3"
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                    >
                                        {g.titulo}
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{g.texto}</p>
                                </div>
                            </FadeInItem>
                        ))}
                    </FadeInStagger>
                </FadeIn>

                {/* CTA */}
                <FadeIn className="mt-20 text-center" delay={0.15}>
                    <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
                        Empezamos con el diagnóstico. Gratis, sin compromiso, y sales con un roadmap
                        ejecutable aunque no trabajes con nosotros.
                    </p>
                    <a
                        href="#contacto"
                        className="inline-flex items-center justify-center gap-2 bg-[#c7d2fe] text-[#1e293b] font-semibold px-10 py-4 rounded-full hover:bg-[#818cf8] transition-colors text-sm tracking-wide"
                    >
                        Reservar diagnóstico gratuito
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <p className="text-slate-300 text-xs mt-4 tracking-wide">
                        5 días · Sin coste · Roadmap entregable
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}
