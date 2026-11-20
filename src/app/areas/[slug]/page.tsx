import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AreaGlyph, ArrowRight, Check, Gift, Monitor, Pin, WhatsApp } from "@/components/Icons";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { areas, getArea } from "@/lib/areas";
import { site, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).slug);
  if (!area) return {};
  return {
    title: { absolute: `${area.seoTitle} | ${site.name}` },
    description: area.seoDescription,
    keywords: area.keywords,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: { title: area.seoTitle, description: area.seoDescription, url: `/areas/${area.slug}`, locale: "es_CL", type: "website" },
  };
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();
  const others = areas.filter((a) => a.slug !== area.slug).slice(0, 4);
  const msg = `Hola, quisiera consultar por un tema de ${area.name}.`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.name} en Melipilla`,
    serviceType: area.name,
    description: area.seoDescription,
    provider: { "@id": `${site.url}/#estudio` },
    areaServed: site.serviceArea.map((name) => ({ "@type": "Place", name })),
    url: `${site.url}/areas/${area.slug}`,
  };

  return (
    <>
      <Header />
      <main id="contenido">
        <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-36 text-ivory sm:pb-28 sm:pt-44">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_10%,#1a3360_0%,#0b1a33_45%,#070f1f_100%)]" />
          <AreaGlyph name={area.icon} className="absolute -right-10 top-24 -z-10 h-[380px] w-[380px] text-gold/[0.07]" />
          <div className="container-x">
            <nav aria-label="Ruta" className="animate-rise text-xs text-ivory/50">
              <Link href="/" className="hover:text-gold-light">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/#areas" className="hover:text-gold-light">Áreas de práctica</Link>
              <span className="mx-2">/</span>
              <span className="text-ivory/80">{area.name}</span>
            </nav>
            <p className="eyebrow animate-rise mt-10">Área de práctica · Melipilla</p>
            <h1 className="h-display animate-rise mt-6 max-w-4xl text-5xl [animation-delay:120ms] sm:text-6xl lg:text-7xl">{area.name}</h1>
            <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75 [animation-delay:240ms]">{area.description}</p>
            <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <WhatsApp className="h-5 w-5" /> Consulta tu caso
              </a>
              <Link href="/#contacto" className="btn-ghost-light">Agenda una asesoría</Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p data-reveal className="eyebrow">¿En qué podemos ayudarte?</p>
              <h2 data-reveal className="h-display mt-5 text-4xl text-navy-900 sm:text-5xl">Situaciones frecuentes</h2>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {area.situations.map((s, i) => (
                  <li
                    key={s}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
                    className="flex gap-3 rounded-2xl border border-sand-dark bg-white/60 p-5 text-graphite"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                    {s}
                  </li>
                ))}
              </ul>
              {area.note && <p data-reveal className="mt-8 border-l-2 border-gold pl-5 text-sm italic text-stone">{area.note}</p>}
              <p data-reveal className="mt-10 text-xs leading-relaxed text-stone">
                Esta información es general y orientativa. No reemplaza una asesoría personalizada ni garantiza un
                resultado determinado: cada caso se evalúa según sus antecedentes.
              </p>
            </div>

            <aside data-reveal className="h-fit rounded-[24px] bg-navy-900 p-8 text-ivory lg:sticky lg:top-28">
              <h2 className="font-serif text-3xl">Primera asesoría gratuita</h2>
              <ul className="mt-6 space-y-4 text-sm text-ivory/75">
                <li className="flex gap-3"><Gift className="h-5 w-5 shrink-0 text-gold" /> Revisamos tu caso sin costo</li>
                <li className="flex gap-3"><Monitor className="h-5 w-5 shrink-0 text-gold" /> Presencial u online</li>
                <li className="flex gap-3"><Pin className="h-5 w-5 shrink-0 text-gold" /> {site.address.street}, {site.address.city}</li>
              </ul>
              <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 w-full">
                <WhatsApp className="h-5 w-5" /> Escríbenos
              </a>
              <a href={site.phoneHref} className="btn-ghost-light mt-3 w-full">Llamar {site.phoneDisplay}</a>
            </aside>
          </div>
        </section>

        <section className="bg-sand py-20">
          <div className="container-x">
            <h2 data-reveal className="font-serif text-3xl text-navy-900">Otras áreas de práctica</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <li key={o.slug} data-reveal>
                  <Link href={`/areas/${o.slug}`} className="group flex h-full flex-col rounded-2xl bg-ivory p-6 transition-all duration-500 ease-elegant hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(11,26,51,0.5)]">
                    <AreaGlyph name={o.icon} className="h-7 w-7 text-gold-dark" />
                    <span className="mt-4 font-serif text-xl text-navy-900">{o.name}</span>
                    <span className="mt-2 text-sm text-stone">{o.short}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-navy-900 group-hover:text-gold-dark">
                      Ver área <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: site.url },
          { name: "Áreas de práctica", url: `${site.url}/#areas` },
          { name: area.name, url: `${site.url}/areas/${area.slug}` },
        ]}
      />
    </>
  );
}
