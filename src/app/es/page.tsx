import Link from "next/link";
import Image from "next/image";
import CourseCardsEs from "../components/CourseCardsEs";

export default function HomeEs() {
  return (
    <>
      {/* Hero — mobile shows image first; desktop uses two columns */}
      <section className="bg-white">
        <div className="container py-10 sm:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Image first in DOM = on top for mobile; on md+ it sits right */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)] shadow-sm md:order-2">
              <Image
                src="/hero.jpg"
                alt="Capacitación práctica en salud"
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>

            {/* Text */}
            <div className="md:order-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Entrénate Hoy.{" "}
                <span className="text-[var(--accent)]">Prepárate</span> Cuando Más Importa.
              </h1>

              <p className="mt-3 text-base sm:text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                Cursos acreditados de RCP y Primeros Auxilios, Administración de Medicamentos y
                Manipulación de Alimentos en DC y el norte de Virginia. Paga ahora o reserva tu lugar.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/es/schedule" className="btn btn-primary">
                  Reservar Clase
                </Link>
                <Link href="/es/courses" className="btn btn-outline">
                  Ver Cursos
                </Link>
              </div>

              <ul className="mt-5 space-y-1.5 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                <li>• HSI · Home Health Plus · ServSafe</li>
                <li>• Certificados incluidos</li>
                <li>• DC y Norte de VA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed course cards */}
      <CourseCardsEs />
    </>
  );
}
