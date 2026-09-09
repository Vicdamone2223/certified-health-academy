import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "CPR & First Aid Certification in VA, MD & DC | Certified Health Academy",
  description:
    "Hands-on CPR, AED and First Aid certification training in Virginia, Maryland and Washington, DC. HSI-accredited classes, group and on-site training, weekend availability and Spanish-speaking assistance.",
  alternates: {
    canonical: "https://certifiedhealthacademy.com/courses/cpr-first-aid",
  },
};

export default function CPRFirstAidPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CPR & First Aid Certification",
    description:
      "Hands-on CPR, AED and First Aid certification training for childcare staff, caregivers, businesses, parents and community members throughout Virginia, Maryland and Washington, DC.",
    inLanguage: "en",
    courseMode: "InPerson",
    educationalCredentialAwarded: "HSI CPR & First Aid Certificate",
    provider: {
      "@type": "Organization",
      name: "Certified Health Academy",
      url: "https://certifiedhealthacademy.com",
      telephone: "+1-571-288-5615",
    },
    offers: {
      "@type": "Offer",
      url: "https://certifiedhealthacademy.com/courses/cpr-first-aid",
      price: "80",
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
        name: "CPR & First Aid Certification",
        item: "https://certifiedhealthacademy.com/courses/cpr-first-aid",
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
          CPR & First Aid Certification in Virginia, Maryland & DC
        </h1>

        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$80</strong> · HSI-accredited training · Valid for{" "}
          <strong>2 years</strong> · Group and on-site options available
        </p>

        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/cpr2.jpg"
            alt="Hands-on CPR and First Aid certification training"
            fill
            className="object-cover"
            sizes="(min-width:768px) 768px, 100vw"
            priority
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Hands-On CPR, AED & First Aid Training
        </h2>

        <p className="mt-2">
          Certified Health Academy provides CPR and First Aid certification
          training for individuals, caregivers, childcare staff, businesses,
          parents, and community organizations throughout Virginia, Maryland,
          and Washington, DC.
        </p>

        <p className="mt-3">
          Students receive practical, hands-on instruction in CPR, AED use,
          choking response, bleeding control, and other emergency first aid
          skills so they can respond with greater confidence when an emergency
          happens.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Who This Training Is For</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Childcare, daycare, after-school, and camp staff</li>
          <li>Home healthcare workers and caregivers</li>
          <li>Security and fitness professionals</li>
          <li>Teachers and community organization staff</li>
          <li>Parents, babysitters, and family caregivers</li>
          <li>Businesses that need employees CPR and First Aid certified</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What You’ll Learn</h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Adult, child, and infant CPR</li>
          <li>Automated External Defibrillator (AED) use</li>
          <li>Choking relief for conscious and unconscious victims</li>
          <li>Bleeding control, shock, and wound care</li>
          <li>Burns, fractures, sprains, and head or neck injuries</li>
          <li>Allergic reactions and epinephrine auto-injector basics</li>
          <li>Scene safety, PPE, and universal precautions</li>
          <li>Recovery position and monitoring until emergency help arrives</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Group & On-Site CPR Training
        </h2>

        <p className="mt-2">
          Certified Health Academy works with businesses, childcare centers,
          healthcare organizations, churches, schools, and other groups that
          need multiple employees or members trained.
        </p>

        <p className="mt-3">
          Group classes and on-site CPR and First Aid training may be available
          depending on your location, group size, and scheduling needs.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Spanish-Speaking Assistance Available
        </h2>

        <p className="mt-2">
          Classes are primarily taught in English, but Spanish-speaking
          assistance and translation are available for students who are more
          comfortable communicating in Spanish.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          CPR Certification in Virginia, Maryland & Washington, DC
        </h2>

        <p className="mt-2">
          Certified Health Academy offers CPR and First Aid certification
          throughout Virginia, Maryland, and Washington, DC. Class locations
          vary, and flexible scheduling is available for individuals, groups,
          and businesses.
        </p>

        <p className="mt-3">
          Weekend classes may also be available depending on the current
          schedule.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certification</h3>
          <p className="mt-2 text-sm">
            HSI CPR & First Aid certification. Valid for{" "}
            <strong>2 years</strong>.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Course Price</h3>
          <p className="mt-2 text-sm">
            CPR & First Aid training: <strong>$80</strong>
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">
          Requirements & What to Bring
        </h2>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Valid photo ID for check-in</li>
          <li>Comfortable clothing for hands-on practice</li>
          <li>Arrive approximately 10 minutes early for sign-in</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">
              How much does CPR and First Aid certification cost?
            </h3>
            <p className="mt-1">
              CPR & First Aid certification training is{" "}
              <strong>$80</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How long is CPR and First Aid certification valid?
            </h3>
            <p className="mt-1">
              HSI CPR and First Aid certification is generally valid for{" "}
              <strong>2 years</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you teach adult, child, and infant CPR?
            </h3>
            <p className="mt-1">
              Yes. Training includes adult, child, and infant CPR as well as AED
              use and choking response.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you offer CPR training for businesses and groups?
            </h3>
            <p className="mt-1">
              Yes. Group training is available for businesses, childcare
              centers, healthcare organizations, schools, churches, and other
              organizations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can you provide CPR training at our workplace?
            </h3>
            <p className="mt-1">
              On-site CPR and First Aid training may be available depending on
              group size, location, and scheduling.
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
              Do you offer weekend CPR classes?
            </h3>
            <p className="mt-1">
              Weekend classes may be available depending on the current
              schedule.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Where are CPR and First Aid classes offered?
            </h3>
            <p className="mt-1">
              Class locations vary throughout Virginia, Maryland, and
              Washington, DC.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">
          Schedule CPR & First Aid Certification
        </h2>

        <p className="mt-2">
          Whether you need certification for work, childcare, caregiving,
          personal preparedness, or an entire staff, Certified Health Academy
          can help you find an upcoming class or arrange group training.
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