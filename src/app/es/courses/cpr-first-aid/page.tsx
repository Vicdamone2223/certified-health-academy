import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Certificación de RCP y Primeros Auxilios en VA, MD y DC | Certified Health Academy",
  description:
    "Capacitación práctica de RCP, DEA y Primeros Auxilios en Virginia, Maryland y Washington, DC. Certificación HSI, opciones para grupos, capacitación en el lugar de trabajo y asistencia en español.",
  alternates: {
    canonical:
      "https://certifiedhealthacademy.com/es/courses/cpr-first-aid",
    languages: {
      "en-US":
        "https://certifiedhealthacademy.com/courses/cpr-first-aid",
      "es-US":
        "https://certifiedhealthacademy.com/es/courses/cpr-first-aid",
    },
  },
};

export default function CPRFirstAidEs() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Certificación de RCP y Primeros Auxilios",
    description:
      "Capacitación práctica de RCP, DEA y Primeros Auxilios para cuidadores, personal de cuidado infantil, trabajadores de salud, empresas, padres y miembros de la comunidad en Virginia, Maryland y Washington, DC.",
    inLanguage: "es",
    courseMode: "InPerson",
    educationalCredentialAwarded: "Certificado HSI de RCP y Primeros Auxilios",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
      telephone: "+1-571-288-5615",
    },
    offers: {
      "@type": "Offer",
      url: "https://certifiedhealthacademy.com/es/courses/cpr-first-aid",
      price: "80",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Cursos",
        item: "https://certifiedhealthacademy.com/es/courses",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "RCP y Primeros Auxilios",
        item: "https://certifiedhealthacademy.com/es/courses/cpr-first-aid",
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/es/courses"
        className="text-sm text-[var(--accent)] hover:underline"
      >
        ← Volver a Cursos
      </Link>

      <header className="mt-2">
        <h1 className="text-3xl font-extrabold">
          Certificación de RCP y Primeros Auxilios en Virginia, Maryland y
          Washington, DC
        </h1>

        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$80</strong> · Certificación HSI · Válida por{" "}
          <strong>2 años</strong> · Opciones para grupos y capacitación en el
          lugar de trabajo
        </p>

        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/cpr2.jpg"
            alt="Capacitación práctica en RCP y Primeros Auxilios"
            fill
            className="object-cover"
            sizes="(min-width:768px) 768px, 100vw"
            priority
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Capacitación Práctica en RCP, DEA y Primeros Auxilios
        </h2>

        <p className="mt-2">
          Certified Health Academy ofrece capacitación práctica de RCP y
          Primeros Auxilios para individuos, cuidadores, personal de cuidado
          infantil, empresas, padres y organizaciones comunitarias en Virginia,
          Maryland y Washington, DC.
        </p>

        <p className="mt-3">
          Los estudiantes practican habilidades esenciales para responder a
          emergencias, incluyendo RCP, uso del DEA, respuesta ante asfixia,
          control de sangrado y técnicas básicas de primeros auxilios.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          ¿Para Quién Es Esta Capacitación?
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Personal de guarderías, centros infantiles y campamentos</li>
          <li>Cuidadores y trabajadores de salud en el hogar</li>
          <li>Profesionales de seguridad y acondicionamiento físico</li>
          <li>Maestros y personal de organizaciones comunitarias</li>
          <li>Padres, niñeras y cuidadores familiares</li>
          <li>
            Empresas que necesitan certificar a varios empleados en RCP y
            Primeros Auxilios
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Lo Que Aprenderá</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>RCP para adultos, niños y bebés</li>
          <li>Uso del Desfibrilador Externo Automático (DEA)</li>
          <li>Cómo responder ante asfixia</li>
          <li>Control de sangrado, shock y cuidado de heridas</li>
          <li>Quemaduras, fracturas, esguinces y lesiones de cabeza o cuello</li>
          <li>Reacciones alérgicas y uso básico de epinefrina</li>
          <li>Seguridad de la escena, equipo de protección y precauciones universales</li>
          <li>Posición de recuperación y monitoreo hasta que llegue ayuda</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Capacitación para Grupos y en el Lugar de Trabajo
        </h2>

        <p className="mt-2">
          Certified Health Academy trabaja con empresas, centros de cuidado
          infantil, organizaciones de salud, iglesias, escuelas y otros grupos
          que necesitan capacitar a varias personas al mismo tiempo.
        </p>

        <p className="mt-3">
          Las clases para grupos y la capacitación en el lugar de trabajo pueden
          estar disponibles dependiendo de la ubicación, el tamaño del grupo y
          las necesidades de horario.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Asistencia en Español Disponible
        </h2>

        <p className="mt-2">
          Las clases se ofrecen principalmente en inglés, pero hay asistencia y
          traducción al español disponibles para estudiantes que se sientan más
          cómodos comunicándose en español.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Clases de RCP en Virginia, Maryland y Washington, DC
        </h2>

        <p className="mt-2">
          Certified Health Academy ofrece capacitación de RCP y Primeros
          Auxilios en Virginia, Maryland y Washington, DC. Las ubicaciones de
          las clases varían y hay horarios flexibles para individuos, grupos y
          empresas.
        </p>

        <p className="mt-3">
          También puede haber clases disponibles durante los fines de semana,
          dependiendo del horario actual.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certificación</h3>
          <p className="mt-2 text-sm">
            Certificación HSI de RCP y Primeros Auxilios. Válida por{" "}
            <strong>2 años</strong>.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Precio del Curso</h3>
          <p className="mt-2 text-sm">
            Capacitación de RCP y Primeros Auxilios: <strong>$80</strong>
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Requisitos y Qué Debe Traer
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Identificación con foto para registrarse</li>
          <li>Ropa cómoda para la práctica de RCP</li>
          <li>Llegar aproximadamente 10 minutos antes para registrarse</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>

        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">
              ¿Cuánto cuesta la certificación de RCP y Primeros Auxilios?
            </h3>
            <p className="mt-1">
              La capacitación cuesta <strong>$80</strong> por estudiante.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Cuánto tiempo es válida la certificación?
            </h3>
            <p className="mt-1">
              La certificación HSI de RCP y Primeros Auxilios es válida por{" "}
              <strong>2 años</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Enseñan RCP para adultos, niños y bebés?
            </h3>
            <p className="mt-1">
              Sí. La capacitación incluye RCP para adultos, niños y bebés, además
              de uso del DEA y respuesta ante asfixia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Ofrecen capacitación para empresas y grupos?
            </h3>
            <p className="mt-1">
              Sí. Certified Health Academy ofrece capacitación para empresas,
              centros infantiles, organizaciones de salud, escuelas, iglesias y
              otros grupos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Pueden dar la capacitación en nuestro lugar de trabajo?
            </h3>
            <p className="mt-1">
              La capacitación en el lugar de trabajo puede estar disponible
              dependiendo del tamaño del grupo, ubicación y horario.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Hay asistencia en español disponible?
            </h3>
            <p className="mt-1">
              Sí. Las clases se ofrecen principalmente en inglés, pero hay
              asistencia y traducción al español cuando sea necesario.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Ofrecen clases los fines de semana?
            </h3>
            <p className="mt-1">
              Puede haber disponibilidad los fines de semana dependiendo del
              horario actual.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Dónde se ofrecen las clases de RCP y Primeros Auxilios?
            </h3>
            <p className="mt-1">
              Las ubicaciones varían en Virginia, Maryland y Washington, DC.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">
          Programe su Certificación de RCP y Primeros Auxilios
        </h2>

        <p className="mt-2">
          Ya sea que necesite certificación para el trabajo, cuidado infantil,
          cuidado de familiares, preparación personal o para todo un equipo,
          Certified Health Academy puede ayudarle a encontrar una próxima clase
          o coordinar capacitación para grupos.
        </p>

        <p className="mt-3">
          ¿Preguntas? Llame al{" "}
          <a
            href="tel:+15712885615"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            571-288-5615
          </a>
          .
        </p>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/es/schedule" className="btn btn-primary">
          Reservar Esta Clase
        </Link>

        <Link href="/es/contact" className="btn btn-outline">
          Contáctenos
        </Link>

        <Link href="/es/courses" className="btn btn-outline">
          Ver Todos los Cursos
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd),
        }}
      />
    </main>
  );
}