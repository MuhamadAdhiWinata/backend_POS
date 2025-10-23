import "express";
import { JwtPayload } from "../utils/jwt";

declare module "express" {
  export interface Request {
    user?: JwtPayload;
  }
}
