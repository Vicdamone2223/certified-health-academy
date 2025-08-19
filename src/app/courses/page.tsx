export const metadata = { title: "Courses | Elite Training Academy" };

const courses = [
  {
    name: "CPR & First Aid",
    price: "$65",
    renew: "Every 2 years",
    accred: "HSI accredited",
    blurb: "CPR, AED, choking relief, bleeding control, real-world first aid.",
    href: "/courses/cpr-first-aid",
  },
  {
    name: "Medication Administration",
    price: "$70",
    renew: "Every year",
    accred: "Home Health Plus accredited",
    blurb: "Six Rights, MAR, routes & forms, storage, error prevention.",
    href: "/courses/medication-administration",
  },
  {
    name: "Food Handler (Manager)",
    price: "$140",
    renew: "Every 5 years",
    accred: "ServSafe accredited",
    blurb: "HACCP, TCS controls, allergens, hygiene, storage, sanitizing.",
    href: "/courses/food-handler-manager",
  },
];

export default function CoursesPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Courses</h1>
      <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        No set class length—sessions are structured to mastery, not the clock.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <a key={c.name} href={c.href} className="card p-5 hover:translate-y-[-1px]">
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">{c.accred}</p>
            <p className="mt-3 text-3xl font-bold text-[var(--brand)]">{c.price}</p>
            <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">Renew: {c.renew}</p>
            <p className="mt-3 text-sm">{c.blurb}</p>
            <span className="mt-4 inline-block rounded-lg bg-[var(--accent)] px-3 py-2 text-sm text-white">
              View details
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
