import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const CustomerSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
});

type CustomerInput = z.infer<typeof CustomerSchema>;

export const CustomerController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.customer.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data: CustomerInput = CustomerSchema.parse(req.body);
      const save = await prisma.customer.create({ data });

      return successResponse(res, save, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.customer, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data: CustomerInput = CustomerSchema.parse(req.body);

      const existing = await findByColumn(prisma.customer, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.customer.update({
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
      const data = await prisma.customer.delete({ where: { id } });

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
