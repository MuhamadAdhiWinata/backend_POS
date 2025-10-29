import { ProductController } from "@controllers/product";
import { Router } from "express";

const ProductRoute = Router();

ProductRoute.get("/", ProductController.index);
ProductRoute.get("/:id", ProductController.show);
ProductRoute.post("/", ProductController.store);
ProductRoute.put("/:id", ProductController.update);
ProductRoute.delete("/:id", ProductController.destroy);

export default ProductRoute;
