import "reflect-metadata";
import { createConnection } from "typeorm";
import { __PROD__ } from "./constants";
import { User } from "./entities/User";

import express from "express";
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers/Test";

const main = async () => {
    // TODO: abstract database credentials and url information to env files
    const conn = await createConnection({
        type: "postgres",
        database: 'pinkthursday',
        username: 'postgres',
        password: 'postgres',
        logging: true,
        synchronize: !__PROD__,
        entities: [User]
    });

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TestResolver],
            validate: false
        })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("Apollo server started on localhost:4000");
    });
};

main();