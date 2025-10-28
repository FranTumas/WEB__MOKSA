import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = "https://tudominio.com"; // <-- CAMBIAR
  const now = new Date().toISOString();

  const pages = ["", "/servicios", "/casos", "/nosotros", "/sla", "/contacto"];

  return pages.map((p) => ({
    url: `${site}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
