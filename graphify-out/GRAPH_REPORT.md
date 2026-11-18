# Graph Report - .  (2026-11-18)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 98 nodes · 168 edges · 10 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1ed85897`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- Codice.jsx
- App.jsx
- Layout.jsx
- Hero.jsx
- Reveal.jsx
- devDependencies
- BoletinAlba.jsx

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 11 edges
2. `SectionTag()` - 6 edges
3. `scripts` - 5 edges
4. `GoldRule()` - 5 edges
5. `useSpotlight()` - 5 edges
6. `IconStar()` - 4 edges
7. `useReveal()` - 4 edges
8. `BoletinAlba()` - 3 edges
9. `Codice()` - 3 edges
10. `EmbersTransition()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `EntradaCard()` --calls--> `useSpotlight()`  [EXTRACTED]
  src/components/Codice.jsx → src/hooks/useSpotlight.js
- `BoletinAlba()` --calls--> `useSpotlight()`  [EXTRACTED]
  src/components/BoletinAlba.jsx → src/hooks/useSpotlight.js
- `Reveal()` --calls--> `useReveal()`  [EXTRACTED]
  src/components/Reveal.jsx → src/hooks/useReveal.js

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.13
Nodes (14): dependencies, framer-motion, react, react-dom, react-router-dom, name, private, scripts (+6 more)

### Community 1 - "Codice.jsx"
Cohesion: 0.25
Nodes (9): CAPITULOS, Codice(), ElMundo(), IconDiamond(), IconSeal(), IconStar(), IconSwords(), SectionTag() (+1 more)

### Community 2 - "App.jsx"
Cohesion: 0.21
Nodes (8): App(), LosPersonajes(), Arkenor(), CodicePage(), Heroes(), Meibel(), NotFound(), Pirocles()

### Community 3 - "Layout.jsx"
Cohesion: 0.22
Nodes (8): EmbersTransition(), generateParticles(), Footer(), Layout(), NavBar(), contentVariants, PageTransition(), veilVariants

### Community 4 - "Hero.jsx"
Cohesion: 0.21
Nodes (7): Embers(), particles, Hero(), LeyLines(), LINEAS, NODOS, Inicio()

### Community 5 - "Reveal.jsx"
Cohesion: 0.44
Nodes (4): GoldRule(), Reveal(), prefersReducedMotion(), useReveal()

### Community 6 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (+2 more)

### Community 7 - "BoletinAlba.jsx"
Cohesion: 0.36
Nodes (5): BoletinAlba(), TODO: conectar a un proveedor real (Formspree/Mailchimp/Brevo) antes de publicar, EntradaCard(), useSpotlight(), Vigilia()

## Knowledge Gaps
- **26 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reveal()` connect `Reveal.jsx` to `Codice.jsx`, `App.jsx`, `Hero.jsx`, `BoletinAlba.jsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._