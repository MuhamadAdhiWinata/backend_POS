import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { errorResponse, successResponse } from "@utils/response";
import { Request, Response } from "express";
import z from "zod";

export const PermissionSchema = z.object({
  roleId: z.number(),
  roleName: z.string(),
  resources: z.string(),
  create: z.boolean(),
  read: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
});

type PermissionInput = z.infer<typeof PermissionSchema>;

export const PermissionController = {
  index: async (req: Request, res: Response) => {
    try {
      const data = await prisma.permission.findMany();

      return successResponse(res, data, "Success find");
    } catch (err) {
      return errorResponse(res, err, "Error find");
    }
  },

  store: async (req: Request, res: Response) => {
    try {
      const data: PermissionInput = PermissionSchema.parse(req.body);
      const save = await prisma.permission.create({ data });

      return successResponse(res, save, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.permission, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data: PermissionInput = PermissionSchema.parse(req.body);

      const existing = await findByColumn(prisma.permission, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.permission.update({
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
      const data = await prisma.permission.delete({ where: { id } });

      return successResponse(res, data, "Success delete");
    } catch (err) {
      return errorResponse(res, err, "Error delete");
    }
  },
};
