import Image from "next/image";

export default function CPRFirstAidEs() {
  return (
    <section className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* Texto */}
        <div>
          <h1 className="text-3xl font-bold">CPR &amp; Primeros Auxilios</h1>
          <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            Curso acreditado de RCP y Primeros Auxilios. Ideal para cuidadores,
            personal de salud en el hogar y cualquier persona que quiera estar
            preparada para emergencias.
          </p>
          <ul className="mt-6 list-disc pl-6 space-y-2">
            <li>Precio: $65</li>
            <li>Certificación: HSI</li>
            <li>Renovación: cada 2 años</li>
            <li>Técnicas de RCP para adultos, niños y bebés</li>
            <li>Uso del DEA (Desfibrilador Externo Automático)</li>
            <li>Atención en heridas, sangrados, quemaduras y más</li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/cpr2.jpg"
            alt="Entrenamiento en RCP y primeros auxilios"
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
