import { gql } from "apollo-server-core";

export default gql`
  type Keyword {
    id: Int
    name: String
  }

  type MovieKeywords {
    id: Int
    keywords: [Keyword]
  }

  type MovieKeywordsResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: MovieKeywords
  }

  type Query {
    movieKeywords(movieId: Int!): MovieKeywordsResponse
  }
`;
