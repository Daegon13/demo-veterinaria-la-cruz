# Demo Veterinaria La Cruz

Demo web comercial privada y conceptual para Veterinaria La Cruz, Montevideo.

## Objetivo

Mostrar cómo una presencia web propia puede convertir búsquedas locales, tráfico desde redes y visitas móviles en consultas, llamadas y visitas a la sede correcta.

## Stack y arquitectura

- Next.js 14 con App Router y TypeScript.
- Componentes interactivos aislados para selector de sede, tarjetas y acciones móviles.
- Datos operativos centralizados en `src/data/branches.ts`.
- Estilos responsive en `src/app/globals.css` y optimización de imágenes con `next/image`.
- Metadata y `robots.txt` configurados para bloquear indexación.

## Principios

- Mobile first.
- Información pública verificable únicamente.
- No inventar profesionales, especialidades, horarios, precios, servicios, testimonios, urgencias 24 h, sucursales, certificaciones ni convenios.
- No copiar fotografías protegidas de redes sociales.
- Incluir `noindex, nofollow` en el producto final.
- Priorizar contacto, ubicación y claridad por encima de elementos decorativos.

## Documentación

- `AGENTS.md`: reglas obligatorias para Codex/agentes de desarrollo.
- `docs/PROJECT_BRIEF.md`: dirección estratégica y arquitectura objetivo.
- `docs/VERIFIED_DATA.md`: datos permitidos y datos que deben quedar sin completar hasta nueva verificación.

## Ejecutar localmente

Requiere Node.js 18.17 o superior.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`. Para validar una compilación de producción:

```bash
npm run lint
npm run build
npm start
```

## Despliegue en Vercel

Importar el repositorio en Vercel y usar la configuración detectada de Next.js. No requiere variables de entorno ni servicios externos. La demo seguirá enviando directivas `noindex`, `nofollow` y `noarchive`; no se genera sitemap público.

## Blueprint visual añadido

- `index.html`: prototipo estático/semántico para que Codex implemente la primera versión.
- `docs/STYLE_AND_OFFER_PLAN.md`: dirección estética, UX y propuesta comercial.
- `public/images/`: assets conceptuales generados para la demo; no representan instalaciones ni personal real.
