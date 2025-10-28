import { KelasController } from "@controllers/KelasController";
import { Router } from "express";

const kelasRoute = Router();

kelasRoute.get("/", KelasController.index);
kelasRoute.get("/:id", KelasController.show);
kelasRoute.post("/", KelasController.store);
kelasRoute.put("/:id", KelasController.update);
kelasRoute.delete("/:id", KelasController.destroy);

export default kelasRoute;
