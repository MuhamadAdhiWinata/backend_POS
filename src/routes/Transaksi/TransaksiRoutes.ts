import { TransaksiController } from "@controllers/transaksi";
import { Router } from "express";

const TransaksiRoute = Router();

TransaksiRoute.get("/", TransaksiController.index);
TransaksiRoute.get("/:id", TransaksiController.show);
TransaksiRoute.post("/", TransaksiController.store);
TransaksiRoute.put("/:id", TransaksiController.update);
TransaksiRoute.delete("/:id", TransaksiController.destroy);

export default TransaksiRoute;
