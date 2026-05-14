'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'

const etapas = [
  { num: '01', label: 'Procesos', sub: 'La base de todo' },
  { num: '02', label: 'Digitalización', sub: 'Del papel al sistema' },
  { num: '03', label: 'Automatización', sub: 'Que trabaje solo' },
  { num: '04', label: 'Inteligencia Artificial', sub: 'Inteligencia sobre la base' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollY } = useScroll()
  const rawY = useTransform(scrollY, [0, 800], [0, -110])
  const parallaxY = useSpring(rawY, { stiffness: 120, damping: 25, restDelta: 0.001 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    type Particle = {
      x: number; y: number; vx: number; vy: number; r: number
      glow: number; glowDir: number; glowDelay: number
    }
    const particles: Particle[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        glow: 0,
        glowDir: 0,
        glowDelay: Math.random() * 300 + 100,
      })
    }

    let animId: number | null = null
    let visible = true

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Glow state machine
        if (p.glowDir === 0) {
          p.glowDelay -= 1
          if (p.glowDelay <= 0) p.glowDir = 1
        } else {
          p.glow += p.glowDir * 0.007
          if (p.glow >= 1) { p.glow = 1; p.glowDir = -1 }
          else if (p.glow <= 0) {
            p.glow = 0; p.glowDir = 0
            p.glowDelay = Math.random() * 400 + 200
          }
        }

        // Bloom halo
        if (p.glow > 0) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r + p.glow * 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${p.glow * 0.45})`
          ctx.fill()
        }

        // Core particle (blanco cuando brilla)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.glow > 0
          ? `rgba(255, 255, 255, ${0.9 + p.glow * 0.1})`
          : 'rgba(199, 210, 254, 0.9)'
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(199, 210, 254, ${0.4 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (animId === null) draw()
    }
    const stop = () => {
      if (animId !== null) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }

    // Pause when canvas leaves viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !document.hidden) start()
        else stop()
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    // Pause when tab loses focus
    const onVisibility = () => {
      if (document.hidden) stop()
      else if (visible) start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    start()

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#254ba1]">
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
          <motion.div style={{ y: parallaxY }}>
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[#c7d2fe] text-xs tracking-[0.2em] uppercase font-medium mb-8 border border-[#c7d2fe]/30 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c7d2fe] animate-pulse" />
              Transformación digital B2B
            </span>

            <h1
              className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Tu empresa
              <br />
              <span className="text-gradient-animated">funcionando sola.</span>
              <br />
              En 90 días.
            </h1>

            <p className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
              Implantamos procesos, herramientas digitales, automatizaciones e
              inteligencia artificial. Método secuencial para empresas B2B. Con
              compromiso de plazos y resultados.
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
                    className="text-[#f59e0b] font-bold text-lg"
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
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#c7d2fe] text-[#1e293b] font-semibold px-8 py-4 rounded-full hover:bg-[#818cf8] transition-colors text-sm tracking-wide"
              >
                <motion.span
                  className="absolute top-0 bottom-0 w-12 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                  initial={{ left: '-3rem' }}
                  animate={{ left: '110%' }}
                  transition={{ duration: 0.55, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
                />
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
          </motion.div>

          {/* Right: método diagram */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative flex flex-col gap-0 w-full max-w-sm">

              {/* Línea vertical de fondo */}
              <div className="absolute left-[27px] top-8 bottom-8 w-px bg-white/10" />

              {/* Línea animada sobre la de fondo */}
              <motion.div
                className="absolute left-[27px] top-8 w-px bg-linear-to-b from-[#c7d2fe] to-[#c7d2fe]/20 origin-top"
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
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full border-2 border-[#c7d2fe]/40 bg-[#1e3a8a] flex items-center justify-center">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#c7d2fe]/10 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.15, ease: 'backOut' }}
                    >
                      <span
                        className="text-[#c7d2fe] font-bold text-xs"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {e.num}
                      </span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/8 hover:border-[#c7d2fe]/30 transition-all duration-300">
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
                className="mt-4 ml-[74px] inline-flex items-center gap-2 text-[#c7d2fe] text-xs font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#c7d2fe] animate-pulse" />
                Sistema funcionando y escalable
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
