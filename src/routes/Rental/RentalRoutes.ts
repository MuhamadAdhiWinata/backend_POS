import { RentalController } from "@controllers/Rental";
import { authorizeByMethod } from "@middleware/authMiddleware";
import { Router } from "express";

const RentalRouter = Router();

RentalRouter.use(authorizeByMethod("rental"));

RentalRouter.get("/", RentalController.index);
RentalRouter.get("/:id", RentalController.show);
RentalRouter.post("/", RentalController.store);
RentalRouter.put("/:id", RentalController.update);
RentalRouter.delete("/:id", RentalController.destroy);

export default RentalRouter;
