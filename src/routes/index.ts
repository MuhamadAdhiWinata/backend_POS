import { Router } from "express";
import { authenticate } from "@middleware/authMiddleware";
import CreditsRouter from "./Credit";
import RentalsRouter from "./Rental";
import UsersRouter from "./User";

const router = Router();

router.use("", UsersRouter);
router.use("", authenticate, CreditsRouter);
router.use("", authenticate, RentalsRouter);

export default router;
