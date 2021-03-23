import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { TestResolver } from "./resolvers/test";
import { UserResolver } from "./resolvers/user";

const main = async () => {
    // TODO: abstract database credentials and url information to env files
    const orm = await createConnection({
        type: "postgres",
        database: 'pinkthursday',
        username: 'postgres',
        password: 'postgres',
        logging: true,
        synchronize: true,
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

    app.listen(4000, () => {
        console.log("Apollo server started on localhost:4000");
    });
};

main().catch((err) => {
    console.log(err);
});