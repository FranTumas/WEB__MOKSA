"use client";

import { useState } from "react";

export function UploadCvSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/cv", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error en la respuesta");

      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4 text-left max-w-md mx-auto"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          Nombre y apellido
        </label>
        <input
          name="name"
          required
          className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          LinkedIn (opcional)
        </label>
        <input
          name="linkedin"
          placeholder="https://www.linkedin.com/in/..."
          className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          CV (PDF, máx. 5 MB)
        </label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          className="w-full text-xs text-neutral-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar CV"}
      </button>

      {status === "ok" && (
        <p className="text-xs text-emerald-600 mt-1">
          Gracias por postularte. Te vamos a contactar si se abre una posición
          alineada a tu perfil.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-500 mt-1">
          Hubo un problema al enviar tu CV. Probá de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
