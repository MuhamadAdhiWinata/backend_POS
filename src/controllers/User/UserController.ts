import { prisma } from "@config/prisma";
import { findByColumn } from "@utils/findBy";
import { signToken } from "@utils/jwt";
import { errorResponse, successResponse } from "@utils/response";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import z from "zod";

export const RegisterSchema = z.object({
  username: z.string(),
  email: z.email(),
  password: z.string(),
  roleId: z.number(),
});

type RegisterInput = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

type LoginInput = z.infer<typeof LoginSchema>;

export const UserController = {
  register: async (req: Request, res: Response) => {
    try {
      const data: RegisterInput = RegisterSchema.parse(req.body);

      const user = await prisma.user.findFirst({
        where: { email: data.email },
      });
      if (user) return errorResponse(res, null, "User already exists", 404);

      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);

      await prisma.user.create({ data });

      const response = {
        username: data.username,
        email: data.email,
      };

      return successResponse(res, response, "Success register");
    } catch (err) {
      return errorResponse(res, err, "Error register");
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const data: LoginInput = LoginSchema.parse(req.body);

      const user = await prisma.user.findFirst({
        where: { email: data.email },
        include: {
          Role: true,
        },
      });
      if (!user) return errorResponse(res, null, "Invalid credentials", 404);

      if (!user.isActive)
        return errorResponse(res, null, "Invalid credentials", 404);

      const isMatch = await bcrypt.compare(data.password, user.password);
      if (!isMatch) return errorResponse(res, null, "Invalid credentials", 404);

      const payload = {
        username: user.username,
        email: user.email,
        role: user.Role.roleName,
      };

      const accessToken = signToken(payload);

      return successResponse(res, accessToken, "Success store");
    } catch (err) {
      return errorResponse(res, err, "Error store");
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await findByColumn(prisma.user, id);
      if (!data) return errorResponse(res, null, "Not Found", 404);

      return successResponse(res, data, "Success show");
    } catch (err) {
      return errorResponse(res, err, "Error show");
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const existing = await findByColumn(prisma.user, id);
      if (!existing) return errorResponse(res, null, "Not Found", 404);

      const save = await prisma.user.update({
        where: { id },
        data: req.body,
      });

      return successResponse(res, save, "Success update");
    } catch (err) {
      return errorResponse(res, err, "Error update");
    }
  },
};
