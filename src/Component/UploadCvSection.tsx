"use client";

import { UploadButton } from "@/lib/uploadthing";

export function UploadCvSection() {
  return (
    <div className="mt-10 w-full max-w-md mx-auto flex flex-col items-center gap-4">
      <UploadButton
        endpoint="cvUpload"
        onClientUploadComplete={(res) => {
          alert("CV cargado correctamente. ¡Gracias!");
          console.log("Archivo subido:", res);
        }}
        onUploadError={(e) => {
          const message =
            e instanceof Error
              ? e.message
              : typeof e === "object" &&
                e !== null &&
                "message" in e
              ? String((e as { message: unknown }).message)
              : "Error desconocido";

          alert(`Error al subir: ${message}`);
        }}
        appearance={{
          button:
            "bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-95 transition",
          container: "flex flex-col items-center",
        }}
      />

      <a
        href="https://wa.me/5491160462131?text=Hola%20Moksa%20IT%2C%20quiero%20postularme%20para%20trabajar%20con%20ustedes."
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold hover:bg-neutral-50 transition"
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
}
