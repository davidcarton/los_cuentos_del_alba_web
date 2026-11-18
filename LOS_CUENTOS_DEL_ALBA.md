# Los Cuentos del Alba — Web

Web promocional de la novela de fantasía épica *Los Cuentos del Alba — Guardianes del Alba* (mundo: Terra Oblita). Objetivo: presentar el mundo, el Códice y los tres Guardianes, y captar correos para "La Vigilia".

## Stack y despliegue

- React 19 + Vite 7, `react-router-dom` 7 (**HashRouter**), `framer-motion` para transiciones. Sin TypeScript, sin Tailwind.
- `vite.config.js` fija `base: "/los_cuentos_del_alba_web/"`.
- Despliegue: GitHub Pages por GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`; publica `dist/`. Remoto: `git@github.com:davidcarton/los_cuentos_del_alba_web.git`.
- Desarrollo: `npm run dev`, `npm run build`, `npm run lint`.

## Rutas (`src/App.jsx`)

Todas cuelgan de `Layout` (NavBar + `PageTransition` con brasas + Footer).

| Ruta | Página | Componente |
| --- | --- | --- |
| `/` | `Inicio` | `Hero` |
| `/mundo` | `Mundo` | `ElMundo` |
| `/codice` | `CodicePage` | `Codice` (pestañas: La Luz, La Sombra, Los Pueblos, Razas; datos en la constante `CAPITULOS`) |
| `/heroes` | `Heroes` | `LosPersonajes` |
| `/heroes/arkenor`, `/meibel`, `/pirocles` | fichas de personaje | comparten `PaginaPersonaje.css` |
| `/vigilia` | `Vigilia` | `BoletinAlba` (formulario de correo) |
| `*` | `NotFound` | |

Las páginas son envoltorios finos: la lógica y el contenido viven en `src/components/`.

## Estilos

- Un `.css` por componente en `src/styles/`, más `global.css` (reset, `.reveal`, `.spotlight-card`, `.ornate-frame`, foco) y `variables.css`.
- Marca (conservar): paleta oro/ascua sobre negro (`--gold`, `--ember`, `--ink`, `--parch`…) y tipografías Uncial Antiqua (títulos), Cinzel (UI) y EB Garamond (cuerpo), cargadas desde Google Fonts en `variables.css`.
- Hooks: `useReveal` (revelado al hacer scroll) y `useSpotlight` (halo bajo el cursor en tarjetas).

## Pendientes conocidos

- `BoletinAlba.jsx`: el envío es simulado (`setTimeout`), hay un `TODO` para conectar Formspree/Mailchimp/Brevo antes de publicar de verdad.
- `README.md` sigue siendo la plantilla de Vite.
- Los botones "Volver" de las fichas de personaje llevan `style` inline; debería ir a CSS.
- Auditoría de diseño del 2026-11-18 (Hallmark, solo lectura, no se aplicó nada): 110 FAIL / 3 REFLEX / 15 WARN del linter. Lo principal: texto con degradado en el título del hero, etiquetas en mayúsculas con tracking, `transition: all` en 3 sitios, 83 colores literales fuera de tokens, `.reveal` oculto sin JavaScript, `overflow-x: hidden` en `body`, `100vh` en el hero, sin estilo `:disabled` en el botón de envío, rayas "—" en el copy. Decisión del usuario: dejarlo, no rediseñar por ahora.

## Grafo de código

`graphify-out/` (98 nodos, 168 aristas, 10 comunidades), generado con `graphify extract . --code-only`. Las comunidades están sin nombrar ("Community N") porque el etiquetado por LLM falló con la clave de OpenRouter. Actualizar con `graphify update .` tras tocar código.
