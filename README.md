<div align="center">

# Eduardo Solórzano — Portfolio

**Portafolio Web Profesional · Full Stack Engineer**  
*Diseñado bajo la filosofía Scandinavian Editorial Design System y principios cognitivos de Laws of UX.*

[![React](https://img.shields.io/badge/React-19.2-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/Material_UI-7.3-007FFF?style=flat&logo=mui&logoColor=white)](https://mui.com/)
[![Design System](https://img.shields.io/badge/Design_System-Scandinavian_Editorial-000000?style=flat)](https://github.com/SolorzanoE/portfolio.szo)
[![Site Looker Atter](https://img.shields.io/badge/Visual_Snapshot-Site_Looker_Atter-2b2620?style=flat&logo=safari&logoColor=white)](https://sitelookeratter.com)
[![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG_AA_Pass-success?style=flat)](https://www.w3.org/WAI/standards-guidelines/wcag/)

<br />

[![Eduardo Solórzano - Portafolio](https://api.sitelookeratter.com/screenshot?url=https://solorzanoszo.vercel.app&dark=true&scale=2)](https://solorzanoszo.vercel.app)

<sub>Captura en tiempo real generada automáticamente con [Site Looker Atter](https://sitelookeratter.com) desde el despliegue en producción</sub>

<br />

[Ver Portafolio en Vivo](https://solorzanoszo.vercel.app)

</div>

---

## Visión General

Este repositorio contiene el portafolio profesional de **Eduardo Solórzano**, Ingeniero de Software Full Stack. La interfaz fue construida desde cero priorizando la sobriedad, la excelencia tipográfica y la legibilidad absoluta, fusionando la estética nórdica con fundamentos de psicología visual humana.

---

## Sistema de Diseño: Scandinavian Editorial

El diseño se rige de forma exclusiva por la variante **Editorial** del sistema de diseño escandinavo:

* **Paleta Monocromática Estricta**: Sin saturaciones innecesarias ni degradados ruidosos en los contenedores. Fondo claro `#FFFFFF` y fondo oscuro neutral `#0A0A0A` con superficies `#121212`.
* **Tipografía con Contraste Editorial**:
  * *Instrument Serif* (Italic): Utilizada en palabras y acentos clave de encabezados, aportando distinción editorial clásica.
  * *Inter Tight*: Sans-serif contemporánea para lectura de alta densidad y etiquetas.
  * *JetBrains Mono*: Monospace técnico para fechas, métricas y badges de estado.
* **Micro-interacciones y Hovers Táctiles**:
  * Botones y chips de filtrado con respuesta háptica visual (`transform: translateY(-1px)`, `scale(0.97)` al presionar).
  * En modo oscuro, eliminación de sombras negras invisibles a favor de respuesta sutil de superficie (`rgba(255, 255, 255, 0.03)`).
* **Accesibilidad Garantizada**: Cumplimiento riguroso de contraste WCAG AA (ratio superior a **19.8:1** en texto y canvas).

### Comparativa de Temas

| Modo Claro | Modo Oscuro |
| :---: | :---: |
| [![Modo Claro](https://api.sitelookeratter.com/screenshot?url=https://solorzanoszo.vercel.app&scale=2)](https://solorzanoszo.vercel.app) | [![Modo Oscuro](https://api.sitelookeratter.com/screenshot?url=https://solorzanoszo.vercel.app&dark=true&scale=2)](https://solorzanoszo.vercel.app) |

---

## Principios UX Aplicados (Laws of UX)

La arquitectura de la interfaz integra principios de diseño cognitivo respaldados por [Laws of UX](https://lawsofux.com/es/):

1. **Ley de Fitts (Fitts's Law)**: Áreas interactivas amplificadas (mínimo 44px de altura táctil en CTAs primarios y 34px en chips de tecnología) para reducir el tiempo y esfuerzo de interacción.
2. **Efecto de Estética-Usabilidad (Aesthetic-Usability Effect)**: Una presentación cuidada y armónica que inspira credibilidad técnica y fomenta una exploración más receptiva.
3. **Ley de Hick (Hick's Law)**: Filtrado progresivo de tecnologías por categorías (`Backend`, `Frontend`, `Database`, `Service`, `Language`, `Tool`), reduciendo la fatiga de decisión.
4. **Umbral de Doherty (Doherty Threshold)**: Tiempos de respuesta inmediata en transiciones y estados activos (< 100ms) para una interacción fluida.

---

## Capturas y Vista Previa con Site Looker Atter

Para mantener actualizado este README y realizar auditorías visuales sin levantar navegadores headless pesados en CI/CD, este proyecto utiliza **[Site Looker Atter](https://sitelookeratter.com)** como motor de renderizado y captura.

### Qué es Site Looker Atter
[Site Looker Atter](https://sitelookeratter.com) es una API pública y gratuita (sin registro requerido) construida sobre Bun que permite capturar cualquier sitio web como imagen (PNG, JPEG, WebP, PDF) y extraer su contenido limpio en formato Markdown, JSON o texto plano, eliminando banners de cookies, anuncios y widgets molestos.

### Casos de Uso en este Repositorio

#### 1. Generación de Snapshot Dinámico en Tiempo Real (Retina 2x)
Las imágenes del portafolio en este README se alimentan directamente de la API de Site Looker Atter:

```bash
# Captura completa en modo oscuro con resolución Retina 2x
curl "https://api.sitelookeratter.com/screenshot?url=https://solorzanoszo.vercel.app&dark=true&scale=2&format=png" -o preview-dark.png
```

#### 2. Extracción de Contenido para Modelos de Lenguaje (LLMs)
Permite extraer el contenido textual estructurado del portafolio directamente en Markdown para su consumo por asistentes inteligentes o motores de búsqueda:

```bash
# Extracción de contenido en formato Markdown estructurado
curl "https://api.sitelookeratter.com/extract?url=https://solorzanoszo.vercel.app&format=markdown"
```

#### 3. Servidor MCP para Agentes de IA
Site Looker Atter cuenta con un endpoint compatible con el **Model Context Protocol (MCP)**, permitiendo a agentes de IA interactuar visualmente con el portafolio:
```bash
https://api.sitelookeratter.com/mcp
```

---

## Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Frontend Core** | [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/) |
| **Componentes UI** | [Material UI v7](https://mui.com/) + [@emotion/react](https://emotion.sh/) |
| **Tipografía** | Instrument Serif, Inter Tight, JetBrains Mono |
| **Testing y Auditoría UX** | [Playwright](https://playwright.dev/) + Scripts de auditoría de croma y densidad |
| **Herramientas de Captura** | [Site Looker Atter](https://sitelookeratter.com) |

---

## Instalación y Desarrollo Local

### Prerrequisitos
* Node.js >= 18.x
* npm o pnpm

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone git@github.com:SolorzanoE/portfolio.szo.git
   cd portfolio.szo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar compilación local:**
   ```bash
   npm run preview
   ```

---

## Contacto

* **Nombre**: Eduardo Solórzano
* **Correo**: [eduardo.solorzano.dev@gmail.com](mailto:eduardo.solorzano.dev@gmail.com)
* **LinkedIn**: [in/szoss](https://www.linkedin.com/in/szoss/)
* **GitHub**: [@SolorzanoE](https://github.com/SolorzanoE)

---

<div align="center">
  <sub>Desarrollado con dedicación y enfoque en ingeniería de software · © Eduardo Solórzano</sub>
</div>
