import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Medication Administration Training in VA, MD & DC | Certified Health Academy",
  description:
    "Medication Administration training for direct-care, home health, residential, childcare and community staff in Virginia, Maryland and Washington, DC. Group and on-site training available.",
  alternates: {
    canonical:
      "https://certifiedhealthacademy.com/courses/medication-administration",
  },
};

export default function MedicationAdministrationPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Medication Administration Training",
    description:
      "Medication Administration training covering safe medication practices, MAR documentation, infection control, dosing accuracy, error prevention, and medication safety for direct-care, home health, residential, childcare, and community-service staff.",
    inLanguage: "en",
    courseMode: "InPerson",
    educationalCredentialAwarded: "Medication Administration Certificate",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
      telephone: "+1-571-288-5615",
    },
    offers: {
      "@type": "Offer",
      url: "https://certifiedhealthacademy.com/courses/medication-administration",
      price: "110",
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
        name: "Medication Administration Training",
        item:
          "https://certifiedhealthacademy.com/courses/medication-administration",
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
          Medication Administration Training in Virginia, Maryland & DC
        </h1>

        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$110</strong> · Instructor-led training · Renewal:{" "}
          <strong>every 3 years</strong> · Group training available
        </p>

        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/medication2.jpg"
            alt="Medication Administration training for healthcare and direct-care staff"
            fill
            className="object-cover"
            sizes="(min-width:768px) 768px, 100vw"
            priority
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Medication Administration Training for Care Professionals
        </h2>

        <p className="mt-2">
          Certified Health Academy provides Medication Administration training
          for direct-care professionals, home health staff, residential program
          employees, childcare personnel, and community-service workers
          throughout Virginia, Maryland, and Washington, DC.
        </p>

        <p className="mt-3">
          Students learn practical medication-safety skills including proper
          administration, documentation, infection control, medication storage,
          dosing accuracy, and error prevention.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Who Should Take Medication Administration Training?
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Direct support professionals</li>
          <li>Home health and home-care staff</li>
          <li>Residential and group-home staff</li>
          <li>Day-program employees</li>
          <li>Childcare and school personnel</li>
          <li>Community-based support staff</li>
          <li>New employees who need initial medication training</li>
          <li>Current staff completing required renewal training</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What You’ll Learn</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The Six Rights of medication administration</li>
          <li>Reading medication orders, labels, and expiration dates</li>
          <li>
            Medication Administration Record (MAR) documentation and record
            keeping
          </li>
          <li>Medication counting, waste procedures, and incident reporting</li>
          <li>
            Medication routes and forms including oral, topical, inhaled, and
            ophthalmic medications
          </li>
          <li>
            Measuring and dosing accuracy using medication cups, syringes, and
            droppers
          </li>
          <li>Medication storage, security, and disposal</li>
          <li>Infection control and hand hygiene</li>
          <li>Preventing medication errors</li>
          <li>
            Recognizing when medication should be held or when additional help
            should be requested
          </li>
          <li>Emergency situations and when to call 911</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Group & On-Site Medication Administration Training
        </h2>

        <p className="mt-2">
          Certified Health Academy works with healthcare organizations,
          home-care agencies, residential programs, childcare centers, and
          other employers that need multiple staff members trained.
        </p>

        <p className="mt-3">
          Group classes and on-site training may be available depending on the
          size of your group, location, and scheduling needs. This can provide a
          convenient option for employers who need to train several team
          members at one time.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Spanish-Speaking Assistance Available
        </h2>

        <p className="mt-2">
          Training is primarily provided in English, but Spanish-speaking
          assistance is available for students who need additional help
          understanding course instructions or material.
        </p>

        <p className="mt-3">
          If you or members of your organization need Spanish-language
          assistance, contact Certified Health Academy before class so we can
          discuss your needs.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Medication Administration Classes in Virginia, Maryland & Washington,
          DC
        </h2>

        <p className="mt-2">
          Certified Health Academy serves individuals and organizations
          throughout Virginia, Maryland, and Washington, DC. Training locations
          vary, and flexible scheduling is available for many individual and
          group classes.
        </p>

        <p className="mt-3">
          Weekend availability may also be offered depending on the current
          schedule.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certification</h3>

          <p className="mt-2 text-sm">
            Medication Administration certification is issued after successful
            course completion and is valid for{" "}
            <strong>3 years</strong>.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Course Price</h3>

          <p className="mt-2 text-sm">
            Medication Administration Training: <strong>$110</strong>
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What’s Included</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Instructor-led medication administration training</li>
          <li>Practical scenarios and guided exercises</li>
          <li>Medication documentation practice</li>
          <li>Digital certificate and proof of completion</li>
          <li>Documentation templates and training materials</li>
          <li>Medication-safety and procedure checklists</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Requirements & What to Bring
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Valid photo ID for check-in</li>
          <li>
            Employer medication policies or training requirements, if
            applicable
          </li>
          <li>
            Questions about medication-administration situations you encounter
            in your workplace
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">
              How much does Medication Administration Training cost?
            </h3>

            <p className="mt-1">
              Medication Administration Training is{" "}
              <strong>$110</strong> per student.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How long is Medication Administration certification valid?
            </h3>

            <p className="mt-1">
              The Medication Administration certificate is valid for{" "}
              <strong>3 years</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Who should take Medication Administration Training?
            </h3>

            <p className="mt-1">
              Training may be appropriate for direct-care staff, home health
              workers, residential program employees, childcare personnel, and
              other workers responsible for assisting with or administering
              medications as part of their job.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you provide Medication Administration training for groups?
            </h3>

            <p className="mt-1">
              Yes. Certified Health Academy works with businesses and
              organizations that need multiple employees trained.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can Medication Administration training be provided on-site?
            </h3>

            <p className="mt-1">
              On-site training may be available depending on group size,
              location, and scheduling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is Spanish-speaking assistance available?
            </h3>

            <p className="mt-1">
              Yes. Training is primarily provided in English, but
              Spanish-speaking assistance is available when needed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you offer weekend Medication Administration classes?
            </h3>

            <p className="mt-1">
              Weekend classes may be available depending on the current
              schedule.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Where is Medication Administration training offered?
            </h3>

            <p className="mt-1">
              Class locations vary throughout Virginia, Maryland, and
              Washington, DC. Contact Certified Health Academy for current
              scheduling and location information.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">
          Schedule Medication Administration Training
        </h2>

        <p className="mt-2">
          Whether you need Medication Administration training for yourself or
          need to train staff at your healthcare, residential, childcare, or
          community-service organization, Certified Health Academy can help you
          find an upcoming class or discuss group training options.
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