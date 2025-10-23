import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const CreditProductSchema = z.object({
  customerId: z.number(),
  creditCategoryId: z.number(),
  productName: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  totalAmount: z.number(),
});

type CreditProductInput = z.infer<typeof CreditProductSchema>;

export const CreditProductController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.creditProduct.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data: CreditProductInput = CreditProductSchema.parse(req.body);
      const save = await prisma.creditProduct.create({ data });

      return successResponse(res, save, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.creditProduct, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data: CreditProductInput = CreditProductSchema.parse(req.body);

      const existing = await findByColumn(prisma.creditProduct, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.creditProduct.update({
        where: { id },
        data,
      });

      return successResponse(res, save, "Success update");
    } catch (err) {
      return errorResponse(res, err, "Error update");
    }
  },

  destroy: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await prisma.creditProduct.delete({ where: { id } });

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
