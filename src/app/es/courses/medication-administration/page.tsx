import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Capacitación en Administración de Medicamentos en VA, MD y DC | Certified Health Academy",
  description:
    "Capacitación en Administración de Medicamentos para trabajadores de salud en el hogar, cuidadores, personal residencial y de cuidado infantil en Virginia, Maryland y Washington, DC. Opciones para grupos y capacitación en el lugar de trabajo.",
  alternates: {
    canonical:
      "https://certifiedhealthacademy.com/es/courses/medication-administration",
    languages: {
      "en-US":
        "https://certifiedhealthacademy.com/courses/medication-administration",
      "es-US":
        "https://certifiedhealthacademy.com/es/courses/medication-administration",
    },
  },
};

export default function MedicationAdministrationEs() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Capacitación en Administración de Medicamentos",
    description:
      "Capacitación en Administración de Medicamentos para personal de atención directa, trabajadores de salud en el hogar, empleados de programas residenciales, personal de cuidado infantil y otros profesionales de apoyo comunitario en Virginia, Maryland y Washington, DC.",
    inLanguage: "es",
    courseMode: "InPerson",
    educationalCredentialAwarded:
      "Certificado de Administración de Medicamentos",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
      telephone: "+1-571-288-5615",
    },
    offers: {
      "@type": "Offer",
      url: "https://certifiedhealthacademy.com/es/courses/medication-administration",
      price: "110",
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
        name: "Administración de Medicamentos",
        item:
          "https://certifiedhealthacademy.com/es/courses/medication-administration",
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
          Capacitación en Administración de Medicamentos en Virginia, Maryland y
          Washington, DC
        </h1>

        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$110</strong> · Capacitación dirigida por instructor ·
          Renovación cada <strong>3 años</strong> · Opciones para grupos y
          capacitación en el lugar de trabajo
        </p>

        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/medication2.jpg"
            alt="Capacitación en Administración de Medicamentos para cuidadores y personal de salud"
            fill
            className="object-cover"
            sizes="(min-width:768px) 768px, 100vw"
            priority
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Capacitación en Administración de Medicamentos para Profesionales de
          Cuidado
        </h2>

        <p className="mt-2">
          Certified Health Academy ofrece capacitación en Administración de
          Medicamentos para profesionales de atención directa, trabajadores de
          salud en el hogar, personal de programas residenciales, empleados de
          cuidado infantil y trabajadores de servicios comunitarios en Virginia,
          Maryland y Washington, DC.
        </p>

        <p className="mt-3">
          Los estudiantes aprenden prácticas esenciales para administrar
          medicamentos de manera segura, documentar correctamente, prevenir
          errores, controlar infecciones y mantener procedimientos apropiados de
          almacenamiento y dosificación.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          ¿Para Quién Es Esta Capacitación?
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Profesionales de apoyo directo</li>
          <li>Trabajadores de salud y cuidado en el hogar</li>
          <li>Personal de hogares grupales y programas residenciales</li>
          <li>Empleados de programas diurnos</li>
          <li>Personal de cuidado infantil y escuelas</li>
          <li>Trabajadores de servicios de apoyo comunitario</li>
          <li>Empleados nuevos que necesitan capacitación inicial</li>
          <li>Personal que necesita renovar su capacitación</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Lo Que Aprenderá</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Los Seis Derechos de la administración de medicamentos</li>
          <li>Cómo leer órdenes, etiquetas y fechas de vencimiento</li>
          <li>
            Documentación en el Registro de Administración de Medicamentos
            (MAR)
          </li>
          <li>Conteo, desperdicio y reporte de incidentes</li>
          <li>
            Rutas y formas de medicamentos, incluyendo oral, tópica, inhalada y
            oftálmica
          </li>
          <li>
            Medición y dosificación utilizando vasos, jeringas y goteros
          </li>
          <li>Almacenamiento, seguridad y eliminación de medicamentos</li>
          <li>Control de infecciones e higiene de manos</li>
          <li>Prevención de errores de medicación</li>
          <li>
            Cuándo suspender un medicamento o pedir ayuda adicional
          </li>
          <li>Situaciones de emergencia y cuándo llamar al 911</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Capacitación para Grupos y en el Lugar de Trabajo
        </h2>

        <p className="mt-2">
          Certified Health Academy trabaja con organizaciones de salud, agencias
          de cuidado en el hogar, programas residenciales, centros de cuidado
          infantil y otros empleadores que necesitan capacitar a varios
          empleados.
        </p>

        <p className="mt-3">
          Las clases para grupos y la capacitación en el lugar de trabajo pueden
          estar disponibles dependiendo del tamaño del grupo, la ubicación y las
          necesidades de horario.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Asistencia en Español Disponible
        </h2>

        <p className="mt-2">
          La capacitación se ofrece principalmente en inglés, pero hay
          asistencia en español disponible para estudiantes que necesiten ayuda
          adicional para comprender las instrucciones o el material del curso.
        </p>

        <p className="mt-3">
          Si usted o miembros de su organización necesitan asistencia en
          español, comuníquese con Certified Health Academy antes de la clase.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Clases en Virginia, Maryland y Washington, DC
        </h2>

        <p className="mt-2">
          Certified Health Academy ofrece capacitación en Administración de
          Medicamentos en Virginia, Maryland y Washington, DC. Las ubicaciones
          de las clases varían y hay horarios flexibles para individuos y
          grupos.
        </p>

        <p className="mt-3">
          También puede haber disponibilidad durante los fines de semana,
          dependiendo del horario actual.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certificación</h3>

          <p className="mt-2 text-sm">
            El certificado de Administración de Medicamentos se emite después de
            completar exitosamente la capacitación y es válido por{" "}
            <strong>3 años</strong>.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Precio del Curso</h3>

          <p className="mt-2 text-sm">
            Capacitación en Administración de Medicamentos:{" "}
            <strong>$110</strong>
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Qué Incluye</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Capacitación dirigida por instructor</li>
          <li>Escenarios prácticos y ejercicios guiados</li>
          <li>Práctica de documentación de medicamentos</li>
          <li>Certificado digital y comprobante de finalización</li>
          <li>Plantillas de documentación y materiales del curso</li>
          <li>Listas de verificación de seguridad y procedimientos</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Requisitos y Qué Debe Traer
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Identificación con foto para registrarse</li>
          <li>
            Políticas de medicamentos o requisitos de capacitación de su
            empleador, si corresponde
          </li>
          <li>
            Preguntas sobre situaciones de administración de medicamentos que
            encuentre en su trabajo
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>

        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">
              ¿Cuánto cuesta la capacitación en Administración de Medicamentos?
            </h3>

            <p className="mt-1">
              La capacitación cuesta <strong>$110</strong> por estudiante.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Cuánto tiempo es válido el certificado?
            </h3>

            <p className="mt-1">
              El certificado de Administración de Medicamentos es válido por{" "}
              <strong>3 años</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Quién debe tomar esta capacitación?
            </h3>

            <p className="mt-1">
              Puede ser apropiada para personal de atención directa,
              trabajadores de salud en el hogar, empleados de programas
              residenciales, personal de cuidado infantil y otros trabajadores
              responsables de ayudar con medicamentos como parte de su trabajo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Ofrecen capacitación para grupos?
            </h3>

            <p className="mt-1">
              Sí. Certified Health Academy trabaja con empresas y organizaciones
              que necesitan capacitar a varios empleados.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Pueden dar la capacitación en nuestro lugar de trabajo?
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
              Sí. La capacitación se ofrece principalmente en inglés, pero hay
              asistencia en español disponible cuando sea necesario.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Ofrecen clases durante los fines de semana?
            </h3>

            <p className="mt-1">
              Puede haber clases durante los fines de semana dependiendo del
              horario actual.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Dónde se ofrece la capacitación?
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
          Programe su Capacitación en Administración de Medicamentos
        </h2>

        <p className="mt-2">
          Ya sea que necesite capacitación para usted o para el personal de una
          agencia de salud, programa residencial, centro de cuidado infantil u
          otra organización, Certified Health Academy puede ayudarle a encontrar
          una próxima clase o coordinar capacitación para grupos.
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