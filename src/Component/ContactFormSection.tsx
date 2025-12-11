"use client";

import { useState } from "react";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const FORMS_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5PVcOArhitpSeqhH_lxKbygEZnRrSpCQgdxyKFalDgycoRA/formResponse";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(false);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(FORMS_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      
      form.reset();        
      setOk(true);       

      setTimeout(() => {
        setOk(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError(
        "Hubo un problema al enviar el formulario. Si persiste, escribinos a info@moksait.com."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="form" className="border-t border-neutral-200 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Escribinos
        </h2>
        <p className="mx-auto mt-2 max-w-prose text-center leading-relaxed tracking-[0.01em] text-neutral-600">
          Te respondemos dentro del mismo día hábil.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          {/* Campos */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Nombre */}
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                name="entry.1994300530"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="entry.1021242799"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>
          </div>

          {/* Teléfono + Empresa */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Teléfono</label>
              <input
                name="entry.1785945974"
                type="tel"
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Empresa</label>
              <input
                name="entry.1002964135"
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div className="mt-4">
            <label className="text-sm font-medium">Mensaje</label>
            <textarea
              name="entry.149354678"
              required
              rows={6}
              className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
            />
          </div>

          {/* Checkbox + botón */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex items-center gap-2 text-xs text-neutral-600">
              <input
                type="checkbox"
                required
                className="rounded border-neutral-300"
              />
              Acepto ser contactado para mi consulta.
            </label>

            <button
              type="submit"
              disabled={sending}
              className="cursor-pointer self-end rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0 disabled:opacity-60 sm:self-auto"
            >
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </div>

          {/* Mensajes de estado */}
          <div className="mt-4 min-h-[1.25rem]">
            {ok && (
              <p className="text-sm text-green-600">
                Gracias, recibimos tu mensaje. Te vamos a responder a la brevedad.
              </p>
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}