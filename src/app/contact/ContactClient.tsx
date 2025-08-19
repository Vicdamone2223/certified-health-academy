"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movlzgpp"; // ← paste your id

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Contact Us</h1>
      <p className="mt-2 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        Questions about classes or scheduling? Reach out below.
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Left: contact info */}
        <div className="space-y-3">
          <p><strong>Instructor:</strong> Susan Miller</p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:15712885615" className="underline">(571) 288-5615</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a className="underline" href="mailto:svvmiller9595@yahoo.com">svvmiller9595@yahoo.com</a>
          </p>

          <div className="rounded-2xl border bg-white p-4 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            <p>We typically reply within 1 business day.</p>
            <p className="mt-1">For urgent questions about tonight’s class, please call.</p>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border bg-white p-5">
          {/* Formspree can use these custom fields directly */}
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-md border px-3 py-2"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="rounded-md border px-3 py-2"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Your phone (optional)"
            className="rounded-md border px-3 py-2"
          />
          <select name="topic" className="rounded-md border px-3 py-2">
            <option value="">Topic (optional)</option>
            <option value="CPR & First Aid">CPR & First Aid</option>
            <option value="Medication Administration">Medication Administration</option>
            <option value="Food Handler (Manager)">Food Handler (Manager)</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Your message"
            className="rounded-md border px-3 py-2"
          />

          {/* Anti-spam honeypot (hidden from users) */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Optional: subject line for emails */}
          <input type="hidden" name="_subject" value="New message from Elite Training Academy website" />

          {/* Optional: send a copy to the sender if you enable it in Formspree */}
          {/* <input type="hidden" name="_cc" value="{email}" /> */}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-700">Message sent! We’ll get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">Error: {errorMsg}</p>
          )}

          <p className="text-xs text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            By submitting, you agree to our <a className="underline" href="/policies">policies</a>.
          </p>
        </form>
      </div>
    </main>
  );
}
