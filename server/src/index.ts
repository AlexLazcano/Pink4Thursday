import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import session from "express-session";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers/test";
import { UserResolver } from "./resolvers/user";
import { createOrmConnection } from "./utility/createOrmConnection";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __PROD__ } from "./constants";
import { SessionContext } from "./types/SessionContext";

const main = async () => {
    let connectionAttempts = 5;
    while (connectionAttempts) {
        try {
            await createOrmConnection();
            break;
        } catch (err) {
            connectionAttempts -= 1;
            console.log(err);
            console.log(`Failed to connect to Apollo server, reconnecting... ${ connectionAttempts } attempts left.`);
            
            // Timeout for 5 seconds before sending a new Promise
            await new Promise(res => setTimeout(res, 5000));
        }
    }
    
    const app = express();

    // Session Middleware
    const RedisStore = connectRedis(session)
    const redis = new Redis(process.env.REDIS_URI);
    const redisClient = new RedisStore({
        client: redis,
        disableTouch: true
    });

    app.use(
        session({
            name: COOKIE_NAME,
            store: redisClient,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
                httpOnly: true,
                sameSite: "lax",
                secure: __PROD__ // Cookie configured in https only
            },
            saveUninitialized: false,
            secret: process.env.REDIS_SECRET,
            resave: false
        })
    )

    // Apollo
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TestResolver, UserResolver],
            validate: false
        }),
        context: ({ req, res }): SessionContext => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(parseInt(process.env.PORT), () => {
        console.log(`Apollo server started on https://localhost:${ process.env.PORT }`);
    });
};

main().catch((err) => {
    console.log(err);
});