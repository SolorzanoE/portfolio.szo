# Documentación técnica del portafolio

Este documento explica la arquitectura, las decisiones técnicas y la forma de evolución del portafolio profesional de Eduardo Solórzano. Está dirigido a cualquier persona que deba mantener, revisar o ampliar el proyecto sin tener que reconstruir su contexto a partir de cada componente.

## 1. Resumen del sistema

El proyecto es una aplicación web de una sola página —SPA, *Single Page Application*— construida con React y Vite. Su función principal es presentar información profesional, experiencia, proyectos, tecnologías y canales de contacto.

La capa de presentación se compila junto con el contenido y se entrega como archivos estáticos. El despliegue está preparado para Vercel, por lo que el tráfico normal puede servirse desde una CDN sin ejecutar lógica de negocio por cada visita.

```text
Navegador
   │
   ├── index.html       Metadatos, fuentes y punto de montaje
   ├── assets estáticos  Imágenes, iconos y recursos generados
   └── JavaScript        Bundle producido por Vite
           │
           ▼
      src/main.jsx
           │
           ├── ErrorBoundary
           ├── ThemeProvider de Material UI
           ├── DesignSystemProvider
           └── App
                  ├── Header / Drawer
                  ├── Home
                  ├── AboutMe
                  ├── Experience
                  ├── Project
                  ├── Technology
                  ├── Contact
                  └── Footer
```

### Características principales

| Aspecto | Decisión actual |
| --- | --- |
| Modelo de aplicación | SPA estática, sin router ni backend propio |
| Framework | React 19 |
| Bundler y servidor local | Vite 7 |
| Componentes visuales | Material UI 7 |
| Estilos dinámicos | Emotion mediante `sx` y tema MUI |
| Animaciones | Framer Motion, respetando `prefers-reduced-motion` |
| Contenido | Módulos JavaScript estáticos en `src/data/` |
| Hosting previsto | Vercel |
| Seguridad de edge | Headers definidos en `vercel.json` |
| Pruebas | Node Test Runner, Vitest y Testing Library |

## 2. Estructura del repositorio

```text
portfolio.szo/
├── docs/                         Documentación técnica
│   └── README.md
├── .github/workflows/ci.yml      Validación automática del repositorio
├── public/                       Recursos servidos con ruta absoluta
│   ├── brand-icon-dark.svg
│   ├── brand-icon-light.svg
│   ├── og-image.png
│   └── vite.svg
├── scripts/
│   └── generate-og-image.py      Generación de la imagen Open Graph
├── src/
│   ├── assets/                   Imágenes procesadas por Vite
│   ├── components/               Componentes reutilizables
│   ├── context/                  Estado transversal del design system
│   ├── data/                     Contenido estructurado del portafolio
│   ├── design-system/            Tema, tokens y reglas visuales
│   ├── modules/                  Funcionalidades y secciones de la página
│   ├── App.jsx                   Composición principal
│   └── main.jsx                  Punto de entrada de React
├── test/                         Pruebas automatizadas
├── app.css                       Estilos globales
├── config.js                     URLs y datos públicos del sitio
├── index.html                    Shell HTML y metadatos SEO/social
├── jsconfig.json                 Alias de importación del editor/bundler
├── package.json                  Scripts y dependencias
├── package-lock.json             Resolución reproducible de dependencias
├── vercel.json                   Headers de seguridad del despliegue
├── vite.config.js                Configuración de Vite
└── vitest.config.js              Configuración de pruebas de interfaz
```

### `public/` frente a `src/assets/`

Los recursos de `public/` se sirven directamente desde la raíz del dominio. Se usa para iconos de marca, la imagen Open Graph y otros archivos que deben conservar una URL estable, por ejemplo `/brand-icon-light.svg`.

Los recursos de `src/assets/` son importados desde JavaScript. Vite los copia al directorio de distribución, les asigna nombres con hash y permite que el navegador los descargue como recursos versionados. Las imágenes de proyectos y tecnologías siguen este modelo.

## 3. Ciclo de ejecución

### 3.1 Entrada HTML

`index.html` define:

- `lang="es"`, viewport y título.
- Descripción, canonical URL, robots y metadatos Open Graph/Twitter.
- Colores de tema para los modos claro y oscuro.
- Preconexión y carga de las fuentes de Google Fonts.
- `<div id="root">`, donde React monta la aplicación.
- El módulo `/src/main.jsx` como script de entrada.

