import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Certificación de Manipulación y Gerencia de Alimentos en VA, MD y DC | Certified Health Academy",
  description:
    "Capacitación de Manipulación y Gerencia de Alimentos para restaurantes y negocios de comida en Virginia, Maryland y Washington, DC. Clases alineadas con ServSafe, asistencia en español, grupos y capacitación en el lugar de trabajo.",
  alternates: {
    canonical:
      "https://certifiedhealthacademy.com/es/courses/food-handler-manager",
    languages: {
      "en-US":
        "https://certifiedhealthacademy.com/courses/food-handler-manager",
      "es-US":
        "https://certifiedhealthacademy.com/es/courses/food-handler-manager",
    },
  },
};

export default function FoodHandlerManagerSpanishPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Certificación de Manipulación y Gerencia de Alimentos",
    description:
      "Capacitación de Manipulación y Gerencia de Alimentos para restaurantes, food trucks, negocios de catering, programas de cuidado infantil, servicios de alimentos en el sector de salud y otros negocios de comida en Virginia, Maryland y Washington, DC.",
    inLanguage: "es",
    courseMode: "InPerson",
    educationalCredentialAwarded:
      "Certificado de Manipulación / Gerencia de Alimentos",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
      telephone: "+1-571-288-5615",
    },
    offers: {
      "@type": "Offer",
      url: "https://certifiedhealthacademy.com/es/courses/food-handler-manager",
      price: "140",
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
        name: "Manipulación y Gerencia de Alimentos",
        item:
          "https://certifiedhealthacademy.com/es/courses/food-handler-manager",
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
          Certificación de Manipulación y Gerencia de Alimentos en Virginia,
          Maryland y Washington, DC
        </h1>

        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$140</strong> · Capacitación alineada con ServSafe · Horarios
          flexibles · Opciones para grupos y capacitación en el lugar de trabajo
        </p>

        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/food2.jpg"
            alt="Capacitación en seguridad alimentaria y control de temperatura"
            fill
            className="object-cover"
            sizes="(min-width:768px) 768px, 100vw"
            priority
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Capacitación en Seguridad Alimentaria para Restaurantes y Negocios de
          Comida
        </h2>

        <p className="mt-2">
          Certified Health Academy ofrece capacitación de Manipulación y
          Gerencia de Alimentos para restaurantes, food trucks, negocios de
          catering, cafés, programas de cuidado infantil, servicios de alimentos
          en el sector de salud y otros negocios de comida en Virginia, Maryland
          y Washington, DC.
        </p>

        <p className="mt-3">
          La capacitación está diseñada para ayudar a gerentes y trabajadores
          del servicio de alimentos a comprender las prácticas de manipulación
          segura de alimentos, higiene, control de temperatura, manejo de
          alérgenos, prevención de contaminación y procedimientos diarios de
          seguridad alimentaria.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          ¿Para Quién Es Esta Capacitación?
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Gerentes de restaurantes y cafés</li>
          <li>Propietarios y empleados de food trucks</li>
          <li>Personal de catering y cocinas comerciales</li>
          <li>Personal de alimentos en escuelas y centros infantiles</li>
          <li>Personal de servicios de alimentos en el sector de salud</li>
          <li>
            Supervisores responsables de seguridad e higiene alimentaria
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Lo Que Aprenderá</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Principios de HACCP y control gerencial activo</li>
          <li>
            Control de tiempo y temperatura para alimentos que requieren
            seguridad especial (TCS)
          </li>
          <li>Manejo de alérgenos y prevención de contaminación cruzada</li>
          <li>Higiene personal, políticas de enfermedad y uso de guantes</li>
          <li>Recepción, etiquetado, almacenamiento, FIFO y descongelación</li>
          <li>
            Temperaturas de cocción, mantenimiento en caliente y frío,
            enfriamiento y recalentamiento
          </li>
          <li>
            Limpieza, desinfección, seguridad química y lavado de utensilios
          </li>
          <li>
            Higiene de instalaciones, control de plagas, registros y
            documentación
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Capacitación para Grupos y en el Lugar de Trabajo
        </h2>

        <p className="mt-2">
          Certified Health Academy trabaja con negocios y organizaciones que
          necesitan capacitar a varios empleados al mismo tiempo. Ofrecemos
          clases para grupos y, dependiendo de la ubicación y el horario, la
          capacitación puede realizarse en su restaurante, negocio o lugar de
          trabajo.
        </p>

        <p className="mt-3">
          Esta opción es ideal para restaurantes, food trucks, compañías de
          catering, programas de cuidado infantil y otros negocios que necesitan
          capacitar a varios empleados de una manera conveniente.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Asistencia en Español Disponible
        </h2>

        <p className="mt-2">
          La capacitación se ofrece principalmente en inglés, pero hay
          asistencia y traducción al español disponibles para estudiantes que se
          sientan más cómodos comunicándose en español.
        </p>

        <p className="mt-3">
          Si usted o miembros de su equipo necesitan ayuda en español,
          comuníquese con Certified Health Academy antes de la clase para que
          podamos ayudarle durante el proceso de capacitación.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Clases en Virginia, Maryland y Washington, DC
        </h2>

        <p className="mt-2">
          Certified Health Academy ofrece capacitación de Manipulación y
          Gerencia de Alimentos en Virginia, Maryland y Washington, DC. Las
          ubicaciones de las clases varían y ofrecemos horarios flexibles para
          individuos, grupos y negocios.
        </p>

        <p className="mt-3">
          También puede haber clases disponibles durante los fines de semana,
          dependiendo del horario.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Precio del Curso</h3>
          <p className="mt-2 text-sm">
            Capacitación de Manipulación y Gerencia de Alimentos:{" "}
            <strong>$140</strong>
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Disponibilidad del Certificado</h3>
          <p className="mt-2 text-sm">
            Los certificados normalmente están disponibles dentro de{" "}
            <strong>24–48 horas</strong> después de completar exitosamente la
            capacitación.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Requisitos y Qué Debe Traer
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Identificación con foto para registrarse</li>
          <li>
            Cualquier requisito de su empleador o departamento de salud local
          </li>
          <li>
            Preguntas sobre seguridad alimentaria o notas de inspección que
            desee discutir
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>

        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">
              ¿Cuánto cuesta la capacitación de Manipulación o Gerencia de
              Alimentos?
            </h3>
            <p className="mt-1">
              El curso cuesta <strong>$140</strong> por estudiante.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Ofrecen capacitación para grupos de restaurantes o negocios?
            </h3>
            <p className="mt-1">
              Sí. Certified Health Academy trabaja con negocios y
              organizaciones que necesitan capacitar a varios empleados.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Pueden dar la capacitación en nuestro restaurante o negocio?
            </h3>
            <p className="mt-1">
              La capacitación en el lugar de trabajo puede estar disponible
              dependiendo del tamaño del grupo, la ubicación y el horario.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Hay asistencia en español disponible?
            </h3>
            <p className="mt-1">
              Sí. Las clases se ofrecen principalmente en inglés, pero hay
              asistencia y traducción al español disponibles cuando sea
              necesario.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Ofrecen clases los fines de semana?
            </h3>
            <p className="mt-1">
              Sí. Puede haber disponibilidad durante los fines de semana,
              dependiendo del horario actual.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Cuándo recibiré mi certificado?
            </h3>
            <p className="mt-1">
              Los certificados normalmente están disponibles dentro de 24–48
              horas después de completar exitosamente la capacitación.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Dónde se ofrecen las clases?
            </h3>
            <p className="mt-1">
              Las ubicaciones varían en Virginia, Maryland y Washington, DC.
              Comuníquese con Certified Health Academy para conocer la
              disponibilidad actual.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">
          Programe su Capacitación de Manipulación o Gerencia de Alimentos
        </h2>

        <p className="mt-2">
          Ya sea que se registre individualmente o necesite capacitación para
          su restaurante, food truck, negocio de catering u organización,
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