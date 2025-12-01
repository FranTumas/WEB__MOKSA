import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const bucket = process.env.CLOUDFLARE_R2_BUCKET;
const publicBaseUrl = process.env.CLOUDFLARE_R2_PUBLIC_BASE_URL;

if (!accountId || !accessKeyId || !secretAccessKey || !bucket || !publicBaseUrl) {
  // En dev te avisa en consola si falta algo
  console.warn(
    "[R2] Faltan variables de entorno para Cloudflare R2. Revisa .env.local"
  );
}

export const r2Client = new S3Client({
  region: "auto",
  endpoint: accountId
    ? `https://${accountId}.r2.cloudflarestorage.com`
    : undefined,
  credentials:
    accessKeyId && secretAccessKey
      ? {
          accessKeyId,
          secretAccessKey,
        }
      : undefined,
});

export async function uploadFileToR2(file: File) {
  if (!bucket || !publicBaseUrl) {
    throw new Error("R2 no configurado (bucket / public base url faltantes)");
  }

  const arrayBuffer = await file.arrayBuffer();
  const body = Buffer.from(arrayBuffer);

  const safeName = file.name.replace(/\s+/g, "_");
  const key = `cv/${Date.now()}-${safeName}`;

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: file.type || "application/octet-stream",
  });

  await r2Client.send(command);

  const url = `${publicBaseUrl}/${key}`;

  return { key, url };
}
