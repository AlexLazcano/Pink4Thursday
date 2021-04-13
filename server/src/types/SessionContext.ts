import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

/**
 * Holds current session context, including Redis instance and session id
 */
export type SessionContext = {
    req: Request & { session: Session & Partial<SessionData> };
    res: Response;
    redis: Redis;
}