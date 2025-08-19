import Image from "next/image";
import Link from "next/link";

type Course = {
  name: string;
  slug: string;
  price: string;
  accred: string;
  renew: string;
  subtitle?: string;
  img: string;
  bullets: string[];
};

const courses: Course[] = [
  {
    name: "RCP y Primeros Auxilios",
    slug: "cpr-first-aid",
    price: "$65",
    accred: "HSI acreditado",
    renew: "Cada 2 años",
    subtitle: "Adultos, niños y lactantes",
    img: "/cpr.jpg",
    bullets: [
      "RCP, uso de DEA y desobstrucción de vías",
      "Control de hemorragias y manejo del shock",
      "Quemaduras, fracturas y posición de recuperación",
      "Seguridad de la escena y EPP",
      "Curso impartido en inglés y español",
    ],
  },
  {
    name: "Administración de Medicamentos",
    slug: "medication-administration",
    price: "$70",
    accred: "Acreditado por Home Health Plus",
    renew: "Cada año",
    subtitle: "Atención comunitaria y domiciliaria",
    img: "/medication.jpg",
    bullets: [
      "Seis Correctos; lectura de etiquetas y órdenes",
      "Registro MAR e informe de incidentes",
      "Vías y formas; dosificación precisa",
      "Almacenamiento, seguridad y desecho",
    ],
  },
  {
    name: "Manipulador de Alimentos (Gerente)",
    slug: "food-handler-manager",
    price: "$140",
    accred: "Acreditado por ServSafe",
    renew: "Cada 5 años",
    subtitle: "Alineado con OSHA/ServSafe",
    img: "/food.jpg",
    bullets: [
      "HACCP y control gerencial activo",
      "Controles de tiempo/temperatura (TCS)",
      "Gestión de alérgenos y cruce de contacto",
      "Recepción, almacenamiento y rotulado (PEPS/FIFO)",
      "Curso impartido en inglés y español",
    ],
  },
];

export default function CourseCardsEs() {
  return (
    <section className="container pb-16">
      <h2 className="text-2xl font-bold">Cursos</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article key={c.slug} className="card overflow-hidden p-0">
            {/* Imagen */}
            <div className="relative h-44 w-full sm:h-48">
              <Image
                src={c.img}
                alt={`Curso: ${c.name}`}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority
              />
            </div>

            {/* Contenido */}
            <div className="p-5">
              <p className="text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">{c.price}</p>
              <h3 className="mt-1 text-xl font-semibold">{c.name}</h3>
              {c.subtitle && (
                <p className="text-sm font-medium text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                  {c.subtitle}
                </p>
              )}

              <ul className="mt-3 space-y-1 text-sm">
                {c.bullets.map((b, i) => (
                  <li key={i} className="pl-4 before:mr-2 before:content-['•'] before:text-[var(--accent)]">
                    {b}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-xs text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                {c.accred} · Renovación: {c.renew}
              </p>

              <div className="mt-4 flex gap-3">
                <Link href={`/es/courses/${c.slug}`} className="btn btn-outline">Más info</Link>
                <Link href="/es/schedule" className="btn btn-primary">Reservar</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
