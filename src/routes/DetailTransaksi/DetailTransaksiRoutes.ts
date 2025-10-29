import { DetailTransaksiController } from "@controllers/detail_transaksi";
import { Router } from "express";

const DetailTransaksiRoute = Router();

DetailTransaksiRoute.get("/", DetailTransaksiController.index);
DetailTransaksiRoute.get("/:id", DetailTransaksiController.show);
DetailTransaksiRoute.post("/", DetailTransaksiController.store);
DetailTransaksiRoute.put("/:id", DetailTransaksiController.update);
DetailTransaksiRoute.delete("/:id", DetailTransaksiController.destroy);

export default DetailTransaksiRoute;
