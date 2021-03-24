import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo";

import AuthRouter from "./src/routes/Router";

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <AuthRouter />
    </ApolloProvider>
  )
}

export default App;