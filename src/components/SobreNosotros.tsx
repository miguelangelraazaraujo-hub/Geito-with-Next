export default function SobreNosotros() {
  return (
    <section className="bg-[#f5f5f0] py-24 lg:py-32" id="nosotros">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual / identity */}
          <div className="relative">
            <div className="bg-[#0f1a0a] rounded-3xl p-12 flex flex-col justify-between min-h-[420px]">
              {/* Logo mark */}
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#7fc244] flex items-center justify-center mb-8">
                  <span
                    className="text-[#0f1a0a] font-bold text-2xl"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    G
                  </span>
                </div>
                <h3
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Geito
                </h3>
                <p className="text-[#7fc244] text-sm">Transformación digital B2B</p>
              </div>

              {/* Values */}
              <div className="space-y-4 mt-10">
                {['Método antes que herramienta', 'Implementación real, no consultoría', 'Compromiso con el resultado'].map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7fc244]" />
                    <span className="text-white/70 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <span className="text-[#639922] text-xs tracking-[0.2em] uppercase font-medium">
              Sobre Geito
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0f1a0a] mt-4 mb-8 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              No somos una
              <br />
              agencia digital más.
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Geito nace de la experiencia directa con empresas que han intentado
                digitalizar sin método. Hemos visto cómo proyectos de automatización
                fallan porque no había procesos definidos, y cómo inversiones en IA se
                pierden porque los datos no estaban estructurados.
              </p>
              <p>
                Por eso construimos un método secuencial y sin atajos. Trabajamos como
                parte del equipo, no como consultores externos que entregan un documento
                y desaparecen.
              </p>
              <p className="text-[#0f1a0a] font-medium">
                Nuestro éxito se mide por el tuyo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
