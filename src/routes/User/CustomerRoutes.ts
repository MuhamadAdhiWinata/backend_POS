import { CustomerController } from "@controllers/User";
import { authorizeByMethod } from "@middleware/authMiddleware";
import { Router } from "express";

const CustomerRouter = Router();

// CustomerRouter.use(authorizeByMethod("customer"));

CustomerRouter.get("/", CustomerController.index);
CustomerRouter.get("/:id", CustomerController.show);
CustomerRouter.post("/", CustomerController.store);
CustomerRouter.put("/:id", CustomerController.update);
CustomerRouter.delete("/:id", CustomerController.destroy);

export default CustomerRouter;
