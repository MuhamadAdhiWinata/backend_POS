import { PermissionController } from "@controllers/User";
import { Router } from "express";

const PermissionRouter = Router();

PermissionRouter.get("/", PermissionController.index);
PermissionRouter.get("/:id", PermissionController.show);
PermissionRouter.post("/", PermissionController.store);
PermissionRouter.put("/:id", PermissionController.update);
PermissionRouter.delete("/:id", PermissionController.destroy);

export default PermissionRouter;
