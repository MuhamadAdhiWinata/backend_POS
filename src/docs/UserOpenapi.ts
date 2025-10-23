import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { CustomerSchema } from "@controllers/User/CustomerController";
import { PermissionSchema } from "@controllers/User/PermissionController";
import { RoleSchema } from "@controllers/User/RoleController";
import { registerCrud } from "@utils/registerCrud";

export const RegistryUser = new OpenAPIRegistry();

registerCrud(RegistryUser, "customer", CustomerSchema, CustomerSchema);
registerCrud(RegistryUser, "permission", PermissionSchema, PermissionSchema);
registerCrud(RegistryUser, "role", RoleSchema, RoleSchema);
