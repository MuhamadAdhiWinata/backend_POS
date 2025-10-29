import { userController } from "@controllers/user/userController";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/", userController.index);
userRoute.get("/:id", userController.show);
userRoute.post("/", userController.store);
userRoute.put("/:id", userController.update);
userRoute.delete("/:id", userController.destroy);

export default userRoute;
