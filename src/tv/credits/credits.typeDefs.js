import { gql } from "apollo-server-core";

export default gql`
  type TvCreditsCrew {
    adult: Boolean
    gender: Int
    id: Int
    known_for_department: String
    name: String
    original_name: String
    popularity: Float
    profile_path: String
    credit_id: String
    department: String
    job: String
  }

  type TvCreditsCast {
    adult: Boolean
    gender: Int
    id: Int
    known_for_department: String
    name: String
    original_name: String
    popularity: Float
    character: String
    credit_id: String
    order: Int
  }

  type TvCreditsData {
    id: Int
    cast: [TvCreditsCast]
    crew: [TvCreditsCrew]
  }

  type TvCreditsResponse {
    ok: Boolean!
    error: CovieSimpleError
    data: TvCreditsData
  }

  type Query {
    tvCredits(tvId: Int!): TvCreditsResponse!
  }
`;
