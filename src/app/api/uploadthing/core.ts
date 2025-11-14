import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  cvUpload: f({ pdf: { maxFileSize: "4MB" } }) // ajustá tipo/tamaño como quieras
    .onUploadComplete(async ({ file, metadata }) => {
      console.log("CV subido:", file.url, metadata);
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
