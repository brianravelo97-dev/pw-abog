"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Close, Menu, Phone, WhatsApp } from "./Icons";
import { nav, site, waLink } from "@/lib/site";

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant ${
        scrolled ? "bg-navy-950/90 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "bg-transparent py-5"
      }`}
    >
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-950">
        Saltar al contenido
      </a>
      <div className="container-x flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative py-2 text-[0.8rem] font-medium tracking-wide text-ivory/80 transition-colors hover:text-ivory"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-elegant group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden items-center gap-2 text-sm text-ivory/80 hover:text-gold-light lg:flex">
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
            Agenda una asesoría
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-ivory xl:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className={`fixed inset-0 z-50 flex flex-col bg-navy-950 transition-all duration-500 ease-elegant xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-ivory"
            aria-label="Cerrar menú"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>
        <nav aria-label="Móvil" className="container-x flex flex-1 flex-col justify-center">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-700 ease-elegant ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 font-serif text-3xl text-ivory hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-x grid gap-3 pb-10 pt-6 sm:grid-cols-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <WhatsApp className="h-5 w-5" /> Escríbenos por WhatsApp
          </a>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" /> Llamar {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
