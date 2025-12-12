"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Step = {
  id: string;
  p: string;
  t: string;
  d: string;
  image: string;
};

export default function SupportProcessSlider() {
  const steps: Step[] = useMemo(
    () => [
      {
        id: "proc-1",
        p: "01",
        t: "Recepción",
        d: "Ingreso vía email/portal con evidencia, criticidad y datos del solicitante.",
        image: "/Recepción.jpg",
      },
      {
        id: "proc-2",
        p: "02",
        t: "Categorización",
        d: "Clasificación funcional/técnica. Se determina impacto y prioridad.",
        image: "/Categorizacion.jpg",
      },
      {
        id: "proc-3",
        p: "03",
        t: "Asignación",
        d: "Derivación a N1/N2 y escalamiento técnico si corresponde.",
        image: "/Asignacion.jpg",
      },
      {
        id: "proc-4",
        p: "04",
        t: "Seguimiento",
        d: "Actualizaciones periódicas, workaround si aplica y trazabilidad.",
        image: "/Seguimiento.jpg",
      },
      {
        id: "proc-5",
        p: "05",
        t: "Cierre",
        d: "Validación con usuario, documentación y registro para métricas.",
        image: "/Cierre.jpg",
      },
    ],
    []
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0); // 0..100
  const draggingRef = useRef(false);

  const updateProgressFromScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const pct = maxScroll <= 0 ? 0 : (el.scrollLeft / maxScroll) * 100;
    setProgress(pct);
  };

  const scrollToRatio = (ratio: number, smooth = true) => {
    const el = sliderRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const left = Math.min(maxScroll, Math.max(0, ratio * maxScroll));

    el.scrollTo({
      left,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Sync scroll -> progress
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateProgressFromScroll();

    const onScroll = () => updateProgressFromScroll();
    el.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => updateProgressFromScroll();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Click on bar
  const handleBarPointer = (clientX: number, smooth: boolean) => {
    const bar = barRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const x = clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    scrollToRatio(ratio, smooth);
  };

  const onBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleBarPointer(e.clientX, true);
  };

  // Drag handle (we keep it, but ARIA is handled by <input type="range">)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    handleBarPointer(e.clientX, false);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    handleBarPointer(e.clientX, false);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <section className="border-t border-neutral-200 bg-neutral-50/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <h2 className="text-3xl font-bold tracking-tight">Proceso de atención</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-neutral-600">
          Flujo estándar de un ticket desde la recepción hasta el cierre, con control y
          trazabilidad en cada etapa.
        </p>

        {/* Slider */}
        <div className="mt-10">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((s, idx) => (
              <article
                key={s.id}
                id={s.id}
                className="group relative shrink-0 snap-center overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ width: "min(420px, calc(100vw - 3rem))" }}
              >
                {/* Imagen */}
                <div className="relative h-40 w-full">
                  <Image
                    src={s.image}
                    alt={s.t}
                    fill
                    sizes="(max-width: 640px) 90vw, 420px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-indigo-600">
                    Paso {s.p}
                  </div>

                  <div className="mt-1 text-base font-semibold text-neutral-900">{s.t}</div>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.d}</p>

                  <div className="mt-4 h-1 w-6 rounded-full bg-[var(--color-accent)]/70" />
                </div>
              </article>
            ))}
          </div>

          {/* Bar with draggable handle (accessible via native range input) */}
          <div className="mt-6 flex justify-center">
            <div className="w-72 sm:w-96">
              <div
                ref={barRef}
                onClick={onBarClick}
                className="relative h-2 w-full rounded-full bg-neutral-200 cursor-pointer"
                aria-label="Barra de navegación del slider"
              >
                {/* Accessible native slider overlay (no warnings) */}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={Math.round(progress)}
                  onChange={(e) => scrollToRatio(Number(e.target.value) / 100, false)}
                  aria-label="Navegar pasos"
                  className="absolute inset-0 z-10 h-2 w-full opacity-0 cursor-pointer"
                />

                {/* Filled progress */}
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-[var(--color-accent)]"
                  style={{ width: `${progress}%` }}
                />

                {/* Handle (visual) */}
                <div
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  className="absolute top-1/2 -translate-y-1/2 z-20 h-5 w-5 rounded-full bg-white border border-neutral-300 shadow-sm"
                  style={{ left: `calc(${progress}% - 10px)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}