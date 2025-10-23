import { CreditInstallmentController } from "@controllers/Credit";
import { authorizeByMethod } from "@middleware/authMiddleware";
import { Router } from "express";

const CreditInstallmentRouter = Router();

CreditInstallmentRouter.use(authorizeByMethod("credit-installment"));

CreditInstallmentRouter.get("/", CreditInstallmentController.index);
CreditInstallmentRouter.get("/:id", CreditInstallmentController.show);
CreditInstallmentRouter.post("/", CreditInstallmentController.store);
CreditInstallmentRouter.put("/:id", CreditInstallmentController.update);
CreditInstallmentRouter.delete("/:id", CreditInstallmentController.destroy);

export default CreditInstallmentRouter;
