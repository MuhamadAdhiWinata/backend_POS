import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const DetailTransaksiSchema = z.object({
    id_transaksi: z.number(),
    id_product: z.number(),
    qty: z.number(),
    harga_satuan: z.number(),
    subtotal: z.number(),
})

type DetailTransaksiInput = z.infer<typeof DetailTransaksiSchema>

export const DetailTransaksiController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.detailTransaksi.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data:DetailTransaksiInput = DetailTransaksiSchema.parse(req.body);
      await prisma.detailTransaksi.create({data: req.body});

      return successResponse(res, data, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.detailTransaksi, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const existing = await findByColumn(prisma.detailTransaksi, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.detailTransaksi.update({
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
      const data = await prisma.detailTransaksi.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
