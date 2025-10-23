import { Router } from "express";
import { authenticate } from "@middleware/authMiddleware";
import CustomerRouter from "./CustomerRoutes";
import PermissionRouter from "./PermissionRoutes";
import RoleRouter from "./RoleRoutes";
import AuthRouter from "./UserRoutes";

const UsersRouter = Router();

// UsersRouter.use("/customer", authenticate, CustomerRouter);
UsersRouter.use("/customer", CustomerRouter);
UsersRouter.use("/permission", PermissionRouter);
UsersRouter.use("/role", RoleRouter);
UsersRouter.use("", AuthRouter);

export default UsersRouter;
