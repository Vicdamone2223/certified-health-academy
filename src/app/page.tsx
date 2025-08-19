import Link from "next/link";
import Image from "next/image";
import CourseCards from "./components/CourseCards";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <>
      {/* Hero (split) */}
      <section className="bg-white">
        <div className="container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Train Today. <span className="text-[var(--accent)]">Be Ready</span> When It Counts.
            </h1>

            <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
              Accredited CPR &amp; First Aid, Medication Administration, and Food Handler training across
              DC &amp; Northern VA. Pay now or reserve a spot.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/schedule" className="btn btn-primary">Book a Class</Link>
              <Link href="/courses" className="btn btn-outline">See Courses</Link>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
              <li>• HSI · Home Health Plus · ServSafe</li>
              <li>• Certificates provided</li>
              <li>• DC &amp; Northern VA</li>
            </ul>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)] shadow-sm">
            <Image
              src="/hero.jpg"
              alt="Hands-on healthcare training"
              fill
              priority
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Subtle divider */}
      <Divider />

      {/* Detailed course cards */}
      <CourseCards />
    </>
  );
}
