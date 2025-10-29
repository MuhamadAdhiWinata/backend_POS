import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const TransaksiSchema = z.object({
    id_user: z.number(),
    total_harga: z.number(),
    diskon: z.number().optional(),
    status: z.string().optional()
})

type TransaksiInput = z.infer<typeof TransaksiSchema>

export const TransaksiController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.transaksi.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data:TransaksiInput = TransaksiSchema.parse(req.body); 
      await prisma.transaksi.create({data: req.body});

      return successResponse(res, data, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.transaksi, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const existing = await findByColumn(prisma.transaksi, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.transaksi.update({
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
      const data = await prisma.transaksi.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
