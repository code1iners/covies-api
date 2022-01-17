import { gql } from "apollo-server-core";

export default gql`
  type TvSimilar {
    poster_path: String
    popularity: Float
    id: Int
    backdrop_path: String
    vote_average: Float
    overview: String
    first_air_date: String
    origin_country: [String]
    genre_ids: [Int]
    original_language: String
    vote_count: Int
    name: String
    original_name: String
  }

  type TvSimilarsData {
    page: Int
    results: [TvSimilar]
    total_pages: Int
    total_results: Int
  }

  type TvSimilarsResponse {
    ok: Boolean!
    error: SimpleError
    data: TvSimilarsData
  }

  type Query {
    tvSimilars(tvId: Int!): TvSimilarsResponse!
  }
`;
