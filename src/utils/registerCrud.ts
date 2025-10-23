import {
  extendZodWithOpenApi,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export function registerCrud(
  registry: OpenAPIRegistry,
  resource: string,
  schema: z.ZodTypeAny,
  inputSchema: z.ZodTypeAny
) {
  const basePath = `/${resource}`;
  const idParam = z.object({
    id: z.string().openapi({ description: `${resource} ID` }),
  });

  // List (GET /resource)
  registry.registerPath({
    method: "get",
    path: basePath,
    responses: {
      200: {
        description: `List of ${resource}`,
        content: { "application/json": { schema: z.array(schema) } },
      },
    },
  });

  // Show (GET /resource/{id})
  registry.registerPath({
    method: "get",
    path: `${basePath}/{id}`,
    request: { params: idParam },
    responses: {
      200: {
        description: `${resource} detail`,
        content: { "application/json": { schema } },
      },
      404: { description: `${resource} not found` },
    },
  });

  // Store (POST /resource)
  registry.registerPath({
    method: "post",
    path: basePath,
    request: {
      body: { content: { "application/json": { schema: inputSchema } } },
    },
    responses: {
      201: {
        description: `${resource} created`,
        content: { "application/json": { schema } },
      },
    },
  });

  // Update (PUT /resource/{id})
  registry.registerPath({
    method: "put",
    path: `${basePath}/{id}`,
    request: {
      params: idParam,
      body: { content: { "application/json": { schema: inputSchema } } },
    },
    responses: {
      200: {
        description: `${resource} updated`,
        content: { "application/json": { schema } },
      },
      404: { description: `${resource} not found` },
    },
  });

  // Delete (DELETE /resource/{id})
  registry.registerPath({
    method: "delete",
    path: `${basePath}/{id}`,
    request: { params: idParam },
    responses: {
      204: { description: `${resource} deleted` },
      404: { description: `${resource} not found` },
    },
  });
}
