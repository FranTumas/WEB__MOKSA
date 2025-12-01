"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PATH_MAP: Record<string, string> = {
  "/": "/EN",
  "/EN": "/",
  "/nosotros": "/EN/AboutUs",
  "/EN/AboutUs": "/nosotros",
  "/servicios": "/EN/services",
  "/EN/services": "/servicios",
  "/casos": "/EN/cases",
  "/EN/cases": "/casos",
  "/contacto": "/EN/contact",
  "/EN/contact": "/contacto",
  "/sla": "/EN/sla",
  "/EN/sla": "/sla",
};

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname.startsWith("/EN");

  const esPath = isEnglish
    ? (PATH_MAP[pathname] ?? pathname.replace(/^\/EN/, "")) || "/"
    : pathname;

  const enPath = isEnglish
    ? pathname
    : PATH_MAP[pathname] ?? (pathname === "/" ? "/EN" : `/EN${pathname}`);

  return (
    <div className="relative flex w-32 items-center rounded-full bg-neutral-900/40 p-1 border border-neutral-700/60 shadow-inner overflow-hidden">

      {/* Thumb animado */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22
        }}
        className={`absolute h-7 w-[50%] rounded-full bg-indigo-600 shadow-lg`}
        style={{
          left: isEnglish ? "calc(50% - 2px)" : "2px",
        }}
      />

      {/* ES */}
      <Link
        href={esPath}
        className={`relative z-10 flex w-1/2 items-center justify-center gap-1 text-[11px] font-medium transition ${
          !isEnglish ? "text-white" : "text-neutral-400 hover:text-white"
        }`}
      >
        <motion.div
          animate={{ scale: !isEnglish ? 1 : 0.9, opacity: !isEnglish ? 1 : 0.65 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-1"
        >
          <Image src="/ar.svg" alt="ES" width={14} height={14} />
          <span>ES</span>
        </motion.div>
      </Link>

      {/* EN */}
      <Link
        href={enPath}
        className={`relative z-10 flex w-1/2 items-center justify-center gap-1 text-[11px] font-medium transition ${
          isEnglish ? "text-white" : "text-neutral-400 hover:text-white"
        }`}
      >
        <motion.div
          animate={{ scale: isEnglish ? 1 : 0.9, opacity: isEnglish ? 1 : 0.65 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-1"
        >
          <Image src="/us.svg" alt="EN" width={14} height={14} />
          <span>EN</span>
        </motion.div>
      </Link>
    </div>
  );
}
