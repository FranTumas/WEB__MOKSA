"use client";

import { useState, useEffect } from "react";

export function ContactFormSection() {
  const [showPopup, setShowPopup] = useState(false);

  // Cerrar el popup automáticamente a los 4s
  useEffect(() => {
    if (!showPopup) return;
    const timer = setTimeout(() => setShowPopup(false), 4000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  const handleSubmit = () => {
    // No prevenimos el submit: dejamos que el form se envíe a Google Forms
    setShowPopup(true);
  };

  return (
    <section id="form" className="border-t border-neutral-200 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Escribinos
        </h2>

        {/* FORMULARIO GOOGLE FORMS */}
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSf5PVcOArhitpSeqhH_lxKbygEZnRrSpCQgdxyKFalDgycoRA/formResponse"
          method="POST"
          target="hidden_iframe"
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
  className="cursor-pointer self-end rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0 sm:self-auto"
>
  Enviar
</button>
          </div>
        </form>

        {/* IFRAME OCULTO PARA QUE GOOGLE FORMS RECIBA LOS DATOS SIN SACARTE DE LA WEB */}
        <iframe
          name="hidden_iframe"
          title="Hidden form submission iframe"
          style={{ display: "none" }}
        ></iframe>
      </div>

      {/* POPUP DE AGRADECIMIENTO */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
            <h3 className="text-lg font-semibold text-neutral-900">
              ¡Gracias por escribirnos!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Recibimos tu mensaje y te vamos a responder dentro del mismo día hábil.
            </p>

            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="mt-4 rounded-xl bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}