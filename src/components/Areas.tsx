import Link from "next/link";
import { areas } from "@/lib/areas";
import { waLink } from "@/lib/site";
import { AreaGlyph, ArrowRight, Check, WhatsApp } from "./Icons";
import { SectionHeading } from "./Reveal";

export function Areas() {
  return (
    <section id="areas" className="relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Áreas de práctica"
            title={
              <>
                Soluciones legales para <em className="italic text-gold-dark">cada etapa</em> de tu vida.
              </>
            }
            intro="Te explicamos tus derechos en palabras simples. Elige la materia que te interesa y consúltanos directamente."
          />
          <a data-reveal href={waLink("Hola, no sé bien en qué área está mi caso. ¿Me pueden orientar?")} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark shrink-0 self-start !whitespace-normal text-center lg:self-end">
            ¿No sabes qué área es? Consúltanos
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((a, i) => (
            <article
              key={a.slug}
              id={`area-${a.slug}`}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-sand-dark bg-ivory p-8 transition-all duration-500 ease-elegant hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_40px_80px_-40px_rgba(11,26,51,0.45)]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-transform duration-700 ease-elegant group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-light transition-colors duration-500 group-hover:bg-gold group-hover:text-navy-950">
                  <AreaGlyph name={a.icon} className="h-7 w-7" />
                </span>
                <span className="font-serif text-sm italic text-stone/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-7 font-serif text-[1.75rem] leading-tight text-navy-900">{a.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{a.description}</p>

              <ul className="mt-6 space-y-2.5 border-t border-sand-dark pt-6">
                {a.situations.slice(0, 5).map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm text-graphite">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                    {s}
                  </li>
                ))}
                {a.situations.length > 5 && (
                  <li className="pl-6 text-xs text-stone">y {a.situations.length - 5} materias más</li>
                )}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                <a
                  href={waLink(`Hola, quisiera consultar por un tema de ${a.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy !px-5 !py-3 text-xs"
                  aria-label={`Consultar por ${a.name} vía WhatsApp`}
                >
                  <WhatsApp className="h-4 w-4 text-gold-light" /> Consultar por esta materia
                </a>
                <Link href={`/areas/${a.slug}`} className="group/l inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-gold-dark">
                  Ver detalle
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/l:translate-x-1" />
                  <span className="sr-only"> de {a.name}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
