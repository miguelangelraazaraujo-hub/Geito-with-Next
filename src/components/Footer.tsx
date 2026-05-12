const navLinks = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'Para quién', href: '#para-quien' },
  { label: 'La oferta', href: '#oferta' },
  { label: 'Contacto', href: '#contacto' },
]

const legalLinks = [
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Aviso legal', href: '/aviso-legal' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1208] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Geito-logo-lg.png"
            alt="Geito"
            className="block h-10 w-fit rounded-lg"
            style={{ filter: 'invert(1)' }}
          />
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Transformación digital B2B. Ordenamos, digitalizamos y automatizamos
            procesos de empresas de 10-50 personas.
          </p>
          <div className="inline-flex items-center gap-2 text-[#7fc244]/80 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span>Sistema Geito 90 · ROI en 6 meses o devolvemos la diferencia</span>
          </div>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/geito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors w-fit"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Nav links */}
        <div>
          <p className="text-white/30 text-xs tracking-[0.15em] uppercase font-medium mb-5">Navegación</p>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white/30 text-xs tracking-[0.15em] uppercase font-medium mb-5">Contacto directo</p>
          <a
            href="mailto:hola@geito.es"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            hola@geito.es
          </a>
          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#7fc244] text-[#0f1a0a] font-semibold px-5 py-2.5 rounded-full hover:bg-[#9fd660] transition-colors text-sm"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Geito. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white/25 hover:text-white/50 text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
