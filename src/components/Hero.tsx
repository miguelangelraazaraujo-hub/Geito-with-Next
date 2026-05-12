'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const etapas = [
  { num: '01', label: 'Procesos', sub: 'La base de todo' },
  { num: '02', label: 'Digitalización', sub: 'Del papel al sistema' },
  { num: '03', label: 'Automatización', sub: 'Que trabaje solo' },
  { num: '04', label: 'Inteligencia Artificial', sub: 'Inteligencia sobre la base' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99, 153, 34, 0.25)'
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99, 153, 34, ${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1a0a]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[#7fc244] text-xs tracking-[0.2em] uppercase font-medium mb-8 border border-[#7fc244]/30 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7fc244] animate-pulse" />
              Transformación digital B2B
            </span>

            <h1
              className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Tu empresa
              <br />
              <span className="text-[#7fc244]">funcionando sola.</span>
              <br />
              En 90 días.
            </h1>

            <p className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
              Implantamos procesos, herramientas digitales y automatizaciones con n8n e
              inteligencia artificial. Sin saltar etapas. Con compromiso de plazos y
              resultados.
            </p>

            {/* Numerical proof bullets */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {[
                { metric: '−60%', label: 'tareas repetitivas' },
                { metric: '3×', label: 'capacidad de escala' },
                { metric: '90 días', label: 'o seguimos sin coste' },
              ].map((b) => (
                <div key={b.label} className="flex items-baseline gap-2">
                  <span
                    className="text-[#7fc244] font-bold text-lg"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {b.metric}
                  </span>
                  <span className="text-white/50 text-sm">{b.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#7fc244] text-[#0f1a0a] font-semibold px-8 py-4 rounded-full hover:bg-[#9fd660] transition-colors text-sm tracking-wide"
              >
                Reserva tu diagnóstico gratuito
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#metodologia"
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full transition-colors text-sm tracking-wide"
              >
                Ver metodología
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-xs text-white/40 tracking-wide">
              Auditoría de 5 días · Sin compromiso · Roadmap con presupuesto cerrado
            </p>
          </motion.div>

          {/* Right: método diagram */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative flex flex-col gap-0 w-full max-w-sm">

              {/* Línea vertical de fondo */}
              <div className="absolute left-[27px] top-8 bottom-8 w-px bg-white/10" />

              {/* Línea animada sobre la de fondo */}
              <motion.div
                className="absolute left-[27px] top-8 w-px bg-gradient-to-b from-[#7fc244] to-[#7fc244]/20 origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ height: 'calc(100% - 64px)' }}
              />

              {etapas.map((e, i) => (
                <motion.div
                  key={i}
                  className="relative flex items-center gap-5 py-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Nodo */}
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full border-2 border-[#7fc244]/40 bg-[#0f1a0a] flex items-center justify-center">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#7fc244]/10 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.15, ease: 'backOut' }}
                    >
                      <span
                        className="text-[#7fc244] font-bold text-xs"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {e.num}
                      </span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/8 hover:border-[#7fc244]/30 transition-all duration-300">
                    <p
                      className="text-white font-semibold text-sm mb-0.5"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {e.label}
                    </p>
                    <p className="text-white/40 text-xs">{e.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Badge final */}
              <motion.div
                className="mt-4 ml-[74px] inline-flex items-center gap-2 text-[#7fc244] text-xs font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#7fc244] animate-pulse" />
                Sistema funcionando y escalable
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
