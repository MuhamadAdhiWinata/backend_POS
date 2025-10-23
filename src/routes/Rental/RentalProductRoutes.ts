import { RentalProductController } from "@controllers/Rental";
import { authorizeByMethod } from "@middleware/authMiddleware";
import { Router } from "express";

const RentalProductRouter = Router();

RentalProductRouter.use(authorizeByMethod("rental-product"));

RentalProductRouter.get("/", RentalProductController.index);
RentalProductRouter.get("/:id", RentalProductController.show);
RentalProductRouter.post("/", RentalProductController.store);
RentalProductRouter.put("/:id", RentalProductController.update);
RentalProductRouter.delete("/:id", RentalProductController.destroy);

export default RentalProductRouter;
