import { gql } from "apollo-server-core";

export default gql`
  type Query {
    tvDetail(tvId: Int!): SimpleResponse!
  }
`;
