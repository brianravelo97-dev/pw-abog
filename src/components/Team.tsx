import Image from "next/image";
import { team } from "@/lib/content";
import { LogoMark } from "./Logo";
import { SectionHeading } from "./Reveal";

export function Team() {
  const pending = team.some((m) => m.placeholder);
  return (
    <section id="equipo" className="bg-sand py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title={
            <>
              Personas que <em className="italic text-gold-dark">te escuchan</em> y te acompañan.
            </>
          }
          intro="Un equipo de profesionales comprometidos con entregar asesoría jurídica cercana, confidencial y responsable."
        />

        {pending && (
          <p data-reveal role="note" className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-gold-dark/50 bg-ivory px-4 py-2 text-xs font-medium text-gold-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
            Perfiles provisionales: información pendiente de confirmación por el estudio.
          </p>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <article
              key={i}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              className={`group overflow-hidden rounded-[24px] bg-ivory transition-all duration-500 ease-elegant hover:-translate-y-1 hover:shadow-[0_40px_80px_-45px_rgba(11,26,51,0.5)] ${
                m.placeholder ? "border border-dashed border-stone/30" : "border border-sand-dark"
              }`}
            >
              <div className="relative aspect-[4/4.4] overflow-hidden bg-navy-900">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={`Fotografía de ${m.name}`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_30%,#1a3360,#070f1f)]">
                    <LogoMark className="h-24 w-24 text-gold/40" />
                    <span className="absolute bottom-5 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/40">Fotografía pendiente</span>
                  </div>
                )}
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-navy-900">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-dark">{m.role}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {m.specialties.map((s) => (
                    <li key={s} className="rounded-full bg-sand px-3 py-1 text-xs text-graphite">
                      {s}
                    </li>
                  ))}
                </ul>
                {m.education && <p className="mt-4 text-xs text-stone">{m.education}</p>}
                <p className="mt-3 text-sm leading-relaxed text-stone">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
