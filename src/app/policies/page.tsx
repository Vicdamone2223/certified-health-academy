export const metadata = { title: "Policies | Elite Training Academy" };

export default function PoliciesPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Policies</h1>

      <section className="card mt-6 p-6">
        <h2 className="text-lg font-semibold">Payments & Booking</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li><strong>Pay now</strong>: guarantees your seat immediately.</li>
          <li><strong>Reserve now, pay later</strong>: holds a seat; payment due before class begins.</li>
        </ul>
      </section>

      <section className="card mt-6 p-6">
        <h2 className="text-lg font-semibold">Refunds & Rescheduling</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li><strong>No refunds.</strong></li>
          <li>Rescheduling allowed with appropriate notice (suggested: at least <strong>48 hours</strong>).</li>
          <li>No-shows/late arrivals may forfeit seat and fees.</li>
          <li>If a session is canceled by us, you’ll receive a full credit to rebook.</li>
        </ul>
      </section>
    </main>
  );
}
