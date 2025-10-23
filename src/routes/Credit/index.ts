import { Router } from "express";
import CreditCategoryRouter from "./CreditCategoryRoutes";
import CreditInstallmentRouter from "./CreditInstallmentRoutes";
import CreditProductRouter from "./CreditProductRoutes";

const CreditsRouter = Router();

CreditsRouter.use("/credit-category", CreditCategoryRouter);
CreditsRouter.use("/credit-installment", CreditInstallmentRouter);
CreditsRouter.use("/credit-product", CreditProductRouter);

export default CreditsRouter;
