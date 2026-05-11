'use client'

import { useState } from 'react'

export default function CTAContacto() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="bg-[#0f1a0a] py-24 lg:py-32" id="contacto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-[#7fc244] text-xs tracking-[0.2em] uppercase font-medium">
              Empieza hoy
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              El primer paso
              <br />
              no tiene coste.
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 max-w-md">
              Solicita tu diagnóstico gratuito. En una llamada de 30 minutos analizamos
              tu situación y te decimos si Geito puede ayudarte, y cómo.
            </p>

            <div className="space-y-4">
              {[
                'Sin compromiso de contratación',
                'Respuesta en menos de 24h',
                'Diagnóstico personalizado para tu empresa',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#7fc244" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 9 7 13 15 5" />
                  </svg>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
            {enviado ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#639922]/20 border border-[#639922]/40 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#7fc244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#639922]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Empresa</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#639922]/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#639922]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Cuéntanos tu situación</label>
                  <textarea
                    rows={4}
                    placeholder="¿En qué punto está tu empresa? ¿Qué quieres mejorar?"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#639922]/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7fc244] text-[#0f1a0a] font-semibold py-4 rounded-xl hover:bg-[#9fd660] transition-colors text-sm tracking-wide"
                >
                  Solicitar diagnóstico gratuito
                </button>
                <p className="text-center text-xs text-white/30">
                  Respondemos en menos de 24 horas laborables
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
