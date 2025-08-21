import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Food Handler (Manager) Certification — Virginia, Maryland & DC | Certified Health Academy",
  description:
    "ServSafe-accredited Food Handler Manager training. Learn HACCP, allergen management, safety, sanitation, and compliance for restaurants and food service.",
  alternates: {
    canonical: "https://certifiedhealthacademy.com/courses/food-handler-manager",
  },
};

export default function FoodHandlerManagerPage() {
  // ---- JSON-LD objects ----
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Food Handler (Manager) Certification",
    description:
      "ServSafe-aligned manager training covering HACCP, allergen management, TCS control, sanitation, and compliance for restaurants and food service. Certificate valid for 5 years.",
    inLanguage: ["en", "es"],
    courseMode: "InPerson",
    educationalCredentialAwarded:
      "Food Handler (Manager) Certificate (5 years)",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://certifiedhealthacademy.com/courses/food-handler-manager",
      price: "140",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Courses",
        item: "https://certifiedhealthacademy.com/courses",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Food Handler (Manager)",
        item:
          "https://certifiedhealthacademy.com/courses/food-handler-manager",
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/courses" className="text-sm text-[var(--accent)] hover:underline">
        ← Back to Courses
      </Link>

      <header className="mt-2">
        <h1 className="text-3xl font-extrabold">Food Handler (Manager)</h1>
        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$140</strong> · ServSafe accredited · Renewal: every <strong>5 years</strong>
        </p>

        {/* Banner image */}
        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/food2.jpg"
            alt="Food safety training and temperature checks"
            fill
            className="object-cover"
            sizes="(min-width:768px) 768px, 100vw"
            priority
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2">
          Manager-level training aligned with ServSafe and OSHA. Build a food-safe operation with
          strong policies, monitoring, and staff training.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Who it’s for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Restaurant &amp; cafe managers, caterers, food trucks</li>
          <li>School, daycare, and healthcare food service</li>
          <li>Any operation responsible for HACCP/TCS controls</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What you’ll learn</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>HACCP principles &amp; Active Managerial Control</li>
          <li>Time/Temperature control for safety (TCS) foods</li>
          <li>Allergen management &amp; preventing cross-contact</li>
          <li>Personal hygiene, illness policies, glove use</li>
          <li>Receiving, labeling, storage (FIFO), and thawing</li>
          <li>Preparation &amp; cooking temps; hot/cold holding; cooling/reheating</li>
          <li>Cleaning vs. sanitizing; chemical safety; warewashing</li>
          <li>Facility &amp; pest management; logs &amp; documentation</li>
        </ul>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certification</h3>
          <p className="mt-2 text-sm">ServSafe aligned certification. Valid 5 years.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Includes</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
            <li>Practice scenarios &amp; manager checklists</li>
            <li>Digital certificate &amp; compliance documentation</li>
            <li>Templates for logs (temps, cleaning, receiving)</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Requirements &amp; What to bring</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Photo ID for check-in</li>
          <li>Any local health department requirements (we align in class)</li>
          <li>Recent inspection notes (optional) to tailor discussion</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/schedule" className="btn btn-primary">
          Book this class
        </Link>
        <Link href="/courses" className="btn btn-outline">
          Back to Courses
        </Link>
      </div>

      {/* ---------- JSON-LD: Course + Breadcrumbs ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
    </main>
  );
}
