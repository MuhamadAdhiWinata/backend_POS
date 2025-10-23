import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { registerCrud } from "@utils/registerCrud";
import { RentalProductSchema } from "@controllers/Rental/RentalProductController";
import { RentalSchema } from "@controllers/Rental/RentalController";

export const RegistryRental = new OpenAPIRegistry();

registerCrud(
  RegistryRental,
  "rental-product",
  RentalProductSchema,
  RentalProductSchema
);

registerCrud(RegistryRental, "rental", RentalSchema, RentalSchema);
