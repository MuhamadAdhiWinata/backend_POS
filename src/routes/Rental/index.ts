import { Router } from "express";
import RentalProductRouter from "./RentalProductRoutes";
import RentalRouter from "./RentalRoutes";

const RentalsRouter = Router();

RentalsRouter.use("/rental-product", RentalProductRouter);
RentalsRouter.use("/rental", RentalRouter);

export default RentalsRouter;
