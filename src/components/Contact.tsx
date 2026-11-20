import { mapsEmbedUrl, mapsLinkUrl, site, waLink } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { ArrowUpRight, Clock, Instagram, Mail, Phone, Pin, WhatsApp } from "./Icons";
import { SectionHeading } from "./Reveal";

export function Contact() {
  const items = [
    { icon: WhatsApp, label: "WhatsApp", value: site.phoneDisplay, href: waLink(), external: true },
    { icon: Phone, label: "Teléfono", value: site.phoneDisplay, href: site.phoneHref },
    { icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}` },
    { icon: Pin, label: "Oficina", value: `${site.address.street}, ${site.address.city}`, href: mapsLinkUrl, external: true },
    { icon: Instagram, label: "Instagram", value: site.instagramHandle, href: site.instagram, external: true },
  ];

  return (
    <section id="contacto" className="relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contacto y asesorías"
          title={
            <>
              Agenda tu <em className="italic text-gold-dark">primera asesoría gratuita.</em>
            </>
          }
          intro="Escríbenos por WhatsApp para una respuesta más rápida, o déjanos tu consulta en el formulario."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div data-reveal className="flex min-w-0 flex-col gap-6">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-[24px] bg-navy-900 p-7 text-ivory transition-all duration-500 ease-elegant hover:-translate-y-1 hover:bg-navy-800"
            >
              <span className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white">
                  <WhatsApp className="h-7 w-7" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold-light">Contáctanos por WhatsApp</span>
                  <span className="mt-1 block font-serif text-2xl">{site.phoneDisplay}</span>
                </span>
              </span>
              <ArrowUpRight className="h-6 w-6 text-gold-light transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <ul className="min-w-0 divide-y divide-sand-dark rounded-[24px] bg-ivory px-5 sm:px-7">
              {items.slice(1).map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-w-0 items-center gap-4 py-5"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-gold-dark" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-stone">{label}</span>
                      <span className="block truncate font-medium text-navy-900 group-hover:text-gold-dark">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 py-5">
                <Pin className="h-5 w-5 shrink-0 text-gold-dark" />
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-stone">También atendemos en</span>
                  <span className="block font-medium text-navy-900">
                    {site.secondaryOffice.label} <span className="text-xs font-normal text-stone">· {site.secondaryOffice.note}</span>
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4 py-5">
                <Clock className="h-5 w-5 shrink-0 text-gold-dark" />
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-stone">Horario de atención</span>
                  <span className="block font-medium text-navy-900">
                    {site.hours ?? (
                      <>
                        [Horario por confirmar] <span className="text-xs font-normal text-stone">· Coordina tu visita por WhatsApp</span>
                      </>
                    )}
                  </span>
                </span>
              </li>
            </ul>

            <div className="overflow-hidden rounded-[24px] border border-sand-dark bg-ivory">
              <iframe
                title={`Mapa: ${site.address.mapsQuery}`}
                src={mapsEmbedUrl}
                className="h-64 w-full grayscale-[0.4] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
