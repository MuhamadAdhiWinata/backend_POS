// import { verifyToken } from "@utils/jwt";
// import { errorResponse } from "@utils/response";
// import { Request, Response, NextFunction } from "express";
// import roles from "@config/roles.json";

// type RolesMap = Record<string, Record<string, string[]>>;

// export const authenticate = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader?.startsWith("Bearer ")) {
//     return errorResponse(res, "", "Missing or invalid token");
//   }

//   const token = authHeader.split(" ")[1];
//   const secret = process.env.AUTH_SECRET;
//   if (!secret)
//     return errorResponse(
//       res,
//       "",
//       "JWT secret not set in environment variables"
//     );

//   try {
//     const decode = verifyToken(token);
//     req.user = decode;
//     next();
//   } catch (error) {
//     return errorResponse(res, "User is not authenticated", "Please log in");
//   }
// };

// export const authorize = (resource: string, actions: string[] = []) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const user = req.user;

//     if (!user || !user.role) {
//       return errorResponse(res, "Not authenticated", "Not authenticated", 401);
//     }

//     const role = (roles as RolesMap)[user.role];
//     if (!role || !resource) {
//       return errorResponse(
//         res,
//         `Role ${user.role} not found in configuration`,
//         `Role ${user.role} not found in configuration`,
//         403
//       );
//     }

//     const resourcePermissions = role[resource] ?? [];
//     const hasPermissions = actions.every((act) =>
//       resourcePermissions.includes(act)
//     );

//     if (!hasPermissions) {
//       return errorResponse(res, "Access denied", "Not has permissions", 403);
//     }

//     next();
//   };
// };

// const methodToPermission: Record<string, string> = {
//   POST: "create",
//   GET: "read",
//   PUT: "update",
//   PATCH: "update",
//   DELETE: "delete",
// };

// // RBAC = Role Based Access Control
// export const authorizeByMethod = (resource: string) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const prefix = methodToPermission[req.method];
//     if (!prefix) {
//       return errorResponse(res, "", "Method not allowed");
//     }

//     return authorize(resource, [prefix])(req, res, next);
//   };
// };
