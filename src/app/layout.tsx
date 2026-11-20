import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abogados en Melipilla | Estudio Jurídico Melipilla — Primera asesoría gratuita",
    template: "%s | Estudio Jurídico Melipilla",
  },
  description: site.description,
  keywords: [
    "abogado Melipilla",
    "abogados en Melipilla",
    "estudio jurídico Melipilla",
    "abogado de familia Melipilla",
    "divorcio Melipilla",
    "pensión de alimentos Melipilla",
    "abogado laboral Melipilla",
    "abogado penalista Melipilla",
    "abogado migratorio Melipilla",
    "prescripción de deudas Melipilla",
    "posesión efectiva Melipilla",
    "regularización de terrenos Melipilla",
    "mediación Melipilla",
    "abogado provincia de Melipilla",
    "abogado San Pedro",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: site.name,
    title: "Estudio Jurídico Melipilla — Abogados a tu alcance",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Melipilla — Abogados a tu alcance",
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
  category: "legal",
};

export const viewport: Viewport = {
  themeColor: "#070f1f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <head>
        {/* Habilita animaciones de aparición solo cuando JS está disponible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <OrganizationJsonLd />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  );
}
