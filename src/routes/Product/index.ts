import { Router } from "express";
import ProductRoute from "./ProductRoutes";

const ProductRouter = Router();

ProductRouter.use("/user", ProductRoute);

export default ProductRouter;
