import Link from "next/link";

/** Emblema refinado a partir del sello de la marca (balanza con laureles). */
export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="30.5" strokeWidth="1" opacity=".55" />
      {/* laureles */}
      <g strokeWidth="1.1">
        <path d="M17 40c2.5 6 8 9.5 15 10" />
        <path d="M47 40c-2.5 6-8 9.5-15 10" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <ellipse cx={18.6 + i * 2.9} cy={40.5 + i * 2.6} rx="2.6" ry="1.1" transform={`rotate(${35 + i * 8} ${18.6 + i * 2.9} ${40.5 + i * 2.6})`} />
            <ellipse cx={45.4 - i * 2.9} cy={40.5 + i * 2.6} rx="2.6" ry="1.1" transform={`rotate(${-35 - i * 8} ${45.4 - i * 2.9} ${40.5 + i * 2.6})`} />
          </g>
        ))}
      </g>
      {/* balanza */}
      <g strokeWidth="1.3">
        <path d="M32 14v29M26 43h12M28.5 46h7" />
        <circle cx="32" cy="13" r="1.2" />
        <path d="M19 19h26" />
        <path d="M21.5 19 17 29h9l-4.5-10ZM42.5 19 38 29h9l-4.5-10Z" />
        <path d="M16.5 29a5 3 0 0 0 10 0M37.5 29a5 3 0 0 0 10 0" />
      </g>
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const text = tone === "light" ? "text-ivory" : "text-navy-900";
  return (
    <Link href="/" aria-label="Estudio Jurídico Melipilla — Inicio" className={`group flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0 text-gold transition-transform duration-700 ease-elegant group-hover:rotate-[8deg]" />
      <span className="flex flex-col leading-none">
        <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${tone === "light" ? "text-gold-light" : "text-gold-dark"}`}>
          Estudio Jurídico
        </span>
        <span className={`font-serif text-[1.45rem] font-semibold tracking-[0.12em] ${text}`}>MELIPILLA</span>
      </span>
    </Link>
  );
}
