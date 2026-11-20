"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Activa la aparición progresiva de todos los elementos [data-reveal]. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div data-reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""} ${tone === "light" ? "text-gold-light" : ""}`}>{eyebrow}</p>
      <h2 className={`h-display mt-5 text-4xl sm:text-5xl lg:text-[3.6rem] ${tone === "light" ? "text-ivory" : "text-navy-900"}`}>{title}</h2>
      {intro && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-ivory/70" : "text-stone"}`}>{intro}</p>
      )}
    </div>
  );
}
