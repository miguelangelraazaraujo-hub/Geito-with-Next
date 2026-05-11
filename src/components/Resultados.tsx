const resultados = [
  {
    metrica: '-60%',
    label: 'Tiempo en tareas repetitivas',
    descripcion: 'El equipo deja de hacer trabajo mecánico y se enfoca en tareas de valor.',
  },
  {
    metrica: '100%',
    label: 'Trazabilidad de procesos',
    descripcion: 'Cada paso queda registrado. Sabes qué pasa, cuándo y por qué.',
  },
  {
    metrica: '×3',
    label: 'Capacidad de escala',
    descripcion: 'Puedes crecer sin multiplicar el equipo en la misma proporción.',
  },
  {
    metrica: 'Real-time',
    label: 'Datos para decidir',
    descripcion: 'Dashboards actualizados. Decisiones basadas en información, no en intuición.',
  },
]

export default function Resultados() {
  return (
    <section className="bg-white py-24 lg:py-32" id="resultados">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
            Resultados
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Lo que cambia cuando
            <br />
            todo encaja
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resultados.map((r, i) => (
            <div key={i} className="group p-8 bg-[#f5f5f0] rounded-2xl hover:bg-[#0f1a0a] transition-all duration-300">
              <p
                className="text-4xl font-bold text-[#639922] mb-3 group-hover:text-[#7fc244]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {r.metrica}
              </p>
              <p className="text-sm font-semibold text-[#0f1a0a] mb-2 group-hover:text-white">
                {r.label}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed group-hover:text-white/50">
                {r.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="bg-[#0f1a0a] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              El objetivo no es tener tecnología.
              <br />
              <span className="text-[#7fc244]">Es que funcione para ti.</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              Cada implementación de Geito está medida por impacto en el negocio,
              no por número de herramientas instaladas.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 bg-[#7fc244] text-[#0f1a0a] font-semibold px-8 py-4 rounded-full hover:bg-[#9fd660] transition-colors text-sm"
          >
            Empezar ahora
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
