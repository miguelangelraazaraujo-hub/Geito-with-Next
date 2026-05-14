'use client'

import { motion } from 'motion/react'
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

const tools = [
  'HubSpot', 'Salesforce', 'SAP', 'Holded', 'Sage',
  'Shopify', 'WooCommerce', 'Notion', 'Airtable',
  'Slack', 'Teams', 'Make', 'n8n',
]

// ⚠️ NOTA: Los testimoniales son sintéticos. Sustituir por casos reales antes de publicar.
const tiers = [
  {
    id: 'core',
    name: 'Geito Core',
    tag: null,
    target: 'Para equipos de 5 a 20 personas que necesitan dejar de apagar fuegos.',
    price: '8.900 €',
    featured: false,
    features: [
      { label: 'Diagnóstico operativo completo',         valor: '2.000 €', mercado: '1.500–3.000 €' },
      { label: 'Roadmap priorizado con ROI estimado',    valor: '1.500 €', mercado: '1.000–2.000 €' },
      { label: 'Hasta 3 automatizaciones en producción', valor: '6.000 €', mercado: '5.000–9.000 €' },
      { label: 'Formación práctica (2 sesiones)',         valor: '1.200 €', mercado: '800–1.500 €' },
      { label: 'Documentación completa',                  valor: '1.500 €', mercado: '1.000–2.000 €' },
      { label: 'Dashboard de impacto en tiempo real',     valor: '800 €',   mercado: '600–1.200 €' },
      { label: 'Soporte post-lanzamiento 60 días',        valor: '2.000 €', mercado: '1.500–3.000 €' },
    ],
    valorTotal: '15.000 €',
    mercadoTotal: '11.400–21.700 €',
    testimonials: [
      {
        quote: 'Automatizamos la gestión de pedidos B2B y el seguimiento de cobros. En 90 días recuperamos 14 horas semanales de administración.',
        from: 'Distribución industrial · 12 personas · Valencia',
      },
      {
        quote: 'Integramos nuestro ERP con la tienda online y con HubSpot. Los pedidos se procesan solos desde que entran.',
        from: 'Fabricación a medida · 18 personas · País Vasco',
      },
    ],
    kit: false,
  },
  {
    id: 'growth',
    name: 'Geito Growth',
    tag: 'El más elegido',
    target: 'Para equipos de 20 a 60 personas que quieren escalar sin contratar proporcionalmente.',
    price: '14.900 €',
    featured: true,
    features: [
      { label: 'Todo lo incluido en Core',                       valor: '15.000 €', mercado: '11.400–21.700 €' },
      { label: 'Hasta 7 automatizaciones en producción',          valor: '8.000 €',  mercado: '7.000–14.000 €' },
      { label: 'Integración 3–5 herramientas de tu stack',        valor: '4.000 €',  mercado: '3.500–8.000 €' },
      { label: 'Formación ampliada (4 sesiones + material)',       valor: '2.400 €',  mercado: '2.000–4.000 €' },
      { label: 'Soporte post-lanzamiento 90 días',                valor: '3.000 €',  mercado: '2.500–4.500 €' },
      { label: 'Revisión trimestral de optimización',             valor: '1.500 €',  mercado: '1.000–2.000 €' },
    ],
    valorTotal: '33.900 €',
    mercadoTotal: '27.400–54.200 €',
    testimonials: [
      {
        quote: 'Automatizamos el onboarding, el reporting mensual y las revisiones de campañas. Ahorramos 3 días de trabajo al mes por persona en operaciones.',
        from: 'Agencia marketing digital · 30 personas · Madrid',
      },
      {
        quote: 'Los contratos se generan y firman solos cuando el deal se cierra en el CRM.',
        from: 'SaaS B2B · 35 personas · Barcelona',
      },
    ],
    kit: true,
  },
  {
    id: 'scale',
    name: 'Geito Scale',
    tag: null,
    target: 'Para equipos de 60 a 150 personas que necesitan una transformación operativa completa.',
    price: '23.900 €',
    featured: false,
    features: [
      { label: 'Todo lo incluido en Growth',                           valor: '33.900 €', mercado: '27.400–54.200 €' },
      { label: 'Hasta 15 automatizaciones en producción',               valor: '12.000 €', mercado: '12.000–22.000 €' },
      { label: 'Capa de inteligencia sobre datos operativos',           valor: '8.000 €',  mercado: '8.000–18.000 €' },
      { label: 'Integración completa del stack (hasta 8 herramientas)', valor: '6.000 €',  mercado: '6.000–14.000 €' },
      { label: 'Formación por departamento (6 sesiones)',               valor: '3.600 €',  mercado: '3.000–6.000 €' },
      { label: 'Soporte 90 días + retainer preferente',                 valor: '4.500 €',  mercado: '4.000–7.000 €' },
    ],
    valorTotal: '68.000 €',
    mercadoTotal: '60.400–121.200 €',
    testimonials: [
      {
        quote: 'Integramos el ERP con el portal de pedidos y automatizamos la logística de salida. El equipo de administración bajó de 8 a 5 personas por crecimiento natural, sin despidos.',
        from: 'Distribución alimentaria B2B · 70 personas · Zaragoza',
      },
    ],
    kit: true,
  },
]

