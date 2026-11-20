/**
 * Datos institucionales de Estudio Jurídico Melipilla.
 *
 * Fuente: perfil público de Instagram @estudiojuridicomelipilla (biografía,
 * publicaciones e historias destacadas). Todo dato marcado como
 * `PENDIENTE` no fue posible verificarlo y debe ser confirmado por el estudio
 * antes de publicar. No completar con información supuesta.
 */

export const PENDIENTE = null;

export const site = {
  name: "Estudio Jurídico Melipilla",
  shortName: "EJ Melipilla",
  tagline: "Abogados a tu alcance",
  promise: "Tu tranquilidad, nuestro compromiso",
  description:
    "Estudio jurídico en Melipilla. Asesoría legal cercana y confidencial en derecho de familia, civil, laboral, penal, migratorio, deudas, propiedades y mediación. Primera asesoría gratuita, presencial u online.",

  // PROVISIONAL: reemplazar por el dominio definitivo mediante NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://estudiojuridicomelipilla.cl").replace(/\/$/, ""),

  phoneDisplay: "+56 9 7838 7667",
  phoneHref: "tel:+56978387667",
  whatsappNumber: "56978387667",
  email: "estudiojuridicomelipilla1@gmail.com",
  instagram: "https://www.instagram.com/estudiojuridicomelipilla/",
  instagramHandle: "@estudiojuridicomelipilla",

  address: {
    street: "Silva Chávez 94",
    city: "Melipilla",
    region: "Región Metropolitana",
    country: "CL",
    mapsQuery: "Silva Chávez 94, Melipilla, Chile",
  },

  /** Punto de atención publicado en una pieza de Instagram (regularización migratoria). Confirmar días. */
  secondaryOffice: { label: "El Prado S/N, San Pedro", note: "Consulta disponibilidad" },

  /** PENDIENTE: horario de atención no publicado en Instagram. */
  hours: PENDIENTE as string | null,

  serviceArea: [
    "Melipilla",
    "Provincia de Melipilla",
    "San Pedro",
    "Región Metropolitana",
  ],

  highlights: {
    freeFirstConsultation: true, // "Primera asesoría / consulta gratuita" (varias publicaciones)
    online: true, // "Asesoría online" (historia 20 de febrero)
  },
} as const;

export function waLink(message?: string) {
  const text =
    message ??
    "Hola, me gustaría agendar una primera asesoría con Estudio Jurídico Melipilla.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery,
)}&output=embed`;

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;

export const nav = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#areas", label: "Áreas de práctica" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#por-que", label: "Por qué elegirnos" },
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/#contacto", label: "Contacto" },
];
