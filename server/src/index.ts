import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers/test";
import { UserResolver } from "./resolvers/user";
import { createOrmConnection } from "./utility/createOrmConnection";

const main = async () => {
    await createOrmConnection();
    
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