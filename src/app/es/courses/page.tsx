export const metadata = { title: "Cursos | Certified Health Academy" };

import CourseCardsEs from "../../components/CourseCardsEs";

export default function CursosPageEs() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Cursos</h1>
      <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        Capacitación presencial en DC y Virginia del Norte. Sin duración fija: priorizamos el dominio de las habilidades.
      </p>

      <div className="mt-8">
        <CourseCardsEs />
      </div>
    </main>
  );
}
