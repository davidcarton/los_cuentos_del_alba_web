# Pulido visual y UX — Los Cuentos del Alba

## Contexto

Revisión de `src/` detectó varios bugs funcionales y oportunidades de pulido visual.
El sitio es una landing de fantasía épica (React + Vite + HashRouter) con paleta
oscura dorado/ascua, tipografías `Uncial Antiqua` (títulos), `Cinzel` (UI/labels) y
`EB Garamond` (cuerpo), partículas de ascuas y textura de grano.

Objetivo: corregir los bugs y elevar la sensación "profesional" mediante pulido
visual y de UX, **manteniendo la estética de fantasía oscura existente**, sin añadir
páginas ni secciones de contenido nuevas.

Dirección visual elegida: **"Manuscrito Refinado"** — revelado en cascada al hacer
scroll, marcos ornamentales en esquina sobre las imágenes, separadores con línea
dorada y gema (`GoldRule`), navbar con cristal esmerilado desde el inicio.

## Alcance

### 1. Corrección de bugs

- **Estilos de identidad de personaje rotos en páginas individuales**: las clases
  `.personaje-epiteto`, `.personaje-sobriquet`, `.personaje-rule` se usan en
  `src/pages/Arkenor.jsx`, `Meibel.jsx`, `Pirocles.jsx` pero solo están definidas en
  `src/styles/LosPersonajes.css` (no importado por esas páginas). Se extraen a un
  parcial nuevo `src/styles/PersonajeIdentidad.css`, importado tanto por
  `LosPersonajes.css`/`LosPersonajes.jsx` (vía `PaginaPersonaje.css` o import
  directo) como por `PaginaPersonaje.css`.

- **Navegación rota por conflicto con `HashRouter`**: `<a href="#mundo">` y
  `<a href="#heroes">` en `NavBar.jsx` cambian el hash de la URL, que `HashRouter`
  interpreta como una ruta (`/mundo`, `/heroes`) sin `<Route>` correspondiente →
  página en blanco. Se sustituyen por navegación programática (scroll suave a los
  `id` de sección, navegando primero a `/` si se está en otra página).

- **Enlace "Galería" roto**: `<Link to="/galeria">` no tiene ruta definida en
  `App.jsx`. Se elimina del menú (redundante una vez que "Los Héroes" enlaza
  correctamente a la sección de personajes).

- **Botones del Hero sin acción**: "Leer el Primer Capítulo" y "Conocer el Mundo"
  no tienen `onClick`. Se reetiquetan y conectan a la navegación por scroll:
  - Botón dorado: **"Descubre el Mundo"** → scroll a `#mundo` (sección "El Mundo").
  - Botón fantasma: **"Conoce a los Guardianes"** → scroll a `#heroes` (sección
    "Los Guardianes del Alba").

- **Limpieza de código muerto**: eliminar `src/App.css` e `src/index.css` (vacíos,
  no importados), la variable `--light-dawn` en `variables.css` (sin uso), y
  `src/assets/react.svg` (sin uso). El componente `GoldRule` deja de ser código
  muerto: se integra como separador decorativo (ver sección 3).

### 2. Navegación

- `NavBar.jsx` pasa a tener 3 enlaces: **Inicio · El Mundo · Los Héroes**.
  - "Inicio" sigue siendo `<Link to="/">`.
  - "El Mundo" y "Los Héroes" son botones. Si `location.pathname === "/"`, hacen
    `document.getElementById("mundo"|"heroes").scrollIntoView({behavior:
    "smooth"})` directamente. Si no, navegan con
    `navigate("/", { state: { scrollTo: "mundo"|"heroes" } })`; `Inicio.jsx` lee
    `location.state?.scrollTo` en un `useEffect`, hace `scrollIntoView` sobre ese
    `id` tras el montaje y limpia el estado con
    `navigate(".", { replace: true, state: {} })`.
- Las secciones `<section className="elmundo">` y `<section className="personajes">`
  reciben `id="mundo"` e `id="heroes"` respectivamente.
- **Menú móvil**: se añade un botón hamburguesa (visible solo en `max-width: 768px`,
  donde hoy `.navbar-links` se oculta sin alternativa). Al pulsarlo despliega un
  panel bajo la navbar con los mismos 3 enlaces, estilizado con la paleta/textura
  existente (fondo `var(--ink)` con borde dorado sutil, misma tipografía
  `Cinzel` de los enlaces de escritorio). Se cierra al navegar o volver a pulsar.

### 3. Dirección visual "Manuscrito Refinado"

- **Revelado en scroll**: hook `src/hooks/useReveal.js` basado en
  `IntersectionObserver` que añade una clase `is-visible` cuando el elemento entra
  en el viewport (una sola vez). Componente envoltorio `src/components/Reveal.jsx`
  que acepta `delay` (ms) para escalonar animaciones (`animation-delay` o
  `transition-delay`). Aplicado a:
  - Hero: eyebrow, título, subtítulo, sinopsis y CTAs (cascada al cargar la página).
  - "El Mundo": imagen y bloque de texto.
  - "Los Guardianes": cabecera y cada tarjeta de personaje (delay incremental).
  - Páginas de personaje: imagen y bloque de biografía.
  - Animación: `opacity 0 → 1` + `translateY(16px) → 0`, ~600ms ease-out.
  - Respeta `prefers-reduced-motion: reduce` (sin animación, contenido visible
    directamente).

- **Marcos ornamentales**: nueva clase utilitaria `.ornate-frame` (esquinas en
  ángulo dorado, ya prototipadas en el mockup) aplicada a:
  - Imagen del Hero (`.hero-image img`)
  - Imagen de "El Mundo" (`.elmundo-imagen img`)
  - Imagen de las páginas de personaje (`.pag-personaje-imagen img`)

- **Separadores `GoldRule`**: el componente `GoldRule` (ya existente, hoy sin uso)
  se renderiza:
  - Entre `<Hero />` y `<ElMundo />` en `Inicio.jsx`.
  - Entre `<ElMundo />` y `<LosPersonajes />` en `Inicio.jsx`.
  - En las páginas de personaje individuales, sustituye al `<div
    className="personaje-rule">` (que se mantiene tal cual en las tarjetas de
    `LosPersonajes`, donde el espacio es más reducido).

- **Navbar**: fondo con `backdrop-filter: blur` y `background:
  rgba(8,6,4,0.4)` desde el inicio (no solo tras `scrolled`), con una línea
  inferior dorada muy sutil (`border-bottom: 1px solid rgba(200,164,90,0.08)`).
  El estado `.scrolled` mantiene su mayor opacidad/blur actuales.

- **Botones**: `clip-path` con esquina recortada más sutil (de 10px a 6px),
  aplicado de forma consistente en `.btn` (Hero, CTA de "Volver" en páginas de
  personaje).

## Fuera de alcance

- Páginas/secciones nuevas (galería, autor, reseñas, newsletter, etc.).
- Cambios de identidad de marca (logo, favicon, metadatos).
- Reestructuración de rutas o cambio de `HashRouter` a `BrowserRouter`.

## Plan de verificación

- `npm run dev` y revisión manual en viewport de escritorio y móvil (≤768px):
  - Navegación: enlaces de "El Mundo"/"Los Héroes" funcionan desde `/` y desde
    páginas de personaje; menú hamburguesa abre/cierra en móvil.
  - Botones del Hero hacen scroll a las secciones correctas.
  - Páginas de personaje muestran epíteto/sobriquet/línea con estilo correcto.
  - Animaciones de revelado se disparan al hacer scroll y respetan
    `prefers-reduced-motion`.
- `npm run lint` sin errores nuevos.
