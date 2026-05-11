export default function Footer() {
  return (
    <footer className="bg-[#0a1208] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#7fc244] flex items-center justify-center">
            <span className="text-[#0f1a0a] font-bold text-xs" style={{ fontFamily: "'Syne', sans-serif" }}>G</span>
          </div>
          <span className="text-white/60 text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>Geito</span>
        </div>

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Geito. Transformación digital B2B.
        </p>

        <div className="flex gap-6">
          {['Metodología', 'Contacto'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
