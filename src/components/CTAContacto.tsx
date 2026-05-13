'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

export default function CTAContacto() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="bg-[#254ba1] py-24 lg:py-32" id="contacto">
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4f46e5]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Empresa</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4f46e5]/60 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4f46e5]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Tamaño del equipo</label>
                    <select
                      required
                      defaultValue=""
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4f46e5]/60 transition-colors"
                    >
                      <option value="" disabled>Selecciona</option>
                      <option value="1-9">1-9 personas</option>
                      <option value="10-25">10-25 personas</option>
                      <option value="26-50">26-50 personas</option>
                      <option value="50+">Más de 50</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Tu principal cuello de botella</label>
                  <textarea
                    rows={4}
                    placeholder="¿Qué proceso te quita más tiempo o te impide escalar? Cuanto más concreto, mejor preparamos la llamada."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4f46e5]/60 transition-colors resize-none"
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
