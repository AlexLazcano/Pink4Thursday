import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

/**
 * Type to hold the SessionContext for users
 * TODO: Add redis to keep track of current user session
 */
export type SessionContext = {
    req: Request & { session: Session & Partial<SessionData> };
    res: Response;
    redis: Redis;
}