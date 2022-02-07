require("dotenv").config();

import http from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { graphqlUploadExpress } from "graphql-upload";
import logger from "morgan";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { typeDefs, resolvers } from "./schema";
import { initAxios } from "./utils/axiosUtils";

// Declared server port.
const PORT = process.env.PORT;

// Run server.
runServer();

/**
 * Methods.
 */

/**
 * ### Run server method.
 */
async function runServer() {
  // Initialize axios.
  initAxios();

  // Declared express app.
  const app = express();
  // Declared http server.
  const httpServer = http.createServer(app);

  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  // Declared apollo server.
  const apolloServer = new ApolloServer({
    schema,
    context: async (ctx) => {},
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();

  // Apply each middleware.
  app.use(graphqlUploadExpress());
  app.use(
    process.env.NODE_ENV !== "production" ? logger("dev") : logger("common")
  );
  app.use("/static", express.static("uploads"));

  // Apply middleware into apollo server.
  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  });

  // Listening server.
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  if (process.env.NODE_ENV === "production") {
    console.info(`Server running.`);
  } else {
    console.info(
      `Server running at http://localhost:${PORT}${apolloServer.graphqlPath}.`
    );
  }
}
