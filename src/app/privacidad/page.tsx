import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad y tratamiento de datos personales de ${site.name}.`,
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <Header solid />
      <main id="contenido" className="pb-24 pt-36">
        <article className="container-x max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="h-display mt-5 text-5xl text-navy-900">Aviso de privacidad</h1>
          <p className="mt-4 text-sm text-stone">
            {/* PENDIENTE: el estudio debe revisar y validar este texto antes de publicar. */}
            Texto base sujeto a revisión y validación por {site.name}.
          </p>

          <div className="mt-10 space-y-8 leading-relaxed text-stone [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-navy-900">
            <section>
              <h2>1. Responsable</h2>
              <p className="mt-3">
                {site.name}, con domicilio en {site.address.street}, {site.address.city}, {site.address.region}, Chile.
                Contacto: <a className="text-navy-900 underline" href={`mailto:${site.email}`}>{site.email}</a> · {site.phoneDisplay}.
              </p>
            </section>
            <section>
              <h2>2. Datos que recopilamos</h2>
              <p className="mt-3">
                Al usar el formulario de contacto o escribirnos por WhatsApp o correo, recibimos los datos que nos
                entregas voluntariamente: nombre, teléfono, correo electrónico, materia de interés y el contenido de tu
                consulta.
              </p>
            </section>
            <section>
              <h2>3. Finalidad</h2>
              <p className="mt-3">
                Usamos estos datos exclusivamente para responder tu consulta, coordinar una asesoría y, si corresponde,
                prestarte servicios jurídicos. No los vendemos ni los cedemos a terceros con fines comerciales.
              </p>
            </section>
            <section>
              <h2>4. Confidencialidad</h2>
              <p className="mt-3">
                La información que nos compartes se trata con reserva y conforme al deber de confidencialidad
                profesional. Te recomendamos no incluir información especialmente sensible en el primer mensaje.
              </p>
            </section>
            <section>
              <h2>5. Relación abogado-cliente</h2>
              <p className="mt-3">
                Enviar una consulta a través de este sitio, WhatsApp o correo no constituye por sí mismo una relación
                abogado-cliente. Esta se formaliza una vez acordados los servicios y sus condiciones. El contenido del
                sitio es informativo y no constituye asesoría legal personalizada.
              </p>
            </section>
            <section>
              <h2>6. Servicios de terceros</h2>
              <p className="mt-3">
                Este sitio utiliza servicios de terceros como WhatsApp (Meta), Google Maps y un proveedor de envío de
                correos para el formulario. Dichos servicios pueden tratar datos según sus propias políticas.
              </p>
            </section>
            <section>
              <h2>7. Tus derechos</h2>
              <p className="mt-3">
                Conforme a la legislación chilena de protección de datos personales, puedes solicitar el acceso,
                rectificación o eliminación de tus datos escribiendo a{" "}
                <a className="text-navy-900 underline" href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
