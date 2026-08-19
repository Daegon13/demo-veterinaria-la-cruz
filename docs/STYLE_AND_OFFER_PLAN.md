# Plan de estética y propuesta comercial — Veterinaria La Cruz

## 1. Qué debe vender la demo

La demo no debe presentarse como un simple rediseño visual. Debe demostrar que una web propia puede convertir mejor la reputación y el tráfico que Veterinaria La Cruz ya genera desde Google, Maps, Instagram, recomendaciones y búsquedas de marca.

La idea comercial central es:

> Una persona que encuentra a La Cruz debería poder decidir en segundos qué hacer, a qué sede ir y cómo comunicarse, sin tener que saltar entre redes, mapas y números de teléfono.

El diseño debe hacer visible esa mejora sin necesidad de explicarla demasiado.

## 2. Problema que resolvemos

- El dominio propio identificado existe, pero durante la investigación se observó en estado de reforma/mantenimiento.
- La información pública está repartida entre buscadores, redes, mapas y directorios.
- Una persona con intención alta puede necesitar varios pasos para encontrar ubicación, contacto o información general.
- La reputación del negocio no se aprovecha hoy dentro de una experiencia web propia diseñada para convertir.

La propuesta debe transformar esto en un recorrido simple: encontrar → entender → elegir sede → contactar/llegar.

## 3. Dirección estética

### Personalidad

- Moderna.
- Profesional.
- Cercana.
- Serena.
- Confiable.
- Local y accesible, no elitista.

### Evitar

- Estética infantil.
- Fondos excesivamente coloridos.
- Huellas decorativas repetidas.
- Ilustraciones caricaturescas como elemento principal.
- Sensación de pet shop genérico.
- Estética hospitalaria fría.
- Exceso de tarjetas, bordes y sombras.

### Paleta propuesta

- Marfil cálido: `#F7F3ED`
- Blanco: `#FFFFFF`
- Verde profundo / petróleo: `#164D46`
- Salvia: `#AEBFAF`
- Verde muy claro: `#E8EFEA`
- Grafito: `#20302D`
- Acento cálido discreto: `#D69A55`

El verde profundo se reserva para CTAs importantes, navegación y bloques de contraste. El marfil y blanco dominan la superficie. El acento cálido se usa poco.

### Tipografía

Combinar una sans serif moderna de alta legibilidad para interfaz con una serif editorial o una sans de personalidad moderada para titulares. Evitar tipografías demasiado lúdicas.

Prioridades:

- titulares con presencia;
- cuerpo de texto muy legible;
- botones grandes en móvil;
- números/direcciones fáciles de escanear.

## 4. Fotografía y assets

Los assets generados son conceptuales y propios de la demo. No representan instalaciones, profesionales ni pacientes reales de Veterinaria La Cruz.

Uso recomendado:

- `hero-vet-care.png`: hero principal.
- `reception-waiting.png`: sección de experiencia/atención cercana.
- `pet-products.png`: oferta comercial para mascotas.
- `small-animals-aquarium.png`: categorías públicas vinculadas con peces, aves y pequeños animales.
- `consultation-owner.png`: confianza y atención veterinaria integral.
- `location-concept.png`: solo como recurso conceptual si se etiqueta claramente; no presentarlo como fotografía de una sucursal real.

En producción, las fotografías reales/autorizadas del negocio podrían reemplazar estos assets sin cambiar la composición.

## 5. Arquitectura visual

### Header

Simple, aireado y sticky. Logo/nombre a la izquierda. En desktop: Servicios, Sedes, La Cruz, Preguntas. CTA destacado a la derecha. En móvil: menú compacto y barra de acciones persistente.

### Hero

Debe resolver la propuesta de valor en la primera pantalla.

Título:

**Cuidarlos también es estar cerca cuando lo necesitan.**

Texto secundario:

**Atención veterinaria y soluciones para el cuidado de tus animales en Montevideo.**

CTA principal preparado para WhatsApp, pero solo activar cuando exista número confirmado.

CTA secundario: **Ver sede** / **Ver sedes** según los datos finalmente confirmados.

Visual: fotografía a la derecha y espacio negativo a la izquierda para copy. En móvil, copy antes de la imagen.