El HTML funciona como *application shell*: contiene la estructura mínima necesaria para iniciar React. El contenido principal se construye después de ejecutar JavaScript.

### 3.2 Montaje de React

`src/main.jsx` usa `createRoot` de `react-dom/client` y compone los proveedores en este orden:

1. `ErrorBoundary`: muestra una recuperación controlada si falla el renderizado de la aplicación.
2. `ThemeProvider`: habilita el tema de Material UI y el modo claro/oscuro del sistema.
3. `Suspense` alrededor de Analytics: la integración de analítica se carga con `lazy` y no bloquea el árbol principal.
4. `CssBaseline`: normaliza estilos base de Material UI.
5. `DesignSystemProvider`: expone los tokens resueltos al resto de componentes.
6. `App`: renderiza la página.

### 3.3 Composición de `App`

`App.jsx` crea el lienzo global, aplica el color de fondo desde el design system y establece el `Container` responsive de Material UI. Las secciones se renderizan en un único documento y se identifican mediante anchors:

```text
#home → #about-me → #experience → #project → #technology → #contact
```

El `Header` usa esos mismos identificadores para la navegación de escritorio y para el `Drawer` móvil. Esta elección mantiene la navegación alineada con la estructura de una sola página.

## 4. Organización de componentes

### Componentes compartidos

- `components/SectionHeader.jsx`: encabezados de sección con eyebrow y título.
- `components/Footer.jsx`: cierre de la página y enlaces finales.
- `components/ErrorBoundary.jsx`: fallback global para errores de renderizado.
- `components/motion/MotionFade.jsx`: envoltura reutilizable para animaciones al entrar en el viewport.

### Módulos de navegación

- `modules/Header.jsx`: marca, navegación, cambio de tema y apertura del menú móvil.
- `modules/drawer/Drawer.jsx`: navegación lateral para pantallas pequeñas.

### Secciones

- `sections/home/Home.jsx`: presentación, rol profesional, imagen de perfil y llamados a la acción.
- `sections/about-me/AboutMe.jsx`: descripción personal y capacidades.
- `sections/experience/Experience.jsx`: línea temporal de experiencia y tarjetas de cada etapa.
- `sections/project/Project.jsx`: listado de proyectos.
- `sections/project/ProjectCard.jsx`: representación visual de un proyecto y sus enlaces.
- `sections/technology/Technology.jsx`: filtro por área y cuadrícula de tecnologías.
- `sections/technology/TechnologyChip.jsx`: control reutilizable del filtro.
- `sections/contact/Contact.jsx`: contacto por correo, GitHub y LinkedIn.

## 5. Design system

El sistema visual se denomina **Scandinavian Editorial**. Busca una interfaz monocromática, espaciosa y tipográficamente expresiva, con movimiento contenido.

### Capas de tokens

Los tokens son valores nombrados que evitan que cada componente invente colores, tipografías o geometrías de forma independiente.

1. `tokens/colors.js`
   - Primitivos: blancos, negros, escala zinc, colores de estado y transparencias.
   - Semánticos: `canvas`, `surface`, `text`, `border`, `interactive`, `accent`, `status`, `overlay`, `shadows`.
   - Variantes `light` y `dark`.
   - Aliases de compatibilidad como `primaryInk`, `border` y `pressedFill`.

2. `tokens/typography.js`
   - Familias `display`, `body`, `editorial` y `mono`.
   - Escala de tamaños, pesos, tracking y alturas de línea.

3. `tokens/layout.js`
   - Radios, espaciado, duraciones de transición y anchos máximos de lectura.

4. `tokens/index.js`
   - Combina color, layout y tipografía mediante `getDesignTokens(mode)`.

5. `design-system/theme.js`
   - Traduce los tokens al formato esperado por Material UI: `palette`, `typography`, `components`, `shape` y `transitions`.

### `ThemeProvider` y `DesignSystemProvider`

Material UI controla el modo global mediante `useColorScheme`. `DesignSystemProvider` resuelve el modo efectivo —claro, oscuro o el modo del sistema operativo— y memoiza el objeto de tokens para que los consumidores no reciban un objeto nuevo en cada render.

Hay dos consumidores complementarios:

- El tema MUI sirve para componentes de Material UI y sus variantes estándar.
- `useDesignSystem()` sirve para decisiones visuales propias de esta interfaz, por ejemplo un `accent`, una sombra editorial o una separación de contenido.

