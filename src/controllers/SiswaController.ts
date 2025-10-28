import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const SiswaSchema = z.object({
    nis: z.number(),
    nama: z.string(),
    kelasId: z.number()
})

type SiswaInput = z.infer<typeof SiswaSchema>

export const SiswaController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.siswa.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data:SiswaInput = SiswaSchema.parse(req.body); 
      console.log(data);
      
      const save = await prisma.siswa.create({data});

      return successResponse(res, save, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.siswa, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data:SiswaInput = SiswaSchema.parse(req.body);
      const existing = await findByColumn(prisma.siswa, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.siswa.update({
        where: {id},
        data
      });

      return successResponse(res, save, "Success update");
    } catch (err) {
      return errorResponse(res, err, "Error update");
    }
  },

  destroy: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await prisma.siswa.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
