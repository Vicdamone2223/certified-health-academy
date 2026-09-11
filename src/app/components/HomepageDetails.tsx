import Link from "next/link";

export default function HomepageDetails() {
  return (
    <>
      {/* WHY CHOOSE CERTIFIED HEALTH ACADEMY */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[var(--brand)]">
              Why Choose Certified Health Academy?
            </h2>

            <p className="mt-3 text-lg text-gray-600">
              Practical, accredited training designed for individuals,
              professionals, and organizations throughout Virginia, Maryland,
              and Washington, DC.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">✓</div>
              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Accredited Training
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Professional certification training aligned with recognized
                organizations including HSI, Home Health Plus, and ServSafe.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">📅</div>
              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Flexible Scheduling
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Flexible class scheduling is available, including weekend
                options when available.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">👥</div>
              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Group &amp; On-Site Classes
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Train multiple employees together, with on-site training
                available for qualifying businesses and organizations.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 text-3xl">⚡</div>
              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Fast Certification
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Certificates are normally available within 24–48 hours after
                successful course completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP AND ON-SITE TRAINING */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                Training for Your Team
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[var(--brand)]">
                Need to Certify Multiple Employees?
              </h2>

              <p className="mt-4 leading-7 text-gray-700">
                Certified Health Academy provides group training for businesses
                and organizations that need a convenient way to train multiple
                employees at once.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                We work with childcare centers, healthcare and home-care
                organizations, restaurants, food-service businesses, community
                programs, and other employers throughout Virginia, Maryland,
                and Washington, DC.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                Depending on your group size, location, and scheduling needs,
                training may also be provided on-site at your workplace.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request Group Training
                </Link>

                <a href="tel:+15712885615" className="btn btn-outline">
                  Call 571-288-5615
                </a>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--brand)]">
                Group Training Is Ideal For:
              </h3>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li>✓ Childcare centers and schools</li>
                <li>✓ Home healthcare agencies</li>
                <li>✓ Residential and community programs</li>
                <li>✓ Restaurants and food-service teams</li>
                <li>✓ Small businesses and organizations</li>
                <li>✓ Teams needing new or renewal certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Local Training
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[var(--brand)]">
              Serving Virginia, Maryland &amp; Washington, DC
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-700">
              Certified Health Academy provides CPR &amp; First Aid,
              Medication Administration, and Food Handler and Food Manager
              certification training throughout Virginia, Maryland, and
              Washington, DC.
            </p>

            <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-700">
              Class locations vary based on course schedules. Flexible
              scheduling, group classes, and weekend availability make it
              easier for individuals and organizations to complete required
              training.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-[var(--brand)]">
                  Virginia
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Certification and workforce training
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-[var(--brand)]">
                  Maryland
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Individual and group training
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-[var(--brand)]">
                  Washington, DC
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Flexible professional training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[var(--brand)]">
                Frequently Asked Questions
              </h2>

              <p className="mt-3 text-gray-600">
                Have questions about scheduling, certification, or group
                training? Here are a few of the most common.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  Do you offer weekend classes?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes. Weekend classes may be available depending on the
                  current course schedule.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  Can you train employees at our workplace?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes. On-site training may be available depending on the
                  course, group size, location, and scheduling requirements.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  Is Spanish assistance available?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes. Training is primarily provided in English, with
                  Spanish-speaking assistance and translation available when
                  needed.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  How soon will I receive my certificate?
                </h3>
                <p className="mt-2 text-gray-600">
                  Certificates are normally available within 24–48 hours after
                  successful completion.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <h3 className="font-semibold text-[var(--brand)]">
                  Where are classes held?
                </h3>
                <p className="mt-2 text-gray-600">
                  Class locations vary throughout Virginia, Maryland, and
                  Washington, DC. Contact us or view the current schedule for
                  upcoming availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--brand)] py-14 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Ready to Get Certified?</h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Choose your course and reserve an upcoming class, or contact
            Certified Health Academy to discuss group and on-site training.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/schedule"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand)] transition hover:opacity-90"
            >
              Book a Class
            </Link>

            <a
              href="tel:+15712885615"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[var(--brand)]"
            >
              Call 571-288-5615
            </a>
          </div>
        </div>
      </section>
    </>
  );
}