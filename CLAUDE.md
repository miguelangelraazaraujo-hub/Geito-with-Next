# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## What this project is

**Geito** — Web B2B one-page para empresa de transformación digital. Presenta un método en 4 etapas: **Procesos → Digitalización → Automatización → IA**. No hay rutas adicionales, backend, ni autenticación — es una landing page estática con scroll suave entre secciones.

## Architecture

Single route (`src/app/page.tsx`) que apila todos los componentes de sección en orden. La navegación es por anchors (`#metodologia`, `#como-trabajamos`, `#para-quien`, `#nosotros`, `#contacto`) — sin Next.js router.

```
src/
├── app/
│   ├── layout.tsx      # Root layout: fuentes, metadata, global CSS
│   ├── globals.css     # Solo: @import "tailwindcss" + resets mínimos
│   └── page.tsx        # Ensambla todas las secciones en orden
└── components/
    ├── Navbar.tsx          # Fija, scroll effect, menú móvil
    ├── Hero.tsx            # Fondo oscuro, partículas canvas animadas, CTA
    ├── Problema.tsx        # 4 pain points en grid
    ├── Etapas.tsx          # Sección interactiva con las 4 etapas del método
    ├── PorQueEsteOrden.tsx # Checklist visual del orden metodológico
    ├── ComoTrabajamos.tsx  # Timeline de 4 fases del proyecto
    ├── ParaQuienEs.tsx     # Perfil de cliente ideal vs no ideal
    ├── Resultados.tsx      # Métricas con hover effect
    ├── SobreNosotros.tsx   # Identidad y valores de la empresa
    ├── CTAContacto.tsx     # Formulario con estado de envío (pendiente conectar)
    └── Footer.tsx
```

## Design system

| Token | Valor | Uso |
|---|---|---|
| Fondo oscuro | `#0f1a0a` | Secciones Hero, Navbar, CTA |
| Verde lima | `#7fc244` | Color primario, CTAs, acentos |
| Verde medio | `#639922` | Variante oscura del primario |
| Fondo claro | `#f5f5f0` | Secciones de contenido claro |
| Blanco | `white` | Secciones alternas |

- **Fuente display**: `Syne` (headings, logo) via `next/font/google` → var `--font-syne`
- **Fuente body**: `Inter` (texto corriente) via `next/font/google`
- **Layout**: `max-w-6xl mx-auto px-6` en todas las secciones
- **Tailwind v4**: configurado via `@tailwindcss/postcss` — no existe `tailwind.config.*`

## Component conventions

- Usar `'use client'` solo cuando el componente usa hooks (`useState`, `useEffect`, `useRef`) o APIs del browser
- Componentes self-contained — sin estado compartido, sin context, sin librerías de terceros más allá de React/Next
- SVGs inline (no hay librería de iconos)
- Los `id` de las secciones deben coincidir con los `href` del array `links` en `Navbar.tsx`

## Pending work

1. **Animaciones de entrada al scroll** — revelar secciones con `IntersectionObserver` o librería ligera (p.ej. `motion/react`)
2. **Conectar formulario** — `CTAContacto.tsx` tiene estado de envío listo; falta el endpoint (n8n webhook, Resend, o similar)
3. **Copy definitivo** — revisar y ajustar textos en todos los componentes
4. **SEO y metadatos** — ampliar `metadata` en `layout.tsx` y agregar `opengraph-image`
