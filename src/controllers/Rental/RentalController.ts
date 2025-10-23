import { prisma } from "@config/prisma";
import { getDateRange } from "@utils/date";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const RentalSchema = z
  .object({
    customerId: z.number(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z.string(),
    statusRental: z.enum(["Booked", "Ongoing", "Finished", "Canceled"]),
    statusPayment: z.enum(["Lunas", "DP", "Belum"]),
    paymentAmount: z.number(),
    underPayment: z.number(),
    rentalProductId: z.number(),
    quantity: z.number(),
    note: z.string(),
  })
  .refine((data) => !data.endDate || data.startDate < data.endDate, {
    message: "Start date harus lebih kecil dari end date",
    path: ["endDate"],
  });

type RentalInput = z.infer<typeof RentalSchema>;

export const RentalController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.rental.findMany({
        include: {
          Customer: true,
          RentalProduct: {
            select: { name: true },
          },
        },
      });

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const parsed: RentalInput = RentalSchema.parse(req.body);

      const days = getDateRange(parsed.startDate, parsed.endDate);
      const priceProduct = await findByColumn(
        prisma.rentalProduct,
        parsed.rentalProductId,
        { price: true }
      );
      const totalAmount = days * priceProduct.price;

      const data = {
        ...parsed,
        totalAmount,
      };
      const save = await prisma.rental.create({ data });

      return successResponse(res, save, "Success store");
    } catch (err) {
      console.log(err);

      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.rental, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const parsed: RentalInput = RentalSchema.parse(req.body);

      const existing = await findByColumn(prisma.rental, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const days = getDateRange(parsed.startDate, parsed.endDate);
      const priceProduct = await findByColumn(
        prisma.rentalProduct,
        parsed.rentalProductId,
        { price: true }
      );
      const totalAmount = days * priceProduct.price;

      const data = {
        ...parsed,
        totalAmount,
      };

      const save = await prisma.rental.update({
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
      const data = await prisma.rental.delete({ where: { id } });

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
