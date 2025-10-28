// src/app/layout.tsx
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/Component/navbar"; // ✅ ruta y nombre correctos

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Moksa IT — Consultoría IT y servicios SAP orientados a resultados",
  description: "Implementaciones SAP, ABAP, VIM y soporte con foco en negocio.",
  metadataBase: new URL("https://moksa-web.pages.dev"),
  icon: "/logo-moksa.png",
  openGraph: {
    title: "Moksa IT — Consultoría IT y servicios SAP",
    description: "Implementaciones SAP, ABAP, VIM y soporte con foco en negocio.",
    url: "/",
    siteName: "Moksa IT",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moksa IT — Consultoría IT y servicios SAP",
    description: "Implementaciones SAP, ABAP, VIM y soporte con foco en negocio.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="antialiased">
        {/* Skip link accesible */}
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
        >
          Saltar al contenido
        </a>

        {/* ✅ Navbar global en todas las páginas */}
        <Navbar />

        {/* Marcá el main con el id del skip link */}
        <main id="contenido-principal">{children}</main>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Moksa IT",
              url: "https://moksa-web.pages.dev",
              logo: "https://moksa-web.pages.dev/favicon.svg",
              sameAs: [
                "https://www.linkedin.com/company/moksa-it",
                "https://github.com/moksa-it"
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "sales",
                email: "contacto@moksa-it.com",
                availableLanguage: ["es","en"]
              }]
            }),
          }}
        />
      </body>
    </html>
  );
}
