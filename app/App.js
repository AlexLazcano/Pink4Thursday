import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./src/apollo";
import AuthRouter from "./src/routes/Router";


const App = () => {
  /* TODO: Verify that the client successfully connected to the ApolloProvider */
  return (
    <ApolloProvider client={ client }>
      <AuthRouter />
    </ApolloProvider>
  )
}

export default App;