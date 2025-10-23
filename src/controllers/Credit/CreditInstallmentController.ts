import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const CreditInstallmentSchema = z.object({
  creditProductId: z.number(),
  amount: z.number(),
  paidAt: z.date(),
  note: z.string(),
});

type CreditInstallmentInput = z.infer<typeof CreditInstallmentSchema>;

export const CreditInstallmentController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.creditInstallment.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data: CreditInstallmentInput = CreditInstallmentSchema.parse(
        req.body
      );
      const save = await prisma.creditInstallment.create({ data });

      return successResponse(res, save, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.creditInstallment, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data: CreditInstallmentInput = CreditInstallmentSchema.parse(
        req.body
      );

      const existing = await findByColumn(prisma.creditInstallment, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.creditInstallment.update({
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
      const data = await prisma.creditInstallment.delete({ where: { id } });

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
