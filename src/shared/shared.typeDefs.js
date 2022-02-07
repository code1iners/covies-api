import { gql } from "apollo-server-core";

export default gql`
  type CovieSimpleError {
    code: Int
    message: String
  }

  type Query {
    CovieHello: String
  }
`;
