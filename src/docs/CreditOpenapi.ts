import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { registerCrud } from "@utils/registerCrud";
import { CreditCategorySchema } from "@controllers/Credit/CreditCategoryController";
import { CreditInstallmentSchema } from "@controllers/Credit/CreditInstallmentController";
import { CreditProductSchema } from "@controllers/Credit/CreditProductController";

export const RegistryCredit = new OpenAPIRegistry();

registerCrud(
  RegistryCredit,
  "credit-category",
  CreditCategorySchema,
  CreditCategorySchema
);

registerCrud(
  RegistryCredit,
  "credit-installment",
  CreditInstallmentSchema,
  CreditInstallmentSchema
);

registerCrud(
  RegistryCredit,
  "credit-product",
  CreditProductSchema,
  CreditProductSchema
);