El contrato importante es que `tokens.accent` permanece estructurado:

```js
tokens.accent.main
tokens.accent.contrast
tokens.accent.hover
tokens.accent.glow
```

El alias plano, si se necesita, es `tokens.accentColor`. No se debe sobrescribir `accent` con una cadena porque los componentes dependen de sus propiedades internas.

### Tipografía

Las fuentes se cargan en `index.html`:

- **Inter Tight**: títulos y navegación.
- **Inter**: lectura general.
- **Instrument Serif**: acentos editoriales.
- **JetBrains Mono**: etiquetas técnicas, fechas y microcopy.

La fuente de verdad para nuevas decisiones tipográficas es `typographyTokens`, no una nueva familia declarada dentro de un componente.

## 6. Datos y contenido

El contenido se mantiene como módulos JavaScript versionados, con contratos JSDoc comprobados mediante `checkJs`.

- `dataSection.js`: ids y nombres de navegación.
- `dataExperience.js`: empresa, fechas, descripción y tecnologías de cada experiencia.
- `dataProject.js`: título, descripción, imagen, tecnologías y repositorio opcional.
- `dataTechnologies.js`: tecnologías agrupadas por área, con iconos para modo claro/oscuro y reglas opcionales de inversión.
- `config.js`: URL del sitio, GitHub, LinkedIn y correo público.

### Fechas

Las fechas de experiencia se crean como objetos `Date` y se formatean en `ExperienceCard` para la localización española.

### Agregar un proyecto

1. Añadir la imagen optimizada en `src/assets/projects/`.
2. Importarla en `src/data/dataProject.js`.
3. Añadir un objeto con `title`, `description`, `image` y `technologies`.
4. Incluir `repoUrl` o `demoUrl` solo si existe un destino real.
5. Ejecutar lint, pruebas y build.

Los textos pasan por interpolación JSX, que mantiene el escape por defecto de React. No se debe introducir HTML crudo para resolver formato de contenido.

### Agregar una tecnología

1. Colocar el recurso en la carpeta temática correspondiente de `src/assets/technologies/`.
2. Importarlo con `?no-inline` para mantenerlo como archivo externo y evitar inflar el JavaScript con SVG embebido.
3. Añadir la entrada al grupo correspondiente de `dataTechnologies.js`.
4. Usar `imageDark` cuando los colores requieran una variante para modo oscuro.
5. Usar `invertOnDark` solo cuando el recurso sea compatible con inversión visual.

## 7. Estado e interacción

La aplicación usa estado local de React porque sus interacciones son acotadas:

- `Header`: estado de apertura del drawer.
- `Technology`: área seleccionada del filtro.
- Material UI: modo de color.
- Framer Motion: estado visual de entrada y presencia de elementos.

El estado se mantiene local a los módulos que lo utilizan y el contexto transversal se reserva para el tema y los tokens visuales. Esta separación evita acoplar interacciones independientes.

La navegación usa enlaces `href="#id"` en vez de un router. Esto permite deep links sencillos dentro de la página y mantiene la navegación alineada con la estructura de una sola página.

## 8. Animación y accesibilidad

Framer Motion se usa para:

- Entradas progresivas con `MotionFade`.
- Reordenamiento del grid de tecnologías.
- Estados de presencia al filtrar.

Los componentes consultan `useReducedMotion()` para desactivar o reducir transformaciones cuando el usuario lo solicita en el sistema operativo. Toda nueva animación debe conservar ese comportamiento.

Los controles importantes incluyen `aria-label`, `aria-pressed` o `role="alert"` cuando corresponde. Los enlaces externos usan `target="_blank"` junto con `rel="noreferrer"`. Al agregar controles, conservar foco visible, navegación por teclado y nombres accesibles.

## 9. Seguridad

### Superficie actual

La aplicación trabaja con contenido controlado en módulos locales, enlaces externos definidos y renderizado JSX con escape por defecto de React. Esta composición mantiene una superficie operativa pequeña y predecible.

Los valores de `config.js` son públicos por diseño: URLs, correo y enlaces de redes. Nunca se deben colocar secretos, contraseñas, tokens privados o credenciales en `src/`, `public/` ni variables `VITE_*` que terminen en el bundle.

### Headers de despliegue

`vercel.json` declara:

