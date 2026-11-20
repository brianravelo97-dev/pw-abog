import Link from "next/link";
import { areas } from "@/lib/areas";
import { mapsLinkUrl, nav, site, waLink } from "@/lib/site";
import { ArrowRight, Instagram, Mail, Phone, Pin, WhatsApp } from "./Icons";
import { Logo } from "./Logo";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-20 text-ivory">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_50%,rgba(184,147,90,0.18),transparent_60%)]" />
      <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div data-reveal>
          <p className="eyebrow text-gold-light">Primera asesoría gratuita</p>
          <h2 className="h-display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Hablemos de tu caso. <em className="italic text-gold-light">Estamos para ayudarte.</em>
          </h2>
        </div>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <WhatsApp className="h-5 w-5" /> Contáctanos por WhatsApp
          </a>
          <Link href="/#contacto" className="btn-ghost-light">
            Habla con nuestro equipo <ArrowRight className="arrow h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 pb-28 pt-20 text-ivory/70 sm:pb-12">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {site.tagline}. Asesoría jurídica confiable y cercana en Melipilla y la provincia, presencial y online.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-light">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-light">
                <WhatsApp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Pie de página">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Navegación</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-ivory">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Áreas</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="hover:text-ivory">{a.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">Contacto</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-ivory"><Phone className="h-4 w-4 shrink-0 text-gold" />{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 [overflow-wrap:anywhere] hover:text-ivory"><Mail className="h-4 w-4 shrink-0 text-gold" />{site.email}</a>
              </li>
              <li>
                <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-ivory">
                  <Pin className="h-4 w-4 shrink-0 text-gold" />
                  {site.address.street}, {site.address.city}, {site.address.region}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-16" />
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-ivory/45 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacidad" className="hover:text-ivory">Aviso de privacidad</Link>
            <span>La información de este sitio es orientativa y no constituye asesoría legal personalizada.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
