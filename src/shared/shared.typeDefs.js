import { gql } from "apollo-server-core";

export default gql`
  type SimpleError {
    code: Int
    message: String
  }

  type Query {
    hello: String
  }
`;
