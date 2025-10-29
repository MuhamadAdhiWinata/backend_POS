import { KategoriController } from "@controllers/kategori";
import { Router } from "express";

const KategoriRoute = Router();

KategoriRoute.get("/", KategoriController.index);
KategoriRoute.get("/:id", KategoriController.show);
KategoriRoute.post("/", KategoriController.store);
KategoriRoute.put("/:id", KategoriController.update);
KategoriRoute.delete("/:id", KategoriController.destroy);

export default KategoriRoute;
