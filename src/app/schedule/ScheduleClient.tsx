"use client";

import { useState } from "react";

const events = {
  cpr: "https://calendly.com/ablackweb/cpr-first-aid?hide_landing_page_details=1&hide_event_type_details=1",
  meds: "https://calendly.com/ablackweb/medication-administration?hide_landing_page_details=1&hide_event_type_details=1",
  food: "https://calendly.com/ablackweb/food-handler-manager?hide_landing_page_details=1&hide_event_type_details=1",
} as const;

export default function ScheduleClient() {
  const [active, setActive] = useState<keyof typeof events>("cpr");

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Schedule a Class</h1>
      <p className="mt-2 text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        Reserve your seat online — <strong>payment is in person</strong> at the class.
      </p>

      {/* Tabs */}
      <div className="mt-6 flex gap-2 overflow-x-auto">
        {[
          { key: "cpr", label: "CPR & First Aid" },
          { key: "meds", label: "Medication Admin" },
          { key: "food", label: "Food Handler (Manager)" },
        ].map(({ key, label }) => {
          const isActive = active === (key as keyof typeof events);
          return (
            <button
              key={key}
              onClick={() => setActive(key as keyof typeof events)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-[var(--accent)] text-white border-transparent"
                  : "bg-white hover:bg-[color-mix(in_srgb,var(--brand)_6%,white_94%)]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Calendly embed */}
      <section className="mt-6 rounded-2xl border bg-white p-2">
        <iframe
          key={active}
          title={`Calendly – ${active}`}
          src={events[active]}
          className="h-[900px] w-full rounded-xl"
          frameBorder={0}
        />
      </section>

      <div className="mt-4 text-xs text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        By reserving, you agree to our <a href="/policies" className="underline">policies</a>.
        Need a private group session? <a href="/schedule#contact" className="underline">Contact us</a>.
      </div>
    </main>
  );
}
