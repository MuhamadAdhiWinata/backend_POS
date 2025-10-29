import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const userSchema = z.object({
    nama: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    no_hp: z.string().optional(),
    alamat: z.string().optional(),
    role: z.string(),
    status: z.string().optional()
})

type userInput = z.infer<typeof userSchema>

export const userController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.user.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data:userInput = userSchema.parse(req.body); 

      await prisma.user.create({data: req.body});

      return successResponse(res, data, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.user, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const existing = await findByColumn(prisma.user, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.user.update({
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
      const data = await prisma.user.delete({where: {id}});

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
