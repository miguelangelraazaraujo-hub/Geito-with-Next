import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn'

export default function PorQueEsteOrden() {
  return (
    <section className="bg-white py-24 lg:py-32" id="por-que">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <FadeIn direction="left">
            <FadeInStagger className="space-y-3" stagger={0.1}>
              {[
                { label: 'Sin procesos', sub: 'La digitalización no sabe qué automatizar', ok: false },
                { label: 'Sin digitalización', sub: 'La automatización no tiene datos que mover', ok: false },
                { label: 'Sin automatización', sub: 'La IA no tiene con qué trabajar', ok: false },
                { label: 'Con las 4 etapas', sub: 'Todo encaja y se escala de verdad', ok: true },
              ].map((item, i) => (
                <FadeInItem key={i}>
                <div
                  className={`flex items-center gap-4 p-5 rounded-xl border ${
                    item.ok
                      ? 'bg-[#eef2ff] border-[#4f46e5]/40'
                      : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      item.ok ? 'bg-[#4f46e5]' : 'bg-gray-200'
                    }`}
                  >
                    {item.ok ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2 7 6 11 12 3" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="4" x2="10" y2="10" />
                        <line x1="10" y1="4" x2="4" y2="10" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${item.ok ? 'text-[#1e293b]' : 'text-gray-400'}`}>
                      {item.label}
                    </p>
                    <p className={`text-xs mt-0.5 ${item.ok ? 'text-[#4f46e5]' : 'text-gray-400'}`}>
                      {item.sub}
                    </p>
                  </div>
                </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </FadeIn>

          {/* Right: copy */}
          <FadeIn direction="right" delay={0.1}>
            <span className="text-[#4f46e5] text-xs tracking-[0.2em] uppercase font-medium">
              Por qué este orden importa
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1e293b] mt-4 mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Saltarse el orden
              <br />
              cuesta caro.
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Las agencias venden IA primero porque <span className="text-[#1e293b] font-medium">suena bien y vende caro</span>.
                El problema: la IA sin datos limpios es alucinación garantizada. La
                automatización sin procesos ordenados es caos automatizado. Y los procesos
                sin documentar son una bomba de relojería cuando se va el primer empleado clave.
              </p>
              <p>
                Nosotros invertimos el orden. Primero entendemos. Luego digitalizamos.
                Después automatizamos. Y solo entonces, IA. Es más lento de vender.
              </p>
              <p className="text-[#1e293b] font-medium">
                Es lo único que funciona.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
