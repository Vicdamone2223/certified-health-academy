const offerings = [
  { name: "CPR & First Aid", price: "$65", renew: "Every 2 years", accred: "HSI accredited", href: "/courses/cpr-first-aid" },
  { name: "Medication Administration", price: "$70", renew: "Every year", accred: "Home Health Plus accredited", href: "/courses/medication-administration" },
  { name: "Food Handler (Manager)", price: "$140", renew: "Every 5 years", accred: "ServSafe accredited", href: "/courses/food-handler-manager" }
];

export default function Pricing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-[#132C45]">Courses & Pricing</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(o => (
            <a key={o.name} href={o.href} className="rounded-2xl border border-[#132C45]/10 p-5 hover:shadow-sm">
              <h3 className="text-lg font-semibold">{o.name}</h3>
              <p className="mt-2 text-3xl font-bold text-[#132C45]">{o.price}</p>
              <p className="mt-1 text-sm text-[#132C45]/70">{o.accred}</p>
              <p className="mt-1 text-sm text-[#132C45]/70">Renew: {o.renew}</p>
              <span className="mt-4 inline-block rounded-lg bg-[#0F766E] px-3 py-2 text-sm text-white">View details</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
