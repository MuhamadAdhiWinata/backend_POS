import { Router } from "express";
import siswaRoute from "./SiswaRoutes";
import kelasRoute from "./KelasRoutes";
import userRoute from "./user/userRoutes";
import KategoriRoute from "./Kategori/KategoriRoutes";
import ProductRoute from "./Product/ProductRoutes";
import TransaksiRoute from "./Transaksi/TransaksiRoutes";
import DetailTransaksiRoute from "./DetailTransaksi/DetailTransaksiRoutes";

const router = Router();

router.use("/detail-transaksi", DetailTransaksiRoute);
router.use("/transaksi",  TransaksiRoute);
router.use("/product",  ProductRoute);
router.use("/kategori",  KategoriRoute);
router.use("/user",  userRoute);
router.use("/siswa", siswaRoute);
router.use("/kelas", kelasRoute);

export default router;
