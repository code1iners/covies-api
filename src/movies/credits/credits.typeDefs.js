import { gql } from "apollo-server-core";

export default gql`
  type Cast {
    id: Int
    adult: Boolean
    gender: Int
    known_for_department: String
    name: String
    original_name: String
  }

  type MovieCredits {
    id: Int
    cast: [Cast]
  }

  type MovieCreditsResponse {
    ok: Boolean!
    data: MovieCredits
    error: CovieSimpleError
  }

  type Query {
    movieCredits(movieId: Int!, language: String): MovieCreditsResponse!
  }
`;
