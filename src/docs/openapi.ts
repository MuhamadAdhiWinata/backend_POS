import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { RegistrySiswa } from "./Siswa";

const allDefinition = [
  ...RegistrySiswa.definitions,
];

const generator = new OpenApiGeneratorV3(allDefinition);

export const openApiDoc = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "Express + Prisma + Swagger Autogen",
  },
  servers: [{ url: "http://localhost:3000/api" }],
});
