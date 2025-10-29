import { Router } from "express";
import siswaRoute from "./SiswaRoutes";
import kelasRoute from "./KelasRoutes";
import userRoute from "./user/userRoutes";

const router = Router();

router.use("/user",  userRoute);
router.use("/siswa", siswaRoute);
router.use("/kelas", kelasRoute);

export default router;
