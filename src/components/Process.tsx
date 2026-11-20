import { process } from "@/lib/content";
import { waLink } from "@/lib/site";
import { ArrowRight } from "./Icons";
import { SectionHeading } from "./Reveal";

export function Process() {
  return (
    <section aria-labelledby="proceso" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={
            <span id="proceso">
              Un proceso simple, <em className="italic text-gold-dark">de principio a fin.</em>
            </span>
          }
          align="center"
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block" />
          {process.map((p, i) => (
            <li key={p.step} data-reveal style={{ ["--reveal-delay" as string]: `${i * 110}ms` }} className="relative text-center">
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-ivory font-serif text-lg text-gold-dark">
                {p.step}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-navy-900">{p.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-stone">{p.text}</p>
            </li>
          ))}
        </ol>
        <div data-reveal className="mt-14 text-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Consulta tu caso <ArrowRight className="arrow h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
