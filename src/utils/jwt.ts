import "dotenv/config";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  userId: number;
  email: string;
  role: "user" | "admin";
}

export const signToken = (sessionData: object, expires?: number) => {
  const secret = process.env.AUTH_SECRET;
  const expiresIn = expires || "1h";

  if (!secret) throw new Error("JWT secret not set in environment variables");

  return jwt.sign(sessionData, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string) => {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("JWT secret not set in environment variables");

  return jwt.verify(token, secret) as JwtPayload;
};
