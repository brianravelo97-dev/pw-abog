import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header solid />
      <main id="contenido" className="grid min-h-[80vh] place-items-center bg-navy-950 px-5 text-center text-ivory">
        <div>
          <p className="eyebrow justify-center">Error 404</p>
          <h1 className="h-display mt-5 text-5xl sm:text-6xl">Página no encontrada</h1>
          <p className="mt-4 text-ivory/70">La página que buscas no existe o fue movida.</p>
          <Link href="/" className="btn-gold mt-10">Volver al inicio</Link>
        </div>
      </main>
    </>
  );
}