const garantias = [
  {
    numero: '01',
    titulo: 'Garantía de oportunidad',
    texto: 'Si no encontramos al menos 5 procesos con retorno demostrable en tu operativa, no hay propuesta. Sin coste, sin seguimiento.',
  },
  {
    numero: '02',
    titulo: 'Garantía de plazo',
    texto: 'Tu sistema estará operativo en 90 días o seguimos trabajando sin coste adicional hasta completarlo. El reloj empieza cuando firmamos.',
  },
  {
    numero: '03',
    titulo: 'Garantía de satisfacción',
    texto: 'Si el tiempo recuperado no equivale al coste del proyecto, devolvemos la diferencia en 48 horas. El cálculo es objetivo y lo medimos juntos en la revisión final.',
  },
]

const sectores = [
  'Fabricación a medida', 'Distribución B2B', 'Agencias de marketing',
  'Consultoría profesional', 'SaaS', 'Ecommerce B2B',
  'Logística', 'Servicios financieros', 'Despachos fiscales y jurídicos',
]

function CheckIcon() {
  return (
    <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#c7d2fe" strokeWidth="1.2" />
      <path d="M5 8l2 2 4-3.5" stroke="#4f46e5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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
        <FadeIn className="max-w-2xl mb-10">
          <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
            La oferta
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0f172a] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Elige tu nivel.
            <br />
            <span className="text-gradient-animated">Resultado garantizado.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Cada proyecto incluye diagnóstico, implementación, formación y soporte.
            Precio cerrado. Sin sorpresas. Sin permanencia.
          </p>
        </FadeIn>

        {/* Tools ecosystem */}
        <FadeIn className="mb-14">
          <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-4">
            Trabajamos con más de 40 herramientas del ecosistema B2B español
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs text-slate-500 bg-[#eef2ff] border border-slate-200 px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
            <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
              +27 más
            </span>
          </div>
        </FadeIn>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={i * 0.08}>
              <div
                className={`relative flex flex-col h-full rounded-3xl overflow-hidden border ${
                  tier.featured
                    ? 'border-[#c7d2fe] shadow-xl shadow-indigo-100/60'
                    : 'border-slate-200'
                } bg-white`}
              >
                {/* Card header */}
                <div className={`p-7 ${tier.featured ? 'bg-[#254ba1]' : 'bg-[#eef2ff]'}`}>
                  {tier.tag && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-[#d97706] bg-[#fef3c7] border border-amber-300 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold mb-3">
                      ⭐ {tier.tag}
                    </span>
                  )}
                  <h3
                    className={`text-xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-[#1e293b]'}`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-5 ${tier.featured ? 'text-white/70' : 'text-slate-500'}`}>
                    {tier.target}
                  </p>
                  <div
                    className={`text-3xl font-bold ${tier.featured ? 'text-[#f59e0b]' : 'text-[#254ba1]'}`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {tier.price}
                  </div>
                  <p className={`text-[11px] mt-1 ${tier.featured ? 'text-white/40' : 'text-slate-400'}`}>
                    Pago por hitos · Sin permanencia · IVA no incluido
                  </p>
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col p-7">

                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Incluye</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Valor</span>
                    </div>
                    {tier.features.map((f, fi) => (
                      <div key={fi} className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2">
                          <CheckIcon />
                          <span className="text-xs text-slate-600 leading-snug">{f.label}</span>
                        </div>
                        <span className="shrink-0 text-xs font-semibold text-slate-400 whitespace-nowrap">{f.valor}</span>
                      </div>
                    ))}
                  </div>

                  {/* Value summary */}
                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Valor total incluido</span>
                      <span className="text-base font-bold text-slate-300 line-through" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {tier.valorTotal}
                      </span>
                    </div>
                    <p className="text-right text-[10px] text-slate-300">
                      Coste de mercado equivalente: {tier.mercadoTotal}
                    </p>
                  </div>

                  {/* Testimonials ⚠️ SINTÉTICOS — sustituir por casos reales antes de publicar */}
                  <div className="space-y-3 mb-6">
                    {tier.testimonials.map((t, ti) => (
                      <blockquote key={ti} className="bg-[#f8faff] border border-[#eef2ff] rounded-xl p-4">
                        <p className="text-slate-500 text-[11px] leading-relaxed italic mb-2">"{t.quote}"</p>
                        <footer className="text-[#4f46e5] text-[10px] font-medium">— {t.from}</footer>
                      </blockquote>
                    ))}
                  </div>

                  {/* Kit de propuesta */}
                  {tier.kit && (
                    <div className="mb-6 p-4 border border-dashed border-[#c7d2fe]/40 rounded-xl bg-[#eef2ff]/40">
                      <p className="text-[11px] text-slate-500 leading-relaxed mb-2">
                        <span className="font-semibold text-slate-600">¿Necesitas presentar esto internamente?</span>
                        {' '}Kit de propuesta para directivos: resumen ejecutivo, calculadora de ROI y comparativa de mercado para el board.
                      </p>
                      <a href="#contacto" className="text-[#4f46e5] text-[11px] font-semibold hover:underline">
                        → Solicitar kit al reservar diagnóstico
                      </a>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href="#contacto"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                        tier.featured
                          ? 'bg-[#c7d2fe] text-[#1e293b] hover:bg-[#818cf8]'
                          : 'bg-[#eef2ff] text-[#254ba1] border border-[#c7d2fe]/40 hover:bg-[#c7d2fe]/30'
                      }`}
                    >
                      Solicitar análisis operativo
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Scarcity */}
        <FadeIn className="mb-16" delay={0.05}>
          <div className="flex flex-col gap-4 bg-[#eef2ff] border border-[#c7d2fe]/20 rounded-2xl px-7 py-5">
            <p className="w-full text-sm text-slate-600 leading-relaxed">
              <span className="font-semibold text-[#1e293b]">Trabajamos con 3 empresas por trimestre.</span>
              {' '}Por elección, no por limitación. Cada cliente recibe atención directa del equipo fundador durante 90 días. Con 3 proyectos simultáneos garantizamos tiempos de respuesta de menos de 4 horas y revisión personal de cada entregable.
            </p>
            <div className="flex items-center justify-center gap-2 -mt-2">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Disponibilidad este trimestre</p>
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse shrink-0" />
              <motion.span
                className="text-[#f59e0b] font-bold text-base"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.12, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                style={{ display: 'inline-block', fontFamily: "'Syne', sans-serif" }}
              >
                2
              </motion.span>
              <span className="text-slate-600 font-semibold text-sm">plazas disponibles</span>
            </div>
          </div>
        </FadeIn>

        {/* Triple guarantee */}
        <FadeIn className="mb-16" delay={0.1}>
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
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              El cálculo de satisfacción es objetivo: horas recuperadas × coste horario medio de tu equipo ≥ precio pagado.
              Lo medimos juntos en la revisión de los 90 días. Si no se cumple, emitimos la devolución en 48 horas.
            </p>
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
                    <span className="text-[#4f46e5] text-xs font-mono font-bold tracking-wider">{g.numero}</span>
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

        {/* Cost of delay */}
        <FadeIn className="mb-16">
          <div className="bg-[#254ba1] rounded-3xl p-8 lg:p-12 text-center">
            <h3
              className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Cada trimestre que pospones,
              <br />
              <span className="text-[#f59e0b]">tu equipo pierde 17.000 € en horas que no vuelven.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              12–18 horas semanales en tareas mecánicas × coste medio por hora × 12 semanas.
              No es una estimación. Es la media de nuestros diagnósticos en los últimos 2 años.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#c7d2fe] text-[#1e293b] font-semibold px-8 py-3.5 rounded-full hover:bg-[#818cf8] transition-colors text-sm"
            >
              Evaluar mi caso
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Self-qualification + sectors */}
        <FadeIn className="mb-4">
          <div className="border border-slate-200 rounded-3xl p-8 lg:p-10">
            <h3
              className="text-xl lg:text-2xl font-bold text-[#1e293b] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              ¿No estás seguro de si esto aplica a tu empresa?
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-3 max-w-xl">
              El diagnóstico operativo existe precisamente para eso. En 60 minutos analizamos tu operativa y te decimos:
            </p>
            <ul className="space-y-2 mb-5 max-w-xl">
              {[
                'Si hay procesos automatizables con ROI real en tu caso concreto',
                'Cuántas horas semanales podría recuperar tu equipo',
                'Si Geito es la solución correcta para tu empresa — o no',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm text-slate-500 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm mb-8 max-w-xl">
              Si no encontramos oportunidades reales, te lo decimos directamente. Sin propuesta, sin seguimiento, sin coste.
            </p>

            <div className="mb-8">
              <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-3">Sectores donde hemos trabajado</p>
              <div className="flex flex-wrap gap-2">
                {sectores.map((s) => (
                  <span key={s} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#c7d2fe] text-[#1e293b] font-semibold px-8 py-3.5 rounded-full hover:bg-[#818cf8] transition-colors text-sm tracking-wide"
            >
              Solicitar diagnóstico operativo gratuito
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
