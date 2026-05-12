import { FadeIn } from './FadeIn'

export default function SobreNosotros() {
  return (
    <section className="bg-[#f5f5f0] py-24 lg:py-32" id="nosotros">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual / identity */}
          <FadeIn direction="left">
            <div className="bg-[#0f1a0a] rounded-3xl p-12 flex flex-col justify-between min-h-[420px]">
              {/* Logo mark */}
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Geito-logo.jpeg"
                  alt="Geito"
                  className="h-12 w-auto mb-6 rounded-xl"
                  style={{ filter: 'invert(1)' }}
                />
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
          </FadeIn>

          {/* Right: copy */}
          <FadeIn direction="right" delay={0.15}>
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
              <p className="text-[#0f1a0a] font-medium">
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
