import { createConnection, getConnectionOptions } from "typeorm";
import { __PROD__ } from "../constants";
import { User } from "../entities/User";

export const createOrmConnection = async () => {
    const ormConfig = await getConnectionOptions(process.env.NODE_ENV);
    return __PROD__ 
        ? createConnection({
            ...ormConfig,
            url: process.env.DATABASE_URI,
            entities: [User],
            name: "default"
        } as any)
        : createConnection({
            ...ormConfig,
            name: "default"
        });
};