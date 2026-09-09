import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Food Manager & Food Handler Certification in VA, MD & DC | Certified Health Academy",
  description:
    "Food Handler and Food Manager certification training for restaurants and food businesses in Virginia, Maryland and Washington, DC. ServSafe-aligned classes, Spanish assistance, group and on-site training available.",
  alternates: {
    canonical:
      "https://certifiedhealthacademy.com/courses/food-handler-manager",
    languages: {
      "en-US":
        "https://certifiedhealthacademy.com/courses/food-handler-manager",
      "es-US":
        "https://certifiedhealthacademy.com/es/courses/food-handler-manager",
    },
  },
};

export default function FoodHandlerManagerPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Food Handler & Food Manager Certification",
    description:
      "Food Handler and Food Manager training for restaurants, food trucks, caterers, childcare programs, healthcare food-service teams, and other food businesses throughout Virginia, Maryland, and Washington, DC.",
    inLanguage: "en",
    courseMode: "InPerson",
    educationalCredentialAwarded:
      "Food Handler / Food Manager Certificate",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
      telephone: "+1-571-288-5615",
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
        name: "Food Handler & Food Manager Certification",
        item:
          "https://certifiedhealthacademy.com/courses/food-handler-manager",
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/courses"
        className="text-sm text-[var(--accent)] hover:underline"
      >
        ← Back to Courses
      </Link>

      <header className="mt-2">
        <h1 className="text-3xl font-extrabold">
          Food Handler & Food Manager Certification in Virginia, Maryland & DC
        </h1>

        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$140</strong> · ServSafe-aligned training · Flexible scheduling
          · Group and on-site options available
        </p>

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
        <h2 className="text-xl font-semibold">
          Food Safety Certification for Restaurants and Food Businesses
        </h2>

        <p className="mt-2">
          Certified Health Academy provides Food Handler and Food Manager
          certification training for restaurants, food trucks, caterers, cafés,
          childcare programs, healthcare food-service teams, and other food
          businesses throughout Virginia, Maryland, and Washington, DC.
        </p>

        <p className="mt-3">
          Our training is designed to help managers and food-service
          professionals understand safe food handling, sanitation, temperature
          control, allergen safety, employee practices, and day-to-day food
          safety procedures.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Who This Training Is For</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Restaurant and café managers</li>
          <li>Food truck owners and employees</li>
          <li>Caterers and commercial kitchen staff</li>
          <li>Childcare and school food-service teams</li>
          <li>Healthcare food-service staff</li>
          <li>Supervisors responsible for food safety and sanitation</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What You’ll Learn</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>HACCP principles and Active Managerial Control</li>
          <li>Time and temperature control for safety (TCS) foods</li>
          <li>Allergen management and preventing cross-contact</li>
          <li>Personal hygiene, illness policies, and glove use</li>
          <li>Receiving, labeling, storage, FIFO, and thawing procedures</li>
          <li>
            Cooking temperatures, hot and cold holding, cooling, and reheating
          </li>
          <li>Cleaning, sanitizing, chemical safety, and warewashing</li>
          <li>Facility sanitation, pest management, logs, and documentation</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Group & On-Site Food Safety Training
        </h2>

        <p className="mt-2">
          Certified Health Academy works with businesses and organizations that
          need multiple employees trained. Group classes are available, and
          on-site training may be offered at your restaurant, food-service
          operation, or workplace depending on scheduling and location.
        </p>

        <p className="mt-3">
          This option is ideal for restaurant owners, food truck operators,
          catering businesses, childcare programs, and other organizations that
          need a convenient way to train several employees at once.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Spanish-Speaking Assistance Available
        </h2>

        <p className="mt-2">
          Training is primarily provided in English, but Spanish-speaking
          assistance and translation are available for students who are more
          comfortable communicating in Spanish.
        </p>

        <p className="mt-3">
          If you or members of your staff need Spanish-language assistance,
          contact us before class so we can help make the training process as
          clear and comfortable as possible.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Serving Virginia, Maryland & Washington, DC
        </h2>

        <p className="mt-2">
          Certified Health Academy provides Food Handler and Food Manager
          training throughout Virginia, Maryland, and Washington, DC. Class
          locations vary, and flexible scheduling is available for individuals,
          groups, and businesses.
        </p>

        <p className="mt-3">
          Weekend classes may also be available depending on scheduling.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Course Price</h3>
          <p className="mt-2 text-sm">
            Food Handler (Manager) Training: <strong>$140</strong>
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certificate Availability</h3>
          <p className="mt-2 text-sm">
            Certificates are normally available within{" "}
            <strong>24–48 hours</strong> after successful completion.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Requirements & What to Bring</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Valid photo ID for check-in</li>
          <li>
            Any employer or local health department requirements relevant to
            your role
          </li>
          <li>
            Recent inspection notes or food-safety questions, if you would like
            to discuss them during training
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">
              How much does Food Handler or Food Manager training cost?
            </h3>
            <p className="mt-1">
              The Food Handler (Manager) Training course is{" "}
              <strong>$140</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you offer group training for restaurants and businesses?
            </h3>
            <p className="mt-1">
              Yes. Certified Health Academy regularly works with groups and
              businesses that need multiple employees trained.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can you provide training at our restaurant or workplace?
            </h3>
            <p className="mt-1">
              On-site training may be available depending on the size of the
              group, scheduling, and location.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is Spanish-speaking assistance available?
            </h3>
            <p className="mt-1">
              Yes. Classes are primarily taught in English, but
              Spanish-speaking assistance and translation are available when
              needed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you offer weekend classes?
            </h3>
            <p className="mt-1">
              Yes. Weekend availability may be offered depending on the current
              class schedule.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How soon will I receive my certificate?
            </h3>
            <p className="mt-1">
              Certificates are normally available within 24–48 hours after
              successful completion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Where are Food Handler and Food Manager classes offered?
            </h3>
            <p className="mt-1">
              Class locations vary throughout Virginia, Maryland, and
              Washington, DC. Contact Certified Health Academy for current
              availability.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">
          Schedule Food Handler or Food Manager Training
        </h2>

        <p className="mt-2">
          Whether you are registering individually or need training for your
          restaurant, food truck, catering company, or organization, Certified
          Health Academy can help you find an upcoming class or arrange group
          training.
        </p>

        <p className="mt-3">
          Questions? Call{" "}
          <a
            href="tel:+15712885615"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            571-288-5615
          </a>
          .
        </p>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/schedule" className="btn btn-primary">
          Book This Class
        </Link>

        <Link href="/contact" className="btn btn-outline">
          Contact Us
        </Link>

        <Link href="/courses" className="btn btn-outline">
          View All Courses
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd),
        }}
      />
    </main>
  );
}