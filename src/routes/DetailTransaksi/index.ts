import { Router } from "express";
import DetailTransaksiRoute from "./DetailTransaksiRoutes";

const DetailTransaksiRouter = Router();

DetailTransaksiRouter.use("/user", DetailTransaksiRoute);

export default DetailTransaksiRouter;
