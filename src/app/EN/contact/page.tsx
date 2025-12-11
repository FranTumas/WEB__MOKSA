"use client";

import { PrimaryButton } from "@/Component/buttons/PrimaryButton";
import { SecondaryButton } from "@/Component/buttons/SecondaryButton";
import { ContactFormSectionEN } from "@/Component/ContactFormSectionEN";

export default function ContactoPage() {
  const WHATSAPP =
    "https://wa.me/5491160462131?text=Hi%20Moksa%20IT%2C%20I%27d%20like%20to%20ask%20about%20a%20SAP%20or%20VIM%20project.";
  const EMAIL =
    "mailto:info@moksait.com?subject=Moksa%20IT%20enquiry";


  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-14 pb-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>

        {/* Shortcuts */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton href={WHATSAPP} className="min-w-[220px]">
            Message on WhatsApp
          </PrimaryButton>
          <SecondaryButton href={EMAIL} className="min-w-[220px]">
            Send email
          </SecondaryButton>
        </div>

        {/* Contact details */}
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
            <span>Buenos Aires, Argentina · Projects in LATAM &amp; Europe</span>
          </li>
        </ul>
        <ul className="mt-6 space-y-1 text-sm text-neutral-600 flex flex-col items-center">
          <p className="mt-5 text-xs text-neutral-500 flex justify-center w-full">
            Estimated response time: within the same business day.
          </p>
        </ul>
      </section>

        {/* Formulario */}
            <ContactFormSectionEN />

    </main>
  );
}