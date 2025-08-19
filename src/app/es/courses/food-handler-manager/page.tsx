import Image from "next/image";
import foodImg from "@/../public/food2.jpg"; // static import from /public

export default function FoodHandlerManagerEs() {
  return (
    <section className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* Texto */}
        <div>
          <h1 className="text-3xl font-bold">Manipulador de Alimentos (Gerente)</h1>
          <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            Curso acreditado de ServSafe para gerentes de servicios de alimentos, obligatorio
            en muchos negocios en DC y Virginia del Norte.
          </p>
          <ul className="mt-6 list-disc pl-6 space-y-2">
            <li>Precio: $140</li>
            <li>Certificación: ServSafe</li>
            <li>Renovación: cada 5 años</li>
            <li>Normas de higiene y saneamiento</li>
            <li>Prevención de enfermedades transmitidas por alimentos</li>
            <li>Responsabilidades de supervisión y cumplimiento</li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src={foodImg}
            alt="Curso de manipulador de alimentos para gerentes"
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
