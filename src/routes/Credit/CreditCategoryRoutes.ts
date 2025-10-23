import { CreditCategoryController } from "@controllers/Credit";
import { authorizeByMethod } from "@middleware/authMiddleware";
import { Router } from "express";

const CreditCategoryRouter = Router();

CreditCategoryRouter.use(authorizeByMethod("credit-category"));

CreditCategoryRouter.get("/", CreditCategoryController.index);
CreditCategoryRouter.get("/:id", CreditCategoryController.show);
CreditCategoryRouter.post("/", CreditCategoryController.store);
CreditCategoryRouter.put("/:id", CreditCategoryController.update);
CreditCategoryRouter.delete("/:id", CreditCategoryController.destroy);

export default CreditCategoryRouter;