- `Content-Security-Policy`: limita scripts al propio origen, permite las fuentes necesarias y el endpoint de métricas.
- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY` y `frame-ancestors 'none'` para evitar incrustación no deseada.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` que deshabilita cámara, geolocalización y micrófono.

La política permite `unsafe-inline` únicamente para estilos porque Emotion/MUI inyecta estilos en runtime. No se permite `unsafe-eval` ni scripts inline. Después de desplegar, se debe verificar la política con una respuesta real y comprobar que Google Fonts, MUI y Analytics continúan funcionando.

### Script de Open Graph

`scripts/generate-og-image.py` descarga una captura externa para `public/og-image.png`. La operación está acotada por:

- timeout de red;
- máximo de 10 MB;
- firma binaria PNG;
- archivo temporal;
- reemplazo atómico solo después de validar.

La URL es constante y el script se ejecuta manualmente o desde una tarea de generación, manteniendo el proceso aislado de entradas externas.

## 10. Rendimiento y escalabilidad

La entrega se apoya en archivos estáticos procesados por Vite y puede distribuirse mediante CDN. La arquitectura no ejecuta lógica de negocio por visita, por lo que el crecimiento del tráfico se concentra en la distribución y la caché de recursos.

Las decisiones de carga actuales son:

- imágenes de proyectos y tecnologías con `loading="lazy"` y `decoding="async"`;
- iconos SVG importados con `?no-inline` para conservarlos como archivos externos;
- iconos de Claude y Gemini en WebP, reduciendo el peso de sus recursos frente al PNG original;
- nombres con hash para assets importados desde `src/assets`;
- Analytics cargado mediante `React.lazy`;
- animaciones con Framer Motion y soporte para `prefers-reduced-motion`.

La incorporación de una sección sigue el modelo de composición de `App.jsx`. El contenido se mantiene independiente en `src/data/`, de manera que agregar proyectos, experiencias o tecnologías no exige mezclar datos con la estructura visual.

Para ampliar el portafolio con páginas de detalle, el modelo de contenido puede reutilizarse con rutas dedicadas y generación estática. Para catálogos extensos, la misma información puede alimentar paginación, búsqueda o un origen de contenido validado.

## 11. Seguridad y calidad en el ciclo de cambios

Los comandos disponibles en `package.json` son:

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor Vite para desarrollo |
| `npm run build` | Compilación de producción en `dist/` |
| `npm run preview` | Servir localmente el build de producción |
| `npm run lint` | ESLint sobre JavaScript y JSX |
| `npm test` | Contratos con Node Test Runner y pruebas de interacción con Vitest |
| `npm run test:contracts` | Prueba directa de contratos de datos y tokens |
| `npm run test:unit` | Pruebas de interfaz con Vitest, JSDOM y Testing Library |
| `npm run typecheck` | Validación estática JSDoc mediante TypeScript y `checkJs` |
| `npm run og:generate` | Actualizar la imagen Open Graph |

Antes de entregar cambios se recomienda ejecutar:

```bash
npm ci
npm test
npm run typecheck
npm run lint
npm run build
```

`npm ci` usa el lockfile y evita resolver una combinación distinta de dependencias en automatizaciones. El proyecto declara Node `^20.19.0 || >=22.12.0`.

El workflow `.github/workflows/ci.yml` ejecuta instalación reproducible, pruebas, validación estática, lint y build en cambios dirigidos a `main`.

## 12. Decisiones arquitectónicas

### D-001 — SPA estática y contenido compilado

**Decisión:** compilar el contenido al frontend y servirlo desde CDN.

**Motivo:** el portafolio es mayormente lectura, no necesita sesiones ni datos dinámicos y se beneficia de una infraestructura sencilla.

### D-002 — Material UI + Emotion

**Decisión:** usar Material UI como base de componentes y Emotion para estilos.

**Motivo:** aporta accesibilidad, responsive behavior, componentes probados y un sistema de tema.

### D-003 — Tokens propios encima del tema MUI

**Decisión:** mantener tokens semánticos propios y traducirlos al tema MUI.

**Motivo:** el diseño editorial necesita conceptos como `accent`, `surfaceSubtle`, `quote` y geometría propia que no caben únicamente en la paleta estándar.

### D-004 — Estado local y navegación por anchors

**Decisión:** usar `useState`, contexto limitado al tema y navegación por anchors.

