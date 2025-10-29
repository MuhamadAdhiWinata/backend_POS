import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const ProductSchema = z.object({
    nama : z.string().min(1),
    harga : z.number().min(0),
    stok : z.number().min(0),
    deskripsi : z.string().optional(),
    gambar : z.string().optional(),
    status : z.string().optional(),
    kategoriId : z.number().min(1),
    userId : z.number().min(1),
})

type ProductInput = z.infer<typeof ProductSchema>

export const ProductController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.product.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data: ProductInput = ProductSchema.parse(req.body);
      await prisma.product.create({data: req.body});

      return successResponse(res, data, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.product, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const existing = await findByColumn(prisma.product, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.product.update({
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
      const data = await prisma.product.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
