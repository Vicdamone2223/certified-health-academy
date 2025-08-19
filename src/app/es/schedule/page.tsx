export const metadata = { title: "Horario | Certified Health Academy" };

export default function HorarioPageEs() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Horario y Reservas</h1>
      <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        Reserve su cupo y pague en persona el día de la clase.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* CPR & First Aid */}
        <section className="card p-4">
          <h2 className="text-xl font-semibold">RCP y Primeros Auxilios</h2>
          <div className="mt-3 aspect-[3/4] w-full overflow-hidden rounded-lg bg-white">
            <iframe
              title="RCP/Primeros Auxilios"
              src="https://calendly.com/ablackweb/cpr-first-aid"
              className="h-full w-full"
            />
          </div>
        </section>

        {/* Medication Administration */}
        <section className="card p-4">
          <h2 className="text-xl font-semibold">Administración de Medicamentos</h2>
          <div className="mt-3 aspect-[3/4] w-full overflow-hidden rounded-lg bg-white">
            <iframe
              title="Administración de Medicamentos"
              src="https://calendly.com/ablackweb/medication-administration"
              className="h-full w-full"
            />
          </div>
        </section>

        {/* Food Handler (Manager) */}
        <section className="card p-4">
          <h2 className="text-xl font-semibold">Manipulador de Alimentos (Gerente)</h2>
          <div className="mt-3 aspect-[3/4] w-full overflow-hidden rounded-lg bg-white">
            <iframe
              title="Manipulador de Alimentos (Gerente)"
              src="https://calendly.com/ablackweb/food-handler-manager"
              className="h-full w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
