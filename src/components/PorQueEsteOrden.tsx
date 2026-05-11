export default function PorQueEsteOrden() {
  return (
    <section className="bg-white py-24 lg:py-32" id="por-que">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="space-y-3">
              {[
                { label: 'Sin procesos', sub: 'La digitalización no sabe qué automatizar', ok: false },
                { label: 'Sin digitalización', sub: 'La automatización no tiene datos que mover', ok: false },
                { label: 'Sin automatización', sub: 'La IA no tiene con qué trabajar', ok: false },
                { label: 'Con las 4 etapas', sub: 'Todo encaja y se escala de verdad', ok: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-5 rounded-xl border ${
                    item.ok
                      ? 'bg-[#f8fdf4] border-[#639922]/40'
                      : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      item.ok ? 'bg-[#639922]' : 'bg-gray-200'
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
                    <p className={`font-semibold text-sm ${item.ok ? 'text-[#0f1a0a]' : 'text-gray-400'}`}>
                      {item.label}
                    </p>
                    <p className={`text-xs mt-0.5 ${item.ok ? 'text-[#3B6D11]' : 'text-gray-400'}`}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
              Por qué este orden importa
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              La IA sin base
              <br />
              es ruido.
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Muchas empresas cometen el error de querer implantar inteligencia
                artificial o automatizaciones sin tener los procesos definidos ni
                digitalizados. El resultado: sistemas costosos que nadie usa, o peor,
                que generan más caos del que resuelven.
              </p>
              <p>
                Cada etapa de Geito tiene un propósito concreto. Los procesos le dan
                estructura a la digitalización. La digitalización le da datos a la
                automatización. Y la automatización le da escala a la inteligencia
                artificial.
              </p>
              <p className="text-[#0f1a0a] font-medium">
                No hay atajos. Pero sí hay un camino claro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
