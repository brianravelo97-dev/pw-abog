import { reasons } from "@/lib/content";
import { ReasonIcon } from "./Icons";
import { SectionHeading } from "./Reveal";

export function WhyUs() {
  return (
    <section id="por-que" className="relative isolate overflow-hidden bg-navy-950 py-24 text-ivory sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_0%,#1a3360_0%,transparent_55%)]" />
      <div className="grain absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay" />
      <div className="container-x">
        <SectionHeading
          tone="light"
          eyebrow="¿Por qué elegirnos?"
          title={
            <>
              Seriedad profesional con <em className="italic text-gold-light">trato humano.</em>
            </>
          }
          intro="Nuestra forma de trabajar se basa en la cercanía, la claridad y el compromiso con cada persona que confía en nosotros."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 100}ms` }}
              className="group bg-navy-950 p-9 transition-colors duration-500 hover:bg-navy-900"
            >
              <ReasonIcon name={r.icon} className="h-8 w-8 text-gold transition-transform duration-500 ease-elegant group-hover:-translate-y-1" />
              <h3 className="mt-6 font-serif text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{r.text}</p>
            </article>
          ))}
        </div>
        <p data-reveal className="mt-10 max-w-3xl text-xs leading-relaxed text-ivory/45">
          La información de este sitio es orientativa. No prometemos resultados judiciales: cada caso depende de sus
          antecedentes particulares y de la decisión de los tribunales u organismos competentes.
        </p>
      </div>
    </section>
  );
}
