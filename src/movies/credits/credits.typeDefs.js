import { gql } from "apollo-server-core";

export default gql`
  type MovieCast {
    id: Int
    adult: Boolean
    gender: Int
    known_for_department: String
    name: String
    original_name: String
    popularity: Int
    profile_path: String
    cast_id: Int
    character: String
    credit_id: String
    order: Int
  }

  type MovieCrew {
    adult: Boolean
    gender: Int
    id: Int
    known_for_department: String
    name: String
    original_name: String
    popularity: Int
    profile_path: String
    credit_id: String
    department: String
    job: String
  }

  type MovieCredits {
    id: Int
    cast: [MovieCast]
    crew: [MovieCrew]
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
