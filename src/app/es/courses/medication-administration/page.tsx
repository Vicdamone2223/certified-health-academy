import Image from "next/image";

export default function MedicationAdministrationEs() {
  return (
    <section className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* Texto */}
        <div>
          <h1 className="text-3xl font-bold">Administración de Medicamentos</h1>
          <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            Capacitación obligatoria para trabajadores de salud en el hogar y
            cuidadores responsables de administrar medicamentos de manera segura.
          </p>
          <ul className="mt-6 list-disc pl-6 space-y-2">
            <li>Precio: $70</li>
            <li>Certificación: Home Health Plus</li>
            <li>Renovación: anual</li>
            <li>Prácticas seguras de almacenamiento y administración</li>
            <li>Tipos de medicamentos y sus formas de presentación</li>
            <li>Prevención de errores y reacciones adversas</li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/medication2.jpg"
            alt="Curso de administración de medicamentos"
            fill
            priority
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
