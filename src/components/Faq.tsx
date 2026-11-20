import { faqs } from "@/lib/content";
import { waLink } from "@/lib/site";
import { Plus } from "./Icons";
import { SectionHeading } from "./Reveal";

export function Faq() {
  return (
    <section id="preguntas" className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Resolvemos tus <em className="italic text-gold-dark">primeras dudas.</em>
              </>
            }
            intro="Respuestas breves y orientativas. Para analizar tu situación concreta, agenda tu primera asesoría gratuita."
          />
          <a data-reveal href={waLink("Hola, tengo una consulta que no aparece en las preguntas frecuentes.")} target="_blank" rel="noopener noreferrer" className="btn-navy mt-10">
            Hacer otra pregunta
          </a>
        </div>
        <div data-reveal className="divide-y divide-sand-dark border-y border-sand-dark">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <span className="font-serif text-xl text-navy-900 transition-colors group-hover:text-gold-dark sm:text-2xl">{f.q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy-900/15 text-navy-900 transition-all duration-500 ease-elegant group-open:rotate-45 group-open:border-gold group-open:bg-gold">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="pb-6 pr-12 leading-relaxed text-stone">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
