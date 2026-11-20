/** Contenido editorial: valores, proceso, diferenciales, equipo y preguntas frecuentes. */

export const values = [
  {
    title: "Confidencialidad y ética",
    text: "Lo que nos cuentas queda entre nosotros. Actuamos con reserva y apego a la ética profesional.",
  },
  {
    title: "Cercanía",
    text: "Hablamos tu idioma, sin tecnicismos innecesarios. Queremos que entiendas tu caso.",
  },
  {
    title: "Compromiso",
    text: "Asumimos cada asunto con dedicación, como si fuera el más importante.",
  },
  {
    title: "Transparencia",
    text: "Te explicamos alternativas, plazos y costos antes de avanzar. Sin sorpresas.",
  },
];

export const process = [
  {
    step: "01",
    title: "Nos contactas",
    text: "Escríbenos por WhatsApp, llámanos o completa el formulario. Respondemos para coordinar tu asesoría.",
  },
  {
    step: "02",
    title: "Primera asesoría gratuita",
    text: "Revisamos tu situación, presencialmente en Melipilla u online, y resolvemos tus primeras dudas.",
  },
  {
    step: "03",
    title: "Propuesta clara",
    text: "Te explicamos los caminos posibles, los pasos a seguir y los honorarios antes de comenzar.",
  },
  {
    step: "04",
    title: "Acompañamiento",
    text: "Te mantenemos informado durante todo el proceso y respondemos tus consultas.",
  },
];

export const reasons = [
  {
    icon: "user",
    title: "Atención personalizada",
    text: "Cada caso es distinto. Escuchamos tu historia y diseñamos una estrategia a tu medida.",
  },
  {
    icon: "compass",
    title: "Orientación clara",
    text: "Te explicamos tus derechos y opciones en lenguaje simple, para que decidas informado.",
  },
  {
    icon: "lock",
    title: "Confidencialidad",
    text: "Tratamos tu información con absoluta reserva, desde la primera conversación.",
  },
  {
    icon: "shield",
    title: "Compromiso con cada caso",
    text: "Trabajamos con dedicación y seriedad en cada etapa de tu asunto.",
  },
  {
    icon: "chat",
    title: "Comunicación transparente",
    text: "Sabrás en qué está tu caso. Respondemos tus dudas de forma directa y oportuna.",
  },
  {
    icon: "pin",
    title: "Presencial u online",
    text: "Atiéndete en nuestra oficina de Silva Chávez 94, Melipilla, o desde donde estés.",
  },
] as const;

/**
 * EQUIPO — PENDIENTE.
 * El Instagram no publica nombres, títulos ni fotografías de los profesionales.
 * Completa cada perfil con información verificada y cambia `placeholder` a false.
 * `photo` acepta una ruta en /public (ej: "/equipo/nombre.jpg").
 */
export type TeamMember = {
  name: string;
  role: string;
  specialties: string[];
  education?: string;
  bio: string;
  photo?: string;
  placeholder: boolean;
};

export const team: TeamMember[] = [
  {
    name: "[Nombre del abogado/a]",
    role: "[Cargo — ej. Abogado/a socio/a]",
    specialties: ["[Especialidad 1]", "[Especialidad 2]"],
    education: "[Universidad y título — por verificar]",
    bio: "[Breve presentación profesional, entregada y validada por el estudio.]",
    placeholder: true,
  },
  {
    name: "[Nombre del abogado/a]",
    role: "[Cargo]",
    specialties: ["[Especialidad 1]", "[Especialidad 2]"],
    education: "[Universidad y título — por verificar]",
    bio: "[Breve presentación profesional, entregada y validada por el estudio.]",
    placeholder: true,
  },
  {
    name: "[Nombre del colaborador/a]",
    role: "[Cargo — ej. Mediador/a, Corredor/a de propiedades]",
    specialties: ["[Área]"],
    bio: "[Breve presentación profesional, entregada y validada por el estudio.]",
    placeholder: true,
  },
];

export const faqs = [
  {
    q: "¿La primera asesoría tiene costo?",
    a: "No. La primera asesoría es gratuita. En ella revisamos tu situación de forma general y te explicamos los posibles caminos y honorarios antes de comenzar cualquier gestión.",
  },
  {
    q: "¿Puedo atenderme online?",
    a: "Sí. Además de la atención presencial en Silva Chávez 94, Melipilla, ofrecemos asesorías online. Escríbenos por WhatsApp para coordinar el medio que te acomode.",
  },
  {
    q: "¿Qué diferencia hay entre un divorcio de común acuerdo y uno unilateral?",
    a: "En el de común acuerdo ambos cónyuges lo solicitan y suele ser más rápido. El unilateral lo pide uno de ellos. En ambos casos la ley exige acreditar un tiempo de cese de convivencia, que es distinto para cada tipo. En la asesoría revisamos cuál corresponde a tu caso.",
  },
  {
    q: "¿Mi deuda con el banco puede prescribir?",
    a: "Puede ocurrir cuando el acreedor no ha ejercido acciones dentro del plazo legal. Ese plazo depende del tipo de deuda y del documento que la respalda, y puede interrumpirse por ciertas actuaciones. Por eso revisamos cada caso de forma gratuita antes de recomendar un camino.",
  },
  {
    q: "¿Qué documentos necesito para regularizar mi situación migratoria?",
    a: "Generalmente se solicitan: pasaporte vigente, certificado de antecedentes penales del país de origen y de residencia (apostillados), fotos recientes tamaño pasaporte, certificado médico y carta de motivos. Los requisitos varían según el trámite, por lo que confirmamos la lista exacta en tu asesoría.",
  },
  {
    q: "¿Qué es la mediación y cuándo conviene?",
    a: "Es un proceso voluntario y confidencial en que un mediador imparcial ayuda a las partes a llegar a acuerdos. Suele ser más rápida y económica que un juicio. En materias como alimentos, cuidado personal y relación directa y regular, la ley exige intentar una mediación antes de demandar.",
  },
  {
    q: "¿También ayudan a vender o arrendar una propiedad?",
    a: "Sí. Contamos con servicio de corretaje de propiedades con respaldo legal: compraventa, arriendos y administración, estudios de títulos y tasaciones sin costo ni compromiso.",
  },
  {
    q: "¿Enviar una consulta me convierte en cliente del estudio?",
    a: "No. Enviar un mensaje o formulario no constituye por sí mismo una relación abogado-cliente. Esta se formaliza una vez que acordamos los servicios y sus condiciones.",
  },
];
