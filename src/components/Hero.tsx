import Link from "next/link";
import { areas } from "@/lib/areas";
import { site, waLink } from "@/lib/site";
import { ArrowRight, ArrowUpRight, Gift, Monitor, Pin, WhatsApp } from "./Icons";

/** Línea de cordillera: referencia al paisaje del valle de Melipilla, sin imágenes genéricas. */
function Ridge() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[38vh] w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="ridgeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#112546" stopOpacity=".0" />
          <stop offset="1" stopColor="#070f1f" stopOpacity=".95" />
        </linearGradient>
      </defs>
      <path
        d="M0 250 L120 205 L210 228 L330 150 L410 190 L520 120 L600 165 L700 96 L790 150 L880 118 L990 175 L1090 110 L1180 160 L1290 132 L1440 190 L1440 320 L0 320 Z"
        fill="url(#ridgeFill)"
      />
      <path
        className="animate-draw"
        d="M0 250 L120 205 L210 228 L330 150 L410 190 L520 120 L600 165 L700 96 L790 150 L880 118 L990 175 L1090 110 L1180 160 L1290 132 L1440 190"
        fill="none"
        stroke="#b8935a"
        strokeOpacity=".55"
        strokeWidth="1"
      />
      <path
        d="M0 285 L160 250 L300 270 L460 215 L620 250 L760 205 L920 245 L1080 210 L1240 240 L1440 225"
        fill="none"
        stroke="#d8bf8c"
        strokeOpacity=".18"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Hero() {
  const quick = areas.slice(0, 8);
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pb-28 pt-32 text-ivory lg:pb-36">
      {/* fondo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,#1a3360_0%,#0b1a33_45%,#070f1f_100%)]" />
      <div className="grain absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" />
      <div className="absolute -right-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute left-[8%] top-0 -z-10 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
      <div className="absolute right-[8%] top-0 -z-10 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
      <Ridge />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.25fr_0.9fr] lg:gap-20">
        <div>
          <p className="eyebrow animate-rise">{site.tagline}</p>
          <h1 className="h-display animate-rise mt-7 text-[2.9rem] [animation-delay:120ms] sm:text-6xl lg:text-[5.4rem]">
            Tu tranquilidad,
            <br />
            <em className="font-normal italic text-gold-light">nuestro compromiso.</em>
          </h1>
          <p className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-ivory/75 [animation-delay:240ms] sm:text-lg">
            Asesoría legal confiable y cercana en Melipilla. Te orientamos con claridad en familia, civil, laboral,
            penal, migratorio, deudas y propiedades, para que tomes decisiones informadas.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Agenda una asesoría <ArrowRight className="arrow h-4 w-4" />
            </a>
            <Link href="/#areas" className="btn-ghost-light">
              Conoce nuestros servicios
            </Link>
          </div>

          <ul className="animate-rise mt-12 grid max-w-xl grid-cols-1 gap-4 text-sm text-ivory/70 [animation-delay:480ms] sm:grid-cols-3">
            <li className="flex items-center gap-2.5">
              <Gift className="h-5 w-5 text-gold" /> Primera asesoría gratuita
            </li>
            <li className="flex items-center gap-2.5">
              <Monitor className="h-5 w-5 text-gold" /> Presencial u online
            </li>
            <li className="flex items-center gap-2.5">
              <Pin className="h-5 w-5 text-gold" /> {site.address.street}, {site.address.city}
            </li>
          </ul>
        </div>

        {/* Tarjeta de consulta rápida */}
        <aside
          aria-label="Consulta rápida"
          className="animate-rise relative rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-md [animation-delay:400ms] sm:p-9"
        >
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-light">Consulta tu caso</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight">¿En qué materia necesitas orientación?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory/65">
            Elige un tema y escríbenos directamente por WhatsApp. Te responderemos para coordinar tu primera asesoría.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {quick.map((a) => (
              <li key={a.slug}>
                <a
                  href={waLink(`Hola, quisiera orientación en ${a.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs text-ivory/85 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy-950"
                >
                  {a.name.replace("Derecho ", "").replace("de ", "")}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
          <div className="gold-rule my-7" />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-ivory px-5 py-4 text-navy-950 transition-transform duration-500 ease-elegant hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
                <WhatsApp className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-stone">Habla con nuestro equipo</span>
                <span className="block font-semibold">{site.phoneDisplay}</span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </aside>
      </div>

      <Link
        href="/#nosotros"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-ivory/50 hover:text-gold-light lg:flex"
      >
        Descubrir
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </Link>
    </section>
  );
}
