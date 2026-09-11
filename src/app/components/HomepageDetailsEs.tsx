import Link from "next/link";

export default function HomepageDetailsEs() {
  return (
    <>
      {/* POR QUÉ ELEGIR CERTIFIED HEALTH ACADEMY */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[var(--brand)]">
              ¿Por Qué Elegir Certified Health Academy?
            </h2>

            <p className="mt-3 text-lg text-gray-600">
              Capacitación práctica y profesional para individuos, trabajadores
              y organizaciones en Virginia, Maryland y Washington, DC.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">✓</div>

              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Capacitación Profesional
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Cursos de certificación alineados con organizaciones reconocidas
                como HSI, Home Health Plus y ServSafe.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">📅</div>

              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Horarios Flexibles
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Ofrecemos horarios flexibles y opciones durante los fines de
                semana cuando estén disponibles.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">👥</div>

              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Clases para Grupos
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Capacite a varios empleados al mismo tiempo. También puede haber
                capacitación disponible en su lugar de trabajo.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">⚡</div>

              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Certificación Rápida
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Los certificados normalmente están disponibles dentro de 24–48
                horas después de completar exitosamente el curso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACITACIÓN PARA GRUPOS */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                Capacitación para su Equipo
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[var(--brand)]">
                ¿Necesita Certificar a Varios Empleados?
              </h2>

              <p className="mt-4 leading-7 text-gray-700">
                Certified Health Academy ofrece capacitación para empresas y
                organizaciones que necesitan certificar a varios empleados de
                una manera conveniente.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                Trabajamos con centros infantiles, organizaciones de salud,
                agencias de cuidado en el hogar, restaurantes, negocios de
                alimentos, programas comunitarios y otros empleadores en
                Virginia, Maryland y Washington, DC.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                Dependiendo del tamaño del grupo, la ubicación y el horario, la
                capacitación también puede realizarse en su lugar de trabajo.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/es/contact" className="btn btn-primary">
                  Solicitar Capacitación para Grupos
                </Link>

                <a href="tel:+15712885615" className="btn btn-outline">
                  Llamar 571-288-5615
                </a>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--brand)]">
                Ideal Para:
              </h3>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li>✓ Centros infantiles y escuelas</li>
                <li>✓ Agencias de cuidado y salud en el hogar</li>
                <li>✓ Programas residenciales y comunitarios</li>
                <li>✓ Restaurantes y negocios de alimentos</li>
                <li>✓ Empresas y organizaciones</li>
                <li>✓ Equipos que necesitan certificación o renovación</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREA DE SERVICIO */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Capacitación Local
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[var(--brand)]">
              Sirviendo Virginia, Maryland y Washington, DC
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-700">
              Certified Health Academy ofrece capacitación y certificación en
              RCP y Primeros Auxilios, Administración de Medicamentos y
              Manipulación y Gerencia de Alimentos en Virginia, Maryland y
              Washington, DC.
            </p>

            <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-700">
              Las ubicaciones varían según el horario de los cursos. También
              ofrecemos horarios flexibles, clases para grupos y disponibilidad
              durante los fines de semana.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-[var(--brand)]">
                  Virginia
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Certificación y capacitación profesional
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-[var(--brand)]">
                  Maryland
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Capacitación individual y para grupos
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-[var(--brand)]">
                  Washington, DC
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Capacitación profesional flexible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[var(--brand)]">
                Preguntas Frecuentes
              </h2>

              <p className="mt-3 text-gray-600">
                Información sobre horarios, certificaciones y capacitación para
                grupos.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  ¿Ofrecen clases los fines de semana?
                </h3>

                <p className="mt-2 text-gray-600">
                  Sí. Puede haber clases disponibles durante los fines de semana
                  dependiendo del horario actual.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  ¿Pueden capacitar a nuestros empleados en el lugar de trabajo?
                </h3>

                <p className="mt-2 text-gray-600">
                  Sí. La capacitación en el lugar de trabajo puede estar
                  disponible dependiendo del curso, tamaño del grupo, ubicación
                  y horario.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  ¿Hay asistencia en español disponible?
                </h3>

                <p className="mt-2 text-gray-600">
                  Sí. Las clases se ofrecen principalmente en inglés, pero hay
                  asistencia y traducción al español disponibles cuando sea
                  necesario.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  ¿Cuándo recibiré mi certificado?
                </h3>

                <p className="mt-2 text-gray-600">
                  Los certificados normalmente están disponibles dentro de
                  24–48 horas después de completar exitosamente el curso.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  ¿Dónde se ofrecen las clases?
                </h3>

                <p className="mt-2 text-gray-600">
                  Las ubicaciones varían en Virginia, Maryland y Washington, DC.
                  Consulte nuestro horario o comuníquese con nosotros para
                  conocer la disponibilidad actual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--brand)] py-14 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">
            ¿Listo Para Obtener su Certificación?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Elija su curso y reserve una próxima clase, o comuníquese con
            Certified Health Academy para hablar sobre capacitación para grupos.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/es/schedule"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand)] transition hover:opacity-90"
            >
              Reservar una Clase
            </Link>

            <a
              href="tel:+15712885615"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[var(--brand)]"
            >
              Llamar 571-288-5615
            </a>
          </div>
        </div>
      </section>
    </>
  );
}