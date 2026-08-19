# AGENTS.md — Demo Veterinaria La Cruz

Estas reglas son obligatorias para cualquier agente o desarrollador que modifique este repositorio.

## Naturaleza del proyecto

Esta es una demo comercial privada, conceptual y no oficial para Veterinaria La Cruz, Montevideo. No debe presentarse como sitio oficial ni indexarse.

## Restricciones de contenido

No inventar ni inferir como hechos:

- profesionales;
- especialidades;
- horarios;
- precios;
- servicios;
- testimonios;
- urgencias 24 h;
- sucursales;
- certificaciones;
- convenios;
- números de WhatsApp no confirmados.

Usar únicamente la información expresamente marcada como confirmada en `docs/VERIFIED_DATA.md`.

Si un dato necesario no está confirmado, dejar la interfaz preparada para incorporarlo luego o utilizar copy neutral que no afirme el dato.

## Privacidad / indexación

El producto final debe incorporar `noindex, nofollow` de forma explícita y evitar cualquier configuración destinada a indexación pública durante la etapa de demo.

## Imágenes

No descargar ni reutilizar directamente fotografías protegidas de Instagram, Facebook u otras redes del negocio. Usar placeholders o assets propios/autorizados.

## Dirección UX

La página debe responder rápidamente:

1. Quiénes son.
2. Qué atención ofrecen, solo cuando esté confirmada.
3. Dónde están.
4. Cómo contactar o llegar ahora.

Priorizar experiencia mobile y acceso inmediato a llamada, WhatsApp confirmado y navegación a sedes.

## Dirección visual

Veterinaria moderna, cercana, limpia y profesional. Evitar estética infantil, exceso de huellas, saturación cromática y apariencia de pet shop genérico.

## Ingeniería

- Componentes reutilizables.
- Datos de sedes y contactos centralizados.
- Separar `phone` de `whatsapp`.
- Accesibilidad y navegación por teclado.
- Performance y carga de imágenes optimizadas.
- Animaciones discretas y compatibles con `prefers-reduced-motion`.
- Responsive real, no solo adaptación superficial.
