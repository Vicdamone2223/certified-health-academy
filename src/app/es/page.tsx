import Link from "next/link";
import Image from "next/image";
import Divider from "../components/Divider";        // reuse same components
import CourseCardsEs from "../components/CourseCardsEs";

export const metadata = {
  title: "Academia Elite | DC & Norte de VA",
};

export default function HomeEs() {
  return (
    <>
      {/* Héroe dividido */}
      <section className="bg-white">
        <div className="container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Entrena hoy. <span className="text-[var(--accent)]">Llega listo</span> cuando importa.
            </h1>
            <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
              Cursos acreditados de RCP &amp; Primeros Auxilios, Administración de Medicamentos y
              Manipulador de Alimentos (Gerente) en DC y el Norte de Virginia.
              Paga ahora o reserva tu cupo.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/schedule" className="btn btn-primary">Reservar clase</Link>
              <Link href="/courses" className="btn btn-outline">Ver cursos</Link>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
              <li>• HSI · Home Health Plus · ServSafe</li>
              <li>• Certificados entregados</li>
              <li>• DC y Norte de VA</li>
            </ul>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)] shadow-sm">
            <Image src="/hero.jpg" alt="Capacitación práctica en salud" fill priority className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <Divider />

      {/* You can keep using the same CourseCards for now; later we can add a localized Spanish version */}
      <CourseCardsEs />
    </>
  );
}
