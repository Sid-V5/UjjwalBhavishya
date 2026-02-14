import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    username: string;
  };
}

/**
 * JWT authentication middleware.
 * Extracts and verifies a Bearer token from the Authorization header.
 * On success, attaches `req.user` with `{ id, username }`.
 */
export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET environment variable is not configured");
    }

    const decoded = jwt.verify(token, secret) as {
      id: string;
      username: string;
    };

    req.user = { id: decoded.id, username: decoded.username };
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: "Token expired" });
      return;
    }
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
    res.status(500).json({ message: "Authentication failed" });
  }
}
