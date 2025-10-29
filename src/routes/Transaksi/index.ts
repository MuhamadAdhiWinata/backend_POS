import { Router } from "express";
import TransaksiRoute from "./TransaksiRoutes";

const TransaksiRouter = Router();

TransaksiRouter.use("/user", TransaksiRoute);

export default TransaksiRouter;
