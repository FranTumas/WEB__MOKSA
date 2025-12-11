"use client";

import { useState } from "react";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const FORMS_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5PVcOArhitpSeqhH_lxKbygEZnRrSpCQgdxyKFalDgycoRA/formResponse";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(FORMS_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      form.reset();
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 4500);
    } catch (error) {
      console.error(error);
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
        <p className="mx-auto mt-2 max-w-prose text-center text-neutral-600">
          Te respondemos dentro del mismo día hábil.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          {/* Campos */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                name="entry.1994300530"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="entry.1021242799"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Teléfono</label>
              <input
                name="entry.1785945974"
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Empresa</label>
              <input
                name="entry.1002964135"
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Mensaje</label>
            <textarea
              name="entry.149354678"
              required
              rows={6}
              className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
            />
          </div>

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
              className="cursor-pointer rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>

        {/* POPUP ÉXITO */}
        {showPopup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <div
              className="rounded-2xl bg-white p-8 shadow-xl text-center max-w-sm animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                ¡Mensaje enviado!
              </h3>
              <p className="mt-2 text-neutral-600 text-sm">
                Gracias por contactarte. Te estaremos respondiendo a la brevedad.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Cerrar
              </button>
            </div>

            <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .animate-fadeIn {
                animation: fadeIn 0.25s ease-out;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}