### Franja de intención rápida

Cuatro accesos grandes:

- Hacer una consulta.
- Encontrar una sede.
- Comunicarme.
- Conocer la atención y productos.

La función es reducir pensamiento y llevar al usuario al siguiente paso.

### Oferta / servicios confirmados

No presentar actos médicos específicos no confirmados. Organizar únicamente categorías permitidas por `VERIFIED_DATA.md`:

- Atención veterinaria integral.
- Alimentos y productos para mascotas.
- Peces y acuarios.
- Aves y pequeños animales.

El diseño debe permitir añadir servicios concretos luego de que el negocio los confirme.

### Sedes

Componente escalable. Cada sede admite:

- nombre;
- dirección;
- teléfono;
- WhatsApp independiente;
- horario;
- mapa;
- cómo llegar.

En la versión inicial se muestra únicamente la dirección confirmada en `VERIFIED_DATA.md`. Codex no debe rellenar campos no confirmados.

### Confianza

No inventar reseñas. Preparar el bloque para:

- valoración pública verificada;
- volumen de opiniones verificado;
- integración visual futura con Google Reviews;
- enlace a opiniones externas.

Hasta verificar cifras recientes, usar copy cualitativo neutral o esconder métricas.

### Sobre La Cruz

Muy breve. Explicar que es una veterinaria de Montevideo con atención veterinaria integral y una oferta comercial para el cuidado de animales, basándose únicamente en información pública confirmada.

### FAQ

Solo preguntas operativas:

- cómo consultar;
- dónde se encuentran;
- cómo llegar;
- cómo conocer la oferta disponible.

Sin consejos médicos ni afirmaciones de horarios.

### CTA final

Fondo verde profundo, mensaje simple y humano, con acciones de contacto y ubicación.

## 6. UX mobile first

La versión móvil es prioritaria porque Google Maps, Instagram y WhatsApp probablemente generen una gran parte de las visitas con intención de contacto.

Implementar:

- CTAs de 48 px o más;
- navegación sticky ligera;
- barra inferior persistente con `Llamar | WhatsApp | Cómo llegar` solo cuando cada destino esté confirmado;
- scroll corto hasta información esencial;
- tarjetas de sede con acciones directas;
- ningún modal innecesario;
- imágenes responsivas y lazy loading fuera del hero.

## 7. Qué queremos ofrecerle al negocio

### Producto principal

Una web oficial rápida, moderna y administrable sobre su dominio existente, diseñada para transformar búsquedas y tráfico social en contactos y visitas a sede.

Incluye conceptualmente:

- rediseño completo;
- versión móvil prioritaria;
- estructura de servicios y categorías;
- sedes y mapas;
- contacto directo;
- conexión con WhatsApp cuando confirmen números;
- reputación pública;
- SEO local técnico y semántico;
- analítica de conversiones;
- performance y accesibilidad;
- migración/publicación en su dominio.

### Extensiones opcionales

No deben darse por necesarias; se presentan como posibilidades si encajan con su operativa:

- catálogo o tienda online;
- pedidos/delivery;
- formularios de consulta;
- solicitud de hora o integración con agenda existente;
- automatización de consultas frecuentes;
- mantenimiento y actualización mensual;
- panel simple para editar sedes, horarios, servicios y avisos;
- medición de clics a WhatsApp, llamadas y “Cómo llegar”.

## 8. Qué NO vender

No prometer que la web por sí sola garantiza posiciones #1 en Google, más pacientes o determinado retorno económico. La venta debe basarse en reducción de fricción, mejor presencia, mayor control del canal propio y capacidad de medir conversiones.

## 9. Implementación para Codex

`index.html` es un blueprint funcional y semántico, no necesariamente la arquitectura final. Codex puede convertirlo a Next.js/React u otra stack moderna conservando:

- jerarquía de contenido;
- tokens visuales;
- orden de secciones;
- restricciones de datos;
- rutas de assets;
- accesibilidad;
- comportamiento mobile first.

Antes de conectar CTAs externos, Codex debe revisar `AGENTS.md` y `docs/VERIFIED_DATA.md`.
