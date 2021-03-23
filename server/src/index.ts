import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { __PROD__ } from "./constants";
import { User } from "./entities/User";
import { TestResolver } from "./resolvers/test";
import { UserResolver } from "./resolvers/user";

const main = async () => {
    // TODO: abstract database credentials and url information to env files
    const postgres = await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: !__PROD__,
        entities: [User]
    });

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TestResolver, UserResolver],
            validate: false
        }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(parseInt(process.env.PORT), () => {
        console.log("Apollo server started on localhost:4000");
    });
};

main().catch((err) => {
    console.log(err);
});