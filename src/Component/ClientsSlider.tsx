"use client";

import Image from "next/image";

const logos = [
  { src: "/Clientes/Aluar.png", alt: "Aluar", url: "https://www.aluar.com.ar" },
  { src: "/Clientes/Amanco.png", alt: "Amanco", url: "https://www.amanco.com" },  
  { src: "/Clientes/Bago.jpg", alt: "Bagó", url: "https://www.bago.com.ar" },
  { src: "/Clientes/Bancolombia.png", alt: "Bancolombia", url: "https://www.bancolombia.com" },
  { src: "/Clientes/Colgate palmolive.png", alt: "Colgate-Palmolive", url: "https://www.colgatepalmolive.com" },
  { src: "/Clientes/Gestamp.png", alt: "Gestamp", url: "https://www.gestamp.com" },
  { src: "/Clientes/Hipotecario.png", alt: "Banco Hipotecario", url: "https://www.hipotecario.com.ar" },
  { src: "/Clientes/Impsa.png", alt: "IMPSA", url: "https://www.impsa.com" },
  { src: "/Clientes/Ledesma.png", alt: "Ledesma", url: "https://www.ledesma.com.ar" },
  { src: "/Clientes/Lipigas.png", alt: "Lipigas", url: "https://www.lipigas.cl" },
  { src: "/Clientes/Metrogas.png", alt: "Metrogas", url: "https://www.metrogas.com.ar" },
  { src: "/Clientes/Molinos.png", alt: "Molinos", url: "https://www.molinos.com.ar" },
  { src: "/Clientes/pluspetrol.png", alt: "Pluspetrol", url: "https://www.pluspetrol.net" },
  { src: "/Clientes/Sancor.png", alt: "Sancor", url: "https://www.sancorseguros.com.ar" },
  { src: "/Clientes/Sicpa.png", alt: "SICPA", url: "https://www.sicpa.com" },
  { src: "/Clientes/Tecpetrol.jpg", alt: "Tecpetrol", url: "https://www.tecpetrol.com" },
  { src: "/Clientes/Telecom.png", alt: "Telecom", url: "https://www.telecom.com.ar" },
  { src: "/Clientes/Telefonica.png", alt: "Telefónica", url: "https://www.telefonica.com" },
  { src: "/Clientes/Turner.png", alt: "Turner", url: "https://www.warnermediagroup.com" },
];

export function ClientsLogosSlider() {
  return (
    <div className="relative mt-16 overflow-hidden py-14 select-none">

      {/* Fades laterales */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent" />

      {/* Track infinito */}
      <div className="flex min-w-max animate-slide-slow gap-16">
        {[...logos, ...logos].map((logo, idx) => (
          <a
            key={idx}
            href={logo.url}
            target="_blank"
            rel="noreferrer"
            title={logo.alt}
            className="flex h-20 w-40 shrink-0 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}   // tamaño fijo del logo
              height={80}
              className="object-contain"
              draggable={false}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
