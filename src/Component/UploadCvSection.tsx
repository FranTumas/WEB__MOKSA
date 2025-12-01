"use client";
import { useState } from "react";

export default function UploadCvSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/cv", {
      method: "POST",
      body: formData
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      const data = await res.json();
      setError(data?.error || "Error inesperado.");
    }
  }

  return (
    <div className="mt-8 text-left">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <h3 className="text-xl font-semibold">Enviar CV</h3>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Nombre completo
          </label>
          <input
            name="name"
            required
            className="w-full rounded-md border px-3 py-2"
            placeholder="Tu nombre..."
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Email de contacto
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border px-3 py-2"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            LinkedIn (opcional)
          </label>
          <input
            name="linkedin"
            className="w-full rounded-md border px-3 py-2"
            placeholder="https://linkedin.com/in/usuario"
          />
        </div>
         <div>
          <label className="block mb-1 text-sm font-medium">
            GitHub (opcional)
          </label>
          <input
            name="github"
            className="w-full rounded-md border px-3 py-2"
                  placeholder="https://github.com/usuario"
                />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Subir CV (PDF)
          </label>
          <input
            name="cv"
            type="file"
            required
            accept="application/pdf"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-[var(--color-accent)] px-4 py-2 font-medium text-white hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar CV"}
        </button>

        {success && (
          <p className="text-green-600 text-sm">CV enviado correctamente ✔️</p>
        )}

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}
      </form>
    </div>
  );
}
