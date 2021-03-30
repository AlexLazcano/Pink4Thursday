import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers/test";
import { UserResolver } from "./resolvers/user";
import { createOrmConnection } from "./utility/createOrmConnection";

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