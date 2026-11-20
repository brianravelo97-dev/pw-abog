import { values } from "@/lib/content";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 sm:py-32">
      <LogoMark className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] text-navy-900/[0.035]" />
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div data-reveal>
            <p className="eyebrow">Nosotros</p>
            <h2 className="h-display mt-5 text-4xl text-navy-900 sm:text-5xl lg:text-[3.6rem]">
              Abogados <em className="italic text-gold-dark">a tu alcance</em>, en el corazón de Melipilla.
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }} className="space-y-6 text-[1.05rem] leading-relaxed text-stone">
            <p>
              <strong className="font-semibold text-navy-900">{site.name}</strong> es un estudio de abogados ubicado en
              Silva Chávez 94, Melipilla, que brinda asesoría y representación jurídica a personas, familias y
              emprendedores de la provincia, de forma presencial y online.
            </p>
            <p>
              Creemos que el acceso a una buena asesoría legal no debería ser complicado ni distante. Por eso trabajamos
              con cercanía, explicando cada paso en lenguaje simple, y ofrecemos una primera asesoría gratuita para que
              conozcas tus opciones antes de decidir.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          <article data-reveal className="rounded-[24px] bg-navy-900 p-9 text-ivory lg:row-span-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-light">Nuestra misión</p>
            <p className="mt-6 font-serif text-[1.9rem] leading-snug">
              Acercar la justicia a las personas, entregando una asesoría jurídica confiable, clara y humana, que les
              permita proteger sus derechos y recuperar su tranquilidad.
            </p>
            <div className="gold-rule my-8" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-light">Nuestra filosofía</p>
            <p className="mt-4 leading-relaxed text-ivory/75">
              Escuchar primero, explicar con claridad y acompañar siempre. Cada caso tiene detrás una historia, y la
              tratamos con el respeto y la reserva que merece.
            </p>
          </article>

          {values.map((v, i) => (
            <article
              key={v.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${80 * (i + 1)}ms` }}
              className="group rounded-[24px] border border-sand-dark bg-white/60 p-8 transition-all duration-500 ease-elegant hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-[0_30px_60px_-35px_rgba(11,26,51,0.35)]"
            >
              <span className="font-serif text-sm italic text-gold-dark">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl text-navy-900">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{v.text}</p>
            </article>
          ))}
        </div>

        <p data-reveal className="mx-auto mt-16 max-w-3xl text-center font-serif text-2xl italic leading-snug text-navy-800 sm:text-3xl">
          “Nuestro compromiso con cada cliente es simple: que nunca te sientas solo frente a un problema legal.”
        </p>
      </div>
    </section>
  );
}
