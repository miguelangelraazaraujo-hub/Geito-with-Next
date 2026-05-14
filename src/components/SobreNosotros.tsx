'use client'

import { useRef, useEffect } from 'react'
import { animate, useInView } from 'motion/react'
import { FadeIn } from './FadeIn'

const metricas = [
  { num: 60, prefix: '−', suffix: '%', label: 'tareas repetitivas' },
  { num: 3,  prefix: '',  suffix: '×', label: 'capacidad de escala' },
  { num: 90, prefix: '',  suffix: 'd', label: 'o seguimos sin coste' },
]

function AnimatedCounter({ num, prefix, suffix }: { num: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, num, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
      },
    })
    return controls.stop
  }, [inView, num, prefix, suffix])

  return (
    <span ref={ref} className="text-[#f59e0b] font-bold text-2xl" style={{ fontFamily: "'Syne', sans-serif" }}>
      {prefix}0{suffix}
    </span>
  )
}

export default function SobreNosotros() {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-24" id="nosotros">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual / identity */}
          <FadeIn direction="left">
            <div className="bg-[#254ba1] rounded-3xl p-12 flex flex-col justify-between min-h-[420px]">

              {/* Logo mark */}
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Geito-logo.png"
                  alt="Geito"
                  className="h-20 w-auto mb-6 rounded-xl"
                  style={{ filter: 'invert(1) brightness(1.15) drop-shadow(0 1px 4px rgba(0,0,0,0.25))' }}
                />
                <p className="text-[#c7d2fe] text-sm">Transformación digital B2B</p>
              </div>

              {/* Métricas animadas */}
              <div className="grid grid-cols-3 gap-2 my-8 border-t border-b border-white/10 py-6">
                {metricas.map((m) => (
                  <div key={m.label} className="text-center">
                    <AnimatedCounter num={m.num} prefix={m.prefix} suffix={m.suffix} />
                    <p className="text-white/50 text-xs leading-tight mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="space-y-4">
                {['Método antes que herramienta', 'Implementación real, no consultoría', 'Compromiso con el resultado'].map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c7d2fe]" />
                    <span className="text-white/70 text-sm">{v}</span>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>

          {/* Right: copy */}
          <FadeIn direction="right" delay={0.15}>
            <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
              Sobre Geito
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1e293b] mt-4 mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              No somos una
              <br />
              agencia digital más.
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Geito nace después de ver durante años cómo empresas medianas gastaban
                entre 30.000 € y 100.000 € en herramientas digitales que terminaban sin
                usarse. No porque las herramientas fueran malas — porque nadie había
                ordenado los procesos antes de implantarlas.
              </p>
              <p>
                La paradoja: cuanto más invertían en tecnología, más caótica era la
                operativa. Decidimos construir Geito para resolver exactamente eso, en
                el orden correcto.
              </p>
              <p className="text-[#1e293b] font-medium">
                No somos consultores con un curso de IA. Somos operadores que han
                fallado con su propio dinero y aprendido. Por eso vendemos método antes
                que herramienta.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
