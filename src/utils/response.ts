import { Response } from "express";
import z from "zod";

type SuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};

type ErrorResponse = {
  success: false;
  message: string;
  errors?: unknown;
};

export const successResponse = <T>(
  res: Response,
  data: T,
  message = "Ok",
  status = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  } satisfies SuccessResponse<T>);
};

export const errorResponse = (
  res: Response,
  errors?: unknown,
  message = "Error",
  status = 500
) => {
  if (errors instanceof z.ZodError) {
    return res.status(status).json({
      success: false,
      message,
      errors: errors.message,
    } satisfies ErrorResponse);
  }

  return res.status(status).json({
    success: false,
    message,
    errors,
  } satisfies ErrorResponse);
};
