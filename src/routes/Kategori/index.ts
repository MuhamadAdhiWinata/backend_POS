import { Router } from "express";
import KategoriRoute from "./KategoriRoutes";

const KategoriRouter = Router();

KategoriRouter.use("/user", KategoriRoute);

export default KategoriRouter;
