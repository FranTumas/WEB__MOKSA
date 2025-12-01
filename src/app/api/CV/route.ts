import { NextRequest, NextResponse } from "next/server";
import { uploadFileToR2 } from "@/lib/r2";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const CV_NOTIFY_EMAIL = process.env.CV_NOTIFY_EMAIL || "info@moksait.com";
const CV_FROM_EMAIL =
  process.env.CV_FROM_EMAIL || "Moksa IT <no-reply@moksait.com>";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const linkedin = String(formData.get("linkedin") || "").trim();
    const file = formData.get("cv") as File | null;

    if (!name || !email || !file) {
      return NextResponse.json(
        { error: "Datos incompletos. Nombre, email y CV son obligatorios." },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Archivo demasiado grande (máx. 5MB)." },
        { status: 400 }
      );
    }

    // 1) Subir archivo a Cloudflare R2
    const { url } = await uploadFileToR2(file);

    // 2) Enviar mail de notificación con Resend
    if (!process.env.RESEND_API_KEY) {
      console.warn("[RESEND] RESEND_API_KEY no configurada, no se envía email.");
    } else {
      await resend.emails.send({
        from: CV_FROM_EMAIL,
        to: CV_NOTIFY_EMAIL,
        subject: `Nuevo CV recibido: ${name}`,
        html: `
          <h2>Nuevo CV recibido</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>LinkedIn:</strong> ${
            linkedin ? `<a href="${linkedin}">${linkedin}</a>` : "N/A"
          }</p>
          <p><strong>CV:</strong> <a href="${url}">${url}</a></p>
        `,
      });
    }

    console.log("Nuevo CV recibido", { name, email, linkedin, url });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error en /api/cv:", err);
    return NextResponse.json(
      { error: "Error interno al procesar el CV." },
      { status: 500 }
    );
  }
}
