import { Request, Response } from "express";
import { Session } from "express-session";

/**
 * Type to hold the SessionContext for users
 * TODO: Add redis to keep track of current user session
 */
export type SessionContext = {
    req: Request & { session: Session };
    res: Response;
}