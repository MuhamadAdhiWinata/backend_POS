import { SiswaController } from "@controllers/SiswaController";
import { Router } from "express";

const siswaRoute = Router();

siswaRoute.get("/", SiswaController.index);
siswaRoute.get("/:id", SiswaController.show);
siswaRoute.post("/", SiswaController.store);
siswaRoute.put("/:id", SiswaController.update);
siswaRoute.delete("/:id", SiswaController.destroy);

export default siswaRoute;
