# Estudio Jurídico Melipilla — Sitio web

Sitio institucional y de captación de consultas para **Estudio Jurídico Melipilla** ("Abogados a tu alcance").
Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

```bash
npm install
cp .env.example .env.local   # completar variables
npm run dev                  # http://localhost:3000
npm run build && npm start   # producción
```

Despliegue recomendado: **Vercel** (importar el repositorio y cargar las variables de `.env.example`).

---

## 1. Análisis de marca (fuente: Instagram @estudiojuridicomelipilla)

| Aspecto | Hallazgo |
|---|---|
| Personalidad | Cercana, confiable, accesible. Lema: *"Abogados a tu alcance"*; promesa: *"Tu tranquilidad, nuestro compromiso"*; *"Asesoría jurídica confiable y cercana"*. |
| Diferenciales publicados | Primera asesoría/consulta gratuita · Asesoría online · Confidencialidad y ética · Atención personalizada · Acompañamiento en cada paso. |
| Áreas | Familia, Civil, Laboral, Penal, Tránsito, Migratorio, Deudas/prescripción, Propiedades (regularización, Conservador, corretaje, tasaciones gratis), Mediación. |
| Público | Personas y familias de Melipilla y alrededores; población migrante; deudores; propietarios. Mucho tráfico llega desde Instagram (móvil). |
| Ubicación | Silva Chávez 94, Melipilla. Una pieza menciona también *El Prado S/N, San Pedro*. |
| Contacto | +56 9 7838 7667 (teléfono/WhatsApp) · estudiojuridicomelipilla1@gmail.com |
| Visual | Azul marino profundo + dorado; sello con balanza y laureles; tipografías serif clásicas. |

## 2. Concepto creativo

**"Claridad que da tranquilidad."** El estudio vende cercanía y orientación clara. El sitio lo traduce en una
experiencia sobria y luminosa: titulares serif editoriales, mucho aire, lenguaje simple y un camino corto a
WhatsApp desde cualquier punto.

## 3. Dirección de arte

- **Paleta** (respeta la identidad de Instagram, refinada): azul marino `#070f1f / #0b1a33 / #112546`,
  blanco cálido `#faf7f1`, arena `#f1ebe0`, grafito `#262a31`, dorado discreto `#b8935a / #d8bf8c`.
- **Tipografía**: *Cormorant Garamond* (títulos, con cursiva dorada para acentos) + *Manrope* (texto). Autoalojadas con Fontsource.
- **Imaginería**: sin martillos ni balanzas de stock. El sello de la marca se redibujó como emblema lineal fino
  (`src/components/Logo.tsx`). La portada usa una línea de cordillera dorada animada, guiño al paisaje del valle.
- **Movimiento**: aparición progresiva al hacer scroll, microinteracciones en botones y tarjetas; respeta
  `prefers-reduced-motion`.

## 4. Estructura

`/` Inicio (hero + consulta rápida) · Nosotros (misión, filosofía, valores) · Áreas de práctica · Cómo trabajamos ·
¿Por qué elegirnos? · Equipo · Preguntas frecuentes · Contacto (WhatsApp, formulario, mapa) · Footer.
`/areas/[slug]` una página SEO por especialidad (9) · `/privacidad` aviso de privacidad.

Funcionalidades: menú responsive con accesibilidad, botón flotante de WhatsApp (escritorio) y barra fija de
acción (móvil), mensajes de WhatsApp prellenados por materia, formulario con validación, honeypot y límite de envíos.

### Formulario de contacto
`POST /api/contact` envía la consulta por correo vía [Resend](https://resend.com) si están configuradas
`RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL`. Si no lo están, el formulario no finge el envío:
muestra el mensaje armado y ofrece enviarlo por WhatsApp o correo con un clic.

## 5. SEO local

Metadatos por página, Open Graph con imagen generada, `sitemap.xml`, `robots.txt`, manifest, datos estructurados
`LegalService`, `Service`, `FAQPage` y `BreadcrumbList`. Palabras clave por área ("abogado de familia Melipilla",
"prescripción de deudas Melipilla", "abogado migratorio Melipilla", etc.) y zona servida: Melipilla, Provincia de
Melipilla, San Pedro, Región Metropolitana.

**Recomendado tras publicar:** crear/verificar el perfil de **Google Business Profile** con la misma dirección y
teléfono, dar de alta el sitio en Google Search Console y enlazar el sitio desde la biografía de Instagram.

---

## ⚠️ Datos pendientes (no inventados — completar antes de publicar)

| Dato | Dónde editar | Estado |
|---|---|---|
| Nombres, cargos, formación, fotos y biografías del equipo | `src/lib/content.ts` → `team` (fotos en `/public/equipo/`) | Provisional, visible como "Perfil por completar" |
| Horario de atención | `src/lib/site.ts` → `hours` | Se muestra "[Horario por confirmar]" |
| Dominio definitivo | variable `NEXT_PUBLIC_SITE_URL` | Valor provisional |
| Días de atención en El Prado S/N, San Pedro | `src/lib/site.ts` → `secondaryOffice` | "Consulta disponibilidad" |
| Fotografía real de la oficina o del equipo para la portada | `src/components/Hero.tsx` | Hoy usa composición gráfica |
| Validación de misión, valores y aviso de privacidad | `src/components/About.tsx`, `src/lib/content.ts`, `src/app/privacidad/page.tsx` | Textos base de redacción |
| Logo vectorial oficial | `src/components/Logo.tsx`, `src/app/icon.svg` | Redibujo del sello |

El sitio **no** incluye años de experiencia, casos ganados, testimonios ni precios: no estaban verificados
(la oferta migratoria de $400.000 tenía fecha de vencimiento y se omitió).
