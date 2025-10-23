import { UserController } from "@controllers/User";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/register", UserController.register);
AuthRouter.post("/login", UserController.login);
AuthRouter.post("/logout", UserController.logout);

export default AuthRouter;
