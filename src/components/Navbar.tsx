'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'Para quién', href: '#para-quien' },
  { label: 'Nosotros', href: '#nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f1a0a]/95 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Geito-logo.jpeg"
            alt="Geito"
            className="h-9 w-auto rounded-lg"
            style={{ filter: 'invert(1)' }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-[#7fc244] text-[#0f1a0a] font-semibold px-5 py-2.5 rounded-full hover:bg-[#9fd660] transition-colors text-sm"
        >
          Diagnóstico gratuito
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white"
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f1a0a] border-t border-white/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white text-base transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-[#7fc244] text-[#0f1a0a] font-semibold px-5 py-3 rounded-full text-sm"
          >
            Diagnóstico gratuito
          </a>
        </div>
      )}
    </header>
  )
}
