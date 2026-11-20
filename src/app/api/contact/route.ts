import { NextResponse } from "next/server";

/**
 * Recibe el formulario de contacto y lo envía por correo mediante Resend.
 * Variables requeridas: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.
 * Si no están configuradas responde 503 y el formulario ofrece WhatsApp / correo.
 */

const hits = new Map<string, { n: number; t: number }>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B-\u001F]/g, "").trim().slice(0, max) : "";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: los bots completan el campo oculto.
  if (clean(body.empresa, 100)) return NextResponse.json({ ok: true });

  const nombre = clean(body.nombre, 80);
  const telefono = clean(body.telefono, 20);
  const email = clean(body.email, 120);
  const area = clean(body.area, 80);
  const mensaje = clean(body.mensaje, 2000);
  const consentimiento = body.consentimiento === "on" || body.consentimiento === true;

  if (nombre.length < 2 || telefono.replace(/\D/g, "").length < 8 || !area || mensaje.length < 10) {
    return NextResponse.json({ error: "Revisa los campos obligatorios." }, { status: 422 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "El correo electrónico no es válido." }, { status: 422 });
  }
  if (!consentimiento) {
    return NextResponse.json({ error: "Debes aceptar el aviso de privacidad." }, { status: 422 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  const now = Date.now();
  const rec = hits.get(ip);
  if (rec && now - rec.t < WINDOW) {
    if (rec.n >= MAX) return NextResponse.json({ error: "Demasiados envíos. Intenta más tarde o escríbenos por WhatsApp." }, { status: 429 });
    rec.n++;
  } else hits.set(ip, { n: 1, t: now });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: "Envío por correo no configurado." }, { status: 503 });
  }

  const html = `
    <h2>Nueva consulta desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${esc(nombre)}</p>
    <p><strong>Teléfono:</strong> ${esc(telefono)}</p>
    <p><strong>Correo:</strong> ${esc(email || "—")}</p>
    <p><strong>Área:</strong> ${esc(area)}</p>
    <p><strong>Consulta:</strong></p>
    <p style="white-space:pre-wrap">${esc(mensaje)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email || undefined,
      subject: `Consulta web: ${area} — ${nombre}`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "No pudimos enviar tu consulta. Escríbenos por WhatsApp." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
