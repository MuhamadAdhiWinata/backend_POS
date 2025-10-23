import { RoleController } from "@controllers/User";
import { Router } from "express";

const RoleRouter = Router();

RoleRouter.get("/", RoleController.index);
RoleRouter.get("/:id", RoleController.show);
RoleRouter.post("/", RoleController.store);
RoleRouter.put("/:id", RoleController.update);
RoleRouter.delete("/:id", RoleController.destroy);

export default RoleRouter;
