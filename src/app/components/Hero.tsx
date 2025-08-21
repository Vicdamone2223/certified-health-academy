import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Training for <span className="text-[var(--accent)]">people who care</span>
          </h1>

          <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            Get certified the simple way with accredited CPR &amp; First Aid,
            Medication Administration, and Food Handler (Manager) courses across
            DC &amp; Virginia & Maryland.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/courses" className="btn btn-primary">Browse Courses</Link>
            <Link href="/schedule" className="btn btn-outline">View Schedule</Link>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            <li>• Certificates provided — HSI · Home Health Plus · ServSafe</li>
            <li>• Flexible sessions — </li>
            <li>• DC &amp; Virginia & Maryland</li>
          </ul>
        </div>

        {/* Right: image */}
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)] shadow-sm">
          <Image
            src="/hero.jpg"   // <— your image path
            alt="Hands-on healthcare training"
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
