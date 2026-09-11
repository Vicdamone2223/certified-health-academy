import Link from "next/link";
import Image from "next/image";
import CourseCardsEs from "../components/CourseCardsEs";
import HomepageDetailsEs from "../components/HomepageDetailsEs";

export const metadata = {
  title:
    "Cursos de RCP, Administración de Medicamentos y Seguridad Alimentaria | Certified Health Academy",
  description:
    "Capacitación y certificación en RCP y Primeros Auxilios, Administración de Medicamentos y Manipulación de Alimentos en Virginia, Maryland y Washington, DC. Opciones para individuos, grupos y empresas.",
  alternates: {
    canonical: "https://certifiedhealthacademy.com/es",
    languages: {
      "en-US": "https://certifiedhealthacademy.com/",
      "es-US": "https://certifiedhealthacademy.com/es",
    },
  },
};

export default function HomeEs() {
  return (
    <>
      <section className="bg-white">
        <div className="container py-10 sm:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)] shadow-sm md:order-2">
              <Image
                src="/hero.jpg"
                alt="Capacitación práctica en salud y certificación profesional"
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>

            <div className="md:order-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Entrénate Hoy.{" "}
                <span className="text-[var(--accent)]">Prepárate</span> Cuando
                Más Importa.
              </h1>

              <p className="mt-3 text-base sm:text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                Capacitación y certificación en RCP y Primeros Auxilios,
                Administración de Medicamentos y Manipulación de Alimentos en
                Virginia, Maryland y Washington, DC. Clases individuales, para
                grupos y en el lugar de trabajo disponibles.
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
                <li>• Capacitación para grupos disponible</li>
                <li>• Virginia · Maryland · Washington, DC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CourseCardsEs />

      <HomepageDetailsEs />
    </>
  );
}