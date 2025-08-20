"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movlzgpp"; // same endpoint

export default function ContactClientEs() {
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
        setErrorMsg(json?.errors?.[0]?.message || "Ha ocurrido un error. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Error de red. Inténtalo de nuevo.");
    }
  }

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold">Contáctanos</h1>
      <p className="mt-2 text-lg text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
        ¿Preguntas sobre clases o el horario? Escríbenos abajo.
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Izquierda: info de contacto */}
        <div className="space-y-3">
          <p><strong>Instructora:</strong> Susan Miller</p>
          <p>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:15712885615" className="underline">(571) 288-5615</a>
          </p>
          <p>
            <strong>Correo:</strong>{" "}
            <a className="underline" href="mailto:svvmiller9595@yahoo.com">svvmiller9595@yahoo.com</a>
          </p>

          <div className="rounded-2xl border bg-white p-4 text-sm text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            <p>Usualmente respondemos dentro de 1 día hábil.</p>
            <p className="mt-1">Para preguntas urgentes sobre una clase de hoy, por favor llama.</p>
          </div>
        </div>

        {/* Derecha: formulario */}
        <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border bg-white p-5">
          <input
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="rounded-md border px-3 py-2"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Tu correo"
            className="rounded-md border px-3 py-2"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Tu teléfono (opcional)"
            className="rounded-md border px-3 py-2"
          />
          <select name="topic" className="rounded-md border px-3 py-2">
            <option value="">Tema (opcional)</option>
            <option value="CPR & First Aid">RCP y Primeros Auxilios</option>
            <option value="Medication Administration">Administración de Medicamentos</option>
            <option value="Food Handler (Manager)">Manipulador de Alimentos (Gerente)</option>
            <option value="Other">Otro</option>
          </select>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Tu mensaje"
            className="rounded-md border px-3 py-2"
          />

          {/* Anti-spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Asunto opcional */}
          <input type="hidden" name="_subject" value="Nuevo mensaje del sitio (ES) – Certified Health Academy" />

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary disabled:opacity-70"
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-700">¡Mensaje enviado! Te responderemos muy pronto.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">Error: {errorMsg}</p>
          )}

          <p className="text-xs text-[color-mix(in_srgb,var(--brand)_70%,black_30%)]">
            Al enviar aceptas nuestras <a className="underline" href="/es/policies">políticas</a>.
          </p>
        </form>
      </div>
    </main>
  );
}
