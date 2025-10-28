import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { KelasSchema } from "@controllers/KelasController";
import { SiswaSchema } from "@controllers/SiswaController";
import { registerCrud } from "@utils/registerCrud";

export const RegistrySiswa = new OpenAPIRegistry();

registerCrud(RegistrySiswa, "siswa", SiswaSchema, SiswaSchema);
registerCrud(RegistrySiswa, "kelas", KelasSchema, KelasSchema);
