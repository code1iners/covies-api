import { gql } from "apollo-server-core";

export default gql`
  type TvKeyword {
    id: Int
    name: String
  }

  type TvKeywordsData {
    id: Int
    results: [TvKeyword]
  }

  type TvKeywordsResponse {
    ok: Boolean!
    error: SimpleError
    data: TvKeywordsData
  }

  type Query {
    tvKeywords(tvId: Int!): TvKeywordsResponse!
  }
`;
