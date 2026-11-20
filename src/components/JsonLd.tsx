import { areas } from "@/lib/areas";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

const json = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${site.url}/#estudio`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    image: `${site.url}/opengraph-image`,
    telephone: "+56978387667",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea.map((name) => ({ "@type": "Place", name })),
    sameAs: [site.instagram],
    knowsLanguage: "es-CL",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de práctica",
      itemListElement: areas.map((a) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: a.name, description: a.short, url: `${site.url}/areas/${a.slug}` },
      })),
    },
    // openingHours: agregar cuando el estudio confirme su horario.
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={json(data)} />;
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={json(data)} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={json(data)} />;
}
