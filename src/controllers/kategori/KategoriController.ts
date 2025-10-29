import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import { stat } from "fs";
import z from "zod";

export const KategoriSchema = z.object({
    nama: z.string(),
    status: z.string()    
})

type KategoriInput = z.infer<typeof KategoriSchema>

export const KategoriController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.kategori.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data:KategoriInput = KategoriSchema.parse(req.body);
      await prisma.kategori.create({data: req.body});

      return successResponse(res, data, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.kategori, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const existing = await findByColumn(prisma.kategori, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.kategori.update({
        where: {id},
        data: req.body
      });

      return successResponse(res, save, "Success update");
    } catch (err) {
      return errorResponse(res, err, "Error update");
    }
  },

  destroy: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await prisma.kategori.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
