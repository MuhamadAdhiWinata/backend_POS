import { Router } from "express";
import { authenticate } from "@middleware/authMiddleware";
import CreditsRouter from "./Credit";
import RentalsRouter from "./Rental";
import UsersRouter from "./User";
import siswaRoute from "./SiswaRoutes";
import kelasRoute from "./KelasRoutes";

const router = Router();

router.use("/siswa", siswaRoute);
router.use("/kelas", kelasRoute);
router.use("", UsersRouter);
router.use("", authenticate, CreditsRouter);
router.use("", authenticate, RentalsRouter);

export default router;
