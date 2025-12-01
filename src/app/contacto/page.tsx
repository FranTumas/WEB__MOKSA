"use client";

import { useState } from "react";
import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export default function ContactoPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Consulta%20Moksa%20IT";

  const [sending, setSending] = useState(false);

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-14 pb-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Contacto</h1>

        {/* Atajos */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton href={WHATSAPP} className="min-w-[220px]">
            Escribir por WhatsApp
          </PrimaryButton>
          <SecondaryButton href={EMAIL} className="min-w-[220px]">
            Enviar email
          </SecondaryButton>
        </div>

        {/* Datos de contacto */}
        <ul className="mt-8 space-y-2 text-sm text-neutral-700">
          <li className="flex items-center justify-center gap-2">
            <span>📞</span>
            <span>+54 9 11 6046 2131 · +54 9 11 6354 6727</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <span>📧</span>
            <span>info@moksait.com</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <span>📍</span>
            <span>Buenos Aires, Argentina · Proyectos en LATAM &amp; Europa</span>
          </li>
        </ul>
        <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
     <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
      Tiempo estimado de respuesta: dentro del mismo día hábil.
     </p>
     </ul>

      </section>

      {/* Formulario */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
            Contanos tu necesidad
          </h2>
          <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
     <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
      Con 2–3 líneas alcanza para preparar una propuesta clara.
     </p>
     </ul>

          <form
            action="https://formspree.io/f/xxxxxxxx" // Reemplazá por tu endpoint
            method="POST"
            onSubmit={() => setSending(true)}
            className="mt-8 grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {/* Honeypot simple */}
            <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nombre*</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email*</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Empresa</label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Teléfono</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Mensaje*</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Ej: Necesitamos automatizar VIM en SAP S/4HANA para reducir tiempos de ciclo..."
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-xs text-neutral-500 inline-flex items-center gap-2">
                <input type="checkbox" required className="rounded border-neutral-300" />
                Acepto ser contactado para mi consulta.
              </label>

              {/* Botón submit con estilo de PrimaryButton */}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 disabled:opacity-70"
              >
                {sending ? "Enviando…" : "Enviar"}
              </button>
            </div>

            <p className="mt-2 text-[11px] text-neutral-500">
              Al enviar aceptás nuestro uso de tu información para responder tu consulta. No hacemos
              spam ni compartimos datos con terceros.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
