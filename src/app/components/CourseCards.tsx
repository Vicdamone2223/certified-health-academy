import Image from "next/image";
import Link from "next/link";

type Course = {
  name: string;
  slug: string;
  price: string;
  accred: string;
  renew: string;
  subtitle?: string;
  img: string;
  bullets: string[];
};

const courses: Course[] = [
  {
    name: "CPR & First Aid",
    slug: "cpr-first-aid",
    price: "$65",
    accred: "HSI accredited",
    renew: "Every 2 years",
    subtitle: "Adult, Child & Infant",
    img: "/cpr.jpg",
    bullets: [
      "Course Is Taught In English & Spanish",
      "CPR, AED use, choking relief",
      "Bleeding control & shock care",
      "Burns, fractures, recovery position",
      "Scene safety & PPE; universal precautions",
      "Certificate issued at completion",
    ],
  },
  {
    name: "Medication Administration",
    slug: "medication-administration",
    price: "$70",
    accred: "Home Health Plus accredited",
    renew: "Every 3 Years",
    subtitle: "Community & Home Care",
    img: "/medication.jpg",
    bullets: [
      "Six Rights; reading labels & orders",
      "MAR documentation & incident reporting",
      "Routes/forms; measuring & dosing accuracy",
      "Storage, security, disposal",
      "Infection control & error prevention",
    ],
  },
  {
    name: "Food Handler (Manager)",
    slug: "food-handler-manager",
    price: "$140",
    accred: "ServSafe accredited",
    renew: "Every 5 years",
    subtitle: "OSHA/ServSafe-aligned",
    img: "/food.jpg",
    bullets: [
      "Course Is Taught In English & Spanish",
      "HACCP & active managerial control",
      "Time/temperature & TCS controls",
      "Allergen management & cross-contact",
      "Receiving, storage, labeling (FIFO)",
      "Cleaning, sanitizing, equipment care",
    ],
  },
];

export default function CourseCards() {
  return (
    <section className="container pb-16">
      <h2 className="text-2xl font-bold">Courses</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article key={c.slug} className="card overflow-hidden p-0">
            {/* Image */}
            <div className="relative h-44 w-full sm:h-48">
              <Image
                src={c.img}
                alt={`${c.name} course`}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority
              />
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">{c.price}</p>
              <h3 className="mt-1 text-xl font-semibold">{c.name}</h3>
              {c.subtitle && (
                <p className="text-sm font-medium text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                  {c.subtitle}
                </p>
              )}

              <ul className="mt-3 space-y-1 text-sm">
                {c.bullets.map((b, i) => (
                  <li key={i} className="pl-4 before:mr-2 before:content-['•'] before:text-[var(--accent)]">
                    {b}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-xs text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                {c.accred} · Renew: {c.renew}
              </p>

              <div className="mt-4 flex gap-3">
                <Link href={`/courses/${c.slug}`} className="btn btn-outline">
                  Learn more
                </Link>
                <Link href="/schedule" className="btn btn-primary">
                  Register now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
