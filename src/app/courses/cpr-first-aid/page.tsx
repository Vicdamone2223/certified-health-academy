import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "CPR & First Aid | Elite Training Academy",
  description:
    "HSI-accredited CPR & First Aid training. $65. Renew every 2 years. Hands-on skills: CPR, AED, choking relief, bleeding control, and more.",
};

export default function CPRFirstAidPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/courses" className="text-sm text-[var(--accent)] hover:underline">
        ← Back to Courses
      </Link>

      <header className="mt-2">
        <h1 className="text-3xl font-extrabold">CPR &amp; First Aid</h1>
        <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
          <strong>$65</strong> · HSI accredited · Renewal: every <strong>2 years</strong>
        </p>

        {/* Banner image */}
        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand)_10%,transparent)]">
          <Image
            src="/cpr2.jpg"     // change if you use a different file
            alt="Hands-on CPR & First Aid practice"
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
          Practical, hands-on training for real emergencies. You’ll practice
          chest compressions, rescue breaths, AED use, and the essentials of first aid
          so you’re confident when it counts.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Who it’s for</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Childcare, after-school, and camp staff</li>
          <li>Security, fitness, retail, community volunteers</li>
          <li>Parents, caregivers, babysitters</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">What you’ll learn</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Adult/Child/Infant CPR with AED use</li>
          <li>Choking relief (standing and unconscious)</li>
          <li>Bleeding control, shock, and wound care</li>
          <li>Burns, fractures/sprains, head/neck injuries</li>
          <li>Allergic reactions &amp; epinephrine auto-injector basics</li>
          <li>Scene safety, gloves/PPE, universal precautions</li>
          <li>Recovery position &amp; monitoring until help arrives</li>
        </ul>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Certification</h3>
          <p className="mt-2 text-sm">Issued by HSI at course completion. Valid 2 years.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Includes</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
            <li>Hands-on practice &amp; instructor demo</li>
            <li>Digital certificate &amp; proof of completion</li>
            <li>Course materials and handouts</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Requirements &amp; What to bring</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Photo ID for check-in</li>
          <li>Comfortable clothing for practice on training manikins</li>
          <li>Arrive 10 minutes early for sign-in</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/schedule" className="btn btn-primary">Book this class</Link>
        <Link href="/courses" className="btn btn-outline">Back to Courses</Link>
      </div>
    </main>
  );
}
