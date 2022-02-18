import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

// Load typeDefs.
export const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "/**/*.typeDefs.{ts,js}"))
);

// Load resolvers.
export const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "/**/*.resolvers.{ts,js}"))
);
