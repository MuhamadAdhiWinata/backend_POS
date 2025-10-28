import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const KelasSchema = z.object({
    namaKelas: z.string(),
    JumlahAnggota: z.number(),
})

type KelasInput = z.infer<typeof KelasSchema>

export const KelasController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.kelas.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data:KelasInput = KelasSchema.parse(req.body); 
      const save = await prisma.kelas.create({data});

      return successResponse(res, save, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.kelas, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data:KelasInput = KelasSchema.parse(req.body);
      const existing = await findByColumn(prisma.kelas, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.kelas.update({
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
      const data = await prisma.kelas.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
