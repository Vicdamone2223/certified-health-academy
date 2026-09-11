import Link from "next/link";
import Image from "next/image";
import CourseCards from "./components/CourseCards";
import HomepageDetails from "./components/HomepageDetails";

export default function Home() {
  return (
    <>
      {/* Hero — mobile shows image first; desktop uses two columns */}
      <section className="bg-white">
        <div className="container py-10 sm:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Image first in DOM = on top for mobile; on md+ it sits right */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)] shadow-sm md:order-2">
              <Image
                src="/hero.jpg"
                alt="Hands-on healthcare training"
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>

            {/* Text */}
            <div className="md:order-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Train Today.{" "}
                <span className="text-[var(--accent)]">Be Ready</span> When It
                Counts.
              </h1>

              <p className="mt-3 text-base sm:text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                Accredited CPR &amp; First Aid, Medication Administration, and
                Food Handler certification training throughout Virginia,
                Maryland &amp; Washington, DC. Individual, group, and on-site
                classes available.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/schedule" className="btn btn-primary">
                  Book a Class
                </Link>

                <Link href="/courses" className="btn btn-outline">
                  See Courses
                </Link>
              </div>

              <ul className="mt-5 space-y-1.5 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
                <li>• HSI · Home Health Plus · ServSafe</li>
                <li>• Group &amp; on-site training available</li>
                <li>• Virginia · Maryland · Washington, DC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed course cards */}
      <CourseCards />

      {/* Additional homepage content */}
      <HomepageDetails />
    </>
  );
}