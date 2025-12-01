import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Resend } from "resend";

export const dynamic = "force-dynamic"; // por las subidas de archivo
export const runtime = "nodejs"; // necesitamos Node para Buffer/S3

// --- S3 client ---
const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? "",
  },
});

const S3_BUCKET = process.env.S3_BUCKET_NAME ?? "";

// --- Resend client ---
const resend = new Resend(process.env.RESEND_API_KEY);

// helper para subir a S3 y devolver URL pública
async function uploadToS3(buffer: Buffer, key: string, contentType: string) {
  if (!S3_BUCKET) {
    throw new Error("Falta S3_BUCKET_NAME en las variables de entorno");
  }

  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });

  await s3.send(command);

  // URL pública estándar de S3 (ajustá si usás CloudFront o dominio propio)
  const region = process.env.S3_REGION;
  return `https://${S3_BUCKET}.s3.${region}.amazonaws.com/${key}`;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const linkedin = String(formData.get("linkedin") || "");
    const file = formData.get("cv") as File | null;

    if (!name || !email || !file) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Archivo demasiado grande (máx. 5MB)" },
        { status: 400 }
      );
    }

    // 1) Subir archivo a S3
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const safeName = file.name.replace(/\s+/g, "_");
    const key = `cv/${Date.now()}-${safeName}`;
    const url = await uploadToS3(
      buffer,
      key,
      file.type || "application/octet-stream"
    );

    // 2) Enviar mail de notificación con Resend
    const toEmail = process.env.CV_NOTIFY_EMAIL || "info@moksait.com";

    await resend.emails.send({
      from: "Moksa IT <info@moksait.com>",
      to: toEmail,
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

    console.log("Nuevo CV recibido", { name, email, linkedin, url });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error en /api/cv", err);
    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 }
    );
  }
}
