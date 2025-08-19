import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Medication Administration | Elite Training Academy",
  description:
    "Home Health Plus–accredited Medication Administration. $70. Renew yearly. Six Rights, MAR documentation, storage, routes & forms, error prevention.",
};

export default function MedicationAdministrationPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/courses" className="text-sm text-[var(--accent)] hover:underline">
        ← Back to Courses
      </Link>

      <header className="mt-2">
        <h1 className="text-3xl font-extrabold">Medication Administration</h1>
        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$70</strong> · Home Health Plus accredited · Renewal: <strong>every 3 years</strong>
        </p>

        {/* Banner image */}
        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/medication2.jpg"
            alt="Medication Administration training session"
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
          Designed for community and home-care settings. Build confidence giving meds safely,
          documenting correctly, and preventing errors.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Who it’s for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Direct support professionals &amp; home health staff</li>
          <li>Residential/Day program staff, school/childcare personnel</li>
          <li>New team members needing initial training or annual renewal</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What you’ll learn</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>The Six Rights of medication administration</li>
          <li>Reading orders, labels, and expiration dates</li>
          <li>MAR documentation, counting &amp; waste, incident reporting</li>
          <li>Routes &amp; forms (oral, topical, inhaled, ophthalmic, etc.)</li>
          <li>Measuring &amp; dosing accuracy; med cups, syringes, droppers</li>
          <li>Storage, security, and disposal; controlled meds basics</li>
          <li>Infection control, hand hygiene, and error prevention</li>
          <li>When to hold, when to report, and when to call 911</li>
        </ul>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certification</h3>
          <p className="mt-2 text-sm">Accredited by Home Health Plus. Renewal annually.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Includes</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
            <li>Instructor-led practice &amp; scenarios</li>
            <li>Digital certificate &amp; documentation templates</li>
            <li>Policy &amp; procedure checklists</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Requirements &amp; What to bring</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Photo ID for check-in</li>
          <li>Employer policies (if applicable) for alignment</li>
          <li>Any questions about specific scenarios you encounter</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/schedule" className="btn btn-primary">Book this class</Link>
        <Link href="/courses" className="btn btn-outline">Back to Courses</Link>
      </div>
    </main>
  );
}
