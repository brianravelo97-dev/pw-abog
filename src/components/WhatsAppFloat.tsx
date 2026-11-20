"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Phone, WhatsApp } from "./Icons";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Escritorio / tablet: botón flotante */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className={`group fixed bottom-6 right-6 z-40 hidden items-center gap-3 transition-all duration-500 ease-elegant sm:flex ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white text-sm font-semibold text-navy-900 shadow-lg transition-all duration-500 ease-elegant group-hover:max-w-[220px] group-hover:px-4 group-hover:py-2">
          ¿Hablamos por WhatsApp?
        </span>
        <span className="pulse-ring relative isolate grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_-10px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
          <WhatsApp className="h-7 w-7" />
        </span>
      </a>

      {/* Móvil: barra de acción fija (prioridad para visitas desde Instagram) */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t border-white/10 bg-navy-950/95 p-3 backdrop-blur-xl transition-transform duration-500 ease-elegant sm:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white">
          <WhatsApp className="h-5 w-5" /> Consulta gratis por WhatsApp
        </a>
        <a href={site.phoneHref} aria-label={`Llamar al ${site.phoneDisplay}`} className="grid w-12 place-items-center rounded-full border border-white/20 text-ivory">
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
