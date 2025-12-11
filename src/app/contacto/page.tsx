"use client";

import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";
import { ContactForm } from "@/Component/ContactFormSection";

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
      <ContactForm />


    </main>
  );
}
