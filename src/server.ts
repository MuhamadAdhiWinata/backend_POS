import swaggerUi from "swagger-ui-express";
import "module-alias/register";
import express from "express";
import cors from "cors";
import router from "./routes";
import { openApiDoc } from "@docs/openapi";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDoc));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
