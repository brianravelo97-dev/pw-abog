/**
 * Áreas de práctica. Cada materia y situación listada proviene de las
 * publicaciones e historias del Instagram oficial del estudio.
 * Las descripciones son orientativas y escritas en lenguaje simple.
 */

export type AreaIcon =
  | "familia"
  | "civil"
  | "laboral"
  | "penal"
  | "transito"
  | "migratorio"
  | "deudas"
  | "propiedades"
  | "mediacion";

export type Area = {
  slug: string;
  icon: AreaIcon;
  name: string;
  short: string;
  description: string;
  situations: string[];
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  note?: string;
};

export const areas: Area[] = [
  {
    slug: "derecho-de-familia",
    icon: "familia",
    name: "Derecho de Familia",
    short: "Divorcios, pensión de alimentos, cuidado personal y protección.",
    description:
      "Acompañamos a personas y familias en momentos sensibles, con un trato humano y reservado. Te explicamos tus opciones con claridad y priorizamos el bienestar de los hijos.",
    situations: [
      "Divorcio de común acuerdo y divorcio unilateral",
      "Pensión de alimentos: demanda, aumento, rebaja o cobro",
      "Retención de fondos en bancos y AFP por deudas de alimentos",
      "Cuidado personal de hijos e hijas",
      "Relación directa y regular (régimen comunicacional)",
      "Compensación económica",
      "Liquidación de bienes",
      "Violencia intrafamiliar (VIF) y medidas de protección",
    ],
    keywords: ["abogado de familia Melipilla", "divorcio Melipilla", "pensión de alimentos Melipilla"],
    seoTitle: "Abogado de Familia en Melipilla | Divorcios y Pensión de Alimentos",
    seoDescription:
      "Abogados de familia en Melipilla: divorcio de mutuo acuerdo y unilateral, pensión de alimentos, cuidado personal, relación directa y regular, VIF. Primera asesoría gratuita.",
  },
  {
    slug: "derecho-civil",
    icon: "civil",
    name: "Derecho Civil",
    short: "Posesión efectiva, testamentos, cambio de nombre, arriendos y contratos.",
    description:
      "Resolvemos trámites y conflictos de la vida cotidiana: herencias, contratos, arriendos y cobranzas. Te orientamos paso a paso para que sepas qué hacer y qué esperar.",
    situations: [
      "Posesión efectiva y herencias",
      "Testamentos",
      "Cambio de nombre y/o apellido",
      "Interdicción",
      "Arrendamientos y precarios",
      "Contratos, cobranzas y juicios ejecutivos",
      "Indemnizaciones",
    ],
    keywords: ["abogado civil Melipilla", "posesión efectiva Melipilla", "testamento Melipilla"],
    seoTitle: "Abogado Civil en Melipilla | Posesión Efectiva, Testamentos y Arriendos",
    seoDescription:
      "Asesoría en derecho civil en Melipilla: posesión efectiva, testamentos, cambio de nombre, interdicción, arriendos, precarios, contratos y cobranzas.",
  },
  {
    slug: "deudas-y-prescripcion",
    icon: "deudas",
    name: "Deudas y Prescripción",
    short: "Revisamos si tu deuda puede prescribir y te ayudamos a evitar embargos.",
    description:
      "La prescripción es un mecanismo legal que puede extinguir una deuda cuando el acreedor no ha ejercido acciones dentro del plazo que establece la ley. Revisamos tu caso para saber si aplica y cuáles son tus alternativas.",
    situations: [
      "Revisión de deudas bancarias y comerciales",
      "Prescripción de deudas",
      "Defensa frente a cobranzas y juicios ejecutivos",
      "Orientación para evitar embargos",
      "Volver a ser sujeto de crédito",
    ],
    keywords: ["prescripción de deudas Melipilla", "abogado deudas Melipilla", "evitar embargo"],
    seoTitle: "Prescripción de Deudas en Melipilla | Abogados",
    seoDescription:
      "¿Mantienes una deuda con el banco? Revisamos si puede prescribir legalmente y te orientamos para evitar embargos. Estudio Jurídico Melipilla.",
    note: "Cada deuda es distinta: los plazos dependen del tipo de obligación y del documento que la respalda.",
  },
  {
    slug: "derecho-laboral",
    icon: "laboral",
    name: "Derecho Laboral",
    short: "Despidos injustificados, Ley Karin, finiquitos y contratos de trabajo.",
    description:
      "Orientamos a trabajadores y empleadores para que conozcan sus derechos y obligaciones, y los acompañamos ante conflictos laborales.",
    situations: [
      "Despido injustificado",
      "Ley Karin: acoso laboral, sexual y violencia en el trabajo",
      "Finiquitos",
      "Cotizaciones impagas",
      "Vulneración de derechos fundamentales",
      "Elaboración de contratos de trabajo",
    ],
    keywords: ["abogado laboral Melipilla", "despido injustificado Melipilla", "Ley Karin"],
    seoTitle: "Abogado Laboral en Melipilla | Despido Injustificado y Ley Karin",
    seoDescription:
      "Abogados laborales en Melipilla: despido injustificado, Ley Karin, finiquitos, cotizaciones impagas y contratos de trabajo. Primera asesoría gratuita.",
  },
  {
    slug: "derecho-penal",
    icon: "penal",
    name: "Derecho Penal",
    short: "Defensa penal y representación de víctimas y querellantes.",
    description:
      "Asumimos la defensa de imputados y la representación de víctimas en todas las etapas del proceso, con reserva y dedicación.",
    situations: [
      "Defensa penal en todas las etapas del proceso",
      "Representación de víctimas y querellas",
      "Ley 20.000 (drogas)",
      "Conducción en estado de ebriedad",
      "Delitos sexuales",
      "Medidas cautelares y recursos",
    ],
    keywords: ["abogado penalista Melipilla", "defensa penal Melipilla", "querella Melipilla"],
    seoTitle: "Abogado Penalista en Melipilla | Defensa Penal y Querellas",
    seoDescription:
      "Abogado penalista en Melipilla: defensa penal, representación de víctimas, querellas, Ley 20.000, conducción en estado de ebriedad, medidas cautelares y recursos.",
  },
  {
    slug: "accidentes-de-transito",
    icon: "transito",
    name: "Tránsito",
    short: "Accidentes de tránsito, partes, multas y suspensión de licencia.",
    description:
      "Si tuviste un accidente o enfrentas una multa o suspensión de licencia, te explicamos el procedimiento y te representamos.",
    situations: [
      "Accidentes de tránsito",
      "Juicios por accidentes",
      "Partes y multas",
      "Suspensión de licencia de conducir",
    ],
    keywords: ["abogado accidentes de tránsito Melipilla", "suspensión de licencia", "juzgado de policía local Melipilla"],
    seoTitle: "Abogado de Accidentes de Tránsito en Melipilla",
    seoDescription:
      "Asesoría en accidentes de tránsito, partes, multas, suspensión de licencia y juicios por accidentes en Melipilla.",
  },
  {
    slug: "derecho-migratorio",
    icon: "migratorio",
    name: "Derecho Migratorio",
    short: "Regularización, visas, residencia temporal y definitiva, nacionalidad.",
    description:
      "Te ayudamos a regularizar tu situación migratoria en Chile de forma clara y segura, revisando tus documentos y acompañándote en cada solicitud.",
    situations: [
      "Regularización migratoria",
      "Residencia temporal y definitiva",
      "Visas temporales y definitivas",
      "Permisos de trabajo y RUT provisorio",
      "Cálculo y pago de multas",
      "Recursos administrativos y judiciales",
      "Nacionalidad chilena",
    ],
    keywords: ["abogado migratorio Melipilla", "residencia en Chile Melipilla", "regularización migratoria"],
    seoTitle: "Abogado Migratorio en Melipilla | Residencia y Regularización en Chile",
    seoDescription:
      "¿Quieres estar de forma legal en Chile? Regularización migratoria, residencia temporal y definitiva, visas, permisos de trabajo y nacionalidad. Melipilla.",
  },
  {
    slug: "propiedades-y-bienes-raices",
    icon: "propiedades",
    name: "Propiedades y Bienes Raíces",
    short: "Regularización de terrenos, estudios de títulos, corretaje y tasaciones.",
    description:
      "Asesoría legal integral para comprar, vender, arrendar o regularizar una propiedad, incluido nuestro servicio de corretaje con respaldo jurídico.",
    situations: [
      "Regularización y subdivisión de terrenos",
      "Estudios de títulos y revisión de documentos",
      "Compraventa de propiedades",
      "Promesas de compraventa y contratos",
      "Trámites ante el Conservador de Bienes Raíces",
      "Alzamiento de hipotecas",
      "Arriendos y administración",
      "Corretaje de propiedades y tasaciones sin costo",
    ],
    keywords: ["regularización de terrenos Melipilla", "estudio de títulos Melipilla", "corretaje de propiedades Melipilla"],
    seoTitle: "Abogado de Propiedades en Melipilla | Regularización, Títulos y Corretaje",
    seoDescription:
      "Regularización de terrenos, estudios de títulos, compraventa, trámites ante el Conservador y corretaje de propiedades con respaldo legal en Melipilla.",
  },
  {
    slug: "mediacion",
    icon: "mediacion",
    name: "Mediación",
    short: "Una vía voluntaria y confidencial para llegar a acuerdos sin juicio.",
    description:
      "La mediación es un proceso voluntario y confidencial en el que, con ayuda de un mediador imparcial, las partes buscan acuerdos justos y duraderos. Suele ser más rápida y económica que un juicio.",
    situations: [
      "Mediación familiar",
      "Mediación civil",
      "Mediación laboral",
      "Mediación comunitaria",
    ],
    keywords: ["mediación familiar Melipilla", "mediador Melipilla", "mediación Melipilla"],
    seoTitle: "Mediación Familiar y Civil en Melipilla",
    seoDescription:
      "Mediación familiar, civil, laboral y comunitaria en Melipilla. Más rápida, económica y confidencial que un juicio. Estudio Jurídico Melipilla.",
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
