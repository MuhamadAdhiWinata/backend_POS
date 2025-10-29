import { Router } from "express";
import userRoute from "./userRoutes";

const userRouter = Router();

userRouter.use("/user", userRoute);

export default userRouter;
