import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { Platform } from "react-native";

const SERVER_PORT = require("../config").SERVER_PORT;

const platformURL = Platform.OS === "ios" ? "http://localhost:4000/graphql" : "http://10.0.2.2:4000/graphql";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: `${ platformURL }`
    }),
    cache: new InMemoryCache()
})