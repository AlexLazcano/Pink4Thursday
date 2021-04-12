import { Request, Response } from "express";

/**
 * Type to hold the SessionContext for users
 * TODO: Add redis to keep track of current user session
 */
export type SessionContext = {
    req: Request;
    res: Response;
}