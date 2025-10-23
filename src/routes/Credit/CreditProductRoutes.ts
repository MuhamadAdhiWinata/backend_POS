import { CreditProductController } from "@controllers/Credit";
import { authorizeByMethod } from "@middleware/authMiddleware";
import { Router } from "express";

const CreditProductRouter = Router();

CreditProductRouter.use(authorizeByMethod("credit-product"));

CreditProductRouter.get("/", CreditProductController.index);
CreditProductRouter.get("/:id", CreditProductController.show);
CreditProductRouter.post("/", CreditProductController.store);
CreditProductRouter.put("/:id", CreditProductController.update);
CreditProductRouter.delete("/:id", CreditProductController.destroy);

export default CreditProductRouter;