**Motivo:** evita infraestructura de estado y routing innecesaria para una única página.

### D-005 — Assets versionados por Vite

**Decisión:** importar imágenes desde `src/assets` y usar `public/` solo para URLs estables.

**Motivo:** los nombres con hash facilitan la invalidación de caché y evitan servir recursos obsoletos después de un despliegue.

### D-006 — Headers en configuración de Vercel

**Decisión:** declarar la política de seguridad en `vercel.json`.

**Motivo:** los headers HTTP son más completos que una meta etiqueta CSP y deben aplicarse desde el edge.

### D-007 — Contenido versionado en el repositorio

**Decisión:** conservar el contenido en módulos JavaScript.

**Motivo:** el contenido editorial se revisa junto con el código, mantiene historial de cambios y se publica mediante el mismo proceso de build.

## 13. Convenciones de mantenimiento

### Nombres y módulos

- Los componentes React usan PascalCase y nombres semánticos en inglés: `Experience`, `Project`, `ExperienceCard` y `ProjectCard`.
- Los módulos de contenido usan nombres descriptivos: `dataExperience`, `dataProject`, `dataTechnologies` y `dataSection`.
- La navegación se deriva de `dataSection` para mantener un único origen de ids y etiquetas.

### Contratos estáticos

- Los modelos de contenido se declaran con JSDoc en el mismo módulo que los exporta.
- `jsconfig.json` habilita `allowJs`, `checkJs`, `moduleResolution: "Bundler"` y `noEmit`.
- `npm run typecheck` valida componentes, datos, configuración de Vite y pruebas compatibles con el entorno.
- Los contratos compartidos deben actualizarse junto con sus consumidores y su prueba correspondiente.

### Assets y pruebas

- Usar WebP para imágenes rasterizadas de interfaz cuando conserve la calidad visual.
- Usar SVG para iconos vectoriales y `?no-inline` cuando el recurso deba mantenerse fuera del bundle.
- Marcar imágenes no críticas con `loading="lazy"` y `decoding="async"`.
- Probar comportamiento observable, como filtros y navegación, mediante Testing Library.
- Ejecutar `npm test`, `npm run typecheck`, `npm run lint` y `npm run build` antes de integrar cambios.

Las decisiones futuras deben conservar tres propiedades: contenido seguro por defecto, carga inicial razonable y una única fuente de verdad para las reglas visuales.

## 14. Glosario

- **SPA:** aplicación que carga un shell inicial y actualiza la interfaz sin navegar entre documentos completos.
- **CDN:** red distribuida que entrega archivos desde ubicaciones cercanas al usuario.
- **Bundle:** archivo generado que contiene código JavaScript agrupado para el navegador.
- **Tree shaking:** eliminación de exports no utilizados durante la compilación.
- **Code splitting:** división del bundle en chunks que pueden cargarse por separado.
- **Token de diseño:** valor nombrado y reutilizable para color, tipografía, espaciado o movimiento.
- **Token semántico:** token cuyo nombre describe su función, como `text.primary` o `accent.main`, no solo su color bruto.
- **ThemeProvider:** proveedor React de Material UI que distribuye tema y esquema de colores.
- **Context:** mecanismo de React para compartir valores sin pasar props manualmente por toda la jerarquía.
- **Memoización:** reutilización de un valor calculado mientras sus dependencias no cambien.
- **Error Boundary:** componente de React que intercepta errores de renderizado de sus descendientes y muestra un fallback.
- **CSP:** Content Security Policy; política del navegador que limita orígenes y tipos de recursos ejecutables.
- **SRI:** Subresource Integrity; validación por hash de recursos externos.
- **Open Graph:** metadatos usados por redes sociales y mensajería para construir vistas previas.
- **Core Web Vitals:** métricas de experiencia web como carga, interacción y estabilidad visual.
- **`prefers-reduced-motion`:** preferencia del sistema para reducir animaciones por accesibilidad.
- **SSR:** Server-Side Rendering; generación del HTML inicial desde un servidor.
- **Prerenderizado/SSG:** generación anticipada de HTML estático durante el build.
- **CDN cache invalidation:** proceso de sustituir recursos almacenados cuando se publica una nueva versión.

## 15. Referencias internas

- [README principal](../README.md)
- [Configuración pública](../config.js)
- [Design system](../src/design-system/)
- [Datos del portafolio](../src/data/)
- [Pruebas](../test/)
