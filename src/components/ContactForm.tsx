"use client";

import { useState } from "react";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { site, waLink } from "@/lib/site";
import { ArrowRight, Check, Mail, WhatsApp } from "./Icons";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const field =
  "peer w-full rounded-xl border border-sand-dark bg-white px-4 pb-2.5 pt-6 text-[0.95rem] text-graphite outline-none transition-all duration-300 placeholder-transparent focus:border-gold focus:ring-4 focus:ring-gold/15";
const label =
  "pointer-events-none absolute left-4 top-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone transition-all";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const text = `Hola, soy ${data.nombre}. Consulta sobre ${data.area || "otra materia"}:\n\n${data.mensaje}\n\nTeléfono: ${data.telefono}${data.email ? `\nCorreo: ${data.email}` : ""}`;
    setSummary(text);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      const body = await res.json().catch(() => ({}));
      if (res.status === 503) {
        setStatus("fallback");
        return;
      }
      setError(body.error || "No pudimos enviar tu consulta. Intenta nuevamente.");
      setStatus("error");
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center rounded-[24px] bg-white p-10">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-navy-950">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-serif text-3xl text-navy-900">¡Gracias! Recibimos tu consulta.</h3>
        <p className="mt-3 text-stone">Te contactaremos a la brevedad para coordinar tu primera asesoría.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-ghost-dark mt-8">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div role="status" className="rounded-[24px] bg-white p-8 sm:p-10">
        <h3 className="font-serif text-3xl text-navy-900">Envía tu consulta en un clic</h3>
        <p className="mt-3 text-stone">
          Preparamos tu mensaje. Elige cómo prefieres enviarlo y te responderemos para coordinar tu asesoría.
        </p>
        <pre className="mt-6 max-h-48 overflow-auto whitespace-pre-wrap rounded-xl bg-sand p-4 font-sans text-sm text-graphite">{summary}</pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={waLink(summary)} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <WhatsApp className="h-5 w-5" /> Enviar por WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Consulta desde el sitio web")}&body=${encodeURIComponent(summary)}`}
            className="btn-ghost-dark"
          >
            <Mail className="h-4 w-4" /> Enviar por correo
          </a>
        </div>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm text-stone underline underline-offset-4 hover:text-navy-900">
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] bg-white p-7 shadow-[0_40px_100px_-60px_rgba(11,26,51,0.5)] sm:p-10" noValidate={false}>
      <h3 className="font-serif text-3xl text-navy-900">Cuéntanos tu caso</h3>
      <p className="mt-2 text-sm text-stone">Los campos marcados con * son obligatorios.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="relative sm:col-span-2">
          <input id="nombre" name="nombre" required minLength={2} maxLength={80} autoComplete="name" placeholder="Nombre" className={field} />
          <label htmlFor="nombre" className={label}>Nombre completo *</label>
        </div>
        <div className="relative">
          <input id="telefono" name="telefono" type="tel" required minLength={8} maxLength={20} autoComplete="tel" inputMode="tel" placeholder="Teléfono" className={field} />
          <label htmlFor="telefono" className={label}>Teléfono / WhatsApp *</label>
        </div>
        <div className="relative">
          <input id="email" name="email" type="email" maxLength={120} autoComplete="email" placeholder="Correo" className={field} />
          <label htmlFor="email" className={label}>Correo electrónico</label>
        </div>
        <div className="relative sm:col-span-2">
          <select id="area" name="area" required defaultValue="" className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235b616c%22 stroke-width=%221.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-10`}>
            <option value="" disabled>Selecciona una materia</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.name}>{a.name}</option>
            ))}
            <option value="Otra materia">Otra materia / No estoy seguro</option>
          </select>
          <label htmlFor="area" className={label}>Área jurídica de interés *</label>
        </div>
        <div className="relative sm:col-span-2">
          <textarea id="mensaje" name="mensaje" required minLength={10} maxLength={2000} rows={5} placeholder="Consulta" className={`${field} resize-y`} />
          <label htmlFor="mensaje" className={label}>Tu consulta inicial *</label>
        </div>
        {/* honeypot anti-spam */}
        <div aria-hidden className="absolute -left-[9999px]">
          <label htmlFor="empresa">No completar</label>
          <input id="empresa" name="empresa" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-stone">
        <input type="checkbox" name="consentimiento" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#b8935a]" />
        <span>
          Acepto el tratamiento de mis datos para responder esta consulta, según el{" "}
          <Link href="/privacidad" className="font-semibold text-navy-900 underline underline-offset-2">aviso de privacidad</Link>. *
        </span>
      </label>

      <p className="mt-4 rounded-xl bg-sand px-4 py-3 text-xs leading-relaxed text-stone">
        Enviar una consulta no constituye por sí mismo una relación abogado-cliente. Evita incluir información
        especialmente sensible en este primer mensaje.
      </p>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-gold mt-6 w-full disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Enviando…" : (<>Enviar consulta <ArrowRight className="arrow h-4 w-4" /></>)}
      </button>
    </form>
  );
}
