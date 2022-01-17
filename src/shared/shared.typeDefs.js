import { gql } from "apollo-server-core";

export default gql`
  type SimpleResponse {
    ok: Boolean!
    error: String
  }

  type SimpleError {
    code: Int
    message: String
  }

  type Query {
    hello: String
  }
`;
