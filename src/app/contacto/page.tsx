"use client";

import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";

export default function ContactoPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20SAP%20o%20VIM.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Consulta%20Moksa%20IT";

  

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
<section id="form" className="border-t border-neutral-200 py-20">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-3xl font-bold tracking-tight">
      Escribinos
    </h2>
    
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSf5PVcOArhitpSeqhH_lxKbygEZnRrSpCQgdxyKFalDgycoRA/formResponse"
      method="POST"
      className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      {/* Campos */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Nombre */}
        <div>
          <label className="text-sm font-medium">Nombre</label>
          <input
            name="entry.1994300530" // Nombre completo
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="entry.1021242799" // Email
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
            name="entry.1785945974" // Teléfono
            type="tel"
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Empresa</label>
          <input
            name="entry.1002964135" // Empresa
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30"
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className="mt-4">
        <label className="text-sm font-medium">Mensaje</label>
        <textarea
          name="entry.149354678" // Mensaje
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
          className="self-end rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/30 active:translate-y-0 sm:self-auto"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>

    </main>
  );
}